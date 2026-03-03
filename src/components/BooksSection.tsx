import BookCard from './BookCard'
import { Locale, translations } from '@/lib/i18n'

interface BooksSectionProps {
  locale: Locale
}

export default function BooksSection({ locale }: BooksSectionProps) {
  const t = translations[locale].books

  return (
    <section id="books" className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2">
            {locale === 'fr' ? 'Livres' : 'Books'}
          </p>
          <h2 className="text-2xl font-serif font-bold text-stone-800">
            {t.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <BookCard
            title={t.book1.title}
            description={t.book1.description}
            rating={t.book1.rating}
            reviews={t.book1.reviews}
            cta={t.book1.cta}
            imgSrc="/images/book-le-fasting.jpg"
            imgAlt={t.book1.imgAlt}
            href="https://amzn.to/lefasting"
          />
          <BookCard
            title={t.book2.title}
            description={t.book2.description}
            rating={t.book2.rating}
            reviews={t.book2.reviews}
            cta={t.book2.cta}
            imgSrc="/images/book-gras-du-ventre.jpg"
            imgAlt={t.book2.imgAlt}
            href="https://amzn.to/grasduvente"
          />
        </div>
      </div>
    </section>
  )
}
