import { Locale, translations } from '@/lib/i18n'

interface YouTubeSectionProps {
  locale: Locale
}

export default function YouTubeSection({ locale }: YouTubeSectionProps) {
  const t = translations[locale].youtube

  return (
    <section className="bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* YouTube icon */}
          <div className="flex justify-center mb-6">
            <svg
              className="w-14 h-14"
              viewBox="0 0 24 24"
              fill="#FF0000"
              aria-hidden="true"
              role="img"
              aria-label="YouTube"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>

          <h2 className="font-serif text-4xl font-bold text-navy mb-4">
            {t.heading}
          </h2>

          {/* Big stat */}
          <div className="inline-block bg-navy text-white rounded-full px-8 py-3 mb-6">
            <p className="font-serif text-3xl font-bold">{t.stat}</p>
          </div>

          <p className="text-gray-mid text-lg leading-relaxed mb-8">
            {t.body}
          </p>

          <a
            href="https://www.youtube.com/@lefasting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF0000] text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors shadow-md"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
