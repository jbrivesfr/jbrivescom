import ServiceCard from './ServiceCard'
import { Locale, translations } from '@/lib/i18n'

interface ServicesSectionProps {
  locale: Locale
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = translations[locale].services

  return (
    <section className="bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2">
            {locale === 'fr' ? 'Services' : 'Services'}
          </p>
          <h2 className="text-2xl font-serif font-bold text-stone-800 mb-3">
            {t.heading}
          </h2>
          <p className="text-stone-600 text-base max-w-xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, idx) => (
            <ServiceCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
