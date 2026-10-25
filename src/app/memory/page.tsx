import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MemoryDownload, { CopyCommand } from '@/components/MemoryDownload'

export const metadata: Metadata = {
  title: 'EA Memory Lite : votre agent se souvient de tout',
  description:
    'Une mémoire durable pour Claude, Cursor et vos agents IA. 100 % locale et privée, installée en une commande. Gratuit.',
  alternates: { canonical: 'https://jbrives.com/memory' },
  openGraph: {
    title: 'EA Memory Lite : votre agent se souvient de tout',
    description: 'Mémoire 100 % locale pour Claude, Cursor et vos agents. Installée en une commande. Gratuit.',
    url: 'https://jbrives.com/memory',
  },
  robots: { index: true, follow: true },
}

const STEPS = [
  {
    n: '1',
    t: 'Une commande',
    d: 'Elle installe EA Memory Lite sur votre ordinateur et le branche à Claude, Cursor, Windsurf ou VS Code. Chaque réglage modifié est sauvegardé avant.',
  },
  {
    n: '2',
    t: 'Un briefing au démarrage',
    d: 'À chaque nouvelle conversation, votre agent lit un résumé compact de ce qu’il sait déjà : vos règles, vos préférences, vos projets en cours.',
  },
  {
    n: '3',
    t: 'Le reste à la demande',
    d: 'Il cherche le détail seulement quand il en a besoin, et retient ce qui compte. Une information déjà connue est fusionnée, pas dupliquée.',
  },
]

const FAQ = [
  {
    q: 'C’est vraiment gratuit ?',
    a: 'Oui. EA Memory Lite est gratuit, sans limite de durée ni de nombre de souvenirs. La version Pro, payante, ajoutera la capture automatique, la synchronisation entre appareils et le travail à plusieurs agents.',
  },
  {
    q: 'Mes données quittent-elles mon ordinateur ?',
    a: 'Non. Les souvenirs sont stockés dans un dossier de votre ordinateur (~/.ea-memory), et la recherche, y compris la recherche par le sens, tourne sur votre processeur. Seul le modèle de langue est téléchargé une fois à l’installation. Une limite à connaître : quand votre agent lit un souvenir, ce texte part vers le modèle que vous utilisez (Claude, ChatGPT…), comme le reste de votre conversation.',
  },
  {
    q: 'Avec quels outils ça marche ?',
    a: 'Claude Desktop, Claude Code, Cursor, Windsurf et VS Code sont configurés automatiquement, et ils partagent la même mémoire. Pour ChatGPT, les outils suivent déjà le format des connecteurs, mais ChatGPT exige un serveur accessible en ligne : ce sera inclus dans Pro.',
  },
  {
    q: 'Faut-il savoir coder ?',
    a: 'Non, mais il faut ouvrir un terminal une fois pour coller la commande, et avoir Node.js installé (nodejs.org). L’installation affiche tout ce qu’elle fait.',
  },
  {
    q: 'Quelle différence avec la mémoire intégrée de ChatGPT ou de Claude ?',
    a: 'Elle est partagée entre vos outils (ce que vous dites à Claude, Cursor le sait aussi), elle reste chez vous, vous pouvez la lire, la corriger et l’exporter en JSON ou en Markdown à tout moment.',
  },
  {
    q: 'Combien ça économise vraiment ?',
    a: 'Sur notre test publié (souvenirs synthétiques), avec 1 000 souvenirs, une session coûte environ 2 900 tokens au lieu de 63 400 si l’on collait tout le fichier mémoire : 95 % de moins. Avec 200 souvenirs, c’est 77 % pour une question, et l’écart se réduit si l’agent fait beaucoup de recherches. Le détail est dans la documentation.',
  },
  {
    q: 'Quelle place sur le disque ? Quel système ?',
    a: 'Environ 460 Mo avec la recherche par le sens (dont 120 Mo de modèle), 55 Mo en mode mots-clés seulement. Testé sur macOS ; Linux et Windows devraient fonctionner, vos retours sont les bienvenus.',
  },
  {
    q: 'Comment la désinstaller ?',
    a: 'Une commande retire EA Memory Lite de tous vos outils, en sauvegardant chaque fichier avant. Vos souvenirs restent dans votre dossier, sauf si vous demandez à tout effacer.',
  },
]

