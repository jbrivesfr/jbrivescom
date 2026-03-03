import Link from 'next/link'
import { Article } from '@/lib/articles'

interface ArticleCardProps {
  article: Article
  href: string
  ctaLabel: string
  readSuffix?: string
}

export default function ArticleCard({
  article,
  href,
  ctaLabel,
  readSuffix = 'de lecture',
}: ArticleCardProps) {
  const isGuide = article.type === 'automation'

  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col border border-stone-100">
      {/* Guide banner */}
      {isGuide && (
        <div className="bg-stone-900 px-4 py-1.5 flex items-center gap-2">
          <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">Guide</span>
          <span className="text-xs text-stone-400">{article.readTime} {readSuffix}</span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2 py-1 rounded-full bg-brand-600/10 text-brand-600 border border-brand-600/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-stone-900 mb-3 leading-tight">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1">{article.excerpt}</p>

        {/* Meta + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          {isGuide ? (
            <span className="text-xs text-stone-400">{article.date}</span>
          ) : (
            <span className="text-xs text-stone-400">
              {article.date} · {article.readTime} {readSuffix}
            </span>
          )}
          <Link
            href={href}
            className="text-sm font-semibold text-brand-600 hover:text-brand-500 hover:underline transition-colors"
          >
            {ctaLabel} →
          </Link>
        </div>
      </div>
    </article>
  )
}
