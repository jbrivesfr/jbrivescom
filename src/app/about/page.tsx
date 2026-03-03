import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { translations } from '@/lib/i18n'

export const dynamic = 'force-static'

const t = translations.fr.about

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDesc,
  alternates: {
    canonical: 'https://jbrives.com/about',
    languages: {
      'en': 'https://jbrives.com/en/about',
      'fr': 'https://jbrives.com/about',
    },
  },
  openGraph: {
    title: t.metaTitle,
    description: t.metaDesc,
    url: 'https://jbrives.com/about',
    locale: 'fr_FR',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'JB Rives',
    url: 'https://jbrives.com',
    sameAs: ['https://www.youtube.com/@lefasting'],
    jobTitle: 'Auteur, Créateur & Stratège Digital',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="fr" />
      <main>
        {/* Hero */}
        <section className="bg-stone-900 text-stone-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <p className="text-xs font-medium text-brand-400 uppercase tracking-wide mb-3">À propos</p>
            <h1 className="font-serif text-5xl font-bold mb-4">{t.heading}</h1>
            <p className="text-stone-300 text-xl max-w-2xl">{t.tagline}</p>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-stone-100 border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {t.highlights.map((h, i) => (
                <div key={i} className="bg-white rounded-xl p-5 text-center shadow-sm border border-stone-100">
                  <div className="text-3xl mb-2">{h.icon}</div>
                  <p className="font-serif font-bold text-stone-800 text-sm">{h.label}</p>
                  <p className="text-stone-500 text-xs mt-1">{h.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story body */}
        <section className="bg-white border-b border-stone-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-lg max-w-none">
              {t.body.map((para, i) => (
                <p key={i} className="text-stone-600 text-lg leading-relaxed mb-6">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 border-t border-stone-200 pt-8 text-center">
              <p className="text-stone-800 font-semibold text-lg mb-4">
                Vous voulez travailler avec moi ?
              </p>
              <a
                href="/#contact"
                className="inline-block bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1"
              >
                Discutons →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="fr" />
    </>
  )
}
