import Link from 'next/link'
import { Locale, translations } from '@/lib/i18n'

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const t = translations[locale].footer
  const prefix = locale === 'en' ? '/en' : ''

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-2">JB Rives</p>
            <p className="text-gray-400 text-sm">{t.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link href={prefix || '/'} className="text-gray-300 hover:text-white text-sm transition-colors">
                  {locale === 'en' ? 'Home' : 'Accueil'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/about`} className="text-gray-300 hover:text-white text-sm transition-colors">
                  {locale === 'en' ? 'About' : 'À propos'}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@lefasting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <a
              href="https://www.youtube.com/@lefasting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              @lefasting
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-xs">{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
