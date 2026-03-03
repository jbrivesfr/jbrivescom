import ServiceCard from './ServiceCard'
import { Locale, translations } from '@/lib/i18n'

interface ServicesSectionProps {
  locale: Locale
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = translations[locale].services

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-navy mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-mid text-lg max-w-xl mx-auto">
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
