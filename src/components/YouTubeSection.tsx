import { Locale, translations } from '@/lib/i18n'

interface YouTubeSectionProps {
  locale: Locale
}

export default function YouTubeSection({ locale }: YouTubeSectionProps) {
  const t = translations[locale].youtube

  return (
    <section id="youtube" className="bg-[#F6F1F1] border-b border-[#001523]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
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

          <p className="text-[13px] uppercase tracking-[0.16em] text-[#001523]/50 mb-4">YouTube</p>
          {t.heading ? (
            <h2 className="text-[34px] md:text-[56px] leading-[1.1] mb-6">
              {t.heading}
            </h2>
          ) : null}

          {/* Big stat */}
          <div className="inline-block bg-[#001523] text-white rounded-full px-8 py-3 mb-7">
            <p className="text-[26px] md:text-[32px] font-semibold tracking-[-0.02em]">{t.stat}</p>
          </div>

          <p className="text-[18px] leading-[1.6] text-[#001523]/80 max-w-[620px] mx-auto mb-9">
            {t.body}
          </p>

          <a
            href="https://www.youtube.com/@jbrives"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0071C0] hover:bg-[#005c9c] text-white font-semibold py-3.5 px-7 rounded-lg transition"
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
