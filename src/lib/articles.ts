export interface Article {
  slug: string
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
    title: "Comment j'ai remplacé mon équipe avec des agents IA",
    excerpt:
      "Ce qui prenait 3 personnes et une semaine, je le fais maintenant seul en 2 heures. Voici comment.",
    date: "28 Janvier 2026",
    readTime: "6 min",
    tags: ["IA", "Automatisation", "Productivité"],
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
]

export const articlesEN: Article[] = [
  {
    slug: "mon-retour-10-ans-plus-tard",
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
    title: "How I replaced my team with AI agents",
    excerpt: "What used to take 3 people and a week, I now do alone in 2 hours. Here's how.",
    date: "January 28, 2026",
    readTime: "6 min",
    tags: ["AI", "Automation", "Productivity"],
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
]

export function getArticleBySlug(slug: string, locale: "fr" | "en"): Article | undefined {
  const articles = locale === "fr" ? articlesFR : articlesEN
  return articles.find((a) => a.slug === slug)
}

export function getAllSlugs(): string[] {
  return articlesFR.map((a) => a.slug)
}
