import Link from 'next/link'
import { Locale, translations } from '@/lib/i18n'

interface ContactFormProps {
  locale: Locale
}

// Section de contact (bas de page d'accueil) : un CTA propre vers le funnel
// /diagnostic, qui se termine en click-to-chat WhatsApp vers Claire (assistante
// IA de JB). Pas de DB, pas d'email.
export default function ContactForm({ locale }: ContactFormProps) {
  const t = translations[locale].contact
  const href = `${locale === 'en' ? '/en' : ''}/diagnostic`

  return (
    <section id="contact" className="bg-[#F6F1F1] border-b border-[#001523]/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2">Contact</p>
          <h2 className="text-[34px] md:text-[56px] leading-[1.1] mb-6">{t.heading}</h2>
          <p className="text-stone-600 text-lg mb-10">{t.body}</p>

          <Link
            href={href}
            className="inline-flex items-center justify-center gap-2 bg-[#001523] hover:bg-[#0071C0] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition hover:-translate-y-0.5 text-base"
          >
            {locale === 'fr' ? 'Faire le diagnostic en 3 questions' : 'Take the 3-question diagnostic'}
            <span aria-hidden="true">→</span>
          </Link>

          <p className="text-xs text-stone-500 mt-4 leading-relaxed">{t.claireNote}</p>
        </div>
      </div>
    </section>
  )
}
