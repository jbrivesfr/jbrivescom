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

    try {
      // Try Formspree first (replace FORMSPREE_ID with real ID when available)
      const FORMSPREE_ID = 'xpwzgkqo' // placeholder — JB to replace with real ID
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        throw new Error('Formspree error')
      }
    } catch {
      // Fallback: mailto
      const name = data.get('name') as string
      const email = data.get('email') as string
      const message = data.get('message') as string
      window.location.href = `mailto:jb@fasting.fr?subject=Message de ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0A—${encodeURIComponent(email)}`
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-navy text-center mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-mid text-lg text-center mb-10">
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
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-navy text-sm transition"
                  placeholder={t.name}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-navy text-sm transition"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 text-navy text-sm transition resize-none"
                  placeholder={locale === 'fr' ? 'Votre message...' : 'Your message...'}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent text-white font-semibold py-3.5 rounded-lg hover:bg-opacity-90 disabled:opacity-60 transition-all shadow-md hover:shadow-lg text-base"
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
