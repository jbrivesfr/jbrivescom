'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { Locale } from '@/lib/i18n'

// WhatsApp direct de JB (prise de contact directe).
const JB_WA = '14154906663'
// Clé publique Web3Forms (alerte email côté client, comme le formulaire d'origine).
const WEB3FORMS_KEY = '17dfd67d-fb00-4352-ae05-ef4e08ca135b'

type Step = { id: string; q: string; options: { label: string; value: string }[] }

const STEPS_FR: Step[] = [
  {
    id: 'profil',
    q: 'Vous êtes plutôt…',
    options: [
      { label: 'Créateur de contenu', value: 'créateur de contenu' },
      { label: 'Entrepreneur / business en ligne', value: 'entrepreneur' },
      { label: 'Solopreneur ou petite agence', value: 'solopreneur / agence' },
      { label: 'Autre', value: 'autre profil' },
    ],
  },
  {
    id: 'frein',
    q: "Aujourd'hui, qu'est-ce qui vous freine le plus ?",
    options: [
      { label: 'Trop de tâches manuelles qui me bouffent mes journées', value: 'trop de tâches manuelles' },
      { label: 'Pas le temps de produire (contenu, offres, suivi)', value: 'pas le temps de produire' },
      { label: 'Je perds le fil de mes idées et de mes projets', value: 'perte du fil des idées' },
      { label: 'Je ne sais pas par quoi commencer', value: 'ne sait pas par où commencer' },
    ],
  },
  {
    id: 'objectif',
    q: 'Dans les 90 prochains jours, votre objectif ?',
    options: [
      { label: 'Lancer quelque chose de nouveau', value: 'lancer' },
      { label: 'Automatiser ce que je fais déjà', value: 'automatiser' },
      { label: 'Passer à l’échelle (plus de clients, plus de contenu)', value: 'scaler' },
      { label: 'Arrêter de m’éparpiller et finir ce que je commence', value: 'se recentrer' },
    ],
  },
]

const STEPS_EN: Step[] = [
  {
    id: 'profil',
    q: 'You are more of a…',
    options: [
      { label: 'Content creator', value: 'content creator' },
      { label: 'Entrepreneur / online business', value: 'entrepreneur' },
      { label: 'Solopreneur or small agency', value: 'solopreneur / agency' },
      { label: 'Other', value: 'other profile' },
    ],
  },
  {
    id: 'frein',
    q: 'Right now, what holds you back the most?',
    options: [
      { label: 'Too many manual tasks eating my days', value: 'too many manual tasks' },
      { label: 'No time to produce (content, offers, follow-up)', value: 'no time to produce' },
      { label: 'I lose track of my ideas and projects', value: 'losing track of ideas' },
      { label: "I don't know where to start", value: "doesn't know where to start" },
    ],
  },
  {
    id: 'objectif',
    q: 'Over the next 90 days, your goal?',
    options: [
      { label: 'Launch something new', value: 'launch' },
      { label: 'Automate what I already do', value: 'automate' },
      { label: 'Scale up (more clients, more content)', value: 'scale' },
      { label: 'Stop spreading myself thin and finish what I start', value: 'refocus' },
    ],
  },
]

const COPY = {
  fr: {
    qLabel: (a: number, b: number) => `Question ${a} / ${b}`,
    back: 'Retour',
    doneTitle: 'Merci, c’est clair.',
    doneBody:
      'Écrivez-moi directement sur WhatsApp — votre message est déjà pré-rempli avec vos réponses, et je vous réponds personnellement.',
    cta: 'M’écrire sur WhatsApp',
    aiNote: 'Vos réponses me sont envoyées — je reviens vers vous au plus vite.',
    redo: 'Refaire le diagnostic',
    waIntro: 'Bonjour JB 👋 Je viens du site jbrives.com.',
    waOutro: "J'aimerais en parler.",
    formName: 'Prénom',
    formEmail: 'Email',
    formError: 'Merci de renseigner un prénom et un email valides.',
  },
  en: {
    qLabel: (a: number, b: number) => `Question ${a} / ${b}`,
    back: 'Back',
    doneTitle: 'Thanks, that’s clear.',
    doneBody:
      'Message me directly on WhatsApp — your message is pre-filled with your answers, and I reply personally.',
    cta: 'Message me on WhatsApp',
    aiNote: 'Your answers are sent to me — I’ll get back to you shortly.',
    redo: 'Retake the diagnostic',
    waIntro: 'Hi JB 👋 I’m coming from jbrives.com.',
    waOutro: "I'd like to talk about it.",
    formName: 'First name',
    formEmail: 'Email',
    formError: 'Please enter a valid first name and email.',
  },
} as const

