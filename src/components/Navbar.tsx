import Link from 'next/link'
import { Locale, translations } from '@/lib/i18n'

interface NavbarProps {
  locale: Locale
}

export default function Navbar({ locale }: NavbarProps) {
  const t = translations[locale].nav
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={prefix || '/'}
          className="font-serif text-xl font-bold text-navy hover:text-accent transition-colors"
        >
          JB Rives
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={prefix || '/'}
            className="text-sm font-medium text-gray-mid hover:text-navy transition-colors"
          >
            {t.home}
          </Link>
          <Link
            href={`${prefix}/about`}
            className="text-sm font-medium text-gray-mid hover:text-navy transition-colors"
          >
            {t.about}
          </Link>
          <a
            href={`${prefix || '/'}#books`}
            className="text-sm font-medium text-gray-mid hover:text-navy transition-colors"
          >
            {t.books}
          </a>
          <Link
            href={`${prefix}/blog`}
            className="text-sm font-medium text-gray-mid hover:text-navy transition-colors"
          >
            {t.blog}
          </Link>
          <a
            href={`${prefix || '/'}#contact`}
            className="text-sm font-medium text-gray-mid hover:text-navy transition-colors"
          >
            {t.contact}
          </a>
        </div>

        {/* Language switcher */}
        <div className="flex items-center gap-4">
          <Link
            href={t.langSwitchHref}
            className="text-sm font-semibold text-accent hover:underline transition-colors border border-accent rounded px-2 py-1"
          >
            {t.langSwitch}
          </Link>
        </div>
      </nav>
    </header>
  )
}
