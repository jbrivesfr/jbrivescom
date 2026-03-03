import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { articlesEN } from '@/lib/articles'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Blog | JB Rives',
  description:
    'Articles on productivity, intermittent fasting, AI agents and automation. By JB Rives.',
  alternates: {
    canonical: 'https://jbrives.com/en/blog',
    languages: {
      en: 'https://jbrives.com/en/blog',
      fr: 'https://jbrives.com/blog',
    },
  },
  openGraph: {
    title: 'Blog | JB Rives',
    description: 'Articles on productivity, intermittent fasting, AI agents and automation.',
    url: 'https://jbrives.com/en/blog',
    locale: 'en_US',
  },
}

const articles = articlesEN.filter((a) => a.type === 'article')
const guides = articlesEN.filter((a) => a.type === 'automation')

export default function EnBlogPage() {
  return (
    <>
      <Navbar locale="en" />
      <main className="bg-stone-50 min-h-screen">
        {/* Header */}
        <section className="bg-stone-900 text-stone-100 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-medium text-brand-400 uppercase tracking-wide mb-3">Blog</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">The Blog</h1>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              Productivity, health, technology — my experiments, my tools, my philosophy.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
          {/* Articles */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-8 flex items-center gap-2">
              Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  href={`/en/blog/${article.slug}`}
                  ctaLabel="Read more"
                  readSuffix="read"
                />
              ))}
            </div>
          </section>

          {/* Guides & Automations */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-2 flex items-center gap-2">
              Guides & Automations
            </h2>
            <p className="text-stone-500 text-sm mb-8">In-depth tutorials and ready-to-deploy systems.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {guides.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  href={`/en/blog/${article.slug}`}
                  ctaLabel="Read the guide"
                  readSuffix="read"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer locale="en" />
    </>
  )
}
