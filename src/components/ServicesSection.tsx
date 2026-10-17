import ServiceCard from './ServiceCard'
import { Locale, translations } from '@/lib/i18n'

interface ServicesSectionProps {
  locale: Locale
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const t = translations[locale].services

  return (
    <section id="services" className="bg-[#FBF9F9] border-b border-[#001523]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <div className="mb-12">
          <p className="text-[13px] uppercase tracking-[0.16em] text-[#001523]/50 mb-3">
            {locale === 'fr' ? 'Services' : 'Services'}
          </p>
          <h2 className="text-[34px] md:text-[56px] leading-[1.1] mb-5">
            {t.heading}
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#001523]/80 max-w-[620px]">
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
