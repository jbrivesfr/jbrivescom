import type { Article, Comment } from './types.ts';

export const SITE_NAME = "jbrives.com";

const TOOL_IMAGES = {
    openai: "/images/tool_openai.jpg",
    python: "/images/tool_python.jpg",
    notion: "/images/tool_notion.jpg",
    make: "/images/tool_make.jpg",
    whatsapp: "/images/tool_whatsapp.jpg",
    cursor: "/images/tool_cursor.jpg"
};

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "mon-retour-10-ans-plus-tard",
    title: "10 ans plus tard : pourquoi je reviens (et pourquoi tout a changé)",
    excerpt: "Productivité, santé, et maintenant l'IA. Mon parcours depuis 10 ans et pourquoi j'ai décidé de relancer ce blog.",
    content: `
      <p class="mb-4 leading-relaxed">Salut, c'est JB.</p>
      <p class="mb-4 leading-relaxed">Ça fait 10 ans. Une décennie entière. Si vous étiez là à l'époque, vous vous souvenez peut-être de mes articles sur l'organisation, la méthode Pomodoro ou comment générer des revenus passifs. C'était une autre époque.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'illusion de la "Passive Income"</h2>
      <p class="mb-4 leading-relaxed">
        J'ai passé des années à poursuivre le rêve du "rentier". Ne plus travailler, laisser l'argent rentrer. Et vous savez quoi ? J'y suis arrivé. Mais j'ai découvert une vérité brutale : ne rien faire ne rend pas heureux. L'humain est fait pour créer, pour résoudre des problèmes.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le virage Santé</h2>
      <p class="mb-4 leading-relaxed">
        En parallèle, j'ai mené un combat personnel contre mon propre corps. J'ai exploré le jeûne intermittent, la nutrition métabolique, et j'ai compris que la productivité ne sert à rien sans l'énergie physique. La clarté mentale vient d'abord du ventre.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2025 : La révolution IA</h2>
      <p class="mb-4 leading-relaxed">
        Aujourd'hui, je reviens avec une nouvelle obsession : l'Automatisation par l'Intelligence Artificielle. Ce qui me prenait 1 heure me prend maintenant 1 minute. Je gère mon business depuis mon téléphone, via WhatsApp, en déléguant à des agents IA que j'ai codés moi-même.
      </p>
      <p class="mb-4 leading-relaxed">
        Ce blog n'est plus là pour vous vendre du rêve. Il est là pour vous montrer le futur. Je vais partager mes outils, mes scripts, et ma philosophie pour une vie "Active mais sans effort". Bienvenue dans la version 2.0.
      </p>
    `,
    author: "JB Rives",
    date: "15 Janvier 2026",
    readTime: "5 min",
    tags: ["Story", "Vision", "Comeback"],
    imageUrl: "/images/article_comeback.jpg",
    relatedIds: ["2", "3"],
    type: 'article'
  },
  {
    id: "2",
    slug: "pourquoi-jai-arrete-de-manger-le-matin",
    title: "Pourquoi j'ai arrêté de manger le matin (Fast & Focus)",
    excerpt: "Comment le jeûne intermittent a débloqué ma productivité et ma clarté mentale.",
    content: `
      <p class="mb-4 leading-relaxed">On nous a toujours dit que le petit-déjeuner était le repas le plus important de la journée. C'est faux. Pour moi, c'est le moment où je tuais ma productivité.</p>
      <p class="mb-4 leading-relaxed">En arrêtant de manger le matin, j'ai découvert un super-pouvoir : la clarté mentale constante.</p>
      
      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La biochimie de la faim</h2>
      <p class="mb-4 leading-relaxed">Quand vous mangez des glucides le matin, vous déclenchez un pic d'insuline. Deux heures plus tard ? Le crash. Vous avez faim, vous êtes mou. En jeûnant, votre corps passe en mode cétose légère. Votre cerveau tourne au "super-carburant".</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Mon protocole</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Café noir au réveil (parfois avec un peu de gras MCT).</li>
        <li>Travail profond de 8h à 13h.</li>
        <li>Premier repas à 13h (Protéines + Légumes).</li>
      </ul>
      <p class="mb-4 leading-relaxed">Essayez pendant 3 jours. Vous ne reviendrez pas en arrière.</p>
    `,
    author: "JB Rives",
    date: "20 Janvier 2026",
    readTime: "4 min",
    tags: ["Santé", "Jeûne", "Biohacking"],
    imageUrl: "/images/article_fasting.jpg",
    relatedIds: ["1", "4"],
    type: 'article'
  },
  {
    id: "3",
    slug: "ia-remplace-equipe",
    title: "Comment l'IA a remplacé mon équipe (et pourquoi c'est mieux)",
    excerpt: "Je ne gère plus d'humains, je gère des agents. Moins de stress, plus d'efficacité.",
    content: `
      <p class="mb-4 leading-relaxed">J'ai longtemps cru qu'il fallait "scaler" en embauchant. C'était l'enfer. Management, RH, réunions... Je passais mon temps à gérer des gens au lieu de créer.</p>
      
      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'ère des Agents IA</h2>
      <p class="mb-4 leading-relaxed">Aujourd'hui, j'ai une "équipe" de 10 agents IA. Ils travaillent 24/7. Ils ne se plaignent pas. Ils coûtent quelques centimes par jour.</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Un agent qui trie mes emails.</li>
        <li>Un agent qui rédige mes brouillons.</li>
        <li>Un agent qui fait ma veille concurrentielle.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le cerveau humain est le goulot d'étranglement</h2>
      <p class="mb-4 leading-relaxed">Notre cerveau peut générer 15 à 20 bonnes idées par jour. Mais l'exécution ? C'est lent. Avec l'IA, je peux exécuter 100 idées par jour. Le seul frein, c'est mon imagination.</p>
    `,
    author: "JB Rives",
    date: "25 Janvier 2026",
    readTime: "6 min",
    tags: ["IA", "Business", "Automatisation"],
    imageUrl: "/images/article_ai_team.jpg",
    relatedIds: ["1", "a1"],
    type: 'article'
  },
  {
    id: "4",
    slug: "cerveau-brouillard-solutions",
    title: "Brouillard mental : 3 solutions radicales",
    excerpt: "Vous vous sentez flou ? Lent ? Voici comment retrouver une clarté laser.",
    content: `
      <p class="mb-4 leading-relaxed">Le brouillard mental (brain fog) est le mal du siècle. Ce n'est pas de la fatigue, c'est de l'inflammation.</p>
      
      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">1. Coupez le sucre</h2>
      <p class="mb-4 leading-relaxed">Le sucre est neuro-inflammatoire. Point.</p>
      
      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2. Dormez dans le froid</h2>
      <p class="mb-4 leading-relaxed">La température idéale pour le cerveau est de 18°C. Ouvrez la fenêtre.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">3. Externalisez votre mémoire</h2>
      <p class="mb-4 leading-relaxed">Votre cerveau est fait pour avoir des idées, pas pour les retenir. Utilisez Notion ou un second cerveau numérique. Libérez de la RAM.</p>
    `,
    author: "JB Rives",
    date: "28 Janvier 2026",
    readTime: "3 min",
    tags: ["Santé", "Productivité", "Mental"],
    imageUrl: "/images/article_brainfog.jpg",
    relatedIds: ["2", "1"],
    type: 'article'
  }
];

