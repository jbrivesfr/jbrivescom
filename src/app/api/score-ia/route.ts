import { NextResponse } from 'next/server'
import { QUESTIONS, cleanAnswers, computeScore } from '@/lib/scoreIa'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Score IA : enregistre la soumission dans un bucket GCS privé (lu toutes les 5 min par un
 * job sur le Mac mini, qui en fait une fiche dans la mémoire de Jean) et renvoie un code court
 * AIS-XXXX. Le score est recalculé ici à partir des réponses (valeurs de la liste uniquement :
 * aucun texte libre ne passe). Pas de nom, pas d'email, pas d'IP stockée.
 */
const BUCKET = process.env.AISCORE_BUCKET || 'chatbot-374301-ai-score'
const ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ' // sans 0/O, 1/I/L

// Anti-abus simple par instance : 10 soumissions par heure et par IP.
const hits = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < 3600_000)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > 10
}

async function token(): Promise<string> {
  if (process.env.AISCORE_DEV_TOKEN) return process.env.AISCORE_DEV_TOKEN
  const r = await fetch(
    'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token',
    { headers: { 'Metadata-Flavor': 'Google' }, cache: 'no-store' },
  )
  if (!r.ok) throw new Error(`metadata ${r.status}`)
  return (await r.json()).access_token
}

function newCode() {
  let s = ''
  for (let i = 0; i < 4; i++) s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
  return `AIS-${s}`
}

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown'
  if (limited(ip)) return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })

  let d: { answers?: unknown } = {}
  try {
    d = await req.json()
  } catch {
    // ignore
  }
  const answers = cleanAnswers(d.answers)
  if (!answers) return NextResponse.json({ ok: false, error: 'bad_answers' }, { status: 400 })

  const result = computeScore(answers)
  const label = (id: string) =>
    QUESTIONS.find((q) => q.id === id)?.options.find((o) => o.value === answers[id])?.label || answers[id]
  const base = {
    site: 'jbrives.com',
    lang: 'fr',
    ts: new Date().toISOString(),
    score: result.score,
    level: result.level,
    hours: result.hours,
    problem: label('frein'),
    goal: label('objectif'),
    top: result.top.map((a) => ({ id: a.id, title: a.title, gain: a.gain })),
    answers: QUESTIONS.map((q) => ({
      id: q.id,
      q: q.q,
      a: label(q.id),
    })),
  }

  try {
    const tk = await token()
    for (let attempt = 0; attempt < 5; attempt++) {
      const code = newCode()
      // ifGenerationMatch=0 : n'écrase jamais une soumission existante (collision → nouveau code).
      const url =
        `https://storage.googleapis.com/upload/storage/v1/b/${BUCKET}/o?uploadType=media` +
        `&ifGenerationMatch=0&name=${encodeURIComponent(`submissions/${code}.json`)}`
      const r = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Bearer ${tk}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, ...base }),
        cache: 'no-store',
      })
      if (r.status === 412) continue
      if (!r.ok) throw new Error(`gcs ${r.status} ${(await r.text()).slice(0, 200)}`)
      console.log('SCORE_IA ' + JSON.stringify({ code, score: result.score }))
      return NextResponse.json({ ok: true, code, score: result.score })
    }
    throw new Error('code collisions')
  } catch (e) {
    console.error('SCORE_IA_ERROR ' + String(e))
    return NextResponse.json({ ok: false, error: 'storage' }, { status: 502 })
  }
}
