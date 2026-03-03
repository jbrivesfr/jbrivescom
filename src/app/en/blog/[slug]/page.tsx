import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getArticleBySlug, getAllSlugs } from '@/lib/articles'

export const dynamic = 'force-static'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug, 'en')
  if (!article) return {}

  return {
    title: `${article.title} | JB Rives`,
    description: article.excerpt,
    alternates: {
      canonical: `https://jbrives.com/en/blog/${article.slug}`,
      languages: {
        en: `https://jbrives.com/en/blog/${article.slug}`,
        fr: `https://jbrives.com/blog/${article.slug}`,
      },
    },
    openGraph: {
      title: `${article.title} | JB Rives`,
      description: article.excerpt,
      url: `https://jbrives.com/en/blog/${article.slug}`,
      locale: 'en_US',
      type: 'article',
      publishedTime: article.date,
      authors: ['JB Rives'],
    },
  }
}

export default function EnBlogPostPage({ params }: Props) {
  const article = getArticleBySlug(params.slug, 'en')
  if (!article) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: 'JB Rives',
      url: 'https://jbrives.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'JB Rives',
      url: 'https://jbrives.com',
    },
    datePublished: article.date,
    url: `https://jbrives.com/en/blog/${article.slug}`,
    keywords: article.tags.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="en" />
      <main className="bg-[#f8f8fc] min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-12">
          {/* Back link */}
          <Link
            href="/en/blog"
            className="inline-flex items-center gap-1 text-sm text-accent font-semibold hover:underline mb-8 block"
          >
            ← Back to blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-50 text-accent border border-orange-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="font-medium text-gray-600">JB Rives</span>
              <span>·</span>
              <time>{article.date}</time>
              <span>·</span>
              <span>{article.readTime} read</span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-navy
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-li:text-gray-700
              prose-ul:list-disc prose-ul:pl-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Footer CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 mb-4">Did you enjoy this article?</p>
            <Link
              href="/en/blog"
              className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              View all articles
            </Link>
          </div>
        </article>
      </main>
      <Footer locale="en" />
    </>
  )
}
