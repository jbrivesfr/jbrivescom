import Image from 'next/image'
import { Zap } from 'lucide-react'
import { Locale, translations } from '@/lib/i18n'

interface HeroProps {
  locale: Locale
}

export default function Hero({ locale }: HeroProps) {
  const t = translations[locale].hero
  const badgeText = locale === 'fr' ? 'Retour vers le futur 2026' : 'Back to the Future 2026'

  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-stone-900 to-black opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            {/* Badge pill */}
            <div className="inline-flex items-center gap-2 bg-brand-900/50 text-brand-300 border border-brand-800 rounded-full px-4 py-1.5 text-xs font-medium mb-8">
              <Zap className="w-3.5 h-3.5" />
              {badgeText}
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              {locale === 'fr' ? (
                <>Salut, c&apos;est <span className="text-brand-500">JB</span>.</>
              ) : (
                <>Hey, I&apos;m <span className="text-brand-500">JB</span>.</>
              )}
            </h1>

            <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-lg">
              {t.intro}
            </p>

            <a
              href="#contact"
              className="inline-block bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1"
            >
              {t.cta} →
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[440px] rounded-2xl overflow-hidden bg-stone-800 shadow-2xl">
              <Image
                src="/images/jb-hero.jpg"
                alt="JB Rives — Auteur, Créateur & Stratège Digital"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 340px, 340px"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-stone-900/60 to-transparent">
                <p className="text-stone-100 font-serif text-2xl font-bold">JB Rives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
