import Image from 'next/image'
import { Locale, translations } from '@/lib/i18n'

interface StoryProps {
  locale: Locale
}

export default function Story({ locale }: StoryProps) {
  const t = translations[locale].story

  return (
    <section className="bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="font-serif text-4xl font-bold text-navy mb-6">
              {t.heading}
            </h2>
            <p className="text-gray-mid text-lg leading-relaxed mb-6">
              {t.body}
            </p>
            <p className="text-navy font-semibold italic text-base">
              {t.attribution}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[360px] h-[360px] rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
              <Image
                src="/images/jb-before-after.jpg"
                alt={t.imgAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 360px, 360px"
              />
              {/* Placeholder text when no image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm font-medium">
                <span className="sr-only">{t.imgAlt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
