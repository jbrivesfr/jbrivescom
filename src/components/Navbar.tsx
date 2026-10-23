import Link from 'next/link'
import { Locale, translations } from '@/lib/i18n'

interface NavbarProps {
  locale: Locale
  /** Version allégée pour la home light : YouTube / Ce que je fais / Contact */
  minimal?: boolean
}

export default function Navbar({ locale, minimal = false }: NavbarProps) {
  const t = translations[locale].nav
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F9]/95 backdrop-blur-md border-b border-[#001523]/10">
      <nav className="max-w-[1200px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={prefix || '/'} className="flex items-center gap-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cap-icon.png"
            alt="jbrives.com"
            className="w-9 h-9 object-contain transition-transform group-hover:scale-110"
          />
          <span className="text-sm font-bold tracking-tight text-[#001523]">jbrives.com</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {minimal ? (
            <>
              <a
                href="#youtube"
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                YouTube
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                {locale === 'fr' ? 'Ce que je fais' : 'What I do'}
              </a>
              <Link
                href={`${prefix}/diagnostic`}
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                Diagnostic
              </Link>
              <a
                href="#contact"
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                {t.contact}
              </a>
            </>
          ) : (
            <>
              <Link
                href={prefix || '/'}
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                {t.home}
              </Link>
              <Link
                href={`${prefix}/about`}
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                {t.about}
              </Link>
              <a
                href={`${prefix || '/'}#books`}
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                {t.books}
              </a>
              <Link
                href={`${prefix}/blog`}
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                {t.blog}
              </Link>
              <a
                href={`${prefix || '/'}#contact`}
                className="text-sm font-medium text-[#001523]/70 hover:text-[#001523] transition-colors"
              >
                {t.contact}
              </a>
            </>
          )}
        </div>

        {/* Language switcher */}
        <div className="flex items-center gap-4">
          <Link
            href={t.langSwitchHref}
            className="text-sm font-semibold text-[#0071C0] hover:text-[#005c9c] transition-colors border border-[#0071C0] rounded px-2 py-1"
          >
            {t.langSwitch}
          </Link>
        </div>
      </nav>
    </header>
  )
}
