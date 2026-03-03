import Link from 'next/link'
import { Terminal } from 'lucide-react'
import { Locale, translations } from '@/lib/i18n'

interface NavbarProps {
  locale: Locale
}

export default function Navbar({ locale }: NavbarProps) {
  const t = translations[locale].nav
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={prefix || '/'}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-stone-900 group-hover:bg-brand-600 transition-colors flex items-center justify-center rounded-sm">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <span className="font-sans text-sm font-bold text-stone-900 tracking-tight">
            jbrives.com
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={prefix || '/'}
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            {t.home}
          </Link>
          <Link
            href={`${prefix}/about`}
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            {t.about}
          </Link>
          <a
            href={`${prefix || '/'}#books`}
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            {t.books}
          </a>
          <Link
            href={`${prefix}/blog`}
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            {t.blog}
          </Link>
          <a
            href={`${prefix || '/'}#contact`}
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            {t.contact}
          </a>
        </div>

        {/* Language switcher */}
        <div className="flex items-center gap-4">
          <Link
            href={t.langSwitchHref}
            className="text-sm font-semibold text-brand-700 hover:text-brand-600 hover:underline transition-colors border border-brand-700 rounded px-2 py-1"
          >
            {t.langSwitch}
          </Link>
        </div>
      </nav>
    </header>
  )
}
