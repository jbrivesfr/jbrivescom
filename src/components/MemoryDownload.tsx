'use client'

import { useState } from 'react'

export const INSTALL_CMD = 'npx -y github:jbrivesfr/ea-memory-lite init'
const REPO_URL = 'https://github.com/jbrivesfr/ea-memory-lite'
const ZIP_URL = `${REPO_URL}/archive/refs/heads/main.zip`

export function CopyCommand({ cmd = INSTALL_CMD, dark = false }: { cmd?: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false)
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 font-mono text-[13px] sm:text-sm ${
        dark ? 'border-white/15 bg-[#001523] text-white' : 'border-neutral-200 bg-white text-neutral-900'
      }`}
    >
      <span className={dark ? 'select-none text-white/40' : 'select-none text-neutral-400'}>$</span>
      <code className="flex-1 overflow-x-auto whitespace-nowrap">{cmd}</code>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(cmd).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
          })
        }}
        className={`shrink-0 rounded-lg px-3 py-1.5 font-sans text-xs font-medium transition ${
          dark ? 'bg-white/10 hover:bg-white/20' : 'bg-neutral-100 hover:bg-neutral-200'
        }`}
      >
        {copied ? 'Copié ✓' : 'Copier'}
      </button>
    </div>
  )
}

export default function MemoryDownload() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [err, setErr] = useState('')
  const [unlocked, setUnlocked] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (name.trim().length < 2 || !/.+@.+\..+/.test(email.trim())) {
      setErr('Merci de renseigner un prénom et un email valides.')
      return
    }
    setErr('')
    setSending(true)
    try {
      // Enregistrement serveur uniquement (même route que le diagnostic) : aucun email envoyé.
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'memory-lite',
          name: name.trim(),
          email: email.trim(),
          message: 'Téléchargement EA Memory Lite (jbrives.com/memory)',
          locale: 'fr',
        }),
      })
      if (!r.ok) throw new Error(String(r.status))
      setUnlocked(true)
    } catch {
      setErr('Petit souci réseau, réessayez dans un instant.')
    } finally {
      setSending(false)
    }
  }

  if (unlocked) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
        <p className="mb-1 text-xs uppercase tracking-widest text-emerald-700">C’est à vous, {name.trim()}</p>
        <h3 className="mb-4 text-2xl font-semibold text-neutral-900">Installez EA Memory Lite</h3>
        <p className="mb-4 text-[15px] leading-relaxed text-neutral-600">
          Ouvrez un terminal et collez cette commande. Elle détecte Claude, Cursor, Windsurf et VS Code,
          sauvegarde chaque fichier qu’elle modifie et vous montre exactement ce qui a changé.
        </p>
        <CopyCommand />
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={ZIP_URL}
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-[15px] font-medium text-white transition hover:bg-neutral-800"
          >
            Télécharger le code (.zip)
          </a>
          <a
            href={REPO_URL}
            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 text-[15px] font-medium text-neutral-900 transition hover:border-neutral-900"
          >
            Lire la documentation
          </a>
        </div>
        <p className="mt-4 text-xs text-neutral-500">
          Besoin de Node.js 20 ou plus (nodejs.org). Redémarrez vos applications après l’installation.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
      <h3 className="mb-2 text-2xl font-semibold text-neutral-900">Recevoir EA Memory Lite</h3>
      <p className="mb-5 text-[15px] leading-relaxed text-neutral-600">
        Gratuit. Laissez votre prénom et votre email : le lien de téléchargement et la commande
        d’installation s’affichent tout de suite.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Prénom"
          autoComplete="given-name"
          aria-label="Prénom"
          className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-[15px] outline-none focus:border-neutral-900 sm:w-40"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          autoComplete="email"
          aria-label="Email"
          className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-[15px] outline-none focus:border-neutral-900 sm:flex-1"
        />
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-[15px] font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60"
        >
          {sending ? '…' : 'Télécharger gratuitement'}
        </button>
      </div>
      {err && <p className="mt-3 text-sm text-red-600">{err}</p>}
      <p className="mt-3 text-xs text-neutral-500">
        Votre email sert à vous envoyer les mises à jour d’EA Memory et à vous prévenir de la sortie de Pro.
        Pas de spam, désinscription en un clic.
      </p>
    </form>
  )
}
