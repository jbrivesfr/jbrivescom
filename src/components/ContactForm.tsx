'use client'

import { useState } from 'react'
import { Locale, translations } from '@/lib/i18n'

interface ContactFormProps {
  locale: Locale
}

// Numéro WhatsApp de Claire (assistante IA de JB) — pont vers JB, pas de DB/email.
const CLAIRE_WA = '17096002777'

type Interest = 'tools' | 'methods' | 'other'

export default function ContactForm({ locale }: ContactFormProps) {
  const t = translations[locale].contact
  const [step, setStep] = useState<1 | 2>(1)
  const [interest, setInterest] = useState<Interest | null>(null)
  const [name, setName] = useState('')
  const [goal, setGoal] = useState('')

  const interestLabel: Record<Interest, string> = {
    tools: t.optTools,
    methods: t.optMethods,
    other: t.optOther,
  }

  function choose(i: Interest) {
    setInterest(i)
    setStep(2)
  }

  const waText = t.waTemplate
    .replace('{name}', name.trim() || (locale === 'fr' ? 'un visiteur' : 'a visitor'))
    .replace('{interest}', interest ? interestLabel[interest] : '')
    .replace('{goal}', goal.trim() || '—')
  const waHref = `https://wa.me/${CLAIRE_WA}?text=${encodeURIComponent(waText)}`
  const ready = name.trim().length >= 2

  const options: { key: Interest; emoji: string; label: string; desc: string }[] = [
    { key: 'tools', emoji: '🧰', label: t.optTools, desc: t.optToolsDesc },
    { key: 'methods', emoji: '⚡', label: t.optMethods, desc: t.optMethodsDesc },
    { key: 'other', emoji: '💬', label: t.optOther, desc: t.optOtherDesc },
  ]

  return (
    <section id="contact" className="bg-[#F6F1F1] border-b border-[#001523]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2 text-center">
            {locale === 'fr' ? 'Contact' : 'Contact'}
          </p>
          <h2 className="text-[34px] md:text-[56px] leading-[1.1] text-center mb-6">{t.heading}</h2>
          <p className="text-stone-600 text-lg text-center mb-10">{t.body}</p>

          <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] p-6 md:p-8">
            {step === 1 && (
              <div>
                <p className="font-semibold text-stone-800 mb-4">{t.q1}</p>
                <div className="space-y-3">
                  {options.map((o) => (
                    <button
                      key={o.key}
                      onClick={() => choose(o.key)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-stone-200 hover:border-brand-500 hover:bg-brand-500/5 transition text-left"
                    >
                      <span className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center text-xl shrink-0">
                        {o.emoji}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-bold text-stone-900">{o.label}</span>
                        <span className="block text-sm text-stone-500">{o.desc}</span>
                      </span>
                      <span className="ml-auto text-stone-300 text-xl">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-800 mb-4 transition"
                >
                  ← {t.back}
                </button>

                <div className="mb-4">
                  <label htmlFor="cf-name" className="block text-sm font-medium text-stone-700 mb-1">
                    {t.namePrompt}
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="given-name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:outline-none focus:border-brand-500 text-stone-900 text-sm transition bg-white"
                    placeholder={locale === 'fr' ? 'Ex : Thomas' : 'Ex: Thomas'}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="cf-goal" className="block text-sm font-medium text-stone-700 mb-1">
                    {t.goalPrompt}
                  </label>
                  <textarea
                    id="cf-goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:outline-none focus:border-brand-500 text-stone-900 text-sm transition resize-none bg-white"
                    placeholder={t.goalPlaceholder}
                  />
                </div>

                <a
                  href={ready ? waHref : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!ready}
                  className={`w-full flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-lg shadow-lg text-base transition ${
                    ready
                      ? 'bg-[#25D366] hover:bg-[#1ebe5d] text-white transform hover:-translate-y-0.5'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed pointer-events-none'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.03c-.24.68-1.42 1.31-1.96 1.35-.5.04-.97.22-3.27-.68-2.76-1.09-4.52-3.9-4.66-4.08-.14-.18-1.12-1.49-1.12-2.85 0-1.36.71-2.02.96-2.3.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.06.62.48.24.56.81 1.95.88 2.09.07.14.12.3.02.48-.1.18-.15.3-.29.46-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.27.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.33 1.44.28.14.45.12.61-.07.17-.19.71-.82.9-1.1.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.11.07.68-.17 1.36z" />
                  </svg>
                  {t.cta}
                </a>

                <p className="text-xs text-stone-500 text-center mt-4 leading-relaxed">
                  {t.claireNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
