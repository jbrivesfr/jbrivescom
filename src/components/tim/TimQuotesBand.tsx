import { Locale } from '@/lib/i18n'

interface TimQuotesBandProps {
  locale: Locale
}

/**
 * Bandeau de citations façon tim.blog : fond navy, très gros texte blanc.
 * Les emplacements presse restent en placeholder (à remplir au fur et à mesure).
 */
export default function TimQuotesBand({ locale }: TimQuotesBandProps) {
  const isFr = locale === 'fr'

  const quotes: { text: string; source: string; placeholder?: boolean }[] = [
    {
      text: isFr
        ? '« Je sais qu\u2019on te dit que c\u2019est faux. J\u2019y ai cru moi aussi. Voilà ce qui a changé. »'
        : '“I know you\u2019ve been told this is false. I believed it too. Here\u2019s what changed.”',
      source: isFr ? 'JB Rives, Le Fasting' : 'JB Rives, Le Fasting',
    },
    {
      text: isFr
        ? '« Citation presse à insérer : interview autour de la sortie du Fasting. »'
        : '“Press quote to insert: interview around the launch of Le Fasting.”',
      source: isFr ? '[Média, date]' : '[Outlet, date]',
      placeholder: true,
    },
    {
      text: isFr
        ? '« Seconde citation presse à insérer. »'
        : '“Second press quote to insert.”',
      source: isFr ? '[Média, date]' : '[Outlet, date]',
      placeholder: true,
    },
  ]

  return (
    <section className="bg-[#001523] text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <div className="space-y-16 md:space-y-20">
          {quotes.map((q, i) => (
            <figure key={i} className={i > 0 ? 'border-t border-white/10 pt-16 md:pt-20' : ''}>
              <blockquote
                className={
                  'text-[30px] md:text-[56px] leading-[1.1] font-semibold tracking-[-0.02em] ' +
                  (q.placeholder ? 'text-white/35' : 'text-white')
                }
              >
                {q.text}
              </blockquote>
              <figcaption className="mt-5 text-[15px] text-white/50">{q.source}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
