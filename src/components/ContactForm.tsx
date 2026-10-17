'use client'

import { useState, FormEvent } from 'react'
import { Locale, translations } from '@/lib/i18n'

interface ContactFormProps {
  locale: Locale
}

export default function ContactForm({ locale }: ContactFormProps) {
  const t = translations[locale].contact
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    try {
      // Web3Forms — livre les soumissions à jbrives@gmail.com.
      // Récupérer la clé sur web3forms.com (entrer jbrives@gmail.com) et la coller ici.
      const WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_WEB3FORMS_KEY'
      if (WEB3FORMS_ACCESS_KEY.startsWith('REPLACE_')) throw new Error('no key yet')
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nouveau message depuis jbrives.com — ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        throw new Error('web3forms error')
      }
    } catch {
      // Repli : ouvre le client mail du visiteur, pré-adressé à jbrives@gmail.com
      window.location.href = `mailto:jbrives@gmail.com?subject=${encodeURIComponent(
        `Message de ${name} (jbrives.com)`,
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} <${email}>`)}`
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-[#F6F1F1] border-b border-[#001523]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2 text-center">
            {locale === 'fr' ? 'Contact' : 'Contact'}
          </p>
          <h2 className="text-[34px] md:text-[56px] leading-[1.1] text-center mb-6">
            {t.heading}
          </h2>
          <p className="text-stone-600 text-lg text-center mb-10">
            {t.body}
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="text-green-800 font-semibold text-lg">{t.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-stone-900 text-sm transition bg-white"
                  placeholder={t.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-stone-900 text-sm transition bg-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 text-stone-900 text-sm transition resize-none bg-white"
                  placeholder={locale === 'fr' ? 'Votre message...' : 'Your message...'}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 text-base"
              >
                {submitting ? '...' : t.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
