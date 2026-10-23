import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Diagnostic from '@/components/Diagnostic'

export const metadata: Metadata = {
  title: 'Diagnostic in 3 questions',
  description:
    "Three questions to place where you stand, then you talk directly to Claire, JB Rives's assistant, on WhatsApp.",
  alternates: { canonical: 'https://jbrives.com/en/diagnostic' },
  robots: { index: true, follow: true },
}

export default function DiagnosticPageEn() {
  return (
    <>
      <Navbar locale="en" minimal />
      <main className="tim-home">
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-32">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-xs uppercase tracking-widest text-neutral-500">3 questions · 30 seconds</p>
            <h1 className="mb-4 text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
              Where exactly is it stuck?
            </h1>
            <p className="text-[15px] leading-relaxed text-neutral-600">
              Three questions to place your situation. Then you talk directly to Claire — she takes your
              answers and passes on to me what matters.
            </p>
          </div>
          <Diagnostic locale="en" />
        </section>
      </main>
      <Footer locale="en" />
    </>
  )
}
