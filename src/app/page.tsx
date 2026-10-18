import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroBg from '@/components/HeroBg'
import YouTubeSection from '@/components/YouTubeSection'
import ServicesSection from '@/components/ServicesSection'
import ToolsSection from '@/components/ToolsSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'JB Rives — Auteur, Créateur & Fournisseur de Solutions',
  description:
    "Fondateur du Fasting.fr et Club Fasting. Auteur de Le Fasting et Gras du Ventre. J'aide les créateurs et entrepreneurs avec la stratégie, le contenu et les agents IA.",
  alternates: {
    canonical: 'https://jbrives.com',
    languages: {
      'en': 'https://jbrives.com/en',
      'fr': 'https://jbrives.com',
    },
  },
  openGraph: {
    url: 'https://jbrives.com',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'JB Rives',
  url: 'https://jbrives.com',
  sameAs: ['https://www.youtube.com/@jbrives', 'https://www.youtube.com/@lefasting'],
  jobTitle: 'Author, Creator & Solutions Provider',
  knowsAbout: ['Intermittent Fasting', 'Content Strategy', 'AI Agents', 'Personal Branding'],
  image: 'https://jbrives.com/images/jb-hero-bg.jpg',
  description:
    "Fondateur du Fasting.fr et Club Fasting. Auteur de Le Fasting et Gras du Ventre. J'aide les créateurs et entrepreneurs avec la stratégie, le contenu et les agents IA.",
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale="fr" minimal />
      <main className="tim-home">
        <HeroBg locale="fr" />
        <YouTubeSection locale="fr" />
        <ServicesSection locale="fr" />
        <ToolsSection locale="fr" />
        <ContactForm locale="fr" />
      </main>
      <Footer locale="fr" />
    </>
  )
}
