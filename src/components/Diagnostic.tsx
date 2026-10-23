'use client'

import { useMemo, useState } from 'react'

// Numéro WhatsApp public de Claire (agent de JB, mini12).
const CLAIRE_WA = '17096002777'

type Step = { id: string; q: string; help?: string; options: { label: string; value: string }[] }

const STEPS: Step[] = [
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

export default function Diagnostic() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [step, setStep] = useState(0)

  const done = Object.keys(answers).length === STEPS.length
  const current = STEPS[step]

  const waLink = useMemo(() => {
    const lines = [
      "Bonjour Claire 👋 Je viens du site jbrives.com.",
      '',
      ...STEPS.map((s) => `• ${s.q} → ${answers[s.id] || '—'}`),
      '',
      "J'aimerais en parler.",
    ]
    return `https://wa.me/${CLAIRE_WA}?text=${encodeURIComponent(lines.join('\n'))}`
  }, [answers])

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
            Question {step + 1} / {STEPS.length}
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
              Retour
            </button>
          )}
        </div>
      ) : (
        <div>
          <h2 className="mb-3 text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Merci, c’est clair.
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed text-neutral-600">
            Claire est mon assistante. Elle reprend vos réponses, répond aux questions pratiques et me
            transmet ce qui mérite mon attention. Vous pouvez lui écrire directement sur WhatsApp,
            votre message est déjà pré-rempli.
          </p>

          <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
            {STEPS.map((s) => (
              <div key={s.id} className="flex gap-2 py-1">
                <span className="text-neutral-500">{s.q.replace(' ?', '')} :</span>
                <span className="font-medium text-neutral-900">{answers[s.id]}</span>
              </div>
            ))}
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-4 text-[15px] font-medium text-white transition hover:bg-neutral-800 sm:w-auto"
          >
            Parler à Claire sur WhatsApp
          </a>
          <p className="mt-4 text-xs text-neutral-500">
            Claire est une assistante IA. Elle vous le dira elle-même — et si besoin, elle passe la main.
          </p>

          <button
            onClick={() => {
              setAnswers({})
              setStep(0)
            }}
            className="mt-6 block text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900"
          >
            Refaire le diagnostic
          </button>
        </div>
      )}
    </div>
  )
}
