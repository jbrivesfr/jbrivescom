import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import { articlesFR } from '@/lib/articles'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Blog | JB Rives',
  description:
    "Articles sur la productivité, le jeûne intermittent, les agents IA et l'automatisation. Par JB Rives.",
  alternates: {
    canonical: 'https://jbrives.com/blog',
    languages: {
      fr: 'https://jbrives.com/blog',
      en: 'https://jbrives.com/en/blog',
    },
  },
  openGraph: {
    title: 'Blog | JB Rives',
    description:
      "Articles sur la productivité, le jeûne intermittent, les agents IA et l'automatisation.",
    url: 'https://jbrives.com/blog',
    locale: 'fr_FR',
  },
}

export default function BlogPage() {
  return (
    <>
      <Navbar locale="fr" />
      <main className="bg-[#f8f8fc] min-h-screen">
        {/* Header */}
        <section className="bg-navy text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Le Blog</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Productivité, santé, technologie — mes expériences, mes outils, ma philosophie.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesFR.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                href={`/blog/${article.slug}`}
                ctaLabel="Lire la suite"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer locale="fr" />
    </>
  )
}
