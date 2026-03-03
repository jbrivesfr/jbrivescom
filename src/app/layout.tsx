import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jbrives.com'),
  title: {
    default: 'JB Rives — Auteur, Créateur & Stratège Digital',
    template: '%s | JB Rives',
  },
  description:
    'Fondateur du Fasting.fr et Club Fasting. Auteur de Le Fasting et Gras du Ventre. J\'aide les créateurs et entrepreneurs avec la stratégie, le contenu et les agents IA.',
  authors: [{ name: 'JB Rives', url: 'https://jbrives.com' }],
  creator: 'JB Rives',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jbrives.com',
    siteName: 'JB Rives',
    title: 'JB Rives — Auteur, Créateur & Stratège Digital',
    description:
      'Fondateur du Fasting.fr et Club Fasting. Auteur de Le Fasting et Gras du Ventre.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JB Rives — Auteur, Créateur & Stratège Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JB Rives — Auteur, Créateur & Stratège Digital',
    description:
      'Fondateur du Fasting.fr. Auteur de Le Fasting et Gras du Ventre. 450K abonnés YouTube.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
