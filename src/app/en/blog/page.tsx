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

export default function EnBlogPage() {
  return (
    <>
      <Navbar locale="en" />
      <main className="bg-[#f8f8fc] min-h-screen">
        {/* Header */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">The Blog</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Productivity, health, technology — my experiments, my tools, my philosophy.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesEN.map((article) => (
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
      </main>
      <Footer locale="en" />
    </>
  )
}
