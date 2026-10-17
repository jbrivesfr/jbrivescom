import Image from 'next/image'
import { Locale, translations } from '@/lib/i18n'

interface TimHeroProps {
  locale: Locale
}

/** Hero plein écran façon tim.blog : bandeau navy, colonne texte + colonne photo. */
export default function TimHero({ locale }: TimHeroProps) {
  const t = translations[locale].hero
  const isFr = locale === 'fr'

  return (
    <section className="bg-[#001523] text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne texte */}
          <div>
            <p className="text-[13px] uppercase tracking-[0.16em] text-white/60 mb-5">
              {t.subtitle}
            </p>
            <h1 className="text-[40px] md:text-[64px] leading-[1.1] mb-7">
              {isFr ? (
                <>
                  Salut, c&apos;est <span className="text-[#87CEFF]">JB</span>.
                </>
              ) : (
                <>
                  Hey, I&apos;m <span className="text-[#87CEFF]">JB</span>.
                </>
              )}
            </h1>
            <p className="text-[18px] leading-[1.6] text-white/80 max-w-[560px] mb-9">
              {t.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-block bg-[#0071C0] hover:bg-[#005c9c] text-white font-semibold px-7 py-3.5 rounded-lg transition"
              >
                {t.cta}
              </a>
              <a
                href="#books"
                className="inline-block border border-white/25 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg transition"
              >
                {isFr ? 'Ses livres' : 'His books'}
              </a>
            </div>
          </div>

          {/* Colonne photo */}
          <div className="relative w-full aspect-[3/2] rounded-[10px] overflow-hidden bg-white/5">
            <Image
              src="/images/jb-about-cafe.jpg"
              alt={isFr ? 'JB Rives' : 'JB Rives'}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
