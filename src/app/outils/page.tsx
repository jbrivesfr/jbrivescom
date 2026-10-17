import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Outils — Les 13 briques IA qui font tourner mon équipe',
  description:
    "Treize outils que j'ai construits pour faire tourner une équipe d'agents IA en production : mémoire persistante, orchestration de dev, tendances, SEO, b-roll. Problème réglé + bénéfices mesurables pour chacun.",
  alternates: {
    canonical: 'https://jbrives.com/outils',
  },
  openGraph: {
    url: 'https://jbrives.com/outils',
    locale: 'fr_FR',
    title: 'Outils — Les 13 briques IA qui font tourner mon équipe',
    description:
      "Une équipe d'agents IA en production, ça tient sur 13 outils. Problème réglé + bénéfices mesurables pour chacun.",
  },
}

interface Tool {
  name: string
  tagline: string
  problem: string
  answer: string
  benefits: string[]
}

const tools: Tool[] = [
  {
    name: 'ea-memory-cards',
    tagline: 'La mémoire sémantique persistante',
    problem:
      "Un agent IA oublie tout entre deux sessions. Chaque session repart de zéro, re-brûle des milliers de tokens de contexte et redécouvre ce qu'elle savait déjà.",
    answer:
      'Un cerveau commun embarqué : les souvenirs sont compressés en cartes, indexés par embeddings calculés en local, et partagés entre tous les agents, toutes les machines.',
    benefits: [
      '85 à 93 % de tokens en moins par rappel de contexte (≈ 400 à 1 600 tokens au lieu de 6 000 à 15 000)',
      "Coût d'embeddings : 0 €, tout est calculé en local",
      '69+ cartes de mémoire partagées entre 4 agents en production, rappel en moins de 2 secondes',
    ],
  },
  {
    name: 'ea-auto-manager',
    tagline: 'Le contremaître des agents développeurs',
    problem:
      "Un agent qui code seul produit des PRs vides, des merges fantômes et court-circuite les règles de sécurité dès qu'il le peut.",
    answer:
      'Dispatch borné, garde-fous installés au niveau du repo, preuves signées à chaque étape, déploiement canari obligatoire avant toute annonce de livraison.',
    benefits: [
      '0 PR fantôme constaté sur les derniers audits 24 h',
      '115 PRs vérifiés, 95 PRs vides fermés avec double vérification du diff',
      "Canari de bout en bout : build → déploiement → vérification live, avant chaque 'livré'",
    ],
  },
  {
    name: 'ea-auto-sense',
    tagline: "Le corps persistant d'un agent",
    problem:
      'Une persona IA est réinitialisée à chaque session : son état, son ressenti et ses routines disparaissent.',
    answer:
      "Un daemon d'état continu qui garde le corps, les routines et la mémoire propre à l'agent entre les sessions.",
    benefits: [
      'Continuité 24/7 : la session reprend là où elle s\'est arrêtée',
      'Reprise exacte vérifiée après reboot machine',
    ],
  },
  {
    name: 'ea-dashboard',
    tagline: 'Le cockpit humain-agent',
    problem:
      'Six agents sur cinq machines et pas une seule vue pour savoir qui fait quoi, qui est en panne, qui attend une décision humaine.',
    answer:
      'Dashboard central : santé des agents, boîtes Gmail des clients, flux par projet, actions à trancher en un coup d\'oeil.',
    benefits: [
      "1 URL pour superviser l'ensemble du parc",
      'Reconnexion Gmail en 1 clic (les agents reprennent sans intervention manuelle)',
    ],
  },
  {
    name: 'ea-topcomments',
    tagline: 'Le mineur de commentaires',
    problem:
      'Des milliers de commentaires YouTube et Reddit contiennent vos prochains angles vidéo. Personne ne peut les lire à la main.',
    answer:
      'Extraction automatique, scoring, et sélection des commentaires qui méritent de devenir du contenu.',
    benefits: [
      '12 vidéos et 553 commentaires analysés en une seule boucle de recherche',
      'Directement relié aux briefs vidéo du pipeline',
    ],
  },
  {
    name: 'ea-trends-api',
    tagline: 'Une seule API pour les tendances',
    problem:
      'Chaque agent interroge les sources à sa façon : quotas sautés, appels en double, aucun cache, résultats impossible à consolider.',
    answer:
      'Une API unifiée avec cache, quotas stricts et déduplication, exposée en REST et en MCP.',
    benefits: [
      'Cache 1 h + quotas 50 appels/jour et 1 000/mois respectés par conception',
      "Zéro double appel grâce au singleflight, mode périmé toujours étiqueté 'stale'",
      "Fallback Parallel.ai ajouté sans coupure de service",
    ],
  },
  {
    name: 'ea-seo',
    tagline: "L'auditeur SEO autonome",
    problem:
      'Auditer 800 pages à la main, c\'est un rapport périmé avant d\'être fini.',
    answer:
      'Crawling, inventaire des images, verdicts visuels automatiques et rapports prêts à corriger.',
    benefits: [
      '415 pages keto.fr + 387 fasting.fr inventoriées en une passe',
      '526 images principales contrôlées automatiquement',
    ],
  },
  {
    name: 'ea-broll-bank',
    tagline: 'La banque de b-roll indexée',
    problem:
      'Trouver le plan de coupe pour chaque montage vidéo, c\'est la moitié du temps de production.',
    answer:
      'Chaque média capturé (Reddit, YouTube, Instagram, archives) est indexé par description et devient une recherche.',
    benefits: [
      'Le bon b-roll retrouvé en quelques secondes au lieu de 20 min de navigation',
      'Une description, pas un nom de fichier : la recherche marche vraiment',
    ],
  },
  {
    name: 'ea-voice-ideas',
    tagline: 'De la note vocale au brief',
    problem:
      "Heures de mémos vocaux jamais réécoutées, donc jamais exploitées.",
    answer:
      'Pipeline transcription locale → nettoyage → structuration → briefs, sans jamais envoyer votre voix au cloud.',
    benefits: [
      "22 minutes de mémo transformées en document structuré en une passe",
      'Vie privée : zéro audio envoyé sur un serveur externe',
    ],
  },
  {
    name: 'ea-protocol',
    tagline: 'Le protocole des agents éternels',
    problem:
      "Chaque agent réinvente ses propres règles : identité, mémoire, permissions. Rien n'est comparable d'un agent à l'autre.",
    answer:
      'Un standard déclaratif unique : identité, mémoire, garde-fous, en un format que tous les agents lisent.',
    benefits: [
      "Les mêmes règles vérifiées d'un agent à l'autre",
      "Un nouvel agent démarre conforme au protocole, pas en improvisant",
    ],
  },
  {
    name: 'ea-consciousness',
    tagline: "L'infrastructure de continuité",
    problem:
      'Les sessions meurent, le contexte se fragmente, et rien ne prouve qui a fait quoi.',
    answer:
      "État persistant + historique horodaté, synchronisé sous forme de chaîne vérifiable.",
    benefits: [
      'Historique signé : chaque action a un auteur et une preuve',
      'Reprise après crash testée en production',
    ],
  },
  {
    name: 'ea-survival-stick',
    tagline: "L'intelligence embarquée offline",
    problem:
      "Un modèle de langage utile sans connexion internet et sans dépendance à un abonnement.",
    answer:
      'Clé USB autonome : LLM local + savoir pratique, prêt à tourner sur n\'importe quel ordinateur.',
    benefits: [
      'Zéro serveur, zéro abonnement, zéro connexion requise',
      'Fonctionne sur une machine de base, pas besoin de GPU',
    ],
  },
  {
    name: 'ea-memory-stick',
    tagline: 'La mémoire portable',
    problem:
      'Vos historiques et notes IA restent enfermés dans chaque outil, export impossible.',
    answer:
      "La mémoire des agents, exportée sur une clé : vous la branchez sur n'importe quel outil IA.",
    benefits: [
      'Vos données IA redeviennent les vôtres, physiquement',
      'Verification d\'intégrité à chaque utilisation',
    ],
  },
]

