import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Contact / diagnostic endpoint : ENREGISTRE chaque demande (log structuré →
 * Cloud Logging, durable et requêtable). L'email d'alerte est envoyé côté
 * client via Web3Forms (leur offre gratuite n'autorise que le client).
 * Accepte l'ancien formulaire { name, email, message } et le diagnostic
 * { type:'diagnostic', message, answers, locale }.
 */
export async function POST(req: Request) {
  let d: {
    name?: string
    email?: string
    message?: string
    type?: string
    answers?: unknown
    locale?: string
  } = {}
  try {
    d = await req.json()
  } catch {
    // ignore
  }
  const name = (d.name || '').trim()
  const email = (d.email || '').trim()
  const message = (d.message || '').trim()

  if (!message) {
    return NextResponse.json({ ok: false, error: 'missing_message' }, { status: 400 })
  }

  const record = {
    ts: new Date().toISOString(),
    type: d.type || 'contact',
    name: name || null,
    email: email || null,
    message,
    answers: d.answers ?? null,
    locale: d.locale || null,
  }
  // SAVE — ligne JSON préfixée, facile à filtrer dans Cloud Logging.
  console.log('CONTACT_REQUEST ' + JSON.stringify(record))

  return NextResponse.json({ ok: true })
}
