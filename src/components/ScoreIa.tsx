'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { QUESTIONS, computeScore, fmtGain, scoreMessage, waLink } from '@/lib/scoreIa'

// Clé publique Web3Forms (alerte email à JB, comme le diagnostic d'origine).
const WEB3FORMS_KEY = '17dfd67d-fb00-4352-ae05-ef4e08ca135b'

// Une question par écran, barre de progression, résultat + code court AIS-XXXX
// et WhatsApp de Jean pré-rempli (score, 3 priorités, code).
export default function ScoreIa() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [step, setStep] = useState(0)
  const [code, setCode] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [prenom, setPrenom] = useState('')
  const headingRef = useRef<HTMLHeadingElement>(null)
  const started = useRef(false)
  const saved = useRef(false)

  const done = step >= QUESTIONS.length
  const current = QUESTIONS[step]
  const result = useMemo(() => (done ? computeScore(answers) : null), [done, answers])
  const message = result ? scoreMessage(result, code, prenom.trim().slice(0, 40)) : ''
  const pct = Math.round((Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100)

  // Focus sur la nouvelle question (clavier, lecteur d'écran).
  useEffect(() => {
    if (started.current) headingRef.current?.focus()
  }, [step])

  // Enregistrement une seule fois → code court pour Jean.
  useEffect(() => {
    if (!result || saved.current) return
    saved.current = true
    setSaving(true)
    fetch('/api/score-ia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    })
      .then((r) => r.json())
      .then((j) => j.ok && setCode(j.code))
      .catch(() => {})
      .finally(() => setSaving(false))
  }, [result, answers])

  function choose(value: string) {
    started.current = true
    setAnswers((prev) => ({ ...prev, [current.id]: value }))
    setStep(step + 1)
  }

  function reset() {
    setAnswers({})
    setStep(0)
    setCode(null)
    saved.current = false
  }

  function alertJb() {
    if (!result) return
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Score IA jbrives.com — ${result.score}/100${code ? ` — ${code}` : ''}`,
        from_name: prenom.trim() || 'Score IA jbrives.com',
        message,
      }),
    }).catch(() => {})
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div
        className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label="Progression"
      >
        <div className="h-full rounded-full bg-neutral-900 transition-all" style={{ width: `${pct}%` }} />
      </div>

      {!done ? (
        <div aria-live="polite" key={current.id}>
          <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
            Question {step + 1} / {QUESTIONS.length}
          </p>
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="mb-6 text-2xl font-semibold leading-snug text-neutral-900 outline-none sm:text-3xl"
          >
            {current.q}
          </h2>
          <div className="flex flex-col gap-3" role="group" aria-label={current.q}>
            {current.options.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => choose(o.value)}
                aria-pressed={answers[current.id] === o.value}
                className={`w-full rounded-xl border px-5 py-4 text-left text-[15px] transition hover:border-neutral-900 hover:bg-neutral-50 ${
                  answers[current.id] === o.value ? 'border-neutral-900 bg-neutral-50 font-medium' : 'border-neutral-200'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="mt-6 text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900"
            >
              ← Retour
            </button>
          )}
        </div>
      ) : (
        result && (
          <div aria-live="polite">
            <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">Votre Score IA</p>
            <h2 ref={headingRef} tabIndex={-1} className="text-6xl font-semibold text-neutral-900 outline-none">
              {result.score}
              <span className="text-2xl font-normal text-neutral-400">/100</span>
            </h2>
            <p className="mb-5 mt-1 text-lg font-medium text-[#0071C0]">{result.level}</p>
            <p className="mb-6 text-[15px] leading-relaxed text-neutral-600">
              D’après vos réponses, l’IA pourrait en général vous faire gagner{' '}
              <strong className="text-neutral-900">{fmtGain(result.hours)} par semaine</strong>. Voici par où je
              commencerais&nbsp;:
            </p>

            <ol className="mb-8 flex flex-col gap-3">
              {result.top.map((a, i) => (
                <li key={a.id} className="rounded-xl border border-neutral-200 p-4">
                  <h3 className="mb-1 text-[16px] font-semibold text-neutral-900">
                    {i + 1}. {a.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-neutral-600">{a.text}</p>
                  <p className="mt-2 text-[13px] font-medium text-neutral-500">
                    En général {fmtGain(a.gain)} par semaine
                  </p>
                </li>
              ))}
            </ol>

            <div className="mb-5 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm">
              <p className="text-neutral-600">
                Votre code&nbsp;:{' '}
                <strong className="font-mono text-base tracking-wider text-neutral-900">
                  {code || (saving ? '…' : '—')}
                </strong>
              </p>
              <p className="mt-1 text-xs text-neutral-500">Il est déjà dans le message WhatsApp, rien à recopier.</p>
            </div>

            <label className="mb-2 block text-sm text-neutral-600" htmlFor="score-prenom">
              Votre prénom (facultatif)
            </label>
            <input
              id="score-prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              autoComplete="given-name"
              maxLength={40}
              className="mb-4 w-full rounded-xl border border-neutral-300 px-4 py-3 text-[15px] outline-none focus:border-neutral-900"
            />

            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={alertJb}
              aria-disabled={saving}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-[15px] font-semibold text-white transition hover:bg-[#1ebe5b] ${
                saving ? 'pointer-events-none opacity-60' : ''
              }`}
            >
              Discuter avec Jean sur WhatsApp
            </a>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Jean est l’assistant IA de JB&nbsp;: il organise l’appel avec lui.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-neutral-500">
              Vos réponses sont transmises à Jean, l’assistant de JB, uniquement pour préparer l’échange. Les
              gains sont des estimations prudentes, pas des promesses&nbsp;: on mesure le vrai chiffre avec vous.
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-6 block text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900"
            >
              Refaire le Score IA
            </button>
          </div>
        )
      )}
    </div>
  )
}
