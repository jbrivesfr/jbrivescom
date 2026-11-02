import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScoreIa from '@/components/ScoreIa'

export const metadata: Metadata = {
  title: 'Score IA : ce que l’IA peut faire pour vous',
  description:
    '10 questions, 2 minutes. Votre Score IA sur 100, les 3 choses que l’IA devrait faire pour vous en premier et le temps que vous pourriez gagner. Sans email.',
  alternates: { canonical: 'https://jbrives.com/diagnostic' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Votre Score IA en 2 minutes',
    description: '10 questions. Votre score sur 100, vos 3 priorités et le temps gagné. Gratuit, sans email.',
    url: 'https://jbrives.com/diagnostic',
  },
}

export default function DiagnosticPage() {
  return (
    <>
      <Navbar locale="fr" minimal />
      <main className="tim-home">
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-32">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">Score IA · 10 questions · 2 minutes</p>
            <h1 className="mb-4 text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
              Qu’est-ce que l’IA pourrait faire pour vous&nbsp;?
            </h1>
            <p className="text-[15px] leading-relaxed text-neutral-600">
              J’ai remplacé une équipe par des agents IA. En 10 questions, voyez ce que ça donnerait chez vous&nbsp;:
              votre score sur 100, les 3 choses à confier à l’IA en premier et le temps gagné. Sans email.
            </p>
          </div>
          <ScoreIa />
        </section>
      </main>
      <Footer locale="fr" />
    </>
  )
}
