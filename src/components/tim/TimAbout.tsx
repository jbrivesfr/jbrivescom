import Image from 'next/image'
import { PenLine, Rocket, Compass, Bot } from 'lucide-react'
import { Locale } from '@/lib/i18n'

interface TimAboutProps {
  locale: Locale
}

/**
 * Section « À propos » calquée sur tim.blog :
 * 2 colonnes 50/50 (photo | texte), H2 64px, paragraphes 18px/1.6,
 * puis une rangée de panels.
 */
export default function TimAbout({ locale }: TimAboutProps) {
  const isFr = locale === 'fr'

  const panels = [
    {
      icon: PenLine,
      label: isFr ? 'Auteur' : 'Author',
      sub: isFr ? '2 livres sur le jeûne' : '2 books on fasting',
    },
    {
      icon: Rocket,
      label: isFr ? 'Fondateur' : 'Founder',
      sub: isFr ? 'Fasting.fr · Club Fasting' : 'Fasting.fr · Club Fasting',
    },
    {
      icon: Compass,
      label: isFr ? 'Stratège digital' : 'Digital strategist',
      sub: isFr ? 'SEO, contenu, conversion' : 'SEO, content, conversion',
    },
    {
      icon: Bot,
      label: isFr ? "Chef d'une équipe d'agents IA" : 'AI agent team lead',
      sub: isFr ? '6 agents IA en production' : '6 AI agents in production',
    },
  ]

  return (
    <section id="about" className="bg-[#FBF9F9]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-[72px] md:py-[115px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Colonne photo */}
          <figure className="order-2 lg:order-1">
            <div className="relative w-full aspect-[1080/1525] rounded-[10px] overflow-hidden bg-[#F6F1F1]">
              <Image
                src="/images/jb-hero-cafe.jpg"
                alt={isFr ? 'JB Rives' : 'JB Rives'}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 542px"
              />
            </div>
            <figcaption className="mt-3 text-[14px] text-[#001523]/60">
              {isFr ? 'JB Rives, au bureau' : 'JB Rives at his desk'}
            </figcaption>
          </figure>

          {/* Colonne texte */}
          <div className="order-1 lg:order-2">
            <h2 className="text-[40px] md:text-[64px] leading-[1.1] mb-8">
              {isFr ? 'À propos de JB Rives' : 'About JB Rives'}
            </h2>

            <div className="space-y-5 text-[18px] leading-[1.6]">
              <p>
                {isFr ? (
                  <>
                    JB Rives (Jean-Baptiste) est le fondateur du{' '}
                    <a href="https://fasting.fr" className="underline decoration-[#0071C0] underline-offset-4 hover:text-[#0071C0]">
                      Fasting.fr
                    </a>{' '}
                    et du{' '}
                    <a href="https://clubfasting.com" className="underline decoration-[#0071C0] underline-offset-4 hover:text-[#0071C0]">
                      Club Fasting
                    </a>
                    , deux communautés qui rassemblent des dizaines de milliers de francophones autour du
                    jeûne intermittent.
                  </>
                ) : (
                  <>
                    JB Rives (Jean-Baptiste) is the founder of{' '}
                    <a href="https://fasting.fr" className="underline decoration-[#0071C0] underline-offset-4 hover:text-[#0071C0]">
                      Fasting.fr
                    </a>{' '}
                    and{' '}
                    <a href="https://clubfasting.com" className="underline decoration-[#0071C0] underline-offset-4 hover:text-[#0071C0]">
                      Club Fasting
                    </a>
                    , two communities gathering tens of thousands of French speakers around
                    intermittent fasting.
                  </>
                )}
              </p>

              <p>
                {isFr ? (
                  <>
                    Il est l&apos;auteur de{' '}
                    <a href="#books" className="underline decoration-[#0071C0] underline-offset-4 hover:text-[#0071C0]">
                      deux livres
                    </a>{' '}
                    sur le jeûne et la perte de poids, et il partage ses résultats et ses méthodes sur
                    YouTube devant plus de 450 000 abonnés.
                  </>
                ) : (
                  <>
                    He authored{' '}
                    <a href="#books" className="underline decoration-[#0071C0] underline-offset-4 hover:text-[#0071C0]">
                      two books
                    </a>{' '}
                    on fasting and fat loss, and shares his results and methods on YouTube with more
                    than 450,000 subscribers.
                  </>
                )}
              </p>

              <p>
                {isFr ? (
                  <>
                    Depuis 2026, il dirige aussi une équipe d&apos;agents IA qui codent, écrivent et
                    publient à ses côtés, grâce à ses propres outils maison (
                    <a href="/outils" className="underline decoration-[#0071C0] underline-offset-4 hover:text-[#0071C0]">
                      les 13 briques
                    </a>
                    ).
                  </>
                ) : (
                  <>
                    Since 2026, he also runs a team of AI agents that code, write and publish alongside
                    him, powered by his own in-house tools.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
          {panels.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="bg-[#F6F1F1] rounded-[10px] px-5 py-7 text-center">
              <Icon className="w-5 h-5 mx-auto mb-3 text-[#001523]/60" aria-hidden="true" />
              <p className="text-[15px] font-semibold leading-snug">{label}</p>
              <p className="text-[13px] text-[#001523]/60 mt-1.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
