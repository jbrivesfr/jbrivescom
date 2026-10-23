import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Diagnostic from '@/components/Diagnostic'

export const metadata: Metadata = {
  title: 'Diagnostic en 3 questions',
  description:
    "Trois questions pour situer où vous en êtes, puis vous parlez directement à Claire, l'assistante de JB Rives, sur WhatsApp.",
  alternates: { canonical: 'https://jbrives.com/diagnostic' },
  robots: { index: true, follow: true },
}

export default function DiagnosticPage() {
  return (
    <>
      <Navbar locale="fr" minimal />
      <main className="tim-home">
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-32">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">3 questions · 30 secondes</p>
            <h1 className="mb-4 text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
              Où est-ce que ça bloque, concrètement&nbsp;?
            </h1>
            <p className="text-[15px] leading-relaxed text-neutral-600">
              Trois questions pour situer votre situation. Ensuite, vous parlez directement à Claire —
              elle reprend vos réponses et me transmet ce qui compte.
            </p>
          </div>
          <Diagnostic />
        </section>
      </main>
      <Footer locale="fr" />
    </>
  )
}
