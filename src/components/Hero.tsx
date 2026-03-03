import Image from 'next/image'
import { Locale, translations } from '@/lib/i18n'

interface HeroProps {
  locale: Locale
}

export default function Hero({ locale }: HeroProps) {
  const t = translations[locale].hero

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-navy mb-4 leading-tight">
              {t.name}
            </h1>
            <p className="text-accent text-xl font-semibold mb-6 tracking-wide">
              {t.subtitle}
            </p>
            <p className="text-gray-mid text-lg leading-relaxed mb-8 max-w-lg">
              {t.intro}
            </p>
            <a
              href="#contact"
              className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-base"
            >
              {t.cta} →
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[440px] rounded-2xl overflow-hidden bg-bg-alt shadow-xl">
              <Image
                src="/images/jb-hero.jpg"
                alt="JB Rives — Auteur, Créateur & Stratège Digital"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 340px, 340px"
              />
              {/* Fallback overlay if image missing */}
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-navy/60 to-transparent">
                <p className="text-white font-serif text-2xl font-bold">JB Rives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
