import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import { articlesFR, articlesEN } from '@/lib/articles'

interface BlogPreviewProps {
  locale: 'fr' | 'en'
}

export default function BlogPreview({ locale }: BlogPreviewProps) {
  const allArticles = locale === 'fr' ? articlesFR : articlesEN
  const blogHref = locale === 'fr' ? '/blog' : '/en/blog'
  const heading = locale === 'fr' ? 'Mes derniers articles' : 'Latest Articles'
  const allLabel = locale === 'fr' ? 'Voir tous les articles →' : 'View all articles →'
  const readSuffix = locale === 'fr' ? 'de lecture' : 'read'

  const ctaFor = (type: string) => {
    if (type === 'automation') return locale === 'fr' ? 'Lire le guide' : 'Read the guide'
    return locale === 'fr' ? 'Lire la suite' : 'Read more'
  }

  // 3 most recent: articles array is oldest-first, so take the last 3 and reverse
  const recent = [...allArticles].reverse().slice(0, 3)

  return (
    <section className="py-20 px-4 bg-stone-50 border-b border-stone-200" id="blog">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2">
              {locale === 'fr' ? 'Blog' : 'Blog'}
            </p>
            <h2 className="text-2xl font-serif font-bold text-stone-800">{heading}</h2>
          </div>
          <Link
            href={blogHref}
            className="hidden md:inline text-sm font-semibold text-brand-600 hover:text-brand-500 hover:underline transition-colors"
          >
            {allLabel}
          </Link>
        </div>

        {/* Cards — 3 most recent */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recent.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              href={`${blogHref}/${article.slug}`}
              ctaLabel={ctaFor(article.type)}
              readSuffix={readSuffix}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href={blogHref}
            className="inline-block text-sm font-semibold text-brand-600 hover:underline"
          >
            {allLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
