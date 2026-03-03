export type Locale = 'fr' | 'en'

export const translations = {
  fr: {
    // Nav
    nav: {
      home: 'Accueil',
      about: 'À propos',
      books: 'Livres',
      blog: 'Blog',
      contact: 'Contact',
      langSwitch: 'EN',
      langSwitchHref: '/en',
    },
    // Hero
    hero: {
      name: 'JB Rives',
      subtitle: 'Auteur • Créateur • Stratège',
      intro:
        "J'ai perdu 20 kilos avec le jeûne intermittent, j'ai écrit les livres dessus, j'ai créé une communauté de 450\u00a0000 personnes sur YouTube — et maintenant j'aide les entrepreneurs à faire pareil dans leur domaine\u00a0: aller vite, aller loin, avec les bons outils.",
      cta: 'Discutons',
    },
    // Story
    story: {
      heading: 'Mon histoire',
      body: "Après avoir pris 20 kilos et essayé beaucoup de méthodes pour les perdre, j'en ai eu assez et décidé de maigrir pour de bon. J'ai passé des années à lire les études sur le sujet et à expérimenter pour trouver la méthode qui marche vraiment, définitivement. Quand j'ai découvert le Fasting, j'ai commencé à partager mon expérience sur Fasting.fr, devenu rapidement la référence sur le jeûne intermittent, suivi par des milliers de lecteurs.",
      attribution: '– JB Rives, auteur du Fasting',
      imgAlt: 'JB Rives – transformation avant/après',
    },
    // Books
    books: {
      heading: 'Mes livres',
      book1: {
        title: 'Le Fasting',
        description:
          'La méthode de jeûne intermittent pour perdre du poids, booster votre énergie et prolonger votre espérance de vie.',
        rating: '4,3',
        reviews: '2\u00a0437 évaluations',
        cta: 'Voir sur Amazon',
        imgAlt: 'Couverture du livre Le Fasting par JB Rives',
      },
      book2: {
        title: 'Gras du Ventre\u00a0: La Solution',
        description:
          'Le guide complet pour perdre la graisse abdominale et retrouver un ventre plat.',
        rating: '4,4',
        reviews: '103 évaluations',
        cta: 'Voir sur Amazon',
        imgAlt: 'Couverture du livre Gras du Ventre par JB Rives',
      },
    },
    // YouTube
    youtube: {
      heading: 'La communauté YouTube',
      stat: '+\u00a0de 450\u00a0000 abonnés',
      body: 'Rejoignez la communauté @lefasting — des vidéos hebdomadaires sur le jeûne, la nutrition, et la performance.',
      cta: 'Voir la chaîne',
    },
    // Services
    services: {
      heading: 'Ce que je fais',
      subtitle: "J'aide les créateurs et entrepreneurs à aller plus loin, plus vite.",
      items: [
        {
          icon: '🎯',
          title: 'Stratégie & Personal Branding',
          description: 'Définir votre positionnement, votre message, et votre audience cible.',
        },
        {
          icon: '🎬',
          title: 'Production de Contenu',
          description: 'YouTube, articles, réseaux sociaux — créer du contenu qui convertit.',
        },
        {
          icon: '⚡',
          title: 'Efficacité Personnelle',
          description: 'Systèmes, routines et outils pour être 10x plus productif.',
        },
        {
          icon: '🤖',
          title: 'Agents IA & Automatisation',
          description: "J'automatise votre business avec des agents IA — comme je l'ai fait pour le mien.",
        },
      ],
    },
    // Contact
    contact: {
      heading: 'Discutons',
      body: 'Vous avez un projet\u00a0? Une question\u00a0? Je réponds à tout le monde.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      success: 'Merci\u00a0! Je vous répondrai sous 48h.',
      whatsapp: 'Ou directement sur WhatsApp',
    },
    // Footer
    footer: {
      tagline: 'Auteur, Créateur & Stratège Digital',
      rights: '© 2024 JB Rives. Tous droits réservés.',
    },
    // About page
    about: {
      metaTitle: 'À propos de JB Rives — Auteur du Fasting',
      metaDesc:
        "L'histoire de JB Rives\u00a0: de 20 kilos en trop à auteur bestseller, créateur YouTube 450K abonnés, et entrepreneur digital.",
      heading: 'À propos',
      tagline: 'De 20 kilos en trop à auteur, créateur et stratège digital.',
      body: [
        "Tout a commencé par une prise de poids embarrassante et une frustration profonde. Après avoir essayé régimes, salles de sport et toutes sortes de méthodes, j'en ai eu assez. J'ai décidé d'aller chercher la vérité là où elle se trouve\u00a0: dans la recherche scientifique.",
        "Des années d'expérimentation plus tard, j'ai découvert le jeûne intermittent. Non pas comme un «\u00a0régime\u00a0» de plus, mais comme un changement de paradigme total sur la façon dont notre corps utilise l'énergie.",
        "J'ai créé Fasting.fr pour documenter ce voyage. Ce qui a commencé comme un blog personnel est devenu la référence française sur le jeûne intermittent — lu par des millions de personnes.",
        "Ensuite sont venus les livres\u00a0: \u00ab\u00a0Le Fasting\u00a0\u00bb (4,3★ · 2\u00a0437 avis) et \u00ab\u00a0Gras du Ventre\u00a0\u00bb (4,4★ · 103 avis). Puis la chaîne YouTube @lefasting, aujourd'hui suivie par plus de 450\u00a0000 personnes.",
        "Aujourd'hui, j'applique cette même philosophie — expérimenter, documenter, partager — à d'autres domaines\u00a0: la stratégie digitale, la création de contenu, et les agents IA. Je construis des systèmes qui fonctionnent sans effort constant. Et j'aide d'autres créateurs et entrepreneurs à faire pareil.",
        "Ma philosophie\u00a0: \u00ab\u00a0Actif mais sans effort\u00a0\u00bb — travailler plus intelligemment, pas plus dur.",
      ],
      highlights: [
        { icon: '📚', label: '2 livres publiés', sub: 'Bestsellers sur Amazon FR' },
        { icon: '🎥', label: '450K abonnés YouTube', sub: '@lefasting' },
        { icon: '🌐', label: 'Fasting.fr', sub: 'Référence française du jeûne' },
        { icon: '🤖', label: 'Agents IA', sub: 'Business automatisé' },
      ],
    },
  },

  en: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About',
      books: 'Books',
      blog: 'Blog',
      contact: 'Contact',
      langSwitch: 'FR',
      langSwitchHref: '/',
    },
    // Hero
    hero: {
      name: 'JB Rives',
      subtitle: 'Author • Creator • Strategist',
      intro:
        "I lost 20kg with intermittent fasting, wrote the books, built a 450K YouTube community — now I help entrepreneurs do the same in their field: move fast, go far, with the right tools.",
      cta: "Let's Talk",
    },
    // Story
    story: {
      heading: 'My Story',
      body: 'After gaining 20kg and trying every method out there, I got serious. Years of research and experimentation led me to intermittent fasting. I started sharing on Fasting.fr, which quickly became the go-to reference in France, followed by thousands.',
      attribution: '– JB Rives, author of Le Fasting',
      imgAlt: 'JB Rives – before/after transformation',
    },
    // Books
    books: {
      heading: 'My Books',
      book1: {
        title: 'Le Fasting',
        description:
          'The intermittent fasting method to lose weight, boost energy and extend your lifespan.',
        rating: '4.3',
        reviews: '2,437 ratings',
        cta: 'View on Amazon',
        imgAlt: 'Le Fasting book cover by JB Rives',
      },
      book2: {
        title: 'Gras du Ventre: La Solution',
        description: 'The complete guide to losing belly fat and getting a flat stomach.',
        rating: '4.4',
        reviews: '103 ratings',
        cta: 'View on Amazon',
        imgAlt: 'Gras du Ventre book cover by JB Rives',
      },
    },
    // YouTube
    youtube: {
      heading: 'The YouTube Community',
      stat: '450K+ subscribers',
      body: 'Join the @lefasting community — weekly videos on fasting, nutrition and performance.',
      cta: 'Watch the Channel',
    },
    // Services
    services: {
      heading: 'What I Do',
      subtitle: 'I help creators and entrepreneurs go further, faster.',
      items: [
        {
          icon: '🎯',
          title: 'Strategy & Personal Branding',
          description: 'Define your positioning, message, and target audience.',
        },
        {
          icon: '🎬',
          title: 'Content Production',
          description: 'YouTube, articles, social — creating content that converts.',
        },
        {
          icon: '⚡',
          title: 'Personal Efficiency',
          description: 'Systems, routines and tools to be 10x more productive.',
        },
        {
          icon: '🤖',
          title: 'AI Agents & Automation',
          description: 'I automate your business with AI agents — exactly like I did with mine.',
        },
      ],
    },
    // Contact
    contact: {
      heading: "Let's Talk",
      body: 'Got a project? A question? I reply to everyone.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      success: "Thanks! I'll reply within 48h.",
      whatsapp: 'Or directly on WhatsApp',
    },
    // Footer
    footer: {
      tagline: 'Author, Creator & Digital Strategist',
      rights: '© 2024 JB Rives. All rights reserved.',
    },
    // About page
    about: {
      metaTitle: 'About JB Rives — Author of Le Fasting',
      metaDesc:
        'The story of JB Rives: from 20kg overweight to bestselling author, 450K YouTube creator, and digital entrepreneur.',
      heading: 'About',
      tagline: 'From 20kg overweight to author, creator and digital strategist.',
      body: [
        "It all started with embarrassing weight gain and deep frustration. After trying diets, gyms and all sorts of methods, I had enough. I decided to find the truth where it actually lives: in the scientific research.",
        "Years of experimentation later, I discovered intermittent fasting. Not as another \"diet\", but as a total paradigm shift in how our body uses energy.",
        "I created Fasting.fr to document the journey. What started as a personal blog became France's go-to reference on intermittent fasting — read by millions.",
        "Then came the books: \"Le Fasting\" (4.3★ · 2,437 reviews) and \"Gras du Ventre\" (4.4★ · 103 reviews). Then the YouTube channel @lefasting, now followed by over 450,000 people.",
        "Today I apply that same philosophy — experiment, document, share — to other areas: digital strategy, content creation, and AI agents. I build systems that work without constant effort. And I help other creators and entrepreneurs do the same.",
        "My philosophy: \"Active but effortless\" — work smarter, not harder.",
      ],
      highlights: [
        { icon: '📚', label: '2 books published', sub: 'Bestsellers on Amazon FR' },
        { icon: '🎥', label: '450K YouTube subscribers', sub: '@lefasting' },
        { icon: '🌐', label: 'Fasting.fr', sub: "France's fasting reference" },
        { icon: '🤖', label: 'AI Agents', sub: 'Automated business' },
      ],
    },
  },
} as const

export type Translations = typeof translations.fr
