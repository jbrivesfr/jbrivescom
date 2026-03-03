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

const articles = articlesFR.filter((a) => a.type === 'article')
const guides = articlesFR.filter((a) => a.type === 'automation')

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

        <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
          {/* Articles */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mb-8">Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  href={`/blog/${article.slug}`}
                  ctaLabel="Lire la suite"
                />
              ))}
            </div>
          </section>

          {/* Guides & Automations */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy mb-2">Guides & Automatisations</h2>
            <p className="text-gray-500 text-sm mb-8">Tutoriels approfondis et systèmes prêts à déployer.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {guides.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  href={`/blog/${article.slug}`}
                  ctaLabel="Lire le guide"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer locale="fr" />
    </>
  )
}