export default function Diagnostic({ locale = 'fr' }: { locale?: Locale }) {
  const STEPS = locale === 'en' ? STEPS_EN : STEPS_FR
  const c = COPY[locale === 'en' ? 'en' : 'fr']
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [err, setErr] = useState('')

  const done = Object.keys(answers).length === STEPS.length
  const current = STEPS[step]

  const waLink = useMemo(() => {
    const lines = [
      c.waIntro,
      '',
      ...STEPS.map((s) => `• ${s.q} → ${answers[s.id] || '—'}`),
      '',
      c.waOutro,
    ]
    return `https://wa.me/${JB_WA}?text=${encodeURIComponent(lines.join('\n'))}`
  }, [answers, STEPS, c])

  function choose(stepId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [stepId]: value }))
    if (step < STEPS.length - 1) setStep(step + 1)
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* progression */}
      <div className="mb-8 flex items-center gap-2">
        {STEPS.map((s, i) => (
          <div
            key={s.id}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              answers[s.id] ? 'bg-neutral-900' : i === step ? 'bg-neutral-400' : 'bg-neutral-200'
            }`}
          />
        ))}
      </div>

      {!done ? (
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
            {c.qLabel(step + 1, STEPS.length)}
          </p>
          <h2 className="mb-6 text-2xl font-semibold leading-snug text-neutral-900 sm:text-3xl">
            {current.q}
          </h2>
          <div className="flex flex-col gap-3">
            {current.options.map((o) => (
              <button
                key={o.value}
                onClick={() => choose(current.id, o.value)}
                className={`w-full rounded-xl border px-5 py-4 text-left text-[15px] transition hover:border-neutral-900 hover:bg-neutral-50 ${
                  answers[current.id] === o.value
                    ? 'border-neutral-900 bg-neutral-50 font-medium'
                    : 'border-neutral-200'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900"
            >
              {c.back}
            </button>
          )}
        </div>
      ) : (
        <div>
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900 sm:text-3xl">{c.doneTitle}</h2>
          <p className="mb-6 text-[15px] leading-relaxed text-neutral-600">{c.doneBody}</p>

          <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
            {STEPS.map((s) => (
              <div key={s.id} className="flex gap-2 py-1">
                <span className="text-neutral-500">{s.q.replace(' ?', '')} :</span>
                <span className="font-medium text-neutral-900">{answers[s.id]}</span>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (name.trim().length < 2 || !/.+@.+\..+/.test(email.trim())) {
                setErr(c.formError)
                return
              }
              setErr('')
              setSending(true)
              const summary = STEPS.map((s2) => `${s2.q.replace(' ?', '')} : ${answers[s2.id]}`).join('\n')

              // alerte email (même canal que le formulaire d'origine)
              fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                  access_key: WEB3FORMS_KEY,
                  subject: `Diagnostic jbrives.com — ${name.trim()}`,
                  from_name: name.trim(),
                  name: name.trim(),
                  email: email.trim(),
                  message: summary,
                }),
              }).catch(() => {})

              // enregistrement serveur (données gardées)
              fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: name.trim(),
                  email: email.trim(),
                  message: `Diagnostic jbrives.com\n${summary}`,
                }),
              }).catch(() => {})

              window.open(waLink, '_blank', 'noopener,noreferrer')
              setSending(false)
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={c.formName}
              autoComplete="given-name"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-[15px] outline-none focus:border-neutral-900 sm:w-40"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={c.formEmail}
              autoComplete="email"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-[15px] outline-none focus:border-neutral-900 sm:flex-1"
            />
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-[15px] font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60"
            >
              {sending ? '…' : c.cta}
            </button>
          </form>
          {err && <p className="mt-3 text-sm text-red-600">{err}</p>}
          <p className="mt-3 text-xs text-neutral-500">{c.aiNote}</p>

          <button
            onClick={() => {
              setAnswers({})
              setStep(0)
              setName('')
              setEmail('')
            }}
            className="mt-6 block text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900"
          >
            {c.redo}
          </button>
        </div>
      )}
    </div>
  )
}