export const AUTOMATIONS: Article[] = [
  {
    id: "a1",
    slug: "guide-agent-whatsapp",
    title: "Tuto : Créer son propre assistant IA sur WhatsApp",
    excerpt: "Arrêtez d'utiliser ChatGPT sur le web. Mettez-le dans votre poche, connecté à vos données.",
    content: "Dans ce guide, je vais vous montrer comment j'ai connecté OpenAI à mon WhatsApp personnel. Je lui envoie des notes vocales, il me répond avec des résumés, des tâches dans Notion, et même des blagues (il a mon sens de l'humour).",
    author: "JB Rives",
    date: "01 Février 2026",
    readTime: "15 min",
    tags: ["Guide", "Code", "WhatsApp"],
    imageUrl: "/images/guide_whatsapp_bot.jpg",
    relatedIds: ["3"],
    type: 'automation',
    ingredients: [
        { name: "Compte OpenAI (API Key)", quantity: "1", imageUrl: TOOL_IMAGES.openai },
        { name: "Compte Twilio", quantity: "1", imageUrl: TOOL_IMAGES.whatsapp },
        { name: "Python (ou Replit)", quantity: "Base", imageUrl: TOOL_IMAGES.python },
        { name: "Smartphone", quantity: "1", imageUrl: TOOL_IMAGES.whatsapp }
    ],
    instructions: [
        { step: 1, text: "Créez un compte sur Twilio et obtenez un numéro Sandbox WhatsApp." },
        { step: 2, text: "Générez une clé API sur OpenAI Platform." },
        { step: 3, text: "Clonez mon script Python de base (lien GitHub en bas)." },
        { step: 4, text: "Configurez le Webhook Twilio vers votre serveur." },
        { step: 5, text: "Envoyez 'Salut' à votre bot !" }
    ]
  },
  {
    id: "a2",
    slug: "automatiser-veille-info",
    title: "Automatiser sa veille d'actualité avec Make et GPT",
    excerpt: "Ne lisez plus les news. Laissez l'IA le faire pour vous et ne gardez que l'essentiel.",
    content: "Je ne scrolle plus jamais Twitter ni les sites d'actus. J'ai un système qui scanne mes sources préférées (RSS), envoie le contenu à GPT-4 pour un résumé 'style JB', et me l'envoie chaque matin à 8h dans un digest Telegram.",
    author: "JB Rives",
    date: "05 Février 2026",
    readTime: "20 min",
    tags: ["No-Code", "Make", "Productivité"],
    imageUrl: "/images/guide_make_news.jpg",
    relatedIds: ["3", "a1"],
    type: 'automation',
    ingredients: [
        { name: "Compte Make.com", quantity: "1", imageUrl: TOOL_IMAGES.make },
        { name: "Compte OpenAI", quantity: "1", imageUrl: TOOL_IMAGES.openai },
        { name: "Telegram Bot", quantity: "1", imageUrl: TOOL_IMAGES.whatsapp }, // Using whatsapp img as placeholder for messaging
        { name: "Flux RSS", quantity: "Liste", imageUrl: TOOL_IMAGES.notion }
    ],
    instructions: [
        { step: 1, text: "Créez un scénario sur Make qui se déclenche tous les matins." },
        { step: 2, text: "Ajoutez un module 'RSS - Watch Items'." },
        { step: 3, text: "Connectez un module OpenAI 'Completion' pour résumer chaque article." },
        { step: 4, text: "Ajoutez un module 'Text Aggregator' pour grouper les résumés." },
        { step: 5, text: "Envoyez le tout via le module Telegram Bot." }
    ]
  }
];

// Placeholder for comments to avoid breaking imports if used elsewhere
export const MOCK_COMMENTS: Comment[] = [
  {
    id: "c1",
    author: "Lucas",
    date: "Il y a 2 heures",
    content: "Incroyable l'astuce WhatsApp, je viens de le mettre en place !",
    avatarUrl: "/images/comment_c1.jpg"
  }
];

// Merging both for the 'find' logic in Article page, but Article page logic needs update if using separate lists
export const RECIPES = AUTOMATIONS; // Backward compatibility alias
