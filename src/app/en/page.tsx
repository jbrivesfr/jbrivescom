import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import BooksSection from '@/components/BooksSection'
import YouTubeSection from '@/components/YouTubeSection'
import ServicesSection from '@/components/ServicesSection'
import BlogPreview from '@/components/BlogPreview'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'JB Rives — Author, Creator & Digital Strategist',
  description:
    'Founder of Le Fasting and Club Fasting. Author. I help creators and entrepreneurs with strategy, branding, content production and AI agents.',
  alternates: {
    canonical: 'https://jbrives.com/en',
    languages: {
      'en': 'https://jbrives.com/en',
      'fr': 'https://jbrives.com',
    },
  },
  openGraph: {
    title: 'JB Rives — Author, Creator & Digital Strategist',
    description:
      'Founder of Le Fasting and Club Fasting. Author. I help creators and entrepreneurs with strategy, branding, content production and AI agents.',
    url: 'https://jbrives.com/en',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'JB Rives',
  url: 'https://jbrives.com',
  sameAs: ['https://www.youtube.com/@lefasting'],
  jobTitle: 'Author, Creator & Digital Strategist',
  knowsAbout: ['Intermittent Fasting', 'Content Strategy', 'AI Agents', 'Personal Branding'],
  image: 'https://jbrives.com/images/jb-hero.jpg',
  description:
    'Founder of Le Fasting and Club Fasting. Author. I help creators and entrepreneurs with strategy, branding, content production and AI agents.',
}

export default function EnHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="en" />
      <main>
        <Hero locale="en" />
        <Story locale="en" />
        <BooksSection locale="en" />
        <YouTubeSection locale="en" />
        <ServicesSection locale="en" />
        <BlogPreview locale="en" />
        <ContactForm locale="en" />
      </main>
      <Footer locale="en" />
    </>
  )
}
