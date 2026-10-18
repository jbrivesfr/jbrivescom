import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Contact endpoint : ENREGISTRE chaque demande (log structuré → Cloud Logging,
 * durable et requêtable) et la FORWARD à jbrives@gmail.com via Web3Forms dès
 * qu'une clé WEB3FORMS_KEY est configurée côté Cloud Run.
 */
export async function POST(req: Request) {
  let d: { name?: string; email?: string; message?: string } = {}
  try {
    d = await req.json()
  } catch {
    // ignore
  }
  const name = (d.name || '').trim()
  const email = (d.email || '').trim()
  const message = (d.message || '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 })
  }

  const record = { ts: new Date().toISOString(), name, email, message }
  // SAVE — ligne JSON préfixée, facile à filtrer dans Cloud Logging
  console.log('CONTACT_REQUEST ' + JSON.stringify(record))

  // FORWARD — email vers jbrives@gmail.com via Web3Forms (si clé présente)
  let forwarded = false
  const key = process.env.WEB3FORMS_KEY
  if (key) {
    try {
      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: `Nouveau message depuis jbrives.com — ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      })
      forwarded = r.ok
    } catch {
      // le log garde la demande même si l'email échoue
    }
  }

  return NextResponse.json({ ok: true, forwarded })
}
