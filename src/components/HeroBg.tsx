import { Locale, translations } from '@/lib/i18n'

interface HeroBgProps {
  locale: Locale
}

/** Hero plein écran : photo de JB en fond (pas en <img>), texte à gauche sur
 *  dégradé navy pour la lisibilité. */
export default function HeroBg({ locale }: HeroBgProps) {
  const t = translations[locale].hero
  const isFr = locale === 'fr'

  return (
    <section className="relative flex items-center min-h-[88vh] bg-[#001523] text-white overflow-hidden">
      {/* Photo de fond — JB positionné à droite */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/images/jb-hero-bg.jpg')",
          backgroundPosition: '72% center',
        }}
        aria-hidden="true"
      />
      {/* Dégradés : plus sombre à gauche (texte) + bas */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#001523] via-[#001523]/80 to-[#001523]/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#001523]/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-[640px]">
          <p className="text-[13px] uppercase tracking-[0.16em] text-white/70 mb-5">
            {t.subtitle}
          </p>
          <h1 className="font-serif font-bold text-[44px] md:text-[68px] leading-[1.05] mb-7">
            {isFr ? (
              <>
                Besoin d&apos;<span className="text-[#87CEFF]">accélérer</span> ?
              </>
            ) : (
              <>
                Need to <span className="text-[#87CEFF]">speed up</span>?
              </>
            )}
          </h1>
          <p className="text-[18px] md:text-[20px] leading-[1.6] text-white/85 max-w-[600px] mb-9">
            {t.intro}
          </p>
          <a
            href={`${locale === 'en' ? '/en' : ''}/diagnostic`}
            className="inline-block bg-[#0071C0] hover:bg-[#005c9c] text-white font-semibold px-8 py-4 rounded-lg transition"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
