import { Locale, translations } from '@/lib/i18n'

interface ToolsSectionProps {
  locale: Locale
}

/** « Mes outils du moment » — grille d'outils que JB utilise/recommande. */
export default function ToolsSection({ locale }: ToolsSectionProps) {
  const t = translations[locale].tools

  return (
    <section id="tools" className="bg-white border-b border-[#001523]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2">
            {locale === 'fr' ? 'Outils' : 'Tools'}
          </p>
          <h2 className="font-serif font-bold text-[34px] md:text-[48px] leading-[1.1] text-[#001523] mb-4">
            {t.heading}
          </h2>
          <p className="text-stone-600 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => {
            const linked = item.url && item.url !== '#' && item.url.startsWith('http')
            const inner = (
              <>
                <h3 className="font-serif font-bold text-xl text-[#001523] mb-2">{item.name}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </>
            )
            const cls =
              'block rounded-2xl border border-stone-200 bg-[#FBF9F9] p-6 transition hover:border-[#0071C0]/40 hover:shadow-md'
            return linked ? (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className={cls + ' hover:-translate-y-0.5'}>
                {inner}
              </a>
            ) : (
              <div key={i} className={cls}>{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