export default function MemoryPage() {
  return (
    <>
      <Navbar locale="fr" minimal />
      <main className="tim-home">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs uppercase tracking-widest text-neutral-500">
              EA Memory Lite · gratuit · 100 % local
            </p>
            <h1 className="mb-5 text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl text-balance">
              Votre agent se souvient de tout.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
              Une mémoire durable pour Claude, Cursor et vos autres agents IA. Elle reste sur votre
              ordinateur&nbsp;: pas de compte, pas de cloud, pas de clé d’API. Vous n’avez plus à
              réexpliquer votre contexte à chaque conversation.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#telecharger"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-7 py-3.5 text-[15px] font-medium text-white transition hover:bg-neutral-800"
              >
                Télécharger gratuitement
              </a>
              <a
                href="#comment"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-7 py-3.5 text-[15px] font-medium text-neutral-900 transition hover:border-neutral-900"
              >
                Comment ça marche
              </a>
            </div>
            <p className="mt-6 text-sm text-neutral-500">
              Claude Desktop · Claude Code · Cursor · Windsurf · VS Code · ChatGPT (avec Pro)
            </p>
          </div>
        </section>

        {/* Problème */}
        <section className="border-y border-[#001523]/10 bg-white">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 sm:grid-cols-3">
            {[
              ['Chaque conversation repart de zéro', 'Vos préférences, vos clients, vos décisions : il faut tout redire.'],
              ['Le fichier mémoire grossit', 'Coller tout son contexte coûte des milliers de tokens à chaque session, et noie l’essentiel.'],
              ['Chaque outil a sa mémoire', 'Ce que sait Claude, Cursor l’ignore. Et rien n’est vraiment à vous.'],
            ].map(([t, d]) => (
              <div key={t}>
                <h2 className="mb-2 text-lg font-semibold text-neutral-900">{t}</h2>
                <p className="text-[15px] leading-relaxed text-neutral-600">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comment ça marche */}
        <section id="comment" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
          <h2 className="mb-10 text-center text-3xl font-semibold text-neutral-900">Comment ça marche</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                  {s.n}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">{s.t}</h3>
                <p className="text-[15px] leading-relaxed text-neutral-600">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <p className="mb-3 text-center text-sm text-neutral-500">L’installation tient en une ligne :</p>
            <CopyCommand />
          </div>
        </section>

        {/* Chiffres + confidentialité */}
        <section className="bg-[#001523] text-white">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-white/50">Moins de tokens</p>
              <p className="mb-2 text-5xl font-semibold" style={{ color: '#87CEFF' }}>−95&nbsp;%</p>
              <p className="mb-4 text-[15px] leading-relaxed text-white/80">
                Avec 1 000 souvenirs, une session coûte environ 2 900 tokens au lieu de 63 400 en collant
                tout le fichier mémoire. Avec 200 souvenirs, −77&nbsp;% pour une question.
              </p>
              <p className="text-xs text-white/50">
                Benchmark publié avec le code, sur des souvenirs synthétiques. L’économie baisse si
                l’agent multiplie les recherches dans la même session.
              </p>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-white/50">Privé par conception</p>
              <ul className="space-y-3 text-[15px] leading-relaxed text-white/85">
                <li>• Vos souvenirs restent dans un dossier de votre ordinateur.</li>
                <li>• La recherche par le sens tourne en local, en français comme en anglais.</li>
                <li>• Aucun compte, aucune télémétrie, aucune clé d’API.</li>
                <li>• Export en JSON ou Markdown quand vous voulez : rien ne vous enferme.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Téléchargement */}
        <section id="telecharger" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20">
          <MemoryDownload />
        </section>

        {/* Club + Pro */}
        <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">La communauté</p>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">Accelerer.club</h2>
            <p className="text-[15px] leading-relaxed text-neutral-600">
              C’est dans le club qu’on parle de ces projets : agents IA, mémoire, home lab. On y partage
              nos installations, nos réglages et ce qui marche vraiment.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-900 bg-white p-6 sm:p-8">
            <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">Bientôt</p>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900">EA Memory Pro</h2>
            <ul className="mb-4 space-y-2 text-[15px] leading-relaxed text-neutral-600">
              <li>• Capture automatique en fin de session : plus besoin de dire « retiens ça ».</li>
              <li>• Plusieurs agents, des espaces séparés et un partage contrôlé.</li>
              <li>• Synchronisation chiffrée entre vos appareils.</li>
              <li>• Accès depuis ChatGPT et claude.ai, hébergement en Europe ou chez vous.</li>
            </ul>
            <p className="text-sm text-neutral-500">
              Vos souvenirs Lite passeront dans Pro tels quels. Inscrivez-vous ci-dessus pour être prévenu.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#001523]/10 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h2 className="mb-8 text-3xl font-semibold text-neutral-900">Questions fréquentes</h2>
            <div className="divide-y divide-neutral-200">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-neutral-900">
                    {f.q}
                    <span className="text-neutral-400 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale="fr" />
    </>
  )
}
