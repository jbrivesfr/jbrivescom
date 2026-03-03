export type ArticleType = "article" | "automation"

export interface Article {
  slug: string
  type: ArticleType
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

export const articlesFR: Article[] = [
  {
    slug: "mon-retour-10-ans-plus-tard",
    type: "article",
    title: "10 ans plus tard : pourquoi je reviens (et pourquoi tout a changé)",
    excerpt:
      "Productivité, santé, et maintenant la technologie. Mon parcours depuis 10 ans et pourquoi j'ai décidé de relancer ce blog.",
    date: "15 Janvier 2026",
    readTime: "5 min",
    tags: ["Story", "Vision", "Comeback"],
    content: `<p>Salut, c'est JB.</p>
<p>Ça fait 10 ans. Une décennie entière. Si vous étiez là à l'époque, vous vous souvenez peut-être de mes articles sur l'organisation, la méthode Pomodoro ou comment générer des revenus passifs. C'était une autre époque.</p>
<h2>L'illusion de la "Passive Income"</h2>
<p>J'ai passé des années à poursuivre le rêve du "rentier". Ne plus travailler, laisser l'argent rentrer. Et vous savez quoi ? J'y suis arrivé. Mais j'ai découvert une vérité brutale : ne rien faire ne rend pas heureux. L'humain est fait pour créer, pour résoudre des problèmes.</p>
<h2>Le virage Santé</h2>
<p>En parallèle, j'ai mené un combat personnel contre mon propre corps. J'ai exploré le jeûne intermittent, la nutrition métabolique, et j'ai compris que la productivité ne sert à rien sans l'énergie physique. La clarté mentale vient d'abord du ventre.</p>
<h2>2025 : La révolution technologique</h2>
<p>Aujourd'hui, je reviens avec une nouvelle obsession : l'Automatisation par la Technologie. Ce qui me prenait 1 heure me prend maintenant 1 minute. Je gère mon business depuis mon téléphone, via WhatsApp, en déléguant à des agents technologiques que j'ai codés moi-même. Ce blog n'est plus là pour vous vendre du rêve. Il est là pour vous montrer le futur. Je vais partager mes outils, mes scripts, et ma philosophie pour une vie "Active mais sans effort". Bienvenue dans la version 2.0.</p>`,
  },
  {
    slug: "pourquoi-jai-arrete-de-manger-le-matin",
    type: "article",
    title: "Pourquoi j'ai arrêté de manger le matin (Fast & Focus)",
    excerpt: "Comment le jeûne intermittent a débloqué ma productivité et ma clarté mentale.",
    date: "20 Janvier 2026",
    readTime: "4 min",
    tags: ["Santé", "Jeûne", "Biohacking"],
    content: `<p>On nous a toujours dit que le petit-déjeuner était le repas le plus important de la journée. C'est faux. Pour moi, c'est le moment où je tuais ma productivité.</p>
<p>En arrêtant de manger le matin, j'ai découvert un super-pouvoir : la clarté mentale constante.</p>
<h2>La biochimie de la faim</h2>
<p>Quand vous mangez des glucides le matin, vous déclenchez un pic d'insuline. Deux heures plus tard ? Le crash. Vous avez faim, vous êtes mou. En jeûnant, votre corps passe en mode cétose légère. Votre cerveau tourne au "super-carburant".</p>
<h2>Mon protocole</h2>
<ul><li>Café noir au réveil (parfois avec un peu de gras MCT).</li><li>Travail profond de 8h à 13h.</li><li>Premier repas à 13h (Protéines + Légumes).</li></ul>
<p>Essayez pendant 3 jours. Vous ne reviendrez pas en arrière.</p>`,
  },
  {
    slug: "ia-remplace-equipe",
    type: "article",
    title: "Comment la technologie a remplacé mon équipe",
    excerpt:
      "Ce qui prenait 3 personnes et une semaine, je le fais maintenant seul en 2 heures. Voici comment.",
    date: "25 Janvier 2026",
    readTime: "6 min",
    tags: ["Technologie", "Business", "Automatisation"],
    content: `<p>Il y a 18 mois, j'avais une équipe : un community manager, un rédacteur, un développeur freelance. Aujourd'hui ? Je travaille seul. Et je produis plus.</p>
<h2>Le déclic</h2>
<p>Tout a changé quand j'ai compris que les agents IA n'étaient pas des outils — c'étaient des collaborateurs. Pas des chatbots. Des entités avec de la mémoire, des objectifs, et la capacité d'agir dans le monde réel.</p>
<h2>Ce que mes agents font aujourd'hui</h2>
<ul><li>Gestion des emails entrants et réponses aux clients</li><li>Modération et animation de la communauté Club Fasting</li><li>Rédaction d'articles SEO pour keto.fr</li><li>Veille concurrentielle et analyse de tendances</li><li>Gestion de mon calendrier et rappels prioritaires</li></ul>
<h2>Comment je les ai construits</h2>
<p>Pas de magie. Du code, des prompts bien pensés, et une architecture qui leur donne de la mémoire et des outils. Le stack : Claude (Anthropic) comme cerveau, des scripts shell pour les actions, et un système de mémoire persistent basé sur des fichiers markdown.</p>
<h2>Ce que ça m'a appris</h2>
<p>La vraie valeur n'est pas dans l'outil — elle est dans la façon dont vous l'intégrez à votre workflow. Un agent bien configuré vaut une équipe entière. Mais ça demande du temps, de la réflexion, et beaucoup d'itérations.</p>
<p>Dans les prochains articles, je vais vous montrer exactement comment faire. Étape par étape.</p>`,
  },
  {
    slug: "cerveau-brouillard-solutions",
    type: "article",
    title: "Brouillard mental : 3 solutions radicales",
    excerpt:
      "Vous vous sentez flou, lent, incapable de vous concentrer ? Ce n'est pas dans votre tête — enfin si, justement. Voici 3 interventions qui changent tout.",
    date: "28 Janvier 2026",
    readTime: "3 min",
    tags: ["Santé", "Productivité", "Mental"],
    content: `<p>Le brouillard mental (brain fog) touche des millions de personnes. Difficulté à se concentrer, pensées floues, manque d'énergie cognitive. La bonne nouvelle : il y a des solutions concrètes, biologiques, et immédiates.</p>
<h2>1. Coupez le sucre — votre cerveau est en feu</h2>
<p>Le sucre raffiné est neuro-inflammatoire. Il provoque des pics glycémiques qui créent de l'inflammation dans le cerveau — littéralement. Chaque fois que vous mangez du pain blanc, des sodas ou des sucreries, vous allumez un feu dans votre cortex préfrontal. La zone qui gère la concentration, la prise de décision, la volonté.</p>
<p>Solution radicale : éliminez le sucre ajouté pendant 7 jours. Observez. La plupart des gens rapportent une clarté mentale nette dès le 3ème jour.</p>
<h2>2. Dormez dans le froid — 18°C, pas plus</h2>
<p>La température idéale pour un sommeil réparateur est de 18°C. Au-dessus, votre cerveau ne descend pas assez profondément dans les phases de sommeil lent, qui sont celles où il "nettoie" ses déchets métaboliques via le système glymphatique. Un cerveau mal nettoyé la nuit = brouillard la journée.</p>
<p>Solution : baissez votre thermostat, ouvrez une fenêtre, ou investissez dans un matelas à régulation thermique. C'est l'un des ROI santé les plus élevés qui existent.</p>
<h2>3. Externalisez votre mémoire</h2>
<p>Votre cerveau n'est pas fait pour stocker des listes, des tâches et des informations. Il est fait pour résoudre des problèmes. Chaque chose que vous essayez de "retenir" consomme de la bande passante cognitive et génère de l'anxiété de fond.</p>
<p>Solution : créez un second cerveau numérique (Notion, Obsidian, peu importe l'outil). Capturez tout, faites confiance au système. Vous libérerez une quantité massive de ressources mentales pour ce qui compte vraiment.</p>
<p>Ces 3 changements sont simples. Ils ne coûtent presque rien. Mais leur impact combiné est radical. Commencez aujourd'hui.</p>`,
  },
  {
    slug: "guide-agent-whatsapp",
    type: "automation",
    title: "Tuto : Créer son propre assistant technologique sur WhatsApp",
    excerpt:
      "Comment j'ai construit un assistant IA opérationnel sur WhatsApp — de zéro, sans abonnement SaaS. Architecture, code, et leçons apprises.",
    date: "01 Février 2026",
    readTime: "15 min",
    tags: ["Guide", "Code", "WhatsApp"],
    content: `<p>Ce guide est le résultat de plusieurs mois d'expérimentation. L'objectif : avoir un assistant IA disponible 24h/24 directement dans WhatsApp, capable de répondre à mes questions, gérer mes tâches, et interagir avec mes outils métier. Sans payer un SaaS à $200/mois.</p>
<h2>Pourquoi WhatsApp ?</h2>
<p>C'est l'interface la plus naturelle qui existe. Pas d'app à ouvrir, pas de connexion. Un message, une réponse. Je l'utilise déjà 50 fois par jour — autant que mon assistant vive là aussi.</p>
<h2>L'architecture en résumé</h2>
<ul>
  <li><strong>Couche messagerie :</strong> Baileys (bibliothèque Node.js open-source pour WhatsApp Web)</li>
  <li><strong>Cerveau IA :</strong> Claude (Anthropic) via API — raisonnement, mémoire contextuelle, rédaction</li>
  <li><strong>Mémoire persistante :</strong> Fichiers Markdown + recherche sémantique locale</li>
  <li><strong>Actions :</strong> Scripts shell pour interagir avec les APIs (calendrier, email, web)</li>
  <li><strong>Hébergement :</strong> Un simple Mac mini allumé en permanence</li>
</ul>
<h2>Les étapes clés</h2>
<ol>
  <li>Connecter Baileys à votre compte WhatsApp (scan QR code)</li>
  <li>Mettre en place le routeur de messages (qui filtre, qui répond)</li>
  <li>Intégrer l'API Claude avec un système de prompt bien conçu</li>
  <li>Ajouter la mémoire : chaque conversation est résumée et stockée</li>
  <li>Brancher les outils : ce que votre assistant peut faire dans le monde réel</li>
</ol>
<h2>Ce que ça donne en pratique</h2>
<p>Je lui envoie "Rappelle-moi dans 20 min d'appeler Nina" — il le fait. Je lui envoie un lien YouTube — il me résume la vidéo. Je lui pose une question sur mon business — il cherche dans sa mémoire et répond avec contexte.</p>
<p><strong>Le guide complet</strong> avec le code source commenté, les prompts exacts, et la configuration étape par étape sera publié prochainement. Inscrivez-vous pour être notifié en premier.</p>`,
  },
  {
    slug: "automatiser-veille-info",
    type: "automation",
    title: "Automatiser sa veille d'actualité avec Make et GPT",
    excerpt:
      "Un système no-code qui surveille vos sources, filtre le bruit, et vous livre un briefing quotidien personnalisé. Zéro effort après setup.",
    date: "05 Février 2026",
    readTime: "20 min",
    tags: ["No-Code", "Make", "Productivité"],
    content: `<p>Je lisais 1h de news par jour. Pour en retenir 5%. La majorité était du bruit. Aujourd'hui, je reçois chaque matin un briefing de 3 minutes, ultra-ciblé, sur les sujets qui comptent vraiment pour mon business. C'est Make + GPT qui font le travail.</p>
<h2>Le problème avec la veille traditionnelle</h2>
<p>RSS, newsletters, Twitter, LinkedIn — chaque source génère du volume. Le cerveau humain n'est pas équipé pour filtrer 200 articles par jour et en extraire l'essentiel. On finit par tout ignorer ou tout lire, les deux sont des échecs.</p>
<h2>L'architecture du système</h2>
<ul>
  <li><strong>Sources :</strong> Flux RSS de blogs ciblés + recherches Google Alertes + fils Twitter/X</li>
  <li><strong>Agrégateur :</strong> Make (ex-Integromat) — récupère et consolide les nouvelles chaque matin à 6h</li>
  <li><strong>Filtre IA :</strong> GPT-4 analyse chaque article, score de pertinence 1-10, résumé en 2 phrases</li>
  <li><strong>Livraison :</strong> Seuls les articles score ≥7 arrivent dans mon briefing WhatsApp</li>
</ul>
<h2>Les scénarios Make</h2>
<p>Trois scénarios enchaînés : (1) Collecte — récupère les articles des dernières 24h depuis toutes les sources. (2) Analyse — envoie chaque titre + résumé à GPT avec un prompt de scoring. (3) Synthèse — compile les articles retenus en un briefing formaté et l'envoie via WhatsApp.</p>
<h2>Le prompt de scoring</h2>
<p>C'est là que tout se joue. Un bon prompt de filtrage doit refléter votre contexte métier précis — pas un prompt générique "est-ce intéressant". Le mien contient mes thématiques prioritaires, mes projets en cours, et une liste de signaux à détecter (nouvelles concurrentes, opportunités réglementaires, tendances émergentes).</p>
<h2>Résultats après 3 mois</h2>
<p>Temps de veille : de 60 min à 8 min par jour. Qualité de l'information retenue : bien supérieure. Stress de "rater quelque chose" : zéro.</p>
<p><strong>Le tutoriel complet</strong> avec les scénarios Make exportables et le prompt de scoring sera disponible prochainement. Rejoignez la liste pour y accéder en avant-première.</p>`,
  },
]

export const articlesEN: Article[] = [
  {
    slug: "mon-retour-10-ans-plus-tard",
    type: "article",
    title: "10 years later: why I'm back (and why everything has changed)",
    excerpt:
      "Productivity, health, and now technology. My journey over 10 years and why I decided to relaunch this blog.",
    date: "January 15, 2026",
    readTime: "5 min",
    tags: ["Story", "Vision", "Comeback"],
    content: `<p>Hey, it's JB.</p>
<p>It's been 10 years. A full decade. If you were around back then, you might remember my articles on organization, the Pomodoro method, or how to generate passive income. That was a different era.</p>
<h2>The "Passive Income" Illusion</h2>
<p>I spent years chasing the dream of living off passive income — not having to work, just letting the money flow in. And you know what? I actually got there. But I discovered a brutal truth: doing nothing doesn't make you happy. Humans are built to create, to solve problems.</p>
<h2>The Health Pivot</h2>
<p>At the same time, I was fighting a personal battle with my own body. I explored intermittent fasting, metabolic nutrition, and I realized that productivity means nothing without physical energy. Mental clarity starts in the gut.</p>
<h2>2025: The Technology Revolution</h2>
<p>Today, I'm back with a new obsession: Automation through Technology. What used to take me 1 hour now takes 1 minute. I run my business from my phone, via WhatsApp, delegating to AI agents I coded myself. This blog is no longer here to sell you dreams. It's here to show you the future. I'll be sharing my tools, my scripts, and my philosophy for a life that's "active but effortless." Welcome to version 2.0.</p>`,
  },
  {
    slug: "pourquoi-jai-arrete-de-manger-le-matin",
    type: "article",
    title: "Why I stopped eating breakfast (Fast & Focus)",
    excerpt: "How intermittent fasting unlocked my productivity and mental clarity.",
    date: "January 20, 2026",
    readTime: "4 min",
    tags: ["Health", "Fasting", "Biohacking"],
    content: `<p>We've always been told that breakfast is the most important meal of the day. That's wrong. For me, it was the moment I was killing my productivity.</p>
<p>By stopping eating in the morning, I discovered a superpower: constant mental clarity.</p>
<h2>The Biochemistry of Hunger</h2>
<p>When you eat carbs in the morning, you trigger an insulin spike. Two hours later? The crash. You're hungry, you're sluggish. When you fast, your body enters a light state of ketosis. Your brain runs on "super fuel."</p>
<h2>My Protocol</h2>
<ul><li>Black coffee upon waking (sometimes with a little MCT fat).</li><li>Deep work from 8am to 1pm.</li><li>First meal at 1pm (Protein + Vegetables).</li></ul>
<p>Try it for 3 days. You won't go back.</p>`,
  },
  {
    slug: "ia-remplace-equipe",
    type: "article",
    title: "How technology replaced my team",
    excerpt: "What used to take 3 people and a week, I now do alone in 2 hours. Here's how.",
    date: "January 25, 2026",
    readTime: "6 min",
    tags: ["Technology", "Business", "Automation"],
    content: `<p>18 months ago, I had a team: a community manager, a writer, a freelance developer. Today? I work alone. And I produce more.</p>
<h2>The Turning Point</h2>
<p>Everything changed when I understood that AI agents weren't tools — they were collaborators. Not chatbots. Entities with memory, objectives, and the ability to act in the real world.</p>
<h2>What My Agents Do Today</h2>
<ul><li>Managing incoming emails and responding to clients</li><li>Moderating and animating the Club Fasting community</li><li>Writing SEO articles for keto.fr</li><li>Competitive monitoring and trend analysis</li><li>Managing my calendar and priority reminders</li></ul>
<h2>How I Built Them</h2>
<p>No magic. Code, well-crafted prompts, and an architecture that gives them memory and tools. The stack: Claude (Anthropic) as the brain, shell scripts for actions, and a persistent memory system based on markdown files.</p>
<h2>What It Taught Me</h2>
<p>The real value isn't in the tool — it's in how you integrate it into your workflow. A well-configured agent is worth an entire team. But it takes time, reflection, and a lot of iteration.</p>
<p>In upcoming articles, I'll show you exactly how to do it. Step by step.</p>`,
  },
  {
    slug: "cerveau-brouillard-solutions",
    type: "article",
    title: "Brain fog: 3 radical solutions",
    excerpt:
      "Feeling foggy, slow, unable to focus? It's not in your head — well, actually it is. Here are 3 interventions that change everything.",
    date: "January 28, 2026",
    readTime: "3 min",
    tags: ["Health", "Productivity", "Mental"],
    content: `<p>Brain fog affects millions of people. Difficulty concentrating, fuzzy thinking, lack of cognitive energy. The good news: there are concrete, biological, and immediate solutions.</p>
<h2>1. Cut the sugar — your brain is on fire</h2>
<p>Refined sugar is neuro-inflammatory. It causes blood sugar spikes that create inflammation in the brain — literally. Every time you eat white bread, soda, or sweets, you're lighting a fire in your prefrontal cortex. The area that manages focus, decision-making, and willpower.</p>
<p>Radical solution: eliminate added sugar for 7 days. Observe. Most people report noticeably sharper mental clarity by day 3.</p>
<h2>2. Sleep in the cold — 18°C (65°F), no warmer</h2>
<p>The ideal temperature for restorative sleep is 18°C. Above that, your brain doesn't descend deeply enough into slow-wave sleep phases — the phases where it "cleans" its metabolic waste via the glymphatic system. A poorly cleaned brain at night means fog during the day.</p>
<p>Solution: lower your thermostat, crack a window, or invest in a temperature-regulating mattress. It's one of the highest health ROI investments that exists.</p>
<h2>3. Externalize your memory</h2>
<p>Your brain isn't built to store lists, tasks, and information. It's built to solve problems. Every thing you try to "remember" consumes cognitive bandwidth and generates background anxiety.</p>
<p>Solution: build a digital second brain (Notion, Obsidian, whatever the tool). Capture everything, trust the system. You'll free up a massive amount of mental resources for what actually matters.</p>
<p>These 3 changes are simple. They cost almost nothing. But their combined impact is radical. Start today.</p>`,
  },
  {
    slug: "guide-agent-whatsapp",
    type: "automation",
    title: "Tutorial: Building your own AI assistant on WhatsApp",
    excerpt:
      "How I built a fully operational AI assistant on WhatsApp — from scratch, without a SaaS subscription. Architecture, code, and lessons learned.",
    date: "February 1, 2026",
    readTime: "15 min",
    tags: ["Guide", "Code", "WhatsApp"],
    content: `<p>This guide is the result of several months of experimentation. The goal: have an AI assistant available 24/7 directly in WhatsApp, capable of answering my questions, managing my tasks, and interacting with my business tools. Without paying $200/month for a SaaS.</p>
<h2>Why WhatsApp?</h2>
<p>It's the most natural interface that exists. No app to open, no login. One message, one reply. I already use it 50 times a day — so my assistant should live there too.</p>
<h2>The Architecture in a Nutshell</h2>
<ul>
  <li><strong>Messaging layer:</strong> Baileys (open-source Node.js library for WhatsApp Web)</li>
  <li><strong>AI brain:</strong> Claude (Anthropic) via API — reasoning, contextual memory, writing</li>
  <li><strong>Persistent memory:</strong> Markdown files + local semantic search</li>
  <li><strong>Actions:</strong> Shell scripts to interact with APIs (calendar, email, web)</li>
  <li><strong>Hosting:</strong> A simple Mac mini running 24/7</li>
</ul>
<h2>The Key Steps</h2>
<ol>
  <li>Connect Baileys to your WhatsApp account (QR code scan)</li>
  <li>Set up the message router (what gets filtered, what gets a reply)</li>
  <li>Integrate the Claude API with a well-designed system prompt</li>
  <li>Add memory: each conversation is summarized and stored</li>
  <li>Plug in tools: what your assistant can actually do in the real world</li>
</ol>
<h2>What It Looks Like in Practice</h2>
<p>I send "Remind me in 20 minutes to call Nina" — it does it. I send a YouTube link — it summarizes the video. I ask a question about my business — it searches its memory and replies with context.</p>
<p><strong>The full guide</strong> with commented source code, exact prompts, and step-by-step configuration is coming soon. Sign up to be notified first.</p>`,
  },
  {
    slug: "automatiser-veille-info",
    type: "automation",
    title: "Automating your news monitoring with Make and GPT",
    excerpt:
      "A no-code system that monitors your sources, filters the noise, and delivers a personalized daily briefing. Zero effort after setup.",
    date: "February 5, 2026",
    readTime: "20 min",
    tags: ["No-Code", "Make", "Productivity"],
    content: `<p>I used to spend 1 hour reading news every day. To retain 5% of it. Most of it was noise. Today, I receive a 3-minute ultra-targeted briefing every morning on topics that actually matter to my business. Make and GPT do the work.</p>
<h2>The Problem with Traditional News Monitoring</h2>
<p>RSS, newsletters, Twitter, LinkedIn — every source generates volume. The human brain isn't equipped to filter 200 articles per day and extract the essentials. You end up ignoring everything or reading everything — both are failures.</p>
<h2>The System Architecture</h2>
<ul>
  <li><strong>Sources:</strong> Targeted RSS feeds + Google Alerts + Twitter/X feeds</li>
  <li><strong>Aggregator:</strong> Make (formerly Integromat) — fetches and consolidates news every morning at 6am</li>
  <li><strong>AI filter:</strong> GPT-4 analyzes each article, relevance score 1-10, summary in 2 sentences</li>
  <li><strong>Delivery:</strong> Only articles scoring ≥7 land in my WhatsApp briefing</li>
</ul>
<h2>The Make Scenarios</h2>
<p>Three chained scenarios: (1) Collect — fetches articles from the last 24 hours across all sources. (2) Analyze — sends each title + summary to GPT with a scoring prompt. (3) Synthesize — compiles the retained articles into a formatted briefing and sends it via WhatsApp.</p>
<h2>The Scoring Prompt</h2>
<p>This is where everything plays out. A good filtering prompt must reflect your precise business context — not a generic "is this interesting" prompt. Mine contains my priority topics, my current projects, and a list of signals to detect (competitor news, regulatory opportunities, emerging trends).</p>
<h2>Results After 3 Months</h2>
<p>Monitoring time: from 60 minutes to 8 minutes per day. Quality of information retained: significantly higher. Fear of missing something: zero.</p>
<p><strong>The full tutorial</strong> with exportable Make scenarios and the scoring prompt will be available soon. Join the list to access it first.</p>`,
  },
]

export function getArticleBySlug(slug: string, locale: "fr" | "en"): Article | undefined {
  const articles = locale === "fr" ? articlesFR : articlesEN
  return articles.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return articlesFR.map((a) => a.slug)
}
