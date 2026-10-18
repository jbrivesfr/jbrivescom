import Image from 'next/image'
import { PenLine, Rocket, Compass, Bot } from 'lucide-react'
import { Locale, translations } from '@/lib/i18n'

interface AboutTimStyleProps {
  locale: Locale
}

/**
 * Section « À propos » inspirée du site tim.blog :
 * petites bio-paragraphes, très grandes citations, photo inline, mini-panels.
 */
export default function AboutTimStyle({ locale }: AboutTimStyleProps) {
  const isFr = locale === 'fr'

  return (
    <section id="about" className="bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8">
          {isFr ? 'À propos de JB Rives' : 'About JB Rives'}
        </h2>

        <div className="max-w-3xl space-y-4">
          <p className="text-sm leading-relaxed text-stone-600">
            {isFr ? (
              <>
                JB Rives (Jean-Baptiste) est le fondateur du{' '}
                <a href="https://fasting.fr" className="text-brand-600 hover:text-brand-500 underline">
                  Fasting.fr
                </a>{' '}
                et du{' '}
                <a href="https://clubfasting.com" className="text-brand-600 hover:text-brand-500 underline">
                  Club Fasting
                </a>{' '}
                : deux communautés qui rassemblent des milliers de francophones autour du jeûne intermittent.
              </>
            ) : (
              <>
                JB Rives is the founder of{' '}
                <a href="https://fasting.fr" className="text-brand-600 hover:text-brand-500 underline">
                  Fasting.fr
                </a>{' '}
                and{' '}
                <a href="https://www.club-fasting.com" className="text-brand-600 hover:text-brand-500 underline">
                  Club Fasting
                </a>, two communities that unite thousands of French speakers around intermittent fasting.
              </>
            )}
          </p>
          <p className="text-sm leading-relaxed text-stone-600">
            {isFr ? (
              <>
                Il est l&apos;auteur de{' '}
                <a href="#books" className="text-brand-600 hover:text-brand-500 underline">
                  deux livres
                </a>{' '}
                sur le jeûne et la remise en forme. Depuis 2026, il dirige aussi une équipe d&apos;agents IA
                qui codent, écrivent et publient à ses côtés — avec ses propres outils maison (
                <a href="/outils" className="text-brand-600 hover:text-brand-500 underline">
                  les 13 briques
                </a>
                ).
              </>
            ) : (
              <>
                He is the author of{' '}
                <a href="#books" className="text-brand-600 hover:text-brand-500 underline">
                  two books
                </a>{' '}
                on fasting and fat loss. Since 2026, he also runs a team of AI agents that code, write and
                publish alongside him.
              </>
            )}
          </p>
        </div>

        {/* Grande citation 1 — réelle, sa voix documentée Le Fasting */}
        <div className="mt-16 max-w-4xl">
          <p className="text-3xl md:text-5xl font-serif font-bold text-stone-800 leading-snug">
            {isFr ? (
              <>« Je sais qu&apos;on te dit que c&apos;est faux. J&apos;y ai cru moi aussi. Voilà ce qui a changé. »</>
            ) : (
              <>“I know you&apos;ve been told this is false. I believed it too. Here&apos;s what changed.”</>
            )}
          </p>
          <p className="mt-4 text-sm font-medium text-stone-500">
            {isFr ? 'JB Rives — Le Fasting' : 'JB Rives — Le Fasting'}
          </p>
        </div>

        {/* Photo inline */}
        <figure className="mt-14">
          <div className="relative w-full aspect-[4/3] max-w-4xl rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/jb-about-cafe.jpg"
              alt={isFr ? 'JB Rives, au bureau' : 'JB Rives at his desk'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
          <figcaption className="mt-3 text-stone-500 text-sm">
            {isFr ? 'JB Rives, au bureau' : 'JB Rives at his desk'}
          </figcaption>
        </figure>

        {/* Grande citation 2 — placeholder presse (à remplir au fur et à mesure) */}
        <div className="mt-16 max-w-4xl">
          <p className="text-3xl md:text-5xl font-serif font-bold text-stone-300 leading-snug">
            {isFr
              ? '« Citation presse à insérer — interview autour de la sortie du Fasting. »'
              : '“Press quote to insert — interview around the launch of Le Fasting.”'}
          </p>
          <p className="mt-4 text-sm font-medium text-stone-300">
            {isFr ? '[Média — date]' : '[Outlet — date]'}
          </p>
        </div>

        {/* Grande citation 3 — placeholder presse */}
        <div className="mt-12 max-w-4xl">
          <p className="text-3xl md:text-5xl font-serif font-bold text-stone-300 leading-snug">
            {isFr ? '« Seconde citation presse à insérer. »' : '“Second press quote to insert.”'}
          </p>
          <p className="mt-4 text-sm font-medium text-stone-300">
            {isFr ? '[Média — date]' : '[Outlet — date]'}
          </p>
        </div>

        {/* Mini-panels rôles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
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
              label: isFr ? 'Fournisseur de Solutions' : 'Solutions Provider',
              sub: isFr ? 'SEO, contenu, conversion' : 'SEO, content, conversion',
            },
            {
              icon: Bot,
              label: isFr ? "Maître d'agents IA" : 'AI agent master',
              sub: isFr ? '6 agents IA en production' : '6 AI agents in production',
            },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="bg-stone-50 rounded-2xl border border-stone-200 p-5 text-center"
            >
              <Icon className="w-5 h-5 text-stone-500 mx-auto mb-2" aria-hidden="true" />
              <p className="font-serif font-bold text-stone-800 text-sm">{label}</p>
              <p className="text-stone-500 text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