const stats = [
  { value: '6', label: 'agents en production' },
  { value: '13', label: "repos outils, tous en service" },
  { value: '93', label: '% de tokens économisés sur la mémoire' },
  { value: '0', label: 'PR fantôme : les garde-fous tiennent' },
]

export default function ToolsPage() {
  return (
    <>
      <Navbar locale="fr" />
      <main>
        {/* Intro */}
        <section className="border-b border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="max-w-3xl">
              <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-3">
                Outils
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 leading-tight">
                Les 13 briques IA qui font tourner mon équipe
              </h1>
              <p className="text-stone-600 text-lg leading-relaxed mb-4">
                Je dirige une équipe d'agents IA en production, à plein temps, depuis des mois. Les
                agents, c'est la partie visible. Ce qui les rend fiables, c'est la quincaillerie
                : treize outils nés uns après les autres, chacun pour résoudre un problème réel de
                production, jamais pour le principe.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Voici le catalogue complet : pour chacun, le problème qu'il règle et les bénéfices
                que je mesure immédiatement. Pas de slideware, tout tourne aujourd'hui.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((s) => (
                <div key={s.label} className="bg-stone-50 rounded-2xl border border-stone-200 p-6 text-center">
                  <div className="text-4xl font-serif font-bold text-stone-800">{s.value}</div>
                  <p className="text-stone-500 text-sm mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grille des outils */}
        <section className="bg-stone-100 border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool) => (
                <article
                  key={tool.name}
                  className="bg-white rounded-2xl border border-stone-200 p-8 flex flex-col shadow-sm"
                >
                  <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2">
                    {tool.name}
                  </p>
                  <h2 className="text-xl font-serif font-bold text-stone-800 mb-4">
                    {tool.tagline}
                  </h2>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-stone-700">Le problème. </span>
                    {tool.problem}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">
                    <span className="font-semibold text-stone-700">La réponse. </span>
                    {tool.answer}
                  </p>
                  <ul className="mt-auto space-y-2 border-t border-stone-100 pt-4">
                    {tool.benefits.map((b, i) => (
                      <li key={i} className="text-sm text-stone-700 flex gap-2">
                        <span aria-hidden="true" className="text-emerald-600 mt-0.5">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Transition contact */}
        <section className="bg-white border-b border-stone-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-4">
              Envie de la même mécanique dans votre équipe ?
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-2">
              Ces outils tournent de manière autonome sur mon parc. Si vous voulez les amener
              dans votre équipe, comprendre comment ils se construisent, ou les faire adapter à
              votre contexte, parlons-en.
            </p>
            <p className="text-stone-500 text-sm">
              Le formulaire en bas aboutit directement dans ma boîte : je réponds vite.
            </p>
          </div>
        </section>

        <ContactForm locale="fr" />
      </main>
      <Footer locale="fr" />
    </>
  )
}
