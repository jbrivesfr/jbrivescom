import Image from 'next/image'
import { Locale, translations } from '@/lib/i18n'

interface TimBooksProps {
  locale: Locale
}

/**
 * Section livres façon tim.blog : titre centré (max 800px), couvertures
 * 200x302 radius 8px, puis panneau d'appel à l'action navy.
 */
export default function TimBooks({ locale }: TimBooksProps) {
  const t = translations[locale].books
  const isFr = locale === 'fr'

  const books = [
    {
      title: t.book1.title,
      description: t.book1.description,
      imgSrc: '/images/book-le-fasting.jpg',
      imgAlt: t.book1.imgAlt,
      href: 'https://amzn.to/lefasting',
      meta: isFr ? 'Best-seller, jeûne intermittent' : 'Bestseller, intermittent fasting',
    },
    {
      title: t.book2.title,
      description: t.book2.description,
      imgSrc: '/images/book-gras-du-ventre.jpg',
      imgAlt: t.book2.imgAlt,
      href: 'https://amzn.to/grasduvente',
      meta: isFr ? 'Perte de poids durable' : 'Lasting fat loss',
    },
  ]

  return (
    <section id="books" className="bg-[#F6F1F1]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <h2 className="text-[34px] md:text-[56px] leading-[1.1] text-center max-w-[800px] mx-auto mb-[42px] md:mb-[58px]">
          {isFr ? 'Les livres de JB Rives' : 'Books by JB Rives'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-[760px] mx-auto">
          {books.map((b) => (
            <div key={b.title} className="text-center">
              <a href={b.href} className="inline-block group">
                <div className="relative w-[200px] h-[302px] mx-auto rounded-lg overflow-hidden shadow-lg transition group-hover:-translate-y-1">
                  <Image
                    src={b.imgSrc}
                    alt={b.imgAlt}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </a>
              <h3 className="text-[22px] font-semibold mt-6 mb-2">{b.title}</h3>
              <p className="text-[14px] text-[#001523]/60 mb-3">{b.meta}</p>
              <p className="text-[16px] leading-[1.6] text-[#001523]/80 mb-4 max-w-[320px] mx-auto">
                {b.description}
              </p>
              <a
                href={b.href}
                className="inline-block text-[15px] font-semibold underline decoration-[#0071C0] underline-offset-4 hover:text-[#0071C0]"
              >
                {t.book1.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Panneau CTA navy façon tim.blog */}
        <div className="bg-[#001523] text-white rounded-[10px] px-8 py-12 md:px-14 md:py-16 mt-20 text-center">
          <h3 className="text-[26px] md:text-[36px] leading-[1.15] max-w-[720px] mx-auto mb-5">
            {isFr
              ? 'Envie de la même mécanique dans votre domaine ?'
              : 'Want the same mechanics in your field?'}
          </h3>
          <p className="text-[17px] leading-[1.6] text-white/70 max-w-[560px] mx-auto mb-8">
            {isFr
              ? 'Stratégie, contenu, agents IA : parlons de ce que ça donnerait chez vous.'
              : 'Strategy, content, AI agents: let’s talk about what it would look like for you.'}
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#0071C0] hover:bg-[#005c9c] text-white font-semibold px-7 py-3.5 rounded-lg transition"
          >
            {isFr ? 'Me contacter' : 'Get in touch'}
          </a>
        </div>
      </div>
    </section>
  )
}
