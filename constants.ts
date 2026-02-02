import type { Article, Comment } from './types.ts';

export const SITE_NAME = "keto.fr";

const INGREDIENT_IMAGES = {
    chicken: "/images/ingredient_chicken.jpg",
    butter: "/images/ingredient_butter.jpg",
    egg: "/images/ingredient_egg.jpg",
    flour: "/images/ingredient_flour.jpg",
    cream: "/images/ingredient_cream.jpg",
    cheese: "/images/ingredient_cheese.jpg",
    vegetable: "/images/ingredient_vegetable.jpg",
    chocolate: "/images/ingredient_chocolate.jpg",
    beef: "/images/ingredient_beef.jpg",
    salmon: "/images/ingredient_salmon.jpg"
};

export const ARTICLES: Article[] = [
  {
    id: "1",
    slug: "glucose-vs-cetones-cerveau",
    title: "Glucose vs cétones : quel carburant pour votre cerveau ?",
    excerpt: "Comprendre pourquoi les cétones offrent une énergie plus stable et durable pour les tâches cognitives exigeantes comparé aux pics glycémiques.",
    content: `
      <p class="mb-4 leading-relaxed">Dans le match <strong>Glucose vs cétones</strong>, quel est vraiment le meilleur <strong>carburant</strong> pour votre <strong>cerveau</strong> ?</p>
      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le mythe du glucose indispensable</h2>
      <p class="mb-4 leading-relaxed">
        Pendant des décennies, on nous a enseigné que le cerveau avait besoin de 130g de glucose par jour pour fonctionner. Si le cerveau consomme effectivement beaucoup d'énergie, il est tout à fait capable — et souvent plus efficace — lorsqu'il utilise les <strong>corps cétoniques</strong>.
      </p>
      <p class="mb-4 leading-relaxed">
        Contrairement au glucose, dont l'apport fluctue au gré des repas, les cétones fournissent un flux d'énergie constant, éliminant le fameux "brouillard mental" de 14h. Les neurones, voraces en énergie, trouvent dans les cétones une source de carburant plus "propre", générant moins de stress oxydatif lors de la production d'ATP.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'avantage métabolique</h2>
      <p class="mb-4 leading-relaxed">
        Les cétones (bêta-hydroxybutyrate notamment) ne sont pas seulement un carburant; elles agissent comme des molécules de signalisation, réduisant l'inflammation neuronale et augmentant la production de BDNF (Brain-Derived Neurotrophic Factor), une protéine clé pour la neuroplasticité et la mémoire.
      </p>
      
      <blockquote class="border-l-4 border-brand-500 pl-4 italic my-6 text-stone-600 bg-stone-100 py-2 pr-2 rounded-r">
        "Passer au gras comme source d'énergie, c'est comme passer du charbon à l'énergie solaire pour votre cerveau."
      </blockquote>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La transition et l'adaptation</h2>
      <p class="mb-4 leading-relaxed">
        Lorsque vous passez d'une alimentation riche en glucides à une alimentation cétogène, votre cerveau doit réapprendre à utiliser les graisses. Cette période, parfois appelée "keto flu" ou grippe cétogène, peut durer de quelques jours à deux semaines. C'est temporaire ! Une fois adapté, la clarté mentale est souvent décrite comme "un voile qui se lève".
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">En pratique</h2>
      <p class="mb-4 leading-relaxed">
        Une réduction modérée des glucides (low carb) suffit souvent à ressentir les premiers effets. Il n'est pas toujours nécessaire de viser une cétose profonde stricte pour bénéficier d'une meilleure clarté mentale. Commencez par supprimer les sucres ajoutés et les farines blanches.
      </p>
    `,
    author: "JB Keto",
    date: "17 Décembre 2025",
    readTime: "7 min",
    tags: ["Science", "Cerveau", "Énergie"],
    imageUrl: "/images/article_glucose-vs-cetones-cerveau.jpg",
    relatedIds: ["2", "3", "5"],
    type: 'article'
  },
  {
    id: "2",
    slug: "inflammation-et-nutrition",
    title: "Réduire l'inflammation chronique par l'assiette",
    excerpt: "L'impact direct d'une alimentation faible en glucides sur les marqueurs inflammatoires systémiques et la santé à long terme.",
    content: `
      <p class="mb-4 leading-relaxed">Vous cherchez à <strong>réduire l'inflammation chronique par l'assiette</strong> ? C'est possible en changeant simplement votre alimentation.</p>
      <p class="mb-4 leading-relaxed">L'inflammation chronique est souvent qualifiée de tueur silencieux. Elle est à la racine de nombreuses pathologies modernes, des maladies cardiovasculaires aux maladies auto-immunes, mais saviez-vous qu'elle affecte aussi directement vos performances cognitives quotidiennes et votre humeur ?</p>
      
      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le lien sucre-inflammation</h2>
      <p class="mb-4 leading-relaxed">L'hyperglycémie chronique et les pics d'insuline favorisent la production de cytokines pro-inflammatoires. En adoptant une approche low carb, vous réduisez mécaniquement ces déclencheurs. De plus, les corps cétoniques ont un effet anti-inflammatoire direct en inhibant l'inflammasome NLRP3.</p>

      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Moins de rétention d'eau :</strong> Le glycogène retient l'eau; en le réduisant, on dégonfle rapidement, ce qui soulage les articulations.</li>
        <li><strong>Stabilité hormonale :</strong> Moins de cortisol, moins d'insuline, un système immunitaire plus apaisé.</li>
        <li><strong>Clarté immédiate :</strong> La neuro-inflammation diminue, libérant des ressources pour la pensée.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les aliments anti-inflammatoires à privilégier</h2>
      <p class="mb-4 leading-relaxed">Pour aller plus loin, privilégiez les aliments riches en nutriments et évitez les huiles végétales industrielles (tournesol, colza chauffé) riches en oméga-6 pro-inflammatoires.</p>
      <ul class="list-none space-y-2 mb-4">
        <li>🐟 <strong>Poissons gras :</strong> saumon, maquereau, sardines (Oméga-3 EPA/DHA).</li>
        <li>🥬 <strong>Légumes verts :</strong> épinards, brocolis, choux de Bruxelles.</li>
        <li>🥑 <strong>Avocat et huile d'olive :</strong> graisses mono-insaturées protectrices.</li>
        <li>🫐 <strong>Baies :</strong> myrtilles, framboises (antioxydants puissants).</li>
      </ul>
    `,
    author: "JB Keto",
    date: "18 Décembre 2025",
    readTime: "6 min",
    tags: ["Santé", "Inflammation", "Bien-être"],
    imageUrl: "/images/article_inflammation-et-nutrition.jpg",
    relatedIds: ["1", "4"],
    type: 'article'
  },
  {
    id: "3",
    slug: "focus-productivite-low-carb",
    title: "Hackez votre productivité : la fin des coups de barre",
    excerpt: "Comment stabiliser votre glycémie peut transformer vos après-midis de travail et augmenter votre capacité de concentration profonde (Deep work).",
    content: `
      <p class="mb-4 leading-relaxed">Vous voulez savoir comment <strong>hackez votre productivité</strong> et signer <strong>la fin des coups de barre</strong> ?</p>
      <p class="mb-4 leading-relaxed">Nous avons tous connu ce moment après le déjeuner où les paupières deviennent lourdes, où la concentration s'évapore et où l'appel de la sieste (ou du distributeur de snacks) devient irrésistible. Ce n'est pas une fatalité, c'est de la biologie pure.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'ennemi : la montagne russe glycémique</h2>
      <p class="mb-4 leading-relaxed">Un repas riche en glucides (pâtes, sandwich, riz, dessert sucré) provoque un pic de glucose brutal dans le sang. En réponse, votre pancréas libère massivement de l'insuline pour stocker ce sucre. Résultat ? Une chute brutale de la glycémie 2h plus tard : c'est l'hypoglycémie réactionnelle. C'est lors de cette chute que la fatigue frappe et que le cerveau se met en mode "économie d'énergie".</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La solution low carb : énergie linéaire</h2>
      <p class="mb-4 leading-relaxed">En consommant des protéines et des graisses saines au déjeuner, la courbe glycémique reste plate. Vous n'avez plus de pics, donc plus de creux. Votre niveau d'énergie reste constant toute la journée. Vous pouvez enchaîner les tâches de concentration profonde (Deep Work) sans effort.</p>
      
      <div class="bg-stone-100 p-6 rounded-lg my-6">
        <h3 class="font-bold text-lg mb-2">Exemple de déjeuner "productivité"</h3>
        <ul class="list-none space-y-2">
          <li>✅ Salade composée : avocat, noix, roquette, huile d'olive généreuse.</li>
          <li>✅ Protéines de qualité : saumon, maquereau, œufs durs ou poulet rôti.</li>
          <li>✅ Légumes : crucifères rôtis ou haricots verts.</li>
          <li>✅ Dessert (optionnel) : un carré de chocolat noir 85% ou une poignée d'amandes.</li>
          <li>❌ À bannir : pain, pâtes, riz blanc, sodas, desserts sucrés.</li>
        </ul>
      </div>

      <p class="mb-4 leading-relaxed">Essayez pendant 3 jours. La différence de vigilance l'après-midi est souvent spectaculaire.</p>
    `,
    author: "JB Keto",
    date: "19 Décembre 2025",
    readTime: "5 min",
    tags: ["Productivité", "Deep Work", "Lifestyle"],
    imageUrl: "/images/article_focus-productivite-low-carb.jpg",
    relatedIds: ["1", "2"],
    type: 'article'
  },
  {
    id: "4",
    slug: "jeune-intermittent-keto",
    title: "Le jeûne intermittent : le compagnon idéal du régime cétogène",
    excerpt: "Pourquoi associer le jeûne intermittent (16/8) au régime cétogène décuple les résultats et simplifie votre quotidien.",
    content: `
      <p class="mb-4 leading-relaxed"><strong>Le jeûne intermittent</strong> est souvent considéré comme <strong>le compagnon idéal du régime cétogène</strong>.</p>
      <p class="mb-4 leading-relaxed">Le jeûne intermittent (Intermittent Fasting ou IF) et le régime cétogène (Keto) sont souvent mentionnés ensemble. Et pour cause : ils fonctionnent en parfaite synergie. L'un facilite l'autre, et ensemble, ils transforment votre métabolisme.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Pourquoi c'est plus facile en keto ?</h2>
      <p class="mb-4 leading-relaxed">La principale difficulté du jeûne est la faim. Mais lorsque vous êtes adapté au gras (fat-adapted) grâce au régime cétogène, votre corps sait puiser efficacement dans ses réserves de graisse pour trouver de l'énergie. Votre glycémie est stable, et les fringales disparaissent. Sauter le petit-déjeuner devient alors non seulement facile, mais naturel.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le protocole 16/8</h2>
      <p class="mb-4 leading-relaxed">Le format le plus populaire est le 16/8 : on jeûne pendant 16h (par exemple de 20h à 12h le lendemain) et on consomme ses calories sur une fenêtre de 8h (de 12h à 20h). Cela revient souvent à simplement sauter le petit-déjeuner et ne prendre qu'un café ou un thé (sans sucre) le matin.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les bénéfices décuplés</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Autophagie boostée :</strong> Le nettoyage cellulaire est activé plus rapidement en l'absence d'insuline.</li>
        <li><strong>Perte de poids accélérée :</strong> On réduit naturellement l'apport calorique et on maintient l'insuline basse plus longtemps.</li>
        <li><strong>Simplicité :</strong> Moins de repas à préparer, moins de vaisselle, plus de temps le matin !</li>
      </ul>
    `,
    author: "JB Keto",
    date: "20 Décembre 2025",
    readTime: "6 min",
    tags: ["Jeûne", "Perte de poids", "Santé"],
    imageUrl: "/images/article_jeune-intermittent-keto.jpg",
    relatedIds: ["1", "5"],
    type: 'article'
  },
  {
    id: "5",
    slug: "keto-flu-symptomes-remedes",
    title: "Keto flu : pourquoi vous avez mal à la tête (et comment l'arrêter)",
    excerpt: "La grippe cétogène n'est pas une maladie, c'est un symptôme de sevrage glucidique et de déséquilibre électrolytique. Voici comment la vaincre.",
    content: `
      <p class="mb-4 leading-relaxed">La <strong>keto flu</strong> : <strong>pourquoi vous avez mal à la tête</strong> et surtout <strong>comment l'arrêter</strong> ?</p>
      <p class="mb-4 leading-relaxed">Vous avez commencé le Keto il y a 3 jours et vous vous sentez "mou", vous avez des maux de tête, des nausées ou des crampes ? Félicitations, vous avez la "Keto Flu". La bonne nouvelle : c'est temporaire et très facile à corriger.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Ce n'est pas la grippe, c'est le sel !</h2>
      <p class="mb-4 leading-relaxed">En baissant les glucides, votre niveau d'insuline chute. Les reins excrètent alors beaucoup d'eau et, avec elle, des électrolytes essentiels : Sodium, Potassium et Magnésium. La majorité des symptômes vient simplement d'une déshydratation et d'un manque de sel.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le cocktail de survie</h2>
      <div class="bg-stone-100 p-6 rounded-lg my-6">
        <ul class="list-none space-y-2">
          <li>🧂 <strong>Sodium :</strong> N'ayez pas peur de saler vos plats. Buvez un bouillon ou de l'eau avec une pincée de sel de l'Himalaya.</li>
          <li>🥑 <strong>Potassium :</strong> Mangez des avocats, des épinards ou utilisez du sel de régime (type "LoSalt").</li>
          <li>💊 <strong>Magnésium :</strong> Un supplément de citrate ou bisglycinate de magnésium le soir aide pour les crampes et le sommeil.</li>
        </ul>
      </div>

      <p class="mb-4 leading-relaxed">Buvez beaucoup, salez plus que d'habitude, et reposez-vous. Ces symptômes disparaissent généralement en 3 à 5 jours, laissant place à une énergie débordante.</p>
    `,
    author: "JB Keto",
    date: "21 Décembre 2025",
    readTime: "5 min",
    tags: ["Keto flu", "Débutant", "Santé"],
    imageUrl: "/images/article_keto-flu-symptomes-remedes.jpg",
    relatedIds: ["1", "2"],
    type: 'article'
  },
  {
    id: "6",
    slug: "sport-performance-keto",
    title: "Sport et keto : peut-on être performant sans glucides ?",
    excerpt: "Démystifions les besoins en glucides pour le sport. Comment l'adaptation aux graisses peut améliorer votre endurance et votre récupération.",
    content: `
      <p class="mb-4 leading-relaxed">En matière de <strong>sport et keto</strong>, une question revient souvent : <strong>Peut-on être performant sans glucides</strong> ?</p>
      <p class="mb-4 leading-relaxed">Le dogme du "plat de pâtes avant la course" a la vie dure. Pourtant, de plus en plus d'athlètes d'élite, notamment en ultra-endurance, passent au Low Carb ou au Cétogène. Pourquoi ?</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le réservoir illimité</h2>
      <p class="mb-4 leading-relaxed">Le corps humain ne peut stocker qu'environ 2000 calories sous forme de glycogène (sucre). Une fois ce réservoir vide, c'est le "mur" du marathonien. À l'inverse, même un athlète très sec possède plus de 40 000 calories de réserves lipidiques (graisse). En devenant "fat-adapted", vous accédez à ce réservoir quasi-infini. Fini les gels sucrés toutes les 45 minutes !</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Pour quels sports ?</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Endurance (cyclisme, course, triathlon) :</strong> C'est le terrain de jeu idéal du keto. L'intensité modérée permet de brûler majoritairement du gras.</li>
        <li><strong>Force et CrossFit :</strong> Pour les efforts explosifs (glycolytiques), une approche "targeted keto" (TKD) avec un peu de glucides juste avant l'effort peut être bénéfique, mais n'est pas obligatoire pour l'amateur.</li>
      </ul>

      <p class="mb-4 leading-relaxed">Attention : la période d'adaptation peut réduire les performances pendant 4 à 8 semaines. Soyez patient, votre corps construit la machinerie enzymatique nécessaire pour devenir une machine à brûler du gras.</p>
    `,
    author: "JB Keto",
    date: "22 Décembre 2025",
    readTime: "8 min",
    tags: ["Sport", "Performance", "Endurance"],
    imageUrl: "/images/article_sport-performance-keto.jpg",
    relatedIds: ["1", "5"],
    type: 'article'
  },
  {
    id: "7",
    slug: "guide-regime-cetogene-debutant",
    title: "Le guide complet du régime cétogène pour débutants",
    excerpt: "Tout ce que vous devez savoir pour démarrer le régime keto : fonctionnement, bienfaits et règles de base pour atteindre la cétose.",
    content: `
      <p class="mb-4 leading-relaxed">Vous entendez parler du <strong>keto diet</strong> partout, mais <strong>qu'est-ce que le keto</strong> vraiment ?</p>
      <p class="mb-4 leading-relaxed">Le régime cétogène (ou keto) est bien plus qu'une mode. C'est une méthode d'alimentation qui transforme votre métabolisme pour brûler du gras au lieu du sucre. Voici votre guide ultime pour débuter.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La cétose : le Saint Graal</h2>
      <p class="mb-4 leading-relaxed">
        L'objectif principal est d'atteindre l'état de <strong>cétose</strong> (ketosis). C'est un état métabolique où votre corps, privé de glucides, commence à brûler les graisses pour produire de l'énergie sous forme de corps cétoniques.
      </p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les macros du succès</h2>
      <p class="mb-4 leading-relaxed">Pour y arriver, vous devez respecter une répartition précise de vos macronutriments :</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Lipides (graisses) :</strong> 70-75% de vos calories. C'est votre nouveau carburant.</li>
        <li><strong>Protéines :</strong> 20% de vos calories. Essentiel pour maintenir la masse musculaire.</li>
        <li><strong>Glucides :</strong> 5-10% (max 20g à 50g par jour). C'est la limite à ne pas dépasser.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les bienfaits attendus</h2>
      <p class="mb-4 leading-relaxed">
        Au-delà de la perte de poids rapide (souvent spectaculaire au début), le keto apporte une énergie stable, une clarté mentale accrue et une réduction de l'inflammation.
      </p>
    `,
    author: "JB Keto",
    date: "23 Décembre 2025",
    readTime: "10 min",
    tags: ["Guide", "Débutant", "Keto diet"],
    imageUrl: "/images/article_guide-regime-cetogene-debutant.jpg",
    relatedIds: ["1", "5", "8"],
    type: 'article'
  },
  {
    id: "8",
    slug: "liste-aliments-keto-friendly",
    title: "Liste ultime des aliments keto friendly (et ceux à éviter)",
    excerpt: "Ne doutez plus jamais au supermarché. Voici la liste complète des aliments autorisés (keto foods) et les pièges à éviter.",
    content: `
      <p class="mb-4 leading-relaxed">Est-ce qu'un groupe alimentaire a déjà subi un tel rebranding que le gras ? Autrefois l'ennemi public numéro un, synonyme d'artères bouchées et de culpabilité, le lipide est devenu la coqueluche de tous, des biohackers de la Silicon Valley aux mères de famille sur Instagram préparant des "fat bombs". La fièvre du gras a tellement grimpé que la pyramide alimentaire en a été renversée, avec — vous l'avez deviné — l'avocat et le beurre tout en haut.</p>

      <p class="mb-4 leading-relaxed">Il semble impossible d'échapper au mot "Keto", même en 2026. Pourtant, faire ses courses est devenu un parcours du combattant. "Sans sucre", "Low Carb", "Keto Friendly"... les étiquettes mentent souvent. Pour y voir plus clair, j'ai décidé de repartir de zéro. J'ai passé une semaine à analyser chaque étiquette de mon supermarché local. Voici mon odyssée et la liste ultime qui en a découlé.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Jour 1 à 3 : la paralysie de l'analyse</h2>
      <p class="mb-4 leading-relaxed">Les premiers jours furent les plus pénibles. Je ne cherchais pas seulement à éviter les glucides, je cherchais la pureté. Je passais des heures dans les rayons, retournant chaque paquet de jambon (pourquoi y a-t-il du dextrose dans le jambon ?), chaque sauce tomate, chaque mélange d'épices.</p>
      <p class="mb-4 leading-relaxed">J'ai réalisé une chose effrayante : le sucre est partout. Sous des noms de code comme maltodextrine, sirop de maïs, jus de canne évaporé. J'ai fini par sortir du magasin avec un panier presque vide, frustré mais éclairé. J'avais compris que pour réussir le keto, il ne fallait pas chercher des substituts industriels, mais revenir aux aliments bruts.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La révélation de la "zone verte"</h2>
      <p class="mb-4 leading-relaxed">Vers le milieu de la semaine, j'ai commencé à cartographier le magasin. J'ai réalisé que 80% des rayons (les allées centrales avec les paquets colorés) étaient des zones interdites. Ma survie dépendait de la périphérie : le rayon boucherie, la poissonnerie, et les légumes frais.</p>
      <p class="mb-4 leading-relaxed">Mon panier type s'est transformé. Fini les plats préparés "light". Bonjour les blocs de beurre, les douzaines d'œufs (j'en suis venu à les acheter par 30), les morceaux de fromage entiers et les légumes verts feuillus. J'ai découvert que le chou-fleur était le caméléon ultime : il peut être riz, purée, ou même pâte à pizza.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La liste ultime : ce que j'achète vraiment</h2>
      <p class="mb-4 leading-relaxed">Après cette expérience, j'ai établi une liste infaillible. Si ce n'est pas sur la liste, je ne l'achète pas. Point.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">1. Les piliers (à avoir toujours)</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Œufs :</strong> bio de préférence. C'est la multivitamine de la nature.</li>
          <li><strong>Beurre et ghee :</strong> pour la cuisson et pour le goût.</li>
          <li><strong>Huile d'olive et d'avocat :</strong> pour les assaisonnements à froid.</li>
          <li><strong>Avocats :</strong> J'en consomme littéralement un par jour.</li>
      </ul>

      <h3 class="font-bold text-lg mt-6 mb-2">2. Les protéines grasses</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Poissons gras :</strong> saumon, maquereau, sardines. Les oméga-3 sont vitaux.</li>
          <li><strong>Viandes :</strong> bœuf (haché à 15% ou 20% de gras), cuisses de poulet (avec la peau), travers de porc. Oubliez le blanc de dinde sec.</li>
      </ul>

      <h3 class="font-bold text-lg mt-6 mb-2">3. Les légumes (le véhicule à gras)</h3>
      <ul class="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Feuilles :</strong> épinards, roquette, mâche.</li>
          <li><strong>Crucifères :</strong> brocoli, chou-fleur, choux de Bruxelles (rôtis au four avec des lardons, c'est une tuerie).</li>
          <li><strong>Zucchinis :</strong> pour faire des zoodles.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Ce que j'ai appris sur les "keto snacks"</h2>
      <p class="mb-4 leading-relaxed">J'ai aussi appris à me méfier des produits marqués "Keto" en gros sur l'emballage. Souvent, ils sont bourrés de fibres synthétiques et d'édulcorants douteux qui me ballonnent ou stoppent ma perte de poids. Mon snack ultime ? Un morceau de Comté vieux ou une poignée de noix de macadamia. C'est simple, c'est vrai, et ça marche.</p>

      <p class="mb-4 leading-relaxed">Aujourd'hui, mes courses me prennent 15 minutes. Je file droit à l'essentiel. Plus de lecture d'étiquettes angoissante, juste de la vraie nourriture. Et honnêtement ? Je n'ai jamais aussi bien mangé.</p>
    `,
    author: "JB Keto",
    date: "24 Décembre 2025",
    readTime: "8 min",
    tags: ["Alimentation", "Liste", "Keto friendly"],
    imageUrl: "/images/article_liste-aliments-keto-friendly.jpg",
    relatedIds: ["7", "r3"],
    type: 'article'
  },
  {
    id: "9",
    slug: "keto-vegetarien-experience",
    title: "J'ai testé le keto végétarien pendant 30 jours : voici mon verdict",
    excerpt: "Est-il possible de combiner régime cétogène et végétarisme ? J'ai tenté l'expérience pour vous, et les résultats m'ont surpris.",
    content: `
      <p class="mb-4 leading-relaxed">"Le Keto sans bacon ? C'est comme Paris sans la Tour Eiffel, ça n'a aucun sens." Voilà ce que mon ami boucher m'a dit quand je lui ai annoncé mon défi du mois : 30 jours de régime cétogène, mais 100% végétarien. Pas de steak, pas de poulet, pas de saindoux. Juste des plantes, des œufs, et du fromage.</p>

      <p class="mb-4 leading-relaxed">Pourquoi cette folie ? D'abord, par curiosité. Ensuite, parce que je commençais à me sentir un peu... "lourd". Trop de viande rouge peut parfois peser sur la digestion. Je voulais voir si je pouvais garder la clarté mentale du keto tout en alléguant mon empreinte carbone et digestive. Spoiler : ce fut beaucoup plus dur (et plus gratifiant) que prévu.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Semaine 1 : le choc du tofu</h2>
      <p class="mb-4 leading-relaxed">Les trois premiers jours furent un désastre culinaire. J'ai essayé de remplacer mon steak par du tofu nature. Erreur de débutant. C'était fade, triste, et ça ne me calait pas. J'avais faim deux heures après le repas. J'ai failli abandonner le jour 4 en passant devant une rôtisserie.</p>
      <p class="mb-4 leading-relaxed">Mais j'ai tenu bon. J'ai appris à presser le tofu pour enlever l'eau, à le faire mariner dans la sauce soja et l'huile de sésame, et à le faire griller jusqu'à ce qu'il soit croustillant. J'ai aussi découvert que le tempeh avait une texture beaucoup plus satisfaisante. La leçon : la cuisine végétarienne demande plus de créativité que de jeter un steak dans une poêle.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Semaine 2 : l'overdose d'œufs et la rédemption</h2>
      <p class="mb-4 leading-relaxed">Pour atteindre mon quota de protéines sans exploser les glucides (car oui, les haricots et lentilles sont trop riches en glucides pour le keto strict), je me suis tourné vers les œufs. Beaucoup d'œufs. Omelettes, œufs durs, œufs pochés, œufs brouillés. J'ai frôlé l'overdose.</p>
      <p class="mb-4 leading-relaxed">C'est là que j'ai découvert les graines de chanvre et les cœurs de graines de citrouille. Ces petites bombes nutritionnelles sont riches en graisses et en protéines, avec très peu de glucides. Saupoudrées sur une salade d'avocat géante avec de la feta, c'était le game-changer. Je commençais enfin à me sentir rassasié.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Semaine 3 : la légèreté inattendue</h2>
      <p class="mb-4 leading-relaxed">Vers le 20ème jour, quelque chose a changé. Je me suis réveillé avec une énergie différente. Pas l'énergie "agressive" du keto carnivore, mais une énergie plus... propre. Ma digestion était impeccable (merci les fibres des légumes verts !), et je n'avais plus ce coup de barre digestif après le déjeuner.</p>
      <p class="mb-4 leading-relaxed">Mes séances de sport étaient tout aussi intenses, preuve que mes muscles ne fondaient pas. Ma cétose était stable autour de 1.5 mmol/L, ce qui est optimal.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le verdict après 30 jours</h2>
      <p class="mb-4 leading-relaxed">Alors, vais-je rester végétarien ? Non. Un bon steak me manquait trop. MAIS, cette expérience a changé ma façon de manger. Je ne mange plus de viande à tous les repas. Je fais désormais 3 ou 4 jours "Keto Végé" par semaine.</p>

      <p class="mb-4 leading-relaxed">C'est un excellent moyen de varier les nutriments, de soulager son système digestif et de découvrir de nouvelles saveurs. Si vous pensez que le Keto se résume à la viande, détrompez-vous. Le monde végétal gras est vaste, et il vaut le détour.</p>
    `,
    author: "JB Keto",
    date: "25 Décembre 2025",
    readTime: "8 min",
    tags: ["Végétarien", "Expérience", "Lifestyle"],
    imageUrl: "/images/article_keto-vegetarien-experience.jpg",
    relatedIds: ["8", "r14"],
    type: 'article'
  },
  {
    id: "10",
    slug: "keto-sommeil-insomnie",
    title: "Insomnies et keto : comment j'ai retrouvé un sommeil de bébé",
    excerpt: "Le lien méconnu entre glycémie et qualité du sommeil. Découvrez comment l'adaptation aux graisses a mis fin à mes réveils nocturnes.",
    content: `
      <p class="mb-4 leading-relaxed">Est-ce que quelqu'un a déjà pris du plaisir à fixer son plafond à 3h33 du matin ? Certainement pas moi. Pendant des années, mes nuits étaient un champ de bataille. Le scénario était toujours le même : je m'écroulais de fatigue à 23h, pour être réveillé en sursaut quelques heures plus tard, le cœur battant la chamade, l'esprit en mode turbo, obsédé par des mails non envoyés ou le réchauffement climatique.</p>

      <p class="mb-4 leading-relaxed">J'étais devenu un zombie fonctionnel. J'ai tout essayé : la mélatonine (qui me donnait des cauchemars dignes de Stephen King), le CBD (efficace pour mon portefeuille, moins pour mon sommeil), les applications de méditation (la voix "apaisante" finissait par m'agacer), et même les couvertures lestées qui me donnaient l'impression d'être coincé sous un sac de ciment. Rien n'y faisait. J'étais persuadé d'être simplement "un mauvais dormeur". C'était ma croix à porter.</p>

      <p class="mb-4 leading-relaxed">Et puis, au détour d'un podcast sur la longévité, j'ai entendu une phrase qui a tout changé : "L'insomnie du milieu de nuit est souvent une crise d'hypoglycémie déguisée." Pardon ? Mon plat de pâtes réconfortant du soir serait le coupable ? J'ai décidé de mener l'enquête et, surtout, de lancer une expérience radicale de 14 jours. Mon objectif : stabiliser ma glycémie nocturne pour voir si je pouvais enfin dormir comme un bébé (ou au moins comme un adulte apaisé). Voici mon journal de bord.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Jours 1 à 5 : le sevrage et la bizarrerie</h2>
      <p class="mb-4 leading-relaxed">La règle était simple : aucun glucide après 14h. Le dîner devait être une célébration du gras et des protéines. Le premier soir, j'ai troqué mon risotto habituel contre un pavé de saumon, des brocolis noyés dans du beurre, et un demi-avocat. Soyons honnêtes, c'était bon, mais il manquait ce sentiment de "plénitude" lourde que procurent les féculents. On ne se sent pas "calé" de la même façon. On se sent... nourri, mais léger.</p>
      <p class="mb-4 leading-relaxed">Les premières nuits furent étranges. Mon corps, habitué à sa dose de sucre du soir, réclamait son dû. J'ai mis du temps à m'endormir. Je tournais, je virais. Mais chose curieuse : quand je me réveillais (car je me réveillais encore), je n'avais plus cette panique, ces palpitations cardiaques. J'étais juste... réveillé. C'était moins violent, mais pas encore gagné.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Jours 5 à 10 : le silence radio</h2>
      <p class="mb-4 leading-relaxed">C'est au matin du sixième jour que le miracle a eu lieu. J'ai ouvert les yeux, la chambre était inondée de lumière. J'ai regardé mon réveil : 7h15. J'ai cru qu'il était en panne. Je n'avais aucun souvenir de la nuit. Pas de réveil à 3h. Pas de pause pipi. Pas de pensées anxieuses. Juste un trou noir de 8 heures.</p>
      <p class="mb-4 leading-relaxed">J'ai compris ce qui se passait biologiquement. Auparavant, mon repas riche en glucides provoquait un pic d'insuline massif. Vers 3h du matin, ma glycémie s'effondrait (hypoglycémie réactionnelle). Mon cerveau, croyant manquer de carburant, sonnait l'alarme en libérant du cortisol et de l'adrénaline pour déstocker du sucre d'urgence. En gros, je me shootais à l'adrénaline en plein sommeil. Pas étonnant que je me réveille en panique !</p>
      <p class="mb-4 leading-relaxed">En passant au gras (saumon, avocat, huile d'olive), ma glycémie restait une ligne droite parfaite toute la nuit. Mon cerveau, nourri par les cétones à combustion lente, n'avait plus aucune raison de paniquer. Il pouvait enfin se consacrer à sa tâche principale : nettoyer et réparer.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Jours 10 à 14 : la nouvelle norme</h2>
      <p class="mb-4 leading-relaxed">La deuxième semaine a confirmé la tendance. J'ai même affiné mon protocole. J'ai ajouté une cuillère de beurre d'amande ou d'huile MCT juste avant le brossage de dents. Ce petit apport de gras supplémentaire agissait comme une bûche à combustion lente dans la cheminée, garantissant que le feu ne s'éteigne pas avant le matin.</p>
      <p class="mb-4 leading-relaxed">Le plus spectaculaire n'était pas seulement la durée du sommeil, mais sa qualité. Je me réveillais avec une énergie nouvelle, sans ce brouillard mental qui me suivait habituellement jusqu'à ma troisième tasse de café. Mes rêves étaient devenus plus vivaces, plus colorés — un effet secondaire connu de la cétose, paraît-il.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Verdict : adieu les pâtes du soir</h2>
      <p class="mb-4 leading-relaxed">Je ne vais pas mentir, il y a des soirs où une pizza me fait de l'œil. Mais le souvenir de ces nuits hachées est un répulsif suffisant. J'ai réalisé que mon sommeil était plus précieux que le plaisir éphémère d'une assiette de frites.</p>
      <p class="mb-4 leading-relaxed">Si vous êtes insomniaque, avant de changer de matelas ou de consulter un psy, regardez ce qu'il y a dans votre assiette le soir. Votre cerveau n'est peut-être pas anxieux, il est peut-être juste affamé d'énergie stable. Aujourd'hui, mon rituel est sacré : Dîner gras, Magnésium, et un sommeil de plomb. Bonne nuit.</p>
    `,
    author: "JB Keto",
    date: "26 Décembre 2025",
    readTime: "6 min",
    tags: ["Santé", "Sommeil", "Bien-être"],
    imageUrl: "/images/article_keto-sommeil-insomnie.jpg",
    relatedIds: ["1", "5"],
    type: 'article'
  },
  {
    id: "11",
    slug: "keto-coffee-experience",
    title: "Keto coffee : j'ai mis du beurre dans mon café (et j'ai adoré)",
    excerpt: "Boire du gras au petit-déjeuner ? L'idée semble folle, et pourtant. Découvrez mon expérience avec le fameux Bulletproof Coffee.",
    content: `
      <p class="mb-4 leading-relaxed">Mettre du beurre dans son café. La première fois que j'ai entendu ça, j'ai cru à une blague, ou pire, à une de ces aberrations culinaires que nos amis américains inventent pour torturer la gastronomie française (comme les croissants au jambon-fromage-glacé). L'idée de boire une tasse de café huileux au saut du lit me donnait littéralement la nausée.</p>

      <p class="mb-4 leading-relaxed">Et pourtant, impossible d'ignorer le buzz. De la Silicon Valley aux salles de CrossFit, tout le monde ne jurait que par ce fameux "Bulletproof Coffee". Les promesses ? Une clarté mentale digne du film <em>Limitless</em>, une suppression totale de la faim, et une énergie inépuisable. Sceptique mais curieux (et toujours à la recherche d'un moyen de travailler plus en souffrant moins), j'ai décidé de tenter l'expérience pendant deux semaines. J'ai acheté du beurre doux de baratte, de l'huile MCT (triglycérides à chaîne moyenne), et j'ai sorti mon blender.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Jours 1 à 3 : la peur du gras</h2>
      <p class="mb-4 leading-relaxed">Le premier matin, face à mon blender, j'ai hésité. Verser une grosse cuillère de beurre dans mon précieux café noir me semblait contre-nature. J'ai ajouté l'huile MCT, j'ai fermé les yeux, et j'ai mixé. Le bruit infernal du blender à 7h du matin n'a pas ravi mes voisins, mais le résultat m'a surpris : une boisson onctueuse, mousseuse, ressemblant à s'y méprendre à un latte de coffee shop.</p>
      <p class="mb-4 leading-relaxed">Première gorgée : Choc. Ce n'est pas gras. C'est... riche. Crémeux. Doux. L'amertume du café est coupée par la douceur du beurre. J'ai tout bu. Et j'ai attendu.</p>
      <p class="mb-4 leading-relaxed">Vingt minutes plus tard, j'ai ressenti le "kick". Pas la nervosité habituelle de la caféine qui fait trembler les mains. C'était différent. Une sorte de lumière blanche qui s'allumait dans mon cerveau. J'ai ouvert mon ordinateur, et j'ai abattu trois heures de travail intense sans lever la tête, sans checker Instagram, sans rêvasser. C'était presque effrayant.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Jours 4 à 8 : le jeûne involontaire</h2>
      <p class="mb-4 leading-relaxed">C'est là que l'expérience est devenue intéressante. Habituellement, vers 10h30, je suis celui qui rôde dans la cuisine à la recherche d'un truc à grignoter. Avec le Keto Coffee, la faim avait tout simplement disparu. Volatilisée. Les 400 calories de pur gras envoyaient un signal de satiété puissant à mon corps.</p>
      <p class="mb-4 leading-relaxed">J'ai réalisé que je faisais du jeûne intermittent sans même essayer. Je ne mangeais pas avant 13h ou 14h. Mon corps tournait sur le gras ingéré et sur mes propres réserves. Cependant, j'ai appris une leçon douloureuse au jour 5 : ne jamais, jamais avoir la main trop lourde sur l'huile MCT. Disons simplement que mon système digestif a protesté vigoureusement et que j'ai passé une partie de la matinée à regretter mes choix de vie. Note pour les débutants : commencez par une cuillère à café, pas à soupe.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Jours 9 à 14 : l'outil de productivité ultime</h2>
      <p class="mb-4 leading-relaxed">Au bout de deux semaines, j'avais compris le mode d'emploi. Ce n'est pas une boisson magique à boire en plus d'un petit-déjeuner complet (bonjour la prise de poids si vous faites ça !). C'est un <em>remplacement</em> de repas. C'est un carburant fonctionnel.</p>
      <p class="mb-4 leading-relaxed">J'ai aussi remarqué que l'effet s'estompait si j'en prenais tous les jours. Le corps s'habitue. J'ai donc décidé de l'utiliser comme une arme secrète. Je le réserve pour mes "grosses journées" : celles où j'ai besoin de 4 heures de concentration ininterrompue pour écrire ou coder. Les jours de repos, je reviens à mes œufs brouillés.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Conclusion : beurre ou pas beurre ?</h2>
      <p class="mb-4 leading-relaxed">Alors, est-ce que je continue ? Oui. Pas tous les jours, mais souvent. J'ai appris à aimer ce rituel. Il y a quelque chose de satisfaisant à préparer cette potion, à voir la mousse se former. C'est un hack biologique qui fonctionne, pour peu qu'on respecte les dosages.</p>
      <p class="mb-4 leading-relaxed">Si vous cherchez à perdre du poids, attention : c'est une bombe calorique. Mais si vous cherchez à transformer votre cerveau en machine de guerre le matin, c'est probablement le meilleur investissement (au prix d'une plaquette de beurre) que vous puissiez faire. Juste... mollo sur l'huile MCT, d'accord ?</p>
    `,
    author: "JB Keto",
    date: "27 Décembre 2025",
    readTime: "5 min",
    tags: ["Expérience", "Boisson", "Énergie"],
    imageUrl: "/images/article_keto-coffee-experience.jpg",
    relatedIds: ["3", "1"],
    type: 'article'
  },
  {
    id: "12",
    slug: "gelules-keto-arnaque",
    title: "Gélules keto (Biolife, Bodytone...) : ne jetez pas votre argent par les fenêtres",
    excerpt: "Les publicités pour les pilules keto \"miracles\" inondent internet. Voici pourquoi elles ne remplacent pas le régime et sont souvent une arnaque.",
    content: `
      <p class="mb-4 leading-relaxed">"Perdez 15 kg en dormant !" "Faites fondre la graisse sans changer votre alimentation !" Si vous avez tapé "Keto" sur Google une seule fois, vous connaissez la chanson. Votre fil Facebook s'est transformé en téléachat pour des pilules miracles : Keto Bodytone, Biolife, Keto Pro... Des bouteilles aux couleurs flashy, des photos avant/après douteuses, et des promesses qui feraient rougir un politicien en campagne.</p>

      <p class="mb-4 leading-relaxed">Nous avons tous, moi le premier, cette petite voix intérieure qui espère que c'est vrai. Qui veut croire qu'on peut manger une pizza 4 fromages, avaler deux gélules, et se réveiller avec des abdos. Pour en avoir le cœur net (et pour protéger votre carte bleue), j'ai décidé de jouer le cobaye. J'ai acheté ces fameuses gélules. J'ai testé. Et je vais tout vous dire.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'expérience : une semaine de mensonges</h2>
      <p class="mb-4 leading-relaxed">J'ai commandé une marque populaire (que je ne nommerai pas pour éviter un procès, appelons-la "KetoMagic"). 60€ la bouteille. Ça commence mal. Le paquet arrive, je lis l'étiquette : Bêta-hydroxybutyrate (BHB) de calcium, de magnésium et de sodium. En gros, des sels de cétones.</p>
      <p class="mb-4 leading-relaxed"><strong>Jour 1 :</strong> J'avale mes pilules. Une heure plus tard, je fais un test urinaire avec une bandelette Keto-Diastix. Et là, miracle ! La bandelette vire au violet foncé ! Je suis en cétose ! "Ça marche !", me suis-je dit naïvement. J'étais euphorique. J'avais l'impression d'avoir hacké le système.</p>
      <p class="mb-4 leading-relaxed"><strong>Jour 3 :</strong> Fort de cette "cétose" certifiée par ma bandelette, je ne me suis pas privé. Un petit burger par-ci, quelques frites par-là. Après tout, la boîte disait "Brûlez la graisse pour l'énergie, pas les glucides". Je continuais à prendre mes gélules, et mes tests urinaires étaient toujours positifs. Mais ma balance, elle, racontait une autre histoire. +500g.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La douche froide scientifique</h2>
      <p class="mb-4 leading-relaxed">C'est là que j'ai décidé d'arrêter de rêver et d'ouvrir un livre de biochimie. J'ai compris la supercherie. C'est en fait très simple, et c'est diabolique.</p>
      <p class="mb-4 leading-relaxed">Il y a deux types de cétones :</p>
      <ul class="list-decimal pl-5 mb-4 space-y-2">
        <li><strong>Endogènes :</strong> Celles que votre foie fabrique en brûlant VOTRE gras corporel. C'est ce qu'on veut.</li>
        <li><strong>Exogènes :</strong> Celles qui viennent de l'extérieur (les gélules).</li>
      </ul>
      <p class="mb-4 leading-relaxed">En prenant ces gélules, je remplissais mon sang de cétones externes. Donc oui, mon urine disait "il y a des cétones". Mais mon corps ? Il n'avait aucune raison de brûler mon gras ! Au contraire ! Puisqu'il voyait arriver plein d'énergie (les cétones de la gélule) + l'énergie de mes repas (le burger), il a tout simplement... stocké le tout. J'ai réalisé que c'était comme asperger sa voiture d'essence et dire "Regardez, elle roule !". Non, elle est juste mouillée.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'arnaque de l'abonnement</h2>
      <p class="mb-4 leading-relaxed">En creusant un peu plus sur les forums, j'ai découvert la face sombre de cette industrie. Au-delà de l'inefficacité du produit, les pratiques commerciales sont prédatrices. Beaucoup d'utilisateurs racontent avoir commandé un "échantillon gratuit" pour payer juste les frais de port, pour se retrouver prélevés de 100€ chaque mois via des conditions générales de vente écrites en police taille 2. Impossible de se désabonner, service client fantôme... Une véritable mafia.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Conclusion : gardez votre argent</h2>
      <p class="mb-4 leading-relaxed">J'ai jeté le reste de la bouteille à la poubelle. Cette expérience m'a coûté 60€ et un kilo de gras en plus, mais elle m'a appris une leçon précieuse : on ne négocie pas avec la biologie.</p>
      <p class="mb-4 leading-relaxed">La cétose est une récompense, pas un don. Elle se mérite. Elle s'obtient en changeant son alimentation, en privant le corps de glucides pour le forcer à s'adapter. Il n'y a pas de raccourci. Si vous voulez dépenser 60€ pour votre santé, allez chez le boucher. Achetez de la vraie nourriture. Des œufs, des avocats, de la viande, des légumes. C'est moins glamour qu'une "pilule magique", mais ça a un avantage immense : ça marche vraiment.</p>
    `,
    author: "JB Keto",
    date: "28 Décembre 2025",
    readTime: "6 min",
    tags: ["Coup de gueule", "Arnaque", "Santé"],
    imageUrl: "/images/article_gelules-keto-arnaque.jpg",
    relatedIds: ["7", "8"],
    type: 'article'
  },
  {
    id: "13",
    slug: "menu-keto-semaine-type",
    title: "Menu keto : une semaine type pour débuter sans se prendre la tête",
    excerpt: "En panne d'inspiration ? Voici un plan de repas simple, gourmand et économique pour vos 7 premiers jours de cétose.",
    content: `
      <p class="mb-4 leading-relaxed">Le plus dur dans le Keto, ce n'est pas de ne pas manger de pain. C'est de répondre à la question fatidique de 19h : "On mange quoi ce soir ?". Quand on débute, on a peur de se tromper, on passe des heures à vérifier les macros, et on finit par manger des œufs durs tous les jours. Résultat ? On craque au bout de 3 jours.</p>

      <p class="mb-4 leading-relaxed">Pour vous éviter ça, j'ai conçu le menu que j'aurais aimé avoir à mes débuts. Pas de recettes compliquées nécessitant de la poudre de perlimpinpin. Juste des vrais aliments, faciles à cuisiner, et qui se conservent bien pour le lendemain midi (le fameux "Batch Cooking").</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Lundi : on commence fort</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Matin :</strong> keto coffee (pour l'énergie mentale) ou œufs brouillés au beurre.</li>
        <li><strong>Midi :</strong> Salade César au poulet (sans croûtons, évidemment !). Astuce : ne lésinez pas sur le parmesan et l'huile d'olive. C'est le gras qui vous calera.</li>
        <li><strong>Soir :</strong> pavé de saumon et épinards à la crème. Simple, efficace, riche en oméga-3.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Mardi : le plaisir avant tout</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Midi :</strong> restes du saumon (froid, c'est délicieux) avec un avocat entier.</li>
        <li><strong>Soir :</strong> burger sans pain (ou avec mes fameux buns keto). Steak haché 15% MG, cheddar fondu, bacon, cornichons, enveloppé dans une feuille de laitue croquante. Qui a dit qu'on était au régime ?</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Mercredi : l'Italie s'invite</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Midi :</strong> assiette de charcuterie et fromages. Saucisson, noix, comté, olives. Le déjeuner sur le pouce idéal.</li>
        <li><strong>Soir :</strong> zoodles (pâtes de courgettes) au pesto. Frais, léger, et ça change des légumes vapeurs tristes.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Jeudi à dimanche : on varie les plaisirs</h2>
      <p class="mb-4 leading-relaxed">La clé, c'est la rotation. Alternez les sources de protéines (œufs, bœuf, poisson gras, volaille avec la peau) et les légumes verts (brocolis, choux, asperges). Et pour le dimanche ? Un bon poulet rôti avec sa peau croustillante et des haricots verts au beurre d'ail.</p>

      <p class="mb-4 leading-relaxed">N'oubliez pas : le but n'est pas d'être un chef étoilé, mais de nourrir votre métabolisme avec de la qualité. Faites simple, faites gras, et régalez-vous.</p>
    `,
    author: "JB Keto",
    date: "29 Décembre 2025",
    readTime: "5 min",
    tags: ["Menu", "Débutant", "Organisation"],
    imageUrl: "/images/article_menu-keto-semaine-type.jpg",
    relatedIds: ["7", "8", "r15"],
    type: 'article'
  },
  {
    id: "14",
    slug: "pourquoi-pas-perte-poids-keto",
    title: "Pourquoi je ne perds pas de poids en keto ? 5 erreurs classiques",
    excerpt: "Vous respectez les règles mais la balance ne bouge plus ? Découvrez les 5 saboteurs invisibles qui bloquent votre perte de poids.",
    content: `
      <p class="mb-4 leading-relaxed">C'est la frustration ultime. Vous avez dit adieu aux croissants. Vous buvez votre café gras. Vos bandelettes urinaires sont violettes. Et pourtant... rien. La balance reste figée, voire remonte légèrement. Avant de jeter l'éponge et de commander une pizza de dépit, lisez ceci. Le diable se cache dans les détails.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">1. Vous mangez trop de calories (oui, ça compte encore)</h2>
      <p class="mb-4 leading-relaxed">Le mythe "les calories ne comptent pas en Keto" a la vie dure. Certes, l'insuline est reine, mais si vous ingérez 4000 calories de fromage et de noix par jour alors que vous êtes assis au bureau, votre corps n'a aucune raison d'aller puiser dans VOS réserves de gras. Il brûle d'abord ce qui arrive par la bouche. Le gras est très calorique (9kcal/g). Modérez les "Fat Bombs" et le beurre.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2. L'abus de produits "keto" industriels</h2>
      <p class="mb-4 leading-relaxed">Barres protéinées, pains low-carb sous vide, friandises édulcorées... Ces produits sont souvent bourrés de fibres synthétiques et de polyols qui peuvent impacter la glycémie de certains. Revenez aux aliments bruts (viande, légumes, œufs) pendant une semaine. Vous verrez la différence.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">3. Le stress et le manque de sommeil</h2>
      <p class="mb-4 leading-relaxed">Le cortisol (hormone du stress) est hyperglycémiant. Si vous êtes stressé ou dormez 5h par nuit, votre corps se met en mode "survie" et stocke tout ce qu'il peut. Dormir plus est parfois plus efficace que manger moins.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">4. Les produits laitiers</h2>
      <p class="mb-4 leading-relaxed">Le fromage est keto-friendly, mais il est aussi très addictif et contient un peu de lactose (sucre) et de caséine qui peut être inflammatoire. J'ai vu des dizaines de personnes débloquer leur perte de poids simplement en arrêtant les laitages pendant 15 jours.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">5. L'impatience</h2>
      <p class="mb-4 leading-relaxed">Vous n'avez pas pris ces 10 kilos en 2 semaines, vous ne les perdrez pas en 2 semaines. Le poids fluctue (eau, hormones...). Regardez la tendance sur un mois, pas le chiffre du jour. Prenez vos mensurations. Parfois, on s'affine sans perdre de poids (recomposition corporelle). Tenez bon !</p>
    `,
    author: "JB Keto",
    date: "30 Décembre 2025",
    readTime: "6 min",
    tags: ["Perte de poids", "Erreurs", "Coaching"],
    imageUrl: "/images/article_pourquoi-pas-perte-poids-keto.jpg",
    relatedIds: ["4", "5", "11"],
    type: 'article'
  },
  {
    id: "15",
    slug: "guide-farines-low-carb",
    title: "Farines low carb : le guide ultime pour remplacer le blé",
    excerpt: "Amande, coco, lin... Quelle farine utiliser pour vos gâteaux et pains keto ? Tout savoir pour ne plus rater vos recettes.",
    content: `
      <p class="mb-4 leading-relaxed">Quand on débute le Keto, le premier réflexe est de vouloir recréer nos habitudes. Faire du pain, des gâteaux, des crêpes. On achète de la farine d'amande, on remplace le blé tant pour tant, et... c'est la catastrophe. Le gâteau est plat, friable, ou huileux.</p>

      <p class="mb-4 leading-relaxed">Pourquoi ? Parce que le gluten est une colle magique, et que les farines low carb ne se comportent pas du tout comme la farine de blé. Voici mon guide de survie pour pâtisser sans glucides.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La star : la poudre d'amande</h2>
      <p class="mb-4 leading-relaxed">C'est la plus polyvalente. Elle donne du moelleux et un petit goût de noisette.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Usage :</strong> cookies, fonds de tarte, cakes moelleux (comme mon cake aux lardons).</li>
        <li><strong>Attention :</strong> Elle est riche en oméga-6 et ne "tient" pas bien la structure. Elle brunit vite.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'éponge : la farine de coco</h2>
      <p class="mb-4 leading-relaxed">Elle absorbe des quantités phénoménales de liquide (jusqu'à 4 fois son poids !).</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Usage :</strong> pancakes, muffins.</li>
        <li><strong>Règle d'or :</strong> Ne remplacez jamais la farine d'amande par de la farine de coco à poids égal ! Il en faut 3 à 4 fois moins, et il faut ajouter beaucoup plus d'œufs pour compenser l'effet "sec".</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le liant : le psyllium blond</h2>
      <p class="mb-4 leading-relaxed">Ce n'est pas une farine, c'est une fibre pure. Au contact de l'eau, il forme un gel gluant qui imite le maillage du gluten.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Usage :</strong> indispensable pour le PAIN. C'est lui qui donne le côté "mie aérée" et élastique. Sans lui, votre pain keto sera un bloc friable.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Mon mélange fétiche</h2>
      <p class="mb-4 leading-relaxed">Pour la plupart de mes pâtisseries, je fais un mix : 3 parts de poudre d'amande pour 1 part de farine de coco. L'amande apporte le gras et le moelleux, la coco structure et sèche un peu la pâte. Ajoutez une pincée de gomme xanthane ou de psyllium, et vous blufferez n'importe quel mangeur de gluten.</p>
    `,
    author: "JB Keto",
    date: "31 Décembre 2025",
    readTime: "8 min",
    tags: ["Pâtisserie", "Ingrédients", "Guide"],
    imageUrl: "/images/article_guide-farines-low-carb.jpg",
    relatedIds: ["r15", "r2", "r4"],
    type: 'article'
  },
  {
    id: "16",
    slug: "keto-et-fruits-autorises",
    title: "Keto et fruits : lesquels sont vraiment autorisés ?",
    excerpt: "On dit souvent que les fruits sont interdits en keto. C'est faux ! Découvrez les exceptions sucrées que vous pouvez savourer.",
    content: `
      <p class="mb-4 leading-relaxed">C'est le premier deuil du débutant en keto : adieu bananes, pommes et mangues. On nous répète que le fruit, c'est "le bonbon de la nature", bourré de fructose. C'est vrai. Mais est-ce que cela signifie une vie entière sans fraîcheur fruitée ? Heureusement, non.</p>

      <p class="mb-4 leading-relaxed">Il existe une "liste VIP" de fruits qui, consommés avec modération, ne vous sortiront pas de cétose. Ils sont pauvres en sucre, riches en fibres et en antioxydants. Voici vos nouveaux meilleurs amis.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les baies : les reines du low carb</h2>
      <p class="mb-4 leading-relaxed">Si vous ne deviez en retenir qu'une catégorie, c'est celle-ci. Les fruits rouges sont les moins sucrés.</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Framboises :</strong> Le top du top. 5g de glucides nets pour 100g. Une poignée ne fera pas bouger votre glycémie.</li>
        <li><strong>Mûres :</strong> Similaires aux framboises, excellentes pour la santé.</li>
        <li><strong>Fraises :</strong> Environ 6g de glucides nets. Attention à ne pas les sucrer (ou alors avec de l'érythritol !).</li>
        <li><strong>Myrtilles :</strong> Attention, elles sont plus sucrées (12g). À utiliser avec parcimonie, plutôt comme décoration ou dans un muffin.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le citron : l'allié détox</h2>
      <p class="mb-4 leading-relaxed">On l'oublie souvent car on ne le croque pas, mais le citron est un fruit. Avec 3g de glucides par fruit, c'est un assaisonnement parfait. Un filet de citron sur du poisson ou dans votre eau du matin aide à alcaliniser le corps et donne du peps à vos plats.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les pièges à éviter absolument</h2>
      <p class="mb-4 leading-relaxed">Ne vous laissez pas avoir par les fruits qui "ont l'air" peu sucrés.</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>❌ <strong>La pomme :</strong> Une bombe de fructose (15-20g par fruit).</li>
        <li>❌ <strong>Le raisin :</strong> C'est du pur sucre en billes.</li>
        <li>❌ <strong>La banane :</strong> Une seule banane contient 25g de glucides, soit votre quota journalier entier !</li>
      </ul>

      <p class="mb-4 leading-relaxed">Mon astuce ? Consommez vos fruits avec du gras (crème fouettée, yaourt grec). Le gras ralentit l'absorption du sucre restant et évite le pic d'insuline. La nature est bien faite, non ?</p>
    `,
    author: "JB Keto",
    date: "01 Janvier 2026",
    readTime: "5 min",
    tags: ["Alimentation", "Fruits", "Liste"],
    imageUrl: "/images/article_keto-et-fruits-autorises.jpg",
    relatedIds: ["8", "r11"],
    type: 'article'
  },
  {
    id: "17",
    slug: "manger-keto-restaurant-extraterrestre",
    title: "Manger keto au restaurant sans passer pour un extraterrestre",
    excerpt: "Peur des sorties entre amis ? Voici mes techniques de ninja pour manger low carb partout sans embêter le serveur.",
    content: `
      <p class="mb-4 leading-relaxed">La scène est classique : vous êtes invité au restaurant. Tout le monde commande des pizzas ou des pâtes. Le serveur arrive vers vous, carnet en main. La sueur perle sur votre front. Allez-vous devoir demander la liste des allergènes ? Demander si la sauce contient de la maïzena ? Passer pour le "relou" de service ?</p>

      <p class="mb-4 leading-relaxed">Relax. Après un an de pratique intensive des terrasses, j'ai développé l'art du "Keto Stealth" (le keto furtif). On peut manger keto partout (ou presque) sans que personne ne remarque que vous êtes au régime.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La règle d'or : protéine + légume vert</h2>
      <p class="mb-4 leading-relaxed">C'est la base universelle. Dans n'importe quel bistrot, il y a une viande ou un poisson.
      <br><em>"Je vais prendre l'entrecôte, mais s'il vous plaît, remplacez les frites par de la salade ou des haricots verts."</em>
      <br>C'est tout. 99% des serveurs disent oui avec le sourire. Si on vous demande pourquoi : "Je me sens lourd si je mange des frites le soir". Ça passe beaucoup mieux que "L'insuline inhibe ma lipolyse".</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le cas du burger</h2>
      <p class="mb-4 leading-relaxed">Le burger est en fait très keto-friendly... si on enlève le pain.
      <br>Option 1 (audacieuse) : Demandez-le "sans pain" (naked burger). De plus en plus de lieux le font.
      <br>Option 2 (discrète) : Commandez-le normal, et ne mangez simplement pas le pain. Utilisez vos couverts pour manger l'intérieur. C'est un peu du gaspillage, mais c'est socialement invisible.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les cuisines amies</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Brasseries françaises :</strong> tartare de bœuf (demandez la sauce à part si doute), salade César (sans croûtons), omelettes.</li>
        <li><strong>Japonais :</strong> sashimis à volonté. Soupe miso. Évitez les sushis (riz) et la sauce sucrée (Teriyaki).</li>
        <li><strong>Indien :</strong> poulet tandoori ou tikka (viande grillée). Évitez les sauces crémeuses souvent sucrées et les naans.</li>
        <li><strong>Kebab :</strong> assiette kebab salade-tomate-oignon, sans frites. La viande est grasse, c'est parfait.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le dessert : le test ultime</h2>
      <p class="mb-4 leading-relaxed">C'est là que ça se corse. Oubliez le fondant chocolat. Vos options :
      <br>1. "Juste un café, merci".
      <br>2. Une assiette de fromages (sans le pain !).
      <br>3. Des fraises nature si c'est la saison.
      <br>Et si on insiste ? "Je n'ai plus faim, c'était copieux". Imparable.</p>
    `,
    author: "JB Keto",
    date: "02 Janvier 2026",
    readTime: "6 min",
    tags: ["Lifestyle", "Restaurant", "Social"],
    imageUrl: "/images/article_manger-keto-restaurant-extraterrestre.jpg",
    relatedIds: ["13", "14"],
    type: 'article'
  },
  {
    id: "18",
    slug: "keto-vegan-mission-impossible",
    title: "Keto vegan : mission impossible ?",
    excerpt: "Combiner régime cétogène et véganisme semble relever du casse-tête chinois. Pourtant, c'est possible. Voici comment survivre sans œufs ni fromage.",
    content: `
      <p class="mb-4 leading-relaxed">On me demande souvent : "Peut-on faire le keto si on est vegan ?". Ma première réaction est souvent de grimacer. Le keto classique repose énormément sur les œufs, le beurre, le fromage et la viande. Enlever tout ça tout en enlevant les glucides (céréales, légumineuses, fruits)... il ne reste plus grand chose, non ?</p>

      <p class="mb-4 leading-relaxed">C'est un défi "Hardcore", je ne vais pas mentir. Mais pour des raisons éthiques ou de santé, certains veulent tenter l'aventure. J'ai creusé le sujet pour voir si c'était viable sans devenir fou (ou carencé).</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le problème des protéines</h2>
      <p class="mb-4 leading-relaxed">En vegan classique, on puise ses protéines dans les lentilles, les pois chiches, le quinoa. Impossible en keto, c'est trop riche en glucides.
      <br>La solution ? Le <strong>Tofu</strong>, le <strong>Tempeh</strong> et le <strong>Seitan</strong>.
      <br>Le Tofu est très low carb. Le Tempeh aussi et il est fermenté (bon pour le ventre). Le Seitan est une bombe de protéines pure (gluten), mais attention aux intestins sensibles.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Où trouver le gras ?</h2>
      <p class="mb-4 leading-relaxed">Pas de beurre, pas de crème. Il faut se tourner vers le règne végétal gras :
      <br>🥑 <strong>L'avocat :</strong> Vous allez en manger des kilos. C'est la base.
      <br>🥥 <strong>La coco :</strong> huile de coco, lait de coco, crème de coco. C'est votre nouveau beurre et votre nouvelle crème fraîche.
      <br>🥜 <strong>Les oléagineux :</strong> noix de macadamia (les plus grasses), amandes, noix de pécan.
      <br>🫒 <strong>L'huile d'olive :</strong> À verser partout généreusement.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Attention aux carences</h2>
      <p class="mb-4 leading-relaxed">Le risque de carence est réel, surtout en B12 (comme tout vegan), mais aussi en Fer et en Zinc. La supplémentation est quasi obligatoire. De plus, faire attention à avoir "tous les acides aminés" est crucial. Les protéines en poudre vegan (pois/riz) pauvres en glucides peuvent être une béquille très utile pour atteindre ses quotas sans exploser les carbs.</p>

      <p class="mb-4 leading-relaxed">Verdict ? C'est possible, mais cela demande une organisation militaire. C'est le "Keto niveau Expert". Si vous y arrivez, vous avez tout mon respect.</p>
    `,
    author: "JB Keto",
    date: "03 Janvier 2026",
    readTime: "7 min",
    tags: ["Vegan", "Ethique", "Avancé"],
    imageUrl: "/images/article_keto-vegan-mission-impossible.jpg",
    relatedIds: ["9", "8"],
    type: 'article'
  },
  {
    id: "19",
    slug: "mon-avis-apres-7-ans-de-keto",
    title: "Mon avis après 7 ans de keto : ce qu'on ne vous dit pas",
    excerpt: "7 ans de gras, 0 sucre. Bilan sans filtre d'une odyssée métabolique et de 12 ans de jeûne intermittent.",
    content: `
      <p class="mb-4 leading-relaxed">Sept ans. Sept putains d'années. 2 555 jours (à la louche) à regarder le panier de pain arriver sur la table du restaurant et à dire "Non merci" avec le sourire d'un moine shaolin. Quand j'ai commencé cette aventure, on me regardait comme si j'avais rejoint une secte. "Tu vas te boucher les artères !", "Le cerveau a besoin de sucre !", "C'est dangereux !". Mes amis pariaient sur mon retour au plat de pâtes sous trois mois. Ils ont perdu.</p>

      <p class="mb-4 leading-relaxed">Aujourd'hui, le Keto est partout. C'est devenu chic. On trouve des barres "Keto" emballées dans du plastique brillant à côté des caisses de supermarché. Mais laissez-moi vous dire un truc : le vrai Keto, celui du long terme, celui qui dure 7 ans, n'a rien à voir avec les photos Instagram de plats colorés. C'est une discipline de fer, une transformation biologique profonde, et franchement, c'est l'expérience la plus "gonzo" que j'ai vécue avec mon propre corps.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le jeûne intermittent : mon secret de 12 ans</h2>
      <p class="mb-4 leading-relaxed">Avant même de toucher à une plaquette de beurre, je pratiquais déjà le jeûne intermittent depuis 5 ans. Ça fait donc <strong>12 ans</strong> que je ne petit-déjeune pas. 16h de jeûne, 8h de fenêtre d'alimentation (le fameux 16:8). Quand j'ai ajouté le Keto par-dessus il y a 7 ans, c'était comme verser de l'essence sur un feu. La synergie est nucléaire.</p>
      <p class="mb-4 leading-relaxed">Pourquoi ? Parce que le jeûne vous apprend la discipline, et le Keto vous donne le carburant pour tenir. À 10h du matin, quand mes collègues sont en hypoglycémie et cherchent désespérément un distributeur automatique, je suis en plein vol stationnaire, propulsé par mes propres cétones. Je n'ai pas faim. Je ne suis pas fatigué. Je suis une machine. 12 ans de cette pratique ont nettoyé mes cellules (merci l'autophagie) mieux que n'importe quelle cure "détox" vendue à prix d'or.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La réalité crue du long terme</h2>
      <p class="mb-4 leading-relaxed">Au début, on perd du poids. C'est spectaculaire, c'est grisant. Mais après 7 ans ? On ne perd plus rien. On est stabilisé. On devient "metabolically flexible". Le corps ne lutte plus. Il a compris. Il sait que le gras est la norme.</p>
      <p class="mb-4 leading-relaxed">Mais il y a un prix social. Je suis devenu "ce gars". Celui qui commande un steak avec un supplément de beurre et des haricots verts, sans frites. Celui qui analyse les étiquettes comme un agent du FBI. Au début, ça gêne. On s'excuse. Après 7 ans ? On s'en fout royalement. J'ai vu des gens se goinfrer de sucre et s'effondrer de fatigue une heure après, tandis que je restais frais comme un gardon. J'ai arrêté d'essayer de convaincre. Mes résultats parlent pour moi.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le mythe de la privation</h2>
      <p class="mb-4 leading-relaxed">"Mais ça ne te manque pas, le sucre ?" Honnêtement ? Non. C'est ça que les gens ne comprennent pas. Ce n'est pas de la volonté, c'est de la biochimie. Quand votre cerveau tourne aux cétones, le sucre ressemble à ce qu'il est vraiment : une drogue récréative bas de gamme. J'ai fait quelques écarts en 7 ans, bien sûr. Noël, anniversaires... Et à chaque fois, la punition est immédiate. Maux de tête, léthargie, douleurs articulaires. Le "carb hangover" est pire qu'une gueule de bois à la vodka bon marché. Ça vous rappelle vite à l'ordre.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Une clarté mentale addictive</h2>
      <p class="mb-4 leading-relaxed">Si je continue, ce n'est plus pour mes abdos (même s'ils sont toujours là). C'est pour mon cerveau. Cette clarté mentale, ce "laser focus" que j'ai découvert il y a 7 ans, ne s'est jamais émoussé. C'est ma drogue. Je peux écrire, coder, réfléchir pendant des heures sans la moindre baisse de régime. C'est un super-pouvoir dans un monde de distraction massive.</p>
      <p class="mb-4 leading-relaxed">Alors voilà. 7 ans de gras. 12 ans de jeûne. Et je ne reviendrais en arrière pour rien au monde. Le gras m'a sauvé de la médiocrité métabolique. Si vous hésitez encore, sautez le pas. Mais attention : une fois que vous aurez goûté à cette énergie, vous ne pourrez plus jamais accepter de vous sentir "moyen".</p>
    `,
    author: "JB Keto",
    date: "04 Janvier 2026",
    readTime: "12 min",
    tags: ["Témoignage", "Bilan", "Lifestyle"],
    imageUrl: "/images/article_mon-avis-apres-7-ans-de-keto.jpg",
    relatedIds: ["1", "3", "10"],
    type: 'article'
  },
  {
    id: "20",
    slug: "alcool-et-keto-guide-apero",
    title: "Alcool et keto : le guide de survie pour l'apéro",
    excerpt: "Peut-on boire de l'alcool en régime cétogène ? Oui, mais pas n'importe quoi. Découvrez les alcools autorisés et les pièges à éviter.",
    content: `
      <p class="mb-4 leading-relaxed">"Je ne peux pas, je suis au régime." Combien de fois avez-vous prononcé cette phrase en refusant un verre lors d'une soirée ? La bonne nouvelle, c'est qu'en Keto, la vie sociale ne s'arrête pas. Contrairement aux idées reçues, l'alcool n'est pas strictement interdit. Mais il y a des règles.</p>

      <p class="mb-4 leading-relaxed">L'alcool stoppe temporairement la combustion des graisses (le foie traite l'alcool en priorité), mais si vous choisissez bien, il ne vous sortira pas de cétose. Le secret ? Éviter le sucre caché.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les alcools "feu vert"</h2>
      <p class="mb-4 leading-relaxed">Ce sont les alcools purs, sans glucides (0g). Vous pouvez les consommer secs ou avec de l'eau gazeuse.</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Vodka, gin, tequila, whisky, rhum (blanc ou ambré) :</strong> Attention, évitez les rhums arrangés ou les liqueurs sucrées.</li>
        <li><strong>Champagne et vins mousseux bruts :</strong> Très peu de sucre résiduel. C'est l'option festive par excellence.</li>
        <li><strong>Vins secs :</strong> rouge (Cabernet, Pinot Noir), blanc (Sauvignon, Chardonnay). Comptez environ 2-3g de glucides par verre.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les cocktails à bannir</h2>
      <p class="mb-4 leading-relaxed">Le danger n'est souvent pas l'alcool, mais le "mixer" (le jus ou le soda).</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>❌ <strong>Mojito, piña colada, margarita classique :</strong> C'est du sirop pur.</li>
        <li>❌ <strong>Gin tonic (classique) :</strong> Le tonic est aussi sucré que le Coca ! Prenez du "Diet Tonic" ou de l'eau gazeuse.</li>
        <li>❌ <strong>Bière :</strong> C'est du "pain liquide". Sauf exception (bières très légères ou low carb), c'est non.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Attention à l'ivresse rapide !</h2>
      <p class="mb-4 leading-relaxed">En cétose, l'alcool tape beaucoup plus fort et plus vite. Vous n'avez plus l'éponge de glycogène pour absorber le choc. Buvez un verre d'eau entre chaque verre d'alcool et mangez bien gras avant. Et rappelez-vous : la gueule de bois en keto est légendaire (et douloureuse). Modération est mère de sûreté.</p>
    `,
    author: "JB Keto",
    date: "05 Janvier 2026",
    readTime: "6 min",
    tags: ["Lifestyle", "Alcool", "Guide"],
    imageUrl: "/images/article_alcool-et-keto-guide-apero.jpg",
    relatedIds: ["17", "13"],
    type: 'article'
  },
  {
    id: "21",
    slug: "edulcorants-keto-guide-complet",
    title: "Édulcorants en céto : stevia, érythritol... lequel choisir ?",
    excerpt: "Envie de sucré sans les calories ? Tous les édulcorants ne se valent pas. Voici ceux qui n'impactent pas votre glycémie.",
    content: `
      <p class="mb-4 leading-relaxed">Faire un gâteau keto, c'est de la chimie. Vous ne pouvez pas juste enlever le sucre, il faut le remplacer. Mais par quoi ? Le rayon édulcorant est une jungle : Aspartame, Sucralose, Agave, Coco, Xylitol... Lequel est sain ? Lequel a un arrière-goût bizarre ? Lequel va me sortir de cétose ?</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le roi : l'érythritol</h2>
      <p class="mb-4 leading-relaxed">C'est le standard de l'industrie keto. C'est un alcool de sucre naturel (fermentation du maïs).
      <br><strong>Avantages :</strong> 0 calorie, 0 impact glycémique. Il se digère bien (contrairement à d'autres polyols). Il a du croquant (parfait pour les cookies).
      <br><strong>Inconvénient :</strong> Un léger effet "frais" en bouche (comme la menthe) si on en met trop.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La naturelle : la stevia</h2>
      <p class="mb-4 leading-relaxed">Extraite d'une plante. C'est très puissant (300x le sucre).
      <br><strong>Avantages :</strong> 100% naturel.
      <br><strong>Inconvénient :</strong> Un arrière-goût de réglisse amer que beaucoup détestent. Souvent vendue mélangée à de l'érythritol pour équilibrer.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">À éviter comme la peste</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>❌ <strong>Maltitol :</strong> souvent dans les barres "sans sucre". Il impacte la glycémie (la moitié du sucre) et donne des gaz terribles.</li>
        <li>❌ <strong>Sucre de coco / agave / miel :</strong> Ce SONT des sucres. Naturels, certes, mais pas keto.</li>
        <li>❌ <strong>Aspartame :</strong> Chimique et controversé pour la santé.</li>
      </ul>

      <p class="mb-4 leading-relaxed">Mon conseil ? Achetez un sachet d'érythritol pur (ou un mélange Erythritol/Stevia) pour la pâtisserie. C'est l'investissement le plus rentable pour vos desserts.</p>
    `,
    author: "JB Keto",
    date: "06 Janvier 2026",
    readTime: "7 min",
    tags: ["Ingrédients", "Sucre", "Pâtisserie"],
    imageUrl: "/images/article_edulcorants-keto-guide-complet.jpg",
    relatedIds: ["15", "r2"],
    type: 'article'
  },
  {
    id: "22",
    slug: "comment-savoir-si-je-suis-en-cetose",
    title: "Comment savoir si je suis en cétose ? Les 5 signes qui ne trompent pas",
    excerpt: "Pas besoin de prise de sang coûteuse. Votre corps vous envoie des signaux clairs quand il brûle du gras.",
    content: `
      <p class="mb-4 leading-relaxed">Vous avez coupé les glucides. Vous attendez. Et vous vous demandez : "Ça y est ? Je brûle du gras ?". La cétose est un état métabolique invisible, mais elle laisse des traces. Avant d'acheter un lecteur de cétonémie à 50€, écoutez votre corps.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">1. L'haleine "fruitée" (ou métallique)</h2>
      <p class="mb-4 leading-relaxed">C'est le signe le plus classique. L'acétone (un type de cétone) est évacué par la respiration. Ça ressemble à une odeur de pomme pourrie ou de dissolvant. C'est temporaire, ne vous inquiétez pas ! Brossez-vous les dents plus souvent.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2. La perte d'appétit</h2>
      <p class="mb-4 leading-relaxed">Soudain, vous oubliez de manger. Il est 14h et vous n'avez pas faim. C'est le signe que votre cerveau se nourrit de vos réserves internes. C'est la liberté !</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">3. La soif intense</h2>
      <p class="mb-4 leading-relaxed">Vous buvez des litres et vous allez aux toilettes tout le temps. En perdant le glycogène, vous perdez de l'eau. C'est le moment de boire des électrolytes !</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">4. L'énergie mentale</h2>
      <p class="mb-4 leading-relaxed">Après la fatigue des premiers jours (Keto Flu), le brouillard se lève. Vous vous sentez "sharp", concentré. C'est l'effet des cétones sur le cerveau.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">5. La perte de poids rapide</h2>
      <p class="mb-4 leading-relaxed">Si vous perdez 2kg la première semaine, c'est de l'eau, mais cela confirme que vous avez vidé vos stocks de sucre. La cétose est enclenchée.</p>

      <p class="mb-4 leading-relaxed">Si vous avez ces signes, bravo. Pas besoin de pisser sur une bandelette pour le prouver. Continuez !</p>
    `,
    author: "JB Keto",
    date: "07 Janvier 2026",
    readTime: "5 min",
    tags: ["Débutant", "Santé", "Métabolisme"],
    imageUrl: "/images/article_comment-savoir-si-je-suis-en-cetose.jpg",
    relatedIds: ["5", "7"],
    type: 'article'
  },
  {
    id: "23",
    slug: "keto-cyclique-guide",
    title: "Le keto cyclique (CKD) : booster ses performances sans sortir de cétose ?",
    excerpt: "Le régime cétogène cyclique permet d'intégrer des glucides de manière stratégique. Découvrez si cette méthode avancée est faite pour vous.",
    content: `
      <p class="mb-4 leading-relaxed">Le régime cétogène standard (SKD) est linéaire : peu de glucides, tout le temps. Mais pour certains athlètes ou pratiquants de longue date, le <strong>Keto Cyclique (CKD)</strong> peut être une arme redoutable.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le principe : recharger les batteries</h2>
      <p class="mb-4 leading-relaxed">Le CKD consiste à suivre une diète cétogène stricte pendant 5 à 6 jours, suivie de 1 à 2 jours de "refeed" (recharge) en glucides. L'idée est de remplir les stocks de glycogène musculaire pour soutenir des efforts explosifs intenses la semaine suivante, tout en repassant en cétose rapidement après.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Pour qui ?</h2>
      <p class="mb-4 leading-relaxed">Attention, ce n'est pas pour tout le monde ! C'est réservé aux personnes déjà bien adaptées (fat-adapted) et qui pratiquent une activité physique intense (musculation, sprint, CrossFit). Si vous êtes sédentaire, le CKD ne fera que freiner votre perte de poids.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Comment faire ?</h2>
      <p class="mb-4 leading-relaxed">Le jour de recharge n'est pas une journée "pizza et beignets". On privilégie des glucides propres (riz, patate douce, avoine) et on baisse les lipides ce jour-là. Le lendemain, on reprend le gras et on coupe les glucides. C'est une mécanique de précision.</p>
    `,
    author: "JB Keto",
    date: "08 Janvier 2026",
    readTime: "8 min",
    tags: ["Avancé", "Sport", "Métabolisme"],
    imageUrl: "/images/article_keto-cyclique-guide.jpg",
    relatedIds: ["6", "14"],
    type: 'article'
  },
  {
    id: "24",
    slug: "keto-microbiote-intestins",
    title: "Keto et microbiote : vos bactéries aiment-elles le gras ?",
    excerpt: "On accuse souvent le régime cétogène d'appauvrir la flore intestinale. C'est faux, si on s'y prend bien. Voici comment chouchouter vos intestins.",
    content: `
      <p class="mb-4 leading-relaxed">Nos intestins abritent des milliards de bactéries qui dictent notre immunité, notre humeur et notre poids. On entend souvent que le Keto, pauvre en fibres (car sans céréales), affame ce microbiote. C'est une erreur fréquente, mais évitable.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'erreur du "keto carnivore" strict</h2>
      <p class="mb-4 leading-relaxed">Si vous ne mangez que du fromage et du bacon, effectivement, vos bonnes bactéries vont faire la tête. Mais un régime cétogène bien formulé doit être riche en légumes verts !</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les super-aliments pour le microbiote en keto</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Légumes fermentés :</strong> Choucroute, Kimchi. Ils sont pauvres en glucides et bourrés de probiotiques naturels.</li>
        <li><strong>Fibres prébiotiques :</strong> Asperges, artichauts, ail, oignon, poireaux. Ce sont les engrais de vos bactéries.</li>
        <li><strong>Graines de chia et lin :</strong> Pour le mucilage et le transit.</li>
      </ul>

      <p class="mb-4 leading-relaxed">De plus, le bêta-hydroxybutyrate (cétone principale) nourrit directement les cellules de la paroi intestinale. Un microbiote heureux en keto, c'est possible !</p>
    `,
    author: "JB Keto",
    date: "09 Janvier 2026",
    readTime: "7 min",
    tags: ["Santé", "Microbiote", "Science"],
    imageUrl: "/images/article_keto-microbiote-intestins.jpg",
    relatedIds: ["2", "8"],
    type: 'article'
  },
  {
    id: "25",
    slug: "dirty-keto-danger-sante",
    title: "Dirty keto vs clean keto : pourquoi le bacon ne suffit pas",
    excerpt: "Manger du fast-food sans le pain, est-ce suffisant ? Découvrez pourquoi la qualité des aliments est aussi importante que les macros.",
    content: `
      <p class="mb-4 leading-relaxed">Sur les réseaux sociaux, on voit deux écoles s'affronter : le "Clean Keto" (avocat, saumon, huile d'olive) et le "Dirty Keto" (burger sans pain, charcuterie industrielle, fromage fondu).</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le piège du "Si ça rentre dans les macros" (IIFYM)</h2>
      <p class="mb-4 leading-relaxed">Le Dirty Keto part du principe que tant que vous êtes sous les 20g de glucides, tout va bien. Techniquement, vous serez en cétose. Mais la santé, ce n'est pas juste la cétose.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Pourquoi le Dirty Keto est dangereux à long terme</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Inflammation :</strong> Les huiles végétales transformées (soja, tournesol) souvent présentes dans la malbouffe sont pro-inflammatoires.</li>
        <li><strong>Carences :</strong> Pas de vitamines, pas de minéraux dans un burger industriel.</li>
        <li><strong>Additifs :</strong> Conservateurs et exhausteurs de goût perturbent le métabolisme.</li>
      </ul>

      <p class="mb-4 leading-relaxed">Le Dirty Keto peut dépanner en voyage, mais ne doit pas être un mode de vie. Visez le "Clean" à 80% du temps pour une santé durable.</p>
    `,
    author: "JB Keto",
    date: "10 Janvier 2026",
    readTime: "6 min",
    tags: ["Santé", "Qualité", "Débat"],
    imageUrl: "/images/article_dirty-keto-danger-sante.jpg",
    relatedIds: ["8", "2"],
    type: 'article'
  },
  {
    id: "26",
    slug: "glucides-nets-vs-totaux",
    title: "Glucides nets vs totaux : le guide pour ne plus se tromper",
    excerpt: "Comprendre la différence fondamentale entre glucides totaux et glucides nets pour ne pas saboter votre cétose.",
    content: `
      <p class="mb-4 leading-relaxed">En régime cétogène, on vous répète de "rester sous les 20g de glucides". Mais de quels glucides parle-t-on ? Si vous comptez tout, vous allez mourir de faim (et de frustration). Bienvenue dans le monde merveilleux des <strong>glucides nets</strong>.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La formule magique</h2>
      <div class="bg-stone-100 p-6 rounded-lg my-6 text-center font-bold">
        Glucides Totaux - Fibres - (Certains) Édulcorants = Glucides Nets
      </div>
      <p class="mb-4 leading-relaxed">Pourquoi soustraire les fibres ? Parce que votre corps ne les digère pas. Elles traversent votre système sans impacter votre glycémie ni déclencher d'insuline. Donc, si un avocat contient 12g de glucides mais 10g de fibres, vous ne comptez que 2g ! C'est ce chiffre qui compte pour la cétose.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le piège des édulcorants</h2>
      <p class="mb-4 leading-relaxed">Attention aux étiquettes "Net Carbs" sur les barres industrielles. Elles soustraient souvent les polyols comme le maltitol. Or, le maltitol a un impact glycémique ! Ne soustrayez que l'érythritol et la stévia. Dans le doute, comptez la moitié des polyols pour être sûr.</p>
    `,
    author: "JB Keto",
    date: "11 Janvier 2026",
    readTime: "5 min",
    tags: ["Débutant", "Science", "Mathématiques"],
    imageUrl: "/images/article_glucides-nets-vs-totaux.jpg",
    relatedIds: ["7", "12"],
    type: 'article'
  },
  {
    id: "27",
    slug: "keto-petit-budget",
    title: "Keto petit budget : comment manger cétogène sans se ruiner",
    excerpt: "Le keto coûte cher ? Faux. Voici comment faire vos courses intelligemment pour économiser.",
    content: `
      <p class="mb-4 leading-relaxed">On associe souvent le régime cétogène au saumon sauvage, aux avocats bio et à l'huile MCT hors de prix. C'est un cliché. Mes grands-parents mangeaient "Low Carb" sans le savoir, et ils n'étaient pas riches. Manger gras peut être incroyablement économique.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Vos alliés anti-inflation</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Les œufs :</strong> La protéine la moins chère du marché. Omelettes, œufs durs, œufs cocotte... abusez-en.</li>
        <li><strong>Les conserves :</strong> Sardines, maquereaux, thon. C'est gras, c'est sain, et ça coûte quelques euros.</li>
        <li><strong>La viande hachée :</strong> Prenez du 15% ou 20% de matière grasse. C'est moins cher que le 5% et c'est MEILLEUR pour le keto !</li>
        <li><strong>Les abats :</strong> Foie, cœurs de poulet. Des bombes nutritionnelles à prix cassé.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Ce qui coûte cher (et qui est inutile)</h2>
      <p class="mb-4 leading-relaxed">Arrêtez d'acheter des "pains keto", des "barres keto" ou des "cookies keto" à 3€ l'unité. C'est du marketing. Cuisinez en gros (Batch Cooking) avec des aliments bruts. Votre portefeuille et votre santé vous remercieront.</p>
    `,
    author: "JB Keto",
    date: "12 Janvier 2026",
    readTime: "6 min",
    tags: ["Budget", "Astuces", "Organisation"],
    imageUrl: "/images/article_keto-petit-budget.jpg",
    relatedIds: ["13", "8"],
    type: 'article'
  },
  {
    id: "28",
    slug: "keto-cholesterol-danger",
    title: "Keto et cholestérol : faut-il s'inquiéter pour son cœur ?",
    excerpt: "Démêlons le vrai du faux sur le lien entre graisses saturées, cholestérol et santé cardiovasculaire.",
    content: `
      <p class="mb-4 leading-relaxed">"Tu manges 4 œufs par jour ? Tu vas faire un infarctus !" Si vous faites le Keto, vous avez entendu ça. C'est la vieille école des années 80 qui parle. La science a évolué, mais les mentalités changent lentement. Regardons ce que disent les études récentes.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Cholestérol : la quantité vs la qualité</h2>
      <p class="mb-4 leading-relaxed">Oui, manger gras peut augmenter votre cholestérol total. Mais c'est souvent le "bon" cholestérol (HDL) qui grimpe, tandis que les triglycérides (le vrai danger) s'effondrent grâce à l'absence de sucre. De plus, les particules de LDL (le "mauvais") deviennent plus grosses et moins denses, ce qui les rend moins nocives pour les artères.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'inflammation est la vraie coupable</h2>
      <p class="mb-4 leading-relaxed">Le cholestérol ne bouche pas les artères par magie. Il vient réparer des lésions causées par... l'inflammation. Et qui cause l'inflammation ? Le sucre, le tabac, le stress. En keto, vous réduisez l'inflammation systémique. Donc, même avec un cholestérol un peu plus haut, votre risque cardiovasculaire peut diminuer.</p>

      <p class="mb-4 leading-relaxed">Bien sûr, parlez-en à votre médecin et faites des bilans réguliers. Mais ne diabolisez pas le gras naturel.</p>
    `,
    author: "JB Keto",
    date: "13 Janvier 2026",
    readTime: "7 min",
    tags: ["Santé", "Science", "Cholestérol"],
    imageUrl: "/images/article_keto-cholesterol-danger.jpg",
    relatedIds: ["2", "19"],
    type: 'article'
  },
  {
    id: "29",
    slug: "dangers-glucides-signes-trop",
    title: "Glucides : l'ennemi silencieux et les 5 signes que vous en abusez",
    excerpt: "Fatigue, prise de poids, brouillard mental ? Découvrez pourquoi les glucides pourraient être la cause cachée de vos maux et comment reprendre le contrôle.",
    content: `
      <p class="mb-4 leading-relaxed">Dans notre société moderne, les <strong>glucides</strong> sont partout. Du pain croustillant du matin aux pâtes réconfortantes du soir, en passant par les encas sucrés qui jalonnent nos journées, ils constituent la base de la pyramide alimentaire traditionnelle. Pourtant, de plus en plus de voix s'élèvent pour dénoncer ce que certains appellent désormais "l'ennemi silencieux". Et si votre fatigue chronique, vos kilos en trop et votre manque de concentration n'étaient pas une fatalité, mais le résultat d'une intoxication lente au sucre ?</p>

      <p class="mb-4 leading-relaxed">Pendant des décennies, on nous a vendu l'idée que le gras était l'ennemi. On nous a dit de manger "light", d'éviter le beurre, et de privilégier les céréales complètes. Résultat ? Les taux d'obésité, de diabète de type 2 et de maladies métaboliques n'ont jamais été aussi élevés. La vérité, c'est que nous avons remplacé les graisses naturelles par des glucides raffinés et des sucres cachés. Adopter un <strong>régime cétogène</strong> ou une alimentation <strong>low carb</strong> n'est pas seulement une question de mode ou de perte de poids. C'est une démarche de santé publique face à une épidémie métabolique sans précédent.</p>

      <p class="mb-4 leading-relaxed">Dans cet article dense et détaillé, nous allons explorer en profondeur les mécanismes biologiques par lesquels l'excès de glucides sabote votre santé, souvent sans que vous ne vous en rendiez compte. Nous détaillerons ensuite les 5 signes cliniques majeurs qui prouvent que votre corps crie "STOP" aux glucides, et nous vous donnerons un plan d'action concret pour inverser la vapeur et retrouver votre vitalité.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le mécanisme du piège : comprendre l'insuline et la résistance</h2>

      <h3 class="font-bold text-lg mt-6 mb-2">L'autoroute du glucose</h3>
      <p class="mb-4 leading-relaxed">Pour comprendre le problème, il faut plonger dans la biochimie de base, mais promis, on va faire simple. Lorsque vous consommez des glucides (qu'il s'agisse de sucre blanc, de miel, de féculents comme le riz, les pâtes, les pommes de terre, ou même de fruits très sucrés), votre système digestif les décompose en molécules simples : le glucose. Ce glucose passe rapidement dans votre circulation sanguine, provoquant une montée de la glycémie (le taux de sucre dans le sang).</p>

      <p class="mb-4 leading-relaxed">Le corps humain est conçu pour maintenir une glycémie très stable (environ 4 à 5 grammes de sucre dans tout le sang, soit l'équivalent d'une cuillère à café). Dès que ce taux monte, c'est une urgence physiologique. Le sucre à haute dose est toxique pour les vaisseaux sanguins et les nerfs (pensez aux complications des diabétiques). Pour gérer cet afflux toxique, votre pancréas entre en scène et libère une hormone puissante : l'<strong>insuline</strong>.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">L'insuline : clé et geôlier</h3>
      <p class="mb-4 leading-relaxed">L'insuline agit comme une clé. Elle voyage jusqu'à vos cellules (muscles, foie, graisses) et "ouvre la porte" pour y faire entrer le glucose, qui sera utilisé comme énergie ou stocké. C'est un mécanisme de survie parfait... pour un humain préhistorique qui trouvait un buisson de baies sauvages une fois par an. Mais aujourd'hui, nous sollicitons ce mécanisme non pas une fois par an, mais 5, 6, voire 10 fois par jour (petit-déjeuner, collation, déjeuner, goûter, dîner, dessert...).</p>

      <p class="mb-4 leading-relaxed">À force d'être bombardées d'insuline en permanence, nos cellules finissent par se protéger. Elles "changent la serrure". Elles deviennent sourdes au message de l'insuline. C'est ce qu'on appelle la <strong>résistance à l'insuline</strong>. C'est le début de la fin pour votre métabolisme.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Le cercle vicieux du stockage</h3>
      <p class="mb-4 leading-relaxed">Face à cette résistance, votre pancréas ne s'avoue pas vaincu. Voyant que le sucre ne baisse pas dans le sang, il produit ENCORE PLUS d'insuline, en criant plus fort pour se faire entendre. Vous vous retrouvez alors avec des niveaux d'insuline chroniquement élevés (hyperinsulinémie).</p>

      <p class="mb-4 leading-relaxed">Le drame est là : l'insuline n'est pas seulement l'hormone qui gère le sucre. C'est aussi et surtout l'hormone principale du stockage des graisses (lipogenèse). Tant que l'insuline est élevée dans votre sang, il est physiologiquement <strong>IMPOSSIBLE</strong> de brûler du gras. L'insuline agit comme un verrou sur vos cellules adipeuses. Vous pouvez faire tout le sport que vous voulez, si votre insuline est haute, vous ne déstockerez pas. Vous êtes bloqué en mode "stockage". Votre corps transforme tout excès de sucre en triglycérides et les stocke, souvent au niveau du foie et de l'abdomen.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les 5 signes cliniques que vous êtes intoxiqué aux glucides</h2>
      <p class="mb-4 leading-relaxed">Comment savoir si vous êtes concerné ? Vous n'avez pas forcément besoin d'une prise de sang. Votre corps vous envoie des signaux d'alarme quotidiens. Voici les 5 signes les plus courants d'une intolérance aux glucides.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Signe n°1 : La faim constante, les fringales et l'irritabilité</h3>
      <p class="mb-4 leading-relaxed">C'est le signe le plus évident et le plus pénible. Avez-vous déjà remarqué que vous pouvez manger un énorme plat de pâtes à midi et avoir l'estomac qui gargouille à 14h ? Ou ressentir une envie impérieuse de sucre vers 16h ?</p>

      <p class="mb-4 leading-relaxed">Les glucides, contrairement aux graisses et aux protéines, n'envoient pas de signal de satiété durable au cerveau. Pire, ils créent des montagnes russes glycémiques. Après le pic de sucre du repas, votre pancréas inonde le sang d'insuline. Le sucre chute alors brutalement : c'est l'<strong>hypoglycémie réactionnelle</strong>.</p>

      <p class="mb-4 leading-relaxed">Votre cerveau, qui surveille la glycémie comme le lait sur le feu, panique. Il croit manquer d'énergie (alors que vous avez plein de réserves de gras, mais l'insuline empêche d'y accéder !). Il déclenche alors une alarme chimique violente : faim douloureuse, tremblements, et surtout irritabilité. C'est le fameux état "Hangry" (Hungry + Angry). Vous devenez agressif, incapable de vous concentrer tant que vous n'avez pas mangé un truc sucré. Vous n'êtes pas gourmand, vous êtes sous l'emprise d'une dictature hormonale. En passant au <strong>keto</strong>, votre glycémie devient une ligne droite. La faim disparaît. Vous retrouvez la liberté de ne pas penser à manger toutes les 3 heures.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Signe n°2 : Le brouillard mental et la fatigue après les repas</h3>
      <p class="mb-4 leading-relaxed">Le "coup de barre" de 14h est devenu socialement accepté. On en plaisante à la machine à café. Pourtant, avoir besoin d'une sieste après le déjeuner n'est absolument pas physiologique. Un repas est censé vous donner de l'énergie, pas vous assommer !</p>

      <p class="mb-4 leading-relaxed">Cette fatigue post-prandiale est le signe direct que votre repas était trop riche en glucides. L'afflux massif de sang vers le système digestif et les fluctuations violentes de l'insuline privent temporairement votre cerveau d'une énergie stable. De plus, le sucre favorise la production de sérotonine et de tryptophane, qui ont un effet sédatif.</p>

      <p class="mb-4 leading-relaxed">Au-delà de la fatigue, c'est la qualité de vos pensées qui est affectée. On parle de <strong>brouillard mental</strong> (brain fog). C'est cette sensation d'avoir du coton dans la tête, de devoir relire trois fois la même phrase, de chercher ses mots, d'avoir du mal à se concentrer sur une tâche complexe. On sait aujourd'hui que le cerveau peut développer sa propre résistance à l'insuline ; certains chercheurs appellent même la maladie d'Alzheimer le "diabète de type 3". L'excès de sucre crée une neuro-inflammation chronique. À l'inverse, les corps cétoniques, carburant alternatif utilisé en régime cétogène, sont neuro-protecteurs et offrent une clarté mentale que beaucoup décrivent comme "le passage de la télé analogique à la 4K".</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Signe n°3 : La graisse abdominale tenace (la bouée)</h3>
      <p class="mb-4 leading-relaxed">Regardez-vous dans le miroir. Où stockez-vous votre gras ? Toutes les graisses ne se valent pas. La graisse sous-cutanée (celle qu'on peut pincer sur les bras ou les cuisses) est esthétiquement gênante mais métaboliquement moins dangereuse. En revanche, la <strong>graisse viscérale</strong>, celle qui s'accumule autour des organes et fait grossir le ventre (la fameuse "bedaine" ou "bouée"), est un organe toxique à part entière.</p>

      <p class="mb-4 leading-relaxed">Si vous avez des bras et des jambes relativement fins mais un ventre proéminent, c'est le signe clinique majeur d'une résistance à l'insuline. Cela signifie que votre foie est saturé. Il ne peut plus traiter le sucre et le transforme immédiatement en triglycérides pour le stocker "sur place", autour de lui et des intestins. C'est le début de la stéatose hépatique (foie gras non alcoolique).</p>

      <p class="mb-4 leading-relaxed">Faire des milliers d'abdominaux ne servira strictement à rien. Ce n'est pas un problème musculaire, c'est un problème hormonal. La seule façon de déstocker cette graisse viscérale est de baisser l'insuline. Et pour baisser l'insuline, il faut couper les glucides.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Signe n°4 : Problèmes de peau, acné et rétention d'eau</h3>
      <p class="mb-4 leading-relaxed">L'état de votre peau est le reflet de votre santé intérieure. L'acné adulte, l'eczéma, le psoriasis ou simplement le visage bouffi au réveil sont souvent liés à l'alimentation.</p>

      <p class="mb-4 leading-relaxed">Le sucre est hautement inflammatoire. Il augmente la production de sébum via l'hormone IGF-1 (Insulin-like Growth Factor) et favorise la prolifération bactérienne (l'acné se nourrit de sucre !). De plus, l'hyperglycémie provoque un phénomène appelé <strong>glycation</strong> : le sucre se fixe sur les protéines de collagène et d'élastine de votre peau, les rigidifiant et les cassant. Résultat ? Une peau qui vieillit plus vite, des rides prématurées et un teint terne.</p>

      <p class="mb-4 leading-relaxed">Il y a aussi la question de l'eau. L'insuline provoque une rétention de sodium par les reins, ce qui entraîne une rétention d'eau massive. Beaucoup de personnes qui débutent un régime low carb perdent 2 à 4 kg la première semaine. Ce n'est pas du gras, c'est de l'eau ! Ils "dégonflent" littéralement. Leurs traits s'affinent, leurs chevilles désenflent, leurs bagues flottent aux doigts. Si vous vous sentez "gonflé" en permanence, ne cherchez pas plus loin que votre assiette de féculents.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Signe n°5 : Anxiété, dépression légère et sautes d'humeur</h3>
      <p class="mb-4 leading-relaxed">On pense souvent que l'humeur est uniquement dans la tête. C'est faux. Il existe un lien direct et puissant entre l'intestin et le cerveau (l'axe intestin-cerveau). Une alimentation riche en sucres raffinés nourrit les "mauvaises" bactéries de votre intestin (comme le Candida Albicans) au détriment des bonnes. Cette flore déséquilibrée (dysbiose) envoie des signaux de stress inflammatoire au cerveau.</p>

      <p class="mb-4 leading-relaxed">De plus, les montagnes russes glycémiques sont épuisantes pour le système nerveux. Chaque chute de glycémie (hypoglycémie) est perçue par le corps comme un danger de mort. Pour remonter le sucre d'urgence, les glandes surrénales libèrent de l'adrénaline et du cortisol, les hormones du stress. Résultat ? Vous vous sentez anxieux, nerveux, tremblant, le cœur qui bat vite, sans raison apparente.</p>

      <p class="mb-4 leading-relaxed">Stabiliser sa glycémie, c'est stabiliser son humeur. De nombreux psychiatres nutritionnels (comme le Dr Georgia Ede) recommandent désormais la réduction drastique des glucides comme première ligne de traitement pour les troubles de l'humeur, l'anxiété et même la dépression. Une alimentation cétogène apporte un calme mental profond et une résilience au stress que le sucre vous a volés.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les pièges cachés : les "faux amis"</h2>
      <p class="mb-4 leading-relaxed">"Mais je ne mange pas de bonbons !" me dites-vous. C'est là que le piège se referme. Les glucides ne sont pas que dans les gâteaux.</p>

      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Les jus de fruits :</strong> Même "100% pur jus", c'est du sucre liquide sans les fibres. Un verre de jus d'orange contient autant de sucre qu'un soda. Pour votre foie, c'est la même chose.</li>
        <li><strong>Les produits céréaliers "complets" :</strong> Le pain complet, le riz complet, les céréales "minceur". Certes, ils contiennent un peu plus de fibres, mais ils restent composés à 70% d'amidon, qui n'est rien d'autre qu'une chaîne de molécules de glucose. Une tranche de pain complet élève la glycémie plus vite qu'une cuillère de sucre pur !</li>
        <li><strong>Les produits "Allégés" ou "0%" :</strong> Pour compenser le manque de goût dû à l'absence de gras, les industriels bourrent ces produits de sucre, d'amidon modifié et d'épaississants glucidiques. Un yaourt 0% est souvent une bombe de sucre.</li>
        <li><strong>Les fruits modernes :</strong> Les fruits d'aujourd'hui n'ont rien à voir avec ceux d'il y a 500 ans. Ils ont été sélectionnés génétiquement pour être plus gros, plus beaux et surtout beaucoup plus sucrés. Une pomme moderne est une friandise.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Plan d'action : Comment s'en sortir ?</h2>
      <p class="mb-4 leading-relaxed">Si vous vous êtes reconnu dans ces descriptions, pas de panique. La bonne nouvelle, c'est que ces symptômes sont entièrement réversibles. Le corps humain est une machine d'adaptation incroyable. Dès que vous arrêtez le poison, il commence à guérir.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">1. Le grand nettoyage (Kitchen Detox)</h3>
      <p class="mb-4 leading-relaxed">C'est l'étape la plus dure mais la plus nécessaire. Ouvrez vos placards et votre frigo. Prenez un grand sac poubelle. Jetez (ou donnez à une banque alimentaire) tout ce qui contient du sucre ajouté, de la farine de blé, du sirop de maïs/glucose. Biscuits, céréales, pain de mie, pâtes, riz, pommes de terre, sodas, plats préparés. Si c'est dans la maison, vous le mangerez un moment de faiblesse. Faites place nette.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">2. La règle du remplacement (Swap, don't stop)</h3>
      <p class="mb-4 leading-relaxed">La nature a horreur du vide. Ne vous contentez pas d'enlever, remplacez par meilleur :</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Pâtes ➡️ <strong>Zoodles</strong> (courgettes spiralisées) ou chou-fleur, ou pâtes de Konjac.</li>
        <li>Riz ➡️ <strong>Riz de chou-fleur</strong> (chou-fleur râpé et sauté).</li>
        <li>Purée ➡️ <strong>Purée de céleri-rave</strong> avec beaucoup de beurre.</li>
        <li>Pain ➡️ <strong>Pain keto</strong> à la poudre d'amande et psyllium (voir nos recettes).</li>
        <li>Sucre ➡️ <strong>Érythritol</strong> ou Stevia liquide.</li>
        <li>Huile de tournesol ➡️ <strong>Beurre, Ghee, Huile de Coco, Huile d'olive</strong>.</li>
      </ul>

      <h3 class="font-bold text-lg mt-6 mb-2">3. N'ayez pas peur du gras (lipidophobie)</h3>
      <p class="mb-4 leading-relaxed">C'est l'erreur numéro 1 des débutants. Si vous enlevez les glucides (votre ancienne source d'énergie) ET que vous ne mangez pas assez de gras (votre nouvelle source d'énergie), vous allez droit dans le mur. Vous serez affamé, fatigué et vous craquerez. Augmentez drastiquement votre consommation de bonnes graisses : avocats, œufs, poissons gras, fromages, noix, huile d'olive. Le gras est votre ami. Il est satiétogène (coupe la faim) et c'est le précurseur indispensable de vos hormones sexuelles et de vos membranes cellulaires.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">4. Gérez les électrolytes</h3>
      <p class="mb-4 leading-relaxed">Comme nous l'avons vu, en baissant l'insuline, vous allez perdre beaucoup d'eau. Avec cette eau, vous perdez des minéraux essentiels (Sodium, Magnésium, Potassium). C'est la cause de la fameuse "Keto Flu" (maux de tête, fatigue) des premiers jours. La solution est simple : salez généreusement vos plats (n'ayez pas peur du sel en Low Carb !), buvez des bouillons, mangez des avocats (potassium) et prenez un complément de magnésium le soir.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Conclusion : reprenez le pouvoir</h2>
      <p class="mb-4 leading-relaxed">Les glucides ne sont pas "le mal" absolu, mais leur omniprésence, leur qualité médiocre et les quantités astronomiques que nous consommons aujourd'hui en font un poison lent pour une grande partie de la population. Écoutez votre corps. Si vous êtes fatigué, si vous avez tout le temps faim, si vous stockez du gras au ventre malgré vos efforts, votre corps essaie de vous dire quelque chose. Il crie à l'aide.</p>

      <p class="mb-4 leading-relaxed">Reprendre le contrôle de son insuline, c'est reprendre le contrôle de sa vie. C'est retrouver une énergie stable que vous pensiez perdue avec l'âge. Non, vieillir ne veut pas dire forcément grossir, ralentir et devenir diabétique. C'est souvent juste le signe que votre "moteur" est encrassé par 30 ou 40 ans de sucre. Passez au supercarburant cétogène. Donnez 21 jours à votre corps pour s'adapter. Vous serez stupéfait de voir à quel point la vie est plus légère, plus claire et plus vibrante quand on sort du brouillard sucré.</p>
    `,
    author: "JB Keto",
    date: "14 Janvier 2026",
    readTime: "15 min",
    tags: ["Santé", "Glucides", "Signes"],
    imageUrl: "/images/article_dangers-glucides-signes-trop.jpg",
    relatedIds: ["1", "2", "3"],
    type: 'article'
  },
  {
    id: "30",
    slug: "keto-cancer-science",
    title: "Keto et cancer : ce que dit la science (et ce qu'on ignore encore)",
    excerpt: "Le régime cétogène est-il un allié contre le cancer ? Retour sur l'effet Warburg et les études prometteuses, sans faux espoirs.",
    content: `
      <p class="mb-4 leading-relaxed">C'est un sujet brûlant, sensible, et souvent mal traité par les médias. D'un côté, les "gourous" qui prétendent que le Keto guérit tout. De l'autre, les sceptiques qui crient au danger. La vérité, comme souvent, est nuancée. Faisons le point sur l'état actuel de la recherche scientifique concernant le lien entre régime cétogène et cancer.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'effet Warburg : le talon d'Achille des tumeurs ?</h2>
      <p class="mb-4 leading-relaxed">Tout part d'une découverte du prix Nobel Otto Warburg en 1931. Il a observé que la majorité des cellules cancéreuses ont un métabolisme défaillant : elles sont incapables d'utiliser efficacement l'oxygène pour brûler de l'énergie. Elles dépendent donc presque exclusivement de la <strong>fermentation du glucose</strong> (sucre) pour survivre, même en présence d'oxygène. Elles consomment jusqu'à 200 fois plus de glucose qu'une cellule saine !</p>
      <p class="mb-4 leading-relaxed">L'hypothèse du régime cétogène est donc simple : si on coupe l'approvisionnement en sucre et qu'on force le corps à utiliser des corps cétoniques (graisses), on "affame" les cellules cancéreuses, tandis que les cellules saines s'adaptent parfaitement à ce nouveau carburant.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Ce que disent les études (souris et humains)</h2>
      <p class="mb-4 leading-relaxed">Chez l'animal, les résultats sont souvent spectaculaires. De nombreuses études montrent un ralentissement de la croissance tumorale, voire une régression, notamment pour les glioblastomes (cerveau) et certains cancers digestifs.</p>
      <p class="mb-4 leading-relaxed">Chez l'humain, les essais cliniques sont en cours. On sait déjà que le régime est sûr et bien toléré par les patients sous chimiothérapie. Il semble améliorer la qualité de vie, réduire la fatigue et pourrait potentialiser l'effet de certains traitements classiques (comme la radiothérapie) en sensibilisant les cellules tumorales.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Attention : ce n'est pas un remède miracle</h2>
      <p class="mb-4 leading-relaxed">Il est crucial de rester prudent. Le Keto ne remplace pas les traitements conventionnels. De plus, certains cancers rares (dits "sans effet Warburg") peuvent utiliser d'autres carburants. C'est donc une stratégie <strong>complémentaire</strong> prometteuse, à discuter impérativement avec son oncologue. La recherche avance vite, et l'espoir d'une approche métabolique du cancer grandit chaque jour.</p>
    `,
    author: "JB Keto",
    date: "15 Janvier 2026",
    readTime: "8 min",
    tags: ["Santé", "Science", "Cancer"],
    imageUrl: "/images/article_keto-cancer-science.jpg",
    relatedIds: ["1", "2", "29"],
    type: 'article'
  },
  {
    id: "31",
    slug: "keto-vs-low-carb-differences",
    title: "Keto vs low carb : lequel est fait pour vous ?",
    excerpt: "On les confond souvent, mais leurs règles et leurs effets sont différents. Découvrez quelle méthode correspond à votre mode de vie.",
    content: `
      <p class="mb-4 leading-relaxed">"Je mange moins de pain, je fais le keto, non ?" Pas tout à fait. Si le régime Cétogène (Keto) et le Low Carb (faible en glucides) sont cousins, ils ne jouent pas dans la même cour. L'un est un changement métabolique radical, l'autre est un rééquilibrage alimentaire plus souple. Comparons-les pour vous aider à choisir.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le keto : la rigueur pour la cétose</h2>
      <p class="mb-4 leading-relaxed"><strong>La règle :</strong> Moins de 20g de glucides par jour (environ 5% des calories). 75% de lipides.</p>
      <p class="mb-4 leading-relaxed"><strong>Le but :</strong> Forcer le foie à produire des cétones. C'est un état binaire : on y est ou on n'y est pas. Un écart (une pomme, un morceau de pain) peut vous sortir de cétose pour 24h.</p>
      <p class="mb-4 leading-relaxed"><strong>Pour qui ?</strong> Ceux qui cherchent une perte de poids rapide, des bénéfices thérapeutiques (épilepsie, diabète type 2 sévère), ou une clarté mentale intense (effet nootropique des cétones).</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le low carb : la souplesse durable</h2>
      <p class="mb-4 leading-relaxed"><strong>La règle :</strong> Entre 50g et 100g de glucides par jour.</p>
      <p class="mb-4 leading-relaxed"><strong>Le but :</strong> Réduire l'insuline et l'inflammation sans forcément atteindre la cétose profonde. Vous pouvez manger un peu de fruits, de patates douces ou de légumineuses.</p>
      <p class="mb-4 leading-relaxed"><strong>Pour qui ?</strong> Ceux qui veulent perdre du poids plus lentement mais sûrement, sans renoncer à toute vie sociale, ou les sportifs très actifs qui ont besoin de plus de glycogène.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Mon conseil</h2>
      <p class="mb-4 leading-relaxed">Commencez par 3 semaines de Keto strict pour "désintoxiquer" votre corps du sucre et devenir "fat-adapted". Ensuite, selon votre ressenti, glissez vers un Low Carb libéral ou restez en Keto. L'important n'est pas l'étiquette, c'est de garder l'insuline basse !</p>
    `,
    author: "JB Keto",
    date: "16 Janvier 2026",
    readTime: "6 min",
    tags: ["Débutant", "Comparatif", "Méthode"],
    imageUrl: "/images/article_keto-vs-low-carb-differences.jpg",
    relatedIds: ["7", "26", "14"],
    type: 'article'
  },
  {
    id: "32",
    slug: "alternatives-pain-keto",
    title: "Les meilleures alternatives au pain : ne craquez plus !",
    excerpt: "Le manque de pain est la cause n°1 d'abandon du régime. Voici 3 alternatives testées et approuvées pour vos tartines.",
    content: `
      <p class="mb-4 leading-relaxed">En France, le pain c'est sacré. C'est le support du fromage, l'outil pour saucer, le croustillant du matin. L'arrêter est souvent une torture psychologique. Heureusement, la cuisine Keto a fait des bonds de géant. Fini les "pains" qui ressemblent à des omelettes. Voici le podium des meilleures alternatives.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">1. Le "fathead dough" (pâte à base de mozzarella)</h2>
      <p class="mb-4 leading-relaxed">C'est la star des réseaux sociaux. En faisant fondre de la mozzarella avec du cream cheese et en ajoutant de la poudre d'amande, on obtient une pâte élastique, idéale pour les pizzas, les bagels ou les bun's. C'est riche, fromager et très rassasiant.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2. Le pain au psyllium (le plus réaliste)</h2>
      <p class="mb-4 leading-relaxed">Le psyllium est une fibre qui gonfle au contact de l'eau et crée un gel gluant imitant le gluten. Mélangé à de la poudre d'amande, il permet de faire de vraies miches de pain qui se tranchent et se grillent. La texture mie est bluffante. C'est mon favori pour les tartines du matin.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">3. Le cloud bread (le plus léger)</h2>
      <p class="mb-4 leading-relaxed">3 ingrédients : oeufs, fromage frais, levure. C'est une sorte de galette soufflée, très aérienne (d'où le nom "Nuage"). C'est parfait pour un sandwich léger, mais ça manque un peu de consistance pour saucer un plat.</p>

      <p class="mb-4 leading-relaxed">Ne restez pas frustré. Avec ces recettes (disponibles sur le site !), vous pouvez continuer à "saucer" votre bœuf bourguignon sans culpabilité.</p>
    `,
    author: "JB Keto",
    date: "17 Janvier 2026",
    readTime: "5 min",
    tags: ["Alimentation", "Pain", "Astuces"],
    imageUrl: "/images/article_alternatives-pain-keto.jpg",
    relatedIds: ["r15", "r21", "r24"],
    type: 'article'
  },
  {
    id: "33",
    slug: "quand-faire-des-pauses-keto",
    title: "Faut-il faire des pauses en keto ? Le guide du cyclage",
    excerpt: "Rester en cétose à vie ou alterner ? Découvrez quand et comment faire des pauses stratégiques pour optimiser vos résultats sur le long terme.",
    content: `
      <p class="mb-4 leading-relaxed">Une des questions les plus fréquentes en alimentation cétogène : <strong>faut-il rester en keto toute sa vie ?</strong> La réponse courte : non, pas forcément. Le cyclage peut même être bénéfique.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Qu'est-ce que le cyclage keto ?</h2>
      <p class="mb-4 leading-relaxed">Le cyclage consiste à alterner des périodes de cétose stricte avec des périodes où l'on réintroduit des glucides. Ce n'est pas "tricher" — c'est une stratégie délibérée qui peut améliorer vos résultats.</p>
      
      <blockquote class="border-l-4 border-brand-500 pl-4 italic my-6 text-stone-600 bg-stone-100 py-2 pr-2 rounded-r">
        "La flexibilité métabolique, c'est la capacité de votre corps à utiliser efficacement les glucides ET les graisses comme carburant."
      </blockquote>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Quand envisager une pause ?</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Après 3-6 mois de keto strict :</strong> Votre métabolisme s'est adapté, une pause peut relancer certaines hormones (leptine, thyroïde).</li>
        <li><strong>Plateau de perte de poids :</strong> Si vous stagnez depuis plusieurs semaines malgré un déficit calorique.</li>
        <li><strong>Performance sportive :</strong> Les athlètes d'endurance ou de force peuvent bénéficier de recharges glycogène.</li>
        <li><strong>Événements sociaux :</strong> Mieux vaut une pause planifiée qu'un "craquage" culpabilisant.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Comment bien cycler ?</h2>
      <p class="mb-4 leading-relaxed">Il y a plusieurs approches :</p>
      
      <div class="bg-stone-100 p-6 rounded-lg my-6">
        <h3 class="font-bold text-lg mb-2">Les 3 méthodes populaires</h3>
        <ul class="list-none space-y-2">
          <li>🔄 <strong>Cyclique hebdomadaire :</strong> 5-6 jours keto, 1-2 jours glucides (50-150g)</li>
          <li>📅 <strong>Cyclique mensuel :</strong> 3 semaines keto, 1 semaine low-carb modéré</li>
          <li>🎯 <strong>Ciblé (TKD) :</strong> Glucides uniquement autour des entraînements intenses</li>
        </ul>
      </div>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les règles d'or</h2>
      <p class="mb-4 leading-relaxed">Pendant vos phases "off" :</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>Privilégiez les glucides complexes (patates douces, riz, fruits) plutôt que le sucre raffiné</li>
        <li>Gardez les protéines élevées pour préserver la masse musculaire</li>
        <li>Ne vous gavez pas — c'est une pause, pas un buffet à volonté</li>
        <li>Revenez en keto sans culpabilité</li>
      </ul>

      <p class="mb-4 leading-relaxed">Le vrai objectif à long terme n'est pas de rester en cétose éternellement, mais de développer une <strong>flexibilité métabolique</strong> qui vous permet de brûler efficacement n'importe quel carburant.</p>
    `,
    author: "JB Rives",
    date: "18 Janvier 2026",
    readTime: "4 min",
    tags: ["Stratégie", "Cyclage", "Long terme"],
    imageUrl: "/images/article_quand-faire-des-pauses-keto.jpg",
    relatedIds: ["1", "3"],
    type: 'article'
  },
  {
    id: "34",
    slug: "keto-cholesterol-danger",
    title: "Keto et cholestérol : faut-il s'inquiéter ?",
    excerpt: "Votre médecin s'inquiète de votre taux de cholestérol depuis que vous mangez gras ? Démêlons le vrai du faux sur le LDL et le HDL.",
    content: `
      <p class="mb-4 leading-relaxed">C'est le scénario classique : vous perdez du poids, vous avez une énergie folle, mais votre médecin fronce les sourcils devant votre bilan sanguin. "Votre cholestérol a augmenté". Faut-il paniquer et jeter votre beurre ? Pas si vite.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La vieille science vs la nouvelle</h2>
      <p class="mb-4 leading-relaxed">Pendant 50 ans, on a cru que manger du cholestérol (oeufs, viande) bouchait les artères. Aujourd'hui, la science est claire : pour la majorité des gens, le cholestérol alimentaire n'a que peu d'impact sur le cholestérol sanguin.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">LDL : la taille compte</h2>
      <p class="mb-4 leading-relaxed">On distingue souvent le "bon" (HDL) et le "mauvais" (LDL). Mais saviez-vous qu'il y a deux types de LDL ?
      <br>1. Les petites particules denses (dangereuses, liées au sucre et à l'inflammation).
      <br>2. Les grosses particules floconneuses (liées au gras saturé, généralement inoffensives).
      <br>En keto, le LDL total monte souvent, mais ce sont les grosses particules qui augmentent, tandis que les triglycérides (le vrai danger) s'effondrent.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le ratio triglycérides / HDL</h2>
      <p class="mb-4 leading-relaxed">C'est le marqueur le plus fiable. Si vos triglycérides sont bas (grâce à l'absence de sucre) et votre HDL est haut (grâce au gras), votre risque cardiaque est généralement faible, quel que soit votre LDL total. Parlez-en à un médecin à jour sur les dernières données !</p>
    `,
    author: "JB Keto",
    date: "19 Janvier 2026",
    readTime: "8 min",
    tags: ["Santé", "Science", "Cholestérol"],
    imageUrl: "/images/article_keto-cholesterol-danger.jpg",
    relatedIds: ["2", "7"],
    type: 'article'
  },
  {
    id: "35",
    slug: "keto-budget-economique",
    title: "Keto pas cher : manger sain sans se ruiner",
    excerpt: "On pense souvent que manger sain coûte cher. Faux ! Voici comment faire le régime cétogène avec un petit budget.",
    content: `
      <p class="mb-4 leading-relaxed">Saumon sauvage, avocats bio, huile MCT... L'image d'Épinal du Keto est celle d'un régime de riche. Pourtant, nos grands-parents mangeaient gras et pas cher. Le secret ? Revenir aux basiques.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les œufs : votre meilleure arme</h2>
      <p class="mb-4 leading-relaxed">C'est la protéine la moins chère du marché et la plus complète. Omelettes, œufs durs, œufs brouillés... À moins de 3€ la douzaine, c'est imbattable.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les morceaux de viande "oubliés"</h2>
      <p class="mb-4 leading-relaxed">Laissez le filet mignon aux autres. En Keto, on veut du gras !
      <br>- Le porc (échine, travers) est très bon marché.
      <br>- Les cuisses de poulet (avec peau) sont deux fois moins chères que les blancs.
      <br>- La viande hachée à 20% de matière grasse est moins chère et meilleure pour vous que la 5%.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le surgelé est votre ami</h2>
      <p class="mb-4 leading-relaxed">Les légumes verts (épinards, brocolis, haricots) sont souvent moins chers surgelés et tout aussi nutritifs. Pas de gaspillage, on prend juste ce dont on a besoin.</p>

      <p class="mb-4 leading-relaxed">Manger Keto, c'est aussi arrêter d'acheter des sodas, des gâteaux, des plats préparés. Faites le calcul : votre caddie sera probablement moins cher qu'avant !</p>
    `,
    author: "JB Keto",
    date: "20 Janvier 2026",
    readTime: "6 min",
    tags: ["Budget", "Astuces", "Débutant"],
    imageUrl: "/images/article_keto-budget-economique.jpg",
    relatedIds: ["8", "13"],
    type: 'article'
  },
  {
    id: "36",
    slug: "keto-femme-hormones",
    title: "Keto pour les femmes : ce qui change",
    excerpt: "Le corps féminin ne réagit pas comme celui des hommes. Hormones, cycle menstruel, jeûne... Voici comment adapter le keto.",
    content: `
      <p class="mb-4 leading-relaxed">Messieurs, vous avez de la chance. Vous arrêtez le sucre, et vous perdez 5kg en une semaine. Pour nous les femmes, c'est... plus compliqué. Nos hormones (œstrogènes, progestérone, cortisol) sont sensibles au stress, et un régime strict EST un stress.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La semaine avant les règles</h2>
      <p class="mb-4 leading-relaxed">C'est la zone rouge. Votre corps a naturellement besoin de plus de glucides pour produire de la progestérone.
      <br><strong>Conseil :</strong> N'essayez pas de jeûner cette semaine-là. Augmentez légèrement vos glucides (jusqu'à 50g-70g) avec des légumes racines (patate douce, carotte). Soyez douce avec vous-même.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Attention au jeûne excessif</h2>
      <p class="mb-4 leading-relaxed">Si le jeûne intermittent est génial, il peut dérégler le cycle chez certaines femmes s'il est trop agressif (OMAD). Commencez doucement (12h, puis 14h).</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La thyroïde</h2>
      <p class="mb-4 leading-relaxed">Une restriction calorique ou glucidique trop sévère peut ralentir la thyroïde (T3). Si vous avez froid, perdez vos cheveux ou stagnez, faites une pause "refeed" en glucides sains une fois par semaine. Le Keto féminin est un marathon, pas un sprint.</p>
    `,
    author: "JB Keto",
    date: "21 Janvier 2026",
    readTime: "7 min",
    tags: ["Femmes", "Hormones", "Santé"],
    imageUrl: "/images/article_keto-femme-hormones.jpg",
    relatedIds: ["4", "14"],
    type: 'article'
  },
  {
    id: "37",
    slug: "meilleurs-snacks-keto",
    title: "Les meilleurs snacks keto pour les fringales",
    excerpt: "Une petite faim ? Ne craquez pas sur le distributeur ! Voici la liste des snacks keto compatibles pour tenir jusqu'au dîner.",
    content: `
      <p class="mb-4 leading-relaxed">Idéalement, en Keto, on n'a pas besoin de snacker car les repas gras nous calent. Mais bon, la vie n'est pas linéaire. Un coup de stress, un retard, une envie... Avoir les bons snacks à portée de main est la clé pour ne pas plonger la tête dans un paquet de chips.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le top 3 des valeurs sûres</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Les oléagineux :</strong> Amandes, noix de pécan, noix de macadamia (le top du gras !). Attention aux noix de cajou (trop de glucides). Une petite poignée suffit.</li>
        <li><strong>Le fromage :</strong> Un bâtonnet de comté, un Babybel, un morceau de cheddar. Protéines + Gras = Satiété.</li>
        <li><strong>Les œufs durs :</strong> Préparez-en 6 le dimanche. C'est le snack parfait, transportable et nutritif.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Pour les envies de salé</h2>
      <p class="mb-4 leading-relaxed">Cornichons (sans sucre), olives, tranches de saucisson sec, chips de parmesan (faites-les fondre au four !).</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Pour les envies de sucré</h2>
      <p class="mb-4 leading-relaxed">Un carré de chocolat noir 90% (ou 100% pour les guerriers). Une poignée de framboises. Ou une Fat Bomb maison (huile de coco + cacao + stevia).</p>
    `,
    author: "JB Keto",
    date: "22 Janvier 2026",
    readTime: "5 min",
    tags: ["Snack", "Alimentation", "Pratique"],
    imageUrl: "/images/article_meilleurs-snacks-keto.jpg",
    relatedIds: ["8", "r23"],
    type: 'article'
  },
  {
    id: "38",
    slug: "keto-en-pharmacie-guide-achat",
    title: "Keto en pharmacie : le guide des produits utiles (et inutiles)",
    excerpt: "Bandelettes, électrolytes, compléments... Que faut-il vraiment acheter en pharmacie pour le régime cétogène ? Le tri entre les indispensables et les arnaques.",
    content: `
      <p class="mb-4 leading-relaxed">On pense souvent que le régime cétogène se passe uniquement au supermarché ou chez le boucher. Pourtant, votre pharmacien peut devenir un allié précieux... à condition de savoir quoi lui demander. Car au milieu des rayons, le meilleur côtoie le pire.</p>

      <p class="mb-4 leading-relaxed">Entre les gadgets marketing qui surfent sur la tendance "Keto" et les véritables outils de santé métabolique, il est facile de se perdre (et de perdre de l'argent). Voici votre guide d'achat pour ne revenir qu'avec l'essentiel.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les indispensables : ce qui vous sauvera la mise</h2>

      <h3 class="font-bold text-lg mt-6 mb-2">1. Les électrolytes (la base de la survie)</h3>
      <p class="mb-4 leading-relaxed">C'est l'achat numéro 1. En début de cétose, vous perdez de l'eau et des minéraux. Si vous ne voulez pas subir la "Keto Flu" (maux de tête, fatigue), filez en pharmacie.</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Magnésium :</strong> Cherchez du <em>Citrate</em>, du <em>Bisglycinate</em> ou du <em>Malate</em>. Évitez l'oxyde de magnésium (le moins cher) qui est très mal absorbé et donne... la courante.</li>
        <li><strong>Potassium :</strong> Demandez du <em>Diffu-K</em> ou un générique. C'est souvent plus dosé et moins cher que les compléments "sportifs".</li>
      </ul>

      <h3 class="font-bold text-lg mt-6 mb-2">2. Les bandelettes de test (pour débuter)</h3>
      <p class="mb-4 leading-relaxed">Pour savoir si vous êtes en cétose au début, les bandelettes urinaires (type <em>Keto-Diastix</em>) sont très utiles et peu coûteuses (environ 10-15€). Elles virent au violet si vous produisez des cétones. Attention : après quelques semaines, elles deviennent moins fiables car votre corps utilise les cétones au lieu de les pisser !</p>

      <h3 class="font-bold text-lg mt-6 mb-2">3. La vitamine D3</h3>
      <p class="mb-4 leading-relaxed">La majorité de la population est carencée. En pharmacie, vous trouverez des ampoules (type <em>ZymaD</em>) ou des gouttes huileuses très efficaces et remboursées sur ordonnance (ou très peu chères sans).</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les "Pourquoi pas" : le confort</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Huile MCT (Triglycérides à Chaîne Moyenne) :</strong> Certaines grandes parapharmacies en vendent. C'est un booster de cétones, utile pour l'énergie mentale ou le café gras.</li>
        <li><strong>Lecteur de glycémie/cétonémie :</strong> Pour les biohackers. Des marques comme <em>Freestyle</em> permettent de mesurer le glucose et les cétones sanguines (avec des bandelettes spéciales). C'est le "Gold Standard" de la mesure, mais le budget bandelettes est conséquent.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les arnaques à fuir absolument</h2>
      <p class="mb-4 leading-relaxed">C'est là que le marketing devient vicieux. Ne vous faites pas avoir par des emballages flashy.</p>

      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>❌ <strong>Les gélules "Keto Minceur" / "Brûleur de graisse" :</strong> Elles contiennent souvent juste de la caféine et du thé vert, vendus 5 fois le prix. Aucune gélule ne vous mettra en cétose si vous mangez des pâtes.</li>
        <li>❌ <strong>Les substituts de repas "Protéinés" :</strong> Regardez l'étiquette. Le premier ingrédient est souvent du sirop de glucose ou des protéines de lait bas de gamme bourrées de lactose. C'est l'inverse du Keto.</li>
        <li>❌ <strong>Les sels de cétones exogènes (parfois) :</strong> Vendus très cher, ils colorent votre bandelette en violet mais ne vous font pas brûler votre propre gras. Utile pour la performance sportive de haut niveau, inutile pour maigrir.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le conseil de la fin</h2>
      <p class="mb-4 leading-relaxed">Votre pharmacien est un expert du médicament, mais pas toujours de la nutrition cétogène. S'il vous dit que "le gras c'est mauvais pour le cœur" ou que "le cerveau a besoin de sucre", souriez, achetez votre magnésium, et filez. La science avance, mais parfois lentement.</p>
    `,
    author: "JB Keto",
    date: "23 Janvier 2026",
    readTime: "6 min",
    tags: ["Santé", "Guide", "Achat"],
    imageUrl: "/images/article_keto-en-pharmacie-guide-achat.jpg",
    relatedIds: ["12", "29", "5"],
    type: 'article'
  },
  {
    id: "39",
    slug: "keto-menopause-guide",
    title: "Keto et ménopause : la stratégie gagnante pour ne pas prendre de poids",
    excerpt: "Bouffées de chaleur, prise de poids, fatigue... Le régime cétogène peut-il aider à traverser la ménopause ? Réponses et conseils pratiques.",
    content: `
      <p class="mb-4 leading-relaxed">"Je n'ai rien changé à mon alimentation, et pourtant j'ai pris 5kg sur le ventre".</p>

      <p class="mb-4 leading-relaxed">C'est une histoire que j'entends trop souvent. Je reçois régulièrement des emails de lectrices désemparées qui voient leur corps changer à l'approche de la cinquantaine, sans comprendre pourquoi.</p>

      <p class="mb-4 leading-relaxed">La ménopause est un bouleversement hormonal majeur. Et vous le savez si vous lisez ce blog : <strong>les hormones contrôlent votre poids.</strong></p>

      <p class="mb-4 leading-relaxed">La chute des œstrogènes entraîne une diminution de la sensibilité à l'insuline. Résultat ? Ce qui ne vous faisait pas grossir à 30 ans vous fait stocker à 50. La petite part de tarte ou le plat de pâtes du soir, qui passaient inaperçus il y a dix ans, se paient aujourd'hui cash.</p>

      <p class="mb-4 leading-relaxed">Le régime cétogène (ou Keto) est particulièrement adapté à cette période de vie pour plusieurs raisons. Il attaque le problème à la racine : l'insuline.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'ennemi : la résistance à l'insuline</h2>
      <p class="mb-4 leading-relaxed">Avec l'âge, nos cellules tolèrent moins bien les glucides. Elles deviennent un peu "sourdes" au message de l'insuline.</p>

      <p class="mb-4 leading-relaxed">En réduisant drastiquement le sucre et les féculents, vous mettez votre pancréas au repos. Vous forcez votre corps à changer de carburant et à déstocker la graisse viscérale, celle-là même qui s'installe insidieusement autour de la taille à la ménopause.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les bouffées de chaleur et le sucre</h2>
      <p class="mb-4 leading-relaxed">C'est un bénéfice auquel on ne pense pas forcément. De nombreuses femmes me rapportent une diminution spectaculaire des bouffées de chaleur en stabilisant leur glycémie.</p>

      <p class="mb-4 leading-relaxed">Les montagnes russes de sucre dans le sang (l'hypoglycémie réactionnelle après un repas riche en glucides) semblent être un déclencheur fréquent. En passant au Keto, vous lissez ces pics, et vous retrouvez une énergie plus stable.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Attention aux os et aux muscles</h2>
      <p class="mb-4 leading-relaxed">Le risque d'ostéoporose et de fonte musculaire (sarcopénie) augmente avec l'âge. C'est souvent là que l'on me demande : "Mais JB, est-ce que c'est dangereux de manger trop de protéines ?"</p>

      <p class="mb-4 leading-relaxed">Au contraire. Votre Keto doit être riche en nutriments essentiels :</p>

      <p class="mb-4 leading-relaxed"><strong>Protéines</strong> : Ne lésinez pas sur la viande, le poisson et les œufs. Visez au moins 1.2g par kg de poids de corps. C'est indispensable pour maintenir votre masse musculaire.</p>

      <p class="mb-4 leading-relaxed"><strong>Légumes verts</strong> : Pour le calcium, le potassium et le magnésium.</p>

      <p class="mb-4 leading-relaxed"><strong>Exercice de résistance</strong> : Soulevez des poids ! Oubliez les petits haltères roses de 1kg. C'est le meilleur signal anabolique pour renforcer vos os.</p>

      <p class="mb-4 leading-relaxed">La ménopause n'est pas une fatalité. C'est le moment idéal pour réinitialiser votre métabolisme et reprendre le contrôle.</p>
    `,
    author: "JB Keto",
    date: "24 Janvier 2026",
    readTime: "7 min",
    tags: ["Femmes", "Ménopause", "Santé"],
    imageUrl: "/images/article_keto-menopause-guide.jpg",
    relatedIds: ["36", "14"],
    type: 'article'
  },
  {
    id: "40",
    slug: "keto-vs-carnivore-differences",
    title: "Régime Carnivore vs Keto : faut-il vraiment supprimer les légumes ?",
    excerpt: "Le régime Carnivore est la version extrême du Keto. Plus de fibres, plus de végétaux. Est-ce dangereux ou miraculeux ? Le match.",
    content: `
      <p class="mb-4 leading-relaxed">Si le Keto était un sport, le Carnivore serait les Jeux Olympiques.</p>

      <p class="mb-4 leading-relaxed">Quand j'ai entendu parler de ce régime pour la première fois, j'ai cru à une blague. Le principe est simple : on ne mange que des produits animaux. Viande, poisson, œufs, beurre. C'est tout.</p>

      <p class="mb-4 leading-relaxed">Pas de légumes, pas d'avocat, pas d'huile d'olive, pas de noix.</p>

      <p class="mb-4 leading-relaxed">Cela vous semble fou ? Je vous comprends. Pourtant, des milliers de personnes, dont des médecins respectés comme le Dr Paul Saladino ou le Dr Shawn Baker, ne jurent que par ça.</p>

      <p class="mb-4 leading-relaxed">Pourquoi aller si loin alors que le Keto marche déjà très bien ?</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'argument des "anti-nutriments"</h2>
      <p class="mb-4 leading-relaxed">J'ai toujours recommandé de manger des légumes. Mais la théorie Carnivore repose sur une idée intéressante : les plantes ont des mécanismes de défense.</p>

      <p class="mb-4 leading-relaxed">Contrairement aux animaux qui peuvent s'enfuir ou se défendre avec des griffes, les plantes sont immobiles. Pour ne pas être mangées, elles développent des armes chimiques : oxalates, lectines, phytates.</p>

      <p class="mb-4 leading-relaxed">Pour la majorité d'entre nous, ce n'est pas un problème. Mais pour certaines personnes sensibles (maladies auto-immunes, intestins très irritables), ces composés peuvent être de véritables agresseurs.</p>

      <p class="mb-4 leading-relaxed">Supprimer <strong>TOUS</strong> les végétaux apporte alors un soulagement que même le Keto ne donnait pas. C'est radical, mais pour certains, c'est la seule solution qui marche.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Et les fibres dans tout ça ?</h2>
      <p class="mb-4 leading-relaxed">C'est le grand débat. On nous répète depuis toujours que les fibres sont indispensables au transit.</p>

      <p class="mb-4 leading-relaxed">Les pratiquants du Carnivore prouvent le contraire : leur digestion est souvent parfaite. La logique est implacable : sans fibres, il y a moins de résidus, donc moins de ballonnements et d'irritation.</p>

      <p class="mb-4 leading-relaxed">J'étais sceptique, mais les témoignages sont là. Parfois, faire l'inverse des recommandations officielles réserve des surprises.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Keto vs Carnivore : lequel choisir ?</h2>
      <p class="mb-4 leading-relaxed">Alors, faut-il arrêter la salade ?</p>

      <p class="mb-4 leading-relaxed">Pour être honnête, le Keto reste le meilleur choix pour la majorité d'entre vous. Il est socialement plus acceptable (essayez d'expliquer au restaurant que vous ne mangez que le steak sans rien d'autre), plus varié et plus gourmand. On peut se faire plaisir.</p>

      <p class="mb-4 leading-relaxed">Le Carnivore est un <strong>régime d'élimination ultime</strong>.</p>

      <p class="mb-4 leading-relaxed">C'est un outil puissant, à tester sur 30 jours si vous avez des problèmes de peau, d'articulations ou de digestion qui résistent au Keto classique.</p>

      <p class="mb-4 leading-relaxed">Mais attention, c'est monotone ! Si vous n'avez pas de soucis de santé majeurs, profitez de votre avocat et de vos légumes verts.</p>

      <p class="mb-4 leading-relaxed">Dans tous les cas, l'important est de trouver ce qui marche pour <strong>vous</strong>.</p>
    `,
    author: "JB Keto",
    date: "25 Janvier 2026",
    readTime: "8 min",
    tags: ["Tendance", "Carnivore", "Comparatif"],
    imageUrl: "/images/article_keto-vs-carnivore-differences.jpg",
    relatedIds: ["31", "9"],
    type: 'article'
  },
  {
    id: "41",
    slug: "10-mythes-regime-cetogene-debunkes",
    title: "10 mythes sur le régime cétogène qui refusent de mourir",
    excerpt: "Le gras bouche les artères ? Le cerveau a besoin de sucre ? C'est mauvais pour les reins ? On fait le tri entre science et idées reçues.",
    content: `
      <p class="mb-4 leading-relaxed">Le régime cétogène est sans doute le mode d'alimentation le plus controversé du moment. Adulé par certains, diabolisé par d'autres, il traîne derrière lui une cohorte de <strong>mythes</strong> tenaces. Il est temps de remettre les pendules à l'heure avec un peu de science.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">1. "Le keto va détruire vos reins"</h2>
      <p class="mb-4 leading-relaxed">C'est l'argument numéro 1 des sceptiques. Il vient de la confusion entre "régime cétogène" (riche en gras) et "régime hyperprotéiné" (type Dukan). En keto, l'apport en protéines est modéré. De nombreuses études montrent que chez les personnes aux reins sains, le keto n'a aucun impact négatif. Au contraire, il peut même aider les diabétiques à préserver leur fonction rénale en normalisant la glycémie.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2. "Le cerveau a besoin de 130g de sucre par jour"</h2>
      <p class="mb-4 leading-relaxed">Faux. Votre cerveau a besoin d'énergie, pas forcément de glucose alimentaire. En l'absence de glucides, le foie produit des corps cétoniques qui traversent la barrière hémato-encéphalique et fournissent jusqu'à 70% de l'énergie du cerveau. Pour le reste ? Le corps fabrique son propre glucose (néoglucogenèse). Vous ne deviendrez pas stupide, bien au contraire (voir notre article sur le cerveau).</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">3. "Manger gras fait grossir"</h2>
      <p class="mb-4 leading-relaxed">C'est intuitif, mais biologiquement inexact. Ce qui stocke le gras, c'est l'insuline. Et ce qui stimule l'insuline, ce sont les glucides. Manger du gras en l'absence de sucre n'élève pas l'insuline : le corps brûle ce gras comme carburant. On peut manger du beurre et maigrir, c'est la magie de la biochimie.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">4. "C'est mauvais pour le cœur (cholestérol)"</h2>
      <p class="mb-4 leading-relaxed">Les graisses saturées ont été injustement accusées pendant 50 ans. Aujourd'hui, les méta-analyses les disculpent. En keto, le "bon" cholestérol (HDL) augmente souvent, et les triglycérides (le vrai facteur de risque) chutent drastiquement. Le profil lipidique s'améliore globalement pour la majorité des gens.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">5. "On perd du muscle"</h2>
      <p class="mb-4 leading-relaxed">Les corps cétoniques sont "anti-cataboliques" : ils protègent la masse musculaire. Tant que vous consommez suffisamment de protéines (ce qui est facile avec la viande, les œufs, le poisson), vous ne fondrez pas. De nombreux bodybuilders sont aujourd'hui en cétose.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">6. "On ne mange que du bacon et des œufs"</h2>
      <p class="mb-4 leading-relaxed">C'est le cliché du "Dirty Keto". En réalité, une assiette keto équilibrée est composée à moitié de légumes verts (épinards, brocolis, choux, courgettes, avocats). C'est probablement plus de légumes que dans l'alimentation standard de la plupart des gens !</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">7. "On reprend tout quand on arrête (effet yoyo)"</h2>
      <p class="mb-4 leading-relaxed">Si vous retournez à vos anciennes habitudes (pizza, soda, sucre), oui, vous reprendrez du poids. Comme avec n'importe quel régime. Le keto n'est pas une cure, c'est une rééducation métabolique. L'idée est de garder une alimentation "Low Carb" libérale à long terme, pas de se goinfrer de sucre dès l'objectif atteint.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">8. "C'est dangereux pour le foie"</h2>
      <p class="mb-4 leading-relaxed">Au contraire ! Le régime cétogène est l'un des traitements les plus efficaces contre la stéatose hépatique (foie gras), causée par... l'excès de fructose et de sucre, pas par le gras. En coupant le sucre, le foie se vide de sa graisse en quelques semaines.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">9. "C'est triste et sans saveur"</h2>
      <p class="mb-4 leading-relaxed">Sérieusement ? Fromage fondu, crème fraîche, viande grillée, avocat, chocolat noir, noix... On a vu plus triste comme régime de "privation". Le gras est vecteur de goût. Une fois le palais désintoxiqué du sucre, on redécouvre la vraie saveur des aliments.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">10. "On est constipé"</h2>
      <p class="mb-4 leading-relaxed">Seulement si vous oubliez les légumes et l'eau ! Avec une bonne hydratation, du magnésium et des fibres issues des légumes verts et des graines (chia, lin), le transit se porte à merveille.</p>

      <p class="mb-4 leading-relaxed">Ne laissez pas les mythes vous priver d'une meilleure santé. Testez par vous-même pendant 30 jours, et jugez sur les résultats.</p>
    `,
    author: "JB Keto",
    date: "26 Janvier 2026",
    readTime: "9 min",
    tags: ["Mythes", "Science", "Débutant"],
    imageUrl: "/images/article_10-mythes-regime-cetogene-debunkes.jpg",
    relatedIds: ["1", "28", "25"],
    type: 'article'
  },
  {
    id: "42",
    slug: "keto-diabete-type-2",
    title: "Keto et Diabète de Type 2 : Peut-on inverser la maladie ?",
    excerpt: "Le régime cétogène montre des résultats spectaculaires sur la glycémie et l'insulino-résistance. Découvrez comment reprendre le contrôle.",
    content: `
      <p class="mb-4 leading-relaxed">Le diabète de type 2 est souvent présenté comme une maladie chronique et progressive. "On ne guérit pas, on gère". Pourtant, de plus en plus d'études et de cliniques (comme Virta Health aux USA) prouvent le contraire : en coupant les glucides, on peut mettre la maladie en rémission.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le mécanisme de l'insulino-résistance</h2>
      <p class="mb-4 leading-relaxed">Le diabète T2 est une maladie d'intolérance aux glucides. Votre corps n'arrive plus à gérer le sucre car vos cellules sont devenues sourdes à l'insuline. Continuer à manger des glucides en prenant de l'insuline, c'est comme jeter de l'huile sur le feu. Le régime cétogène coupe l'apport en sucre à la source.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Des résultats rapides et mesurables</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Baisse de l'HbA1c :</strong> L'hémoglobine glyquée chute souvent drastiquement en 3 mois.</li>
        <li><strong>Réduction des médicaments :</strong> De nombreux patients peuvent réduire ou arrêter l'insuline et les sulfamides (sous surveillance médicale stricte !).</li>
        <li><strong>Perte de poids :</strong> La graisse viscérale (autour du foie et du pancréas) fond, ce qui aide les organes à refonctionner.</li>
      </ul>

      <p class="mb-4 leading-relaxed">Attention : Si vous prenez des médicaments pour le diabète, NE commencez PAS le keto sans votre médecin. Le risque d'hypoglycémie est réel car vos médicaments deviendront "trop forts" très vite.</p>
    `,
    author: "JB Keto",
    date: "27 Janvier 2026",
    readTime: "8 min",
    tags: ["Santé", "Diabète", "Science"],
    imageUrl: "/images/article_keto-diabete-type-2.jpg",
    relatedIds: ["29", "1", "2"],
    type: 'article'
  },
  {
    id: "43",
    slug: "reprendre-keto-apres-ecart",
    title: "Reprendre le keto après un écart : le guide de secours",
    excerpt: "Vous avez craqué sur une pizza ? Pas de panique. Voici la marche à suivre pour retourner en cétose sans souffrir.",
    content: `
      <p class="mb-4 leading-relaxed">Ça arrive aux meilleurs. Un anniversaire, un moment de stress, ou juste une envie irrépressible. Vous avez mangé des glucides. Beaucoup de glucides. Et maintenant, vous culpabilisez, vous vous sentez gonflé et fatigué. Stop ! La culpabilité ne brûle pas de calories.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Ce qu'il ne faut PAS faire</h2>
      <p class="mb-4 leading-relaxed">Ne vous punissez pas en jeûnant pendant 48h ou en faisant 2h de cardio intense. Cela va juste augmenter votre cortisol (stress) et vous donner encore plus faim. Ne dites pas non plus "foutu pour foutu" en continuant à manger mal toute la semaine.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le plan d'action immédiat</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Le prochain repas est keto :</strong> Revenez simplement à vos bases. Oeufs, avocat, viande. Pas de restriction calorique, mangez à votre faim.</li>
        <li><strong>Hydratez-vous + Électrolytes :</strong> Les glucides stockent l'eau. En les perdant à nouveau, vous allez vous déshydrater. Buvez de l'eau salée.</li>
        <li><strong>Bougez doucement :</strong> Une marche de 20 min après le repas aide à vider le glucose sanguin dans les muscles.</li>
      </ul>

      <p class="mb-4 leading-relaxed">En général, il faut 24 à 48h pour retourner en cétose. Ce n'est rien sur une vie. L'important est la constance, pas la perfection.</p>
    `,
    author: "JB Keto",
    date: "28 Janvier 2026",
    readTime: "5 min",
    tags: ["Conseils", "Motivation", "Astuces"],
    imageUrl: "/images/article_reprendre-keto-apres-ecart.jpg",
    relatedIds: ["14", "22", "33"],
    type: 'article'
  },
  {
    id: "44",
    slug: "guide-huiles-keto",
    title: "Les meilleures huiles pour le régime cétogène (et celles à bannir)",
    excerpt: "Toutes les graisses ne se valent pas. Huile d'olive, coco, colza... On fait le tri pour votre santé et votre cétose.",
    content: `
      <p class="mb-4 leading-relaxed">Le Keto est un régime "LCHF" (Low Carb High Fat). Vous allez manger beaucoup de gras. La qualité de ce gras est donc CRUCIALE pour votre santé. Manger du mauvais gras en grande quantité est le meilleur moyen de s'inflammer.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le podium des champions</h2>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Huile d'olive extra vierge :</strong> La reine. Riche en polyphénols, stable à cuisson douce. À utiliser partout.</li>
        <li><strong>Huile de coco :</strong> Riche en MCT (triglycérides à chaîne moyenne) qui se transforment vite en cétones. Idéale pour la cuisson car très stable.</li>
        <li><strong>Beurre et Ghee :</strong> Le ghee (beurre clarifié) est fantastique pour cuire à haute température sans brûler.</li>
        <li><strong>Huile d'avocat :</strong> Goût neutre, point de fumée très haut. Parfaite pour les mayonnaises maison.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les huiles toxiques à jeter</h2>
      <p class="mb-4 leading-relaxed">Ce sont les huiles de graines industrielles, riches en Omega-6 pro-inflammatoires et souvent oxydées.</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li>❌ Huile de tournesol</li>
        <li>❌ Huile de maïs</li>
        <li>❌ Huile de soja</li>
        <li>❌ Huile de pépins de raisin</li>
      </ul>

      <p class="mb-4 leading-relaxed">Regardez les étiquettes de vos sauces et mayonnaises : elles sont souvent faites avec ces huiles bon marché. Faites-les vous-même !</p>
    `,
    author: "JB Keto",
    date: "29 Janvier 2026",
    readTime: "6 min",
    tags: ["Ingrédients", "Santé", "Guide"],
    imageUrl: "/images/article_guide-huiles-keto.jpg",
    relatedIds: ["2", "8", "38"],
    type: 'article'
  },
  {
    id: "45",
    slug: "keto-et-sopk-solution-naturelle",
    title: "Keto et SOPK : La solution naturelle ?",
    excerpt: "Le Syndrome des Ovaires Polykystiques touche 1 femme sur 10. Découvrez comment le régime cétogène s'attaque à la cause racine : l'insuline.",
    content: `
      <p class="mb-4 leading-relaxed">C'est la cause numéro 1 d'infertilité féminine. Le <strong>SOPK</strong> (Syndrome des Ovaires Polykystiques) est souvent vécu comme une fatalité : règles irrégulières, prise de poids inexpliquée, acné, pilosité excessive... La médecine conventionnelle propose souvent la pilule contraceptive pour "masquer" les symptômes. Mais si on s'attaquait à la cause ?</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le lien caché : l'insuline</h2>
      <p class="mb-4 leading-relaxed">Ce que beaucoup ignorent, c'est que le SOPK est avant tout une maladie métabolique. Environ 70% des femmes atteintes de SOPK sont résistantes à l'insuline. Or, l'insuline a un effet direct sur les ovaires : elle les stimule à produire trop de testostérone. C'est cet excès d'hormones mâles qui bloque l'ovulation et cause l'acné.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Pourquoi le Keto fonctionne si bien ?</h2>
      <p class="mb-4 leading-relaxed">En réduisant drastiquement les glucides, le régime cétogène fait chuter le taux d'insuline. C'est mécanique. Une fois l'insuline calmée, les ovaires arrêtent de surproduire de la testostérone. Les résultats sont souvent rapides :</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Retour des cycles :</strong> De nombreuses femmes voient leurs règles revenir naturellement après quelques mois.</li>
        <li><strong>Perte de poids :</strong> La graisse abdominale typique du SOPK fond enfin.</li>
        <li><strong>Peau nette :</strong> Moins d'androgènes = moins de sébum = moins d'acné.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Un espoir pour la fertilité</h2>
      <p class="mb-4 leading-relaxed">De plus en plus de cliniques de fertilité recommandent le Low Carb ou le Keto avant d'entamer des traitements lourds (FIV). En rétablissant l'ovulation naturelle, le Keto a permis de nombreux "bébés miracles". C'est une thérapie puissante, gratuite, et disponible dans votre cuisine.</p>
    `,
    author: "JB Keto",
    date: "30 Janvier 2026",
    readTime: "8 min",
    tags: ["Femmes", "Santé", "SOPK"],
    imageUrl: "/images/article_keto-et-sopk-solution-naturelle.jpg",
    relatedIds: ["36", "39", "29"],
    type: 'article'
  },
  {
    id: "46",
    slug: "keto-mediterraneen-guide",
    title: "Le régime Cétogène Méditerranéen : l'alliance parfaite pour la santé ?",
    excerpt: "Allier les bienfaits anti-inflammatoires de la diète méditerranéenne à la puissance métabolique du cétogène. Découvrez le 'Keto Med'.",
    content: `
      <p class="mb-4 leading-relaxed">Depuis plusieurs décennies, le monde de la nutrition est le théâtre d'affrontements idéologiques majeurs. D'un côté, le régime Méditerranéen, inlassablement promu par les cardiologues et les organismes de santé publique pour sa capacité démontrée à prolonger l'espérance de vie et réduire les risques cardiovasculaires. De l'autre, le régime Cétogène (Keto), plébiscité par les biohackers et les professionnels de la médecine métabolique pour son efficacité redoutable contre l'obésité, le diabète de type 2 et l'insulino-résistance.</p>

      <p class="mb-4 leading-relaxed">Pendant longtemps, ces deux approches semblaient inconciliables. Le Méditerranéen prône les céréales complètes, les fruits et les légumineuses, tandis que le Keto les interdit formellement. Le Keto encourage la consommation de graisses saturées, là où le Méditerranéen les limite au profit des graisses végétales. Pourtant, une nouvelle voie émerge, synthétisant le meilleur des deux mondes : le <strong>Régime Cétogène Méditerranéen</strong> (ou Keto-Med). Cette approche hybride promet non seulement la perte de poids rapide et la clarté mentale du Keto, mais aussi la protection cardiovasculaire et la longévité associées au mode de vie méditerranéen.</p>

      <p class="mb-4 leading-relaxed">Dans ce guide complet, nous allons explorer pourquoi cette fusion est probablement la stratégie nutritionnelle la plus puissante à votre disposition aujourd'hui, et comment la mettre en place concrètement dans votre quotidien, étape par étape.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le problème du Keto "Classique" (Dirty Keto)</h2>
      <p class="mb-4 leading-relaxed">Pour comprendre l'intérêt du Keto-Med, il faut d'abord regarder les limites du régime cétogène standard tel qu'il est souvent pratiqué (le fameux "Dirty Keto"). Le principe de base du Keto est métabolique : priver le corps de glucides pour forcer le foie à produire des cétones à partir des graisses.</p>
      <p class="mb-4 leading-relaxed">Techniquement, vous pouvez atteindre cet état en mangeant du bacon industriel, du fromage fondu et des huiles végétales de mauvaise qualité, tant que vous ne mangez pas de sucre. C'est efficace pour perdre du poids à court terme. Mais à long terme ? C'est une autre histoire. Une alimentation riche en graisses saturées transformées et pauvre en nutriments peut favoriser l'inflammation systémique et perturber le microbiote intestinal.</p>
      <p class="mb-4 leading-relaxed">C'est ici que l'approche méditerranéenne intervient comme un correctif de qualité. Elle apporte les polyphénols, les antioxydants et les fibres qui manquent souvent cruellement à l'assiette du "Keto Bro".</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La Science derrière l'alliance Keto-Med</h2>
      <p class="mb-4 leading-relaxed">L'idée n'est pas juste théorique. Elle est soutenue par des données cliniques probantes. Une étude espagnole marquante a suivi des patients obèses soumis à un régime cétogène formulé selon les principes méditerranéens (huile d'olive, poisson, légumes verts, vin rouge modéré). Les résultats furent spectaculaires :</p>

      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Perte de poids massive :</strong> Les participants ont perdu en moyenne 14 kg en 12 semaines.</li>
        <li><strong>Profil lipidique amélioré :</strong> Contrairement aux craintes habituelles sur le gras, leur cholestérol HDL ("bon") a augmenté, leurs triglycérides ont chuté drastiquement, et leur LDL a changé de profil pour devenir moins athérogène.</li>
        <li><strong>Baisse de la tension artérielle :</strong> Une amélioration significative de la santé cardiovasculaire globale.</li>
        <li><strong>Marqueurs inflammatoires en chute libre :</strong> Grâce à l'abondance d'Oméga-3 et d'huile d'olive.</li>
      </ul>

      <p class="mb-4 leading-relaxed">Le Keto-Med n'est donc pas un compromis mou. C'est une optimisation. Il prend le "moteur" du Keto (la cétose) et lui fournit le "carburant" le plus propre possible (les graisses insaturées et les phytonutriments).</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les 4 Piliers du Keto Méditerranéen</h2>
      <p class="mb-4 leading-relaxed">Comment transformer cette théorie en pratique ? Oubliez la pyramide alimentaire classique. Voici les nouvelles fondations de votre alimentation.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Pilier 1 : L'Huile d'Olive, l'Or Liquide</h3>
      <p class="mb-4 leading-relaxed">Si le beurre est le roi du Keto classique, l'huile d'olive est la déesse du Keto-Med. Elle doit être votre source principale de calories. Riche en acide oléique (mono-insaturé) et en polyphénols (comme l'oléocanthal, un anti-inflammatoire naturel puissant), elle protège vos artères tout en vous fournissant de l'énergie.</p>
      <p class="mb-4 leading-relaxed"><strong>En pratique :</strong> Ne la comptez pas à la goutte. Arrosez généreusement vos salades, vos légumes cuits et vos poissons. Visez 2 à 4 cuillères à soupe par jour. Choisissez-la toujours "Extra Vierge" et extraite à froid. L'huile d'avocat et l'huile de macadamia sont d'excellentes alternatives.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Pilier 2 : La Mer avant la Terre</h3>
      <p class="mb-4 leading-relaxed">Les protéines ne se valent pas toutes. Le Keto-Med privilégie les sources marines. Les poissons gras (saumon, maquereau, sardines, anchois, hareng) sont les superstars de ce régime. Ils apportent les précieux Oméga-3 (EPA et DHA) essentiels pour le cerveau et le cœur.</p>
      <p class="mb-4 leading-relaxed">La viande rouge n'est pas interdite, mais elle devient un acteur secondaire (1 à 2 fois par semaine maximum), contrairement aux régimes carnivores. La volaille et les œufs (de poules nourries aux graines de lin, idéalement) complètent l'apport protéique.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Pilier 3 : Une avalanche de Végétaux Low Carb</h3>
      <p class="mb-4 leading-relaxed">C'est la grande différence avec le Keto strict qui néglige parfois les fibres. Ici, l'assiette doit être verte. Les légumes ne sont pas une décoration, ils sont le volume principal du repas. Ils nourrissent votre microbiote, apportent des minéraux essentiels (magnésium, potassium) et tamponnent l'acidité.</p>
      <p class="mb-4 leading-relaxed"><strong>Les élus :</strong> Épinards, roquette, chou kale, brocoli, chou-fleur, courgettes, aubergines, asperges, artichauts, fenouil, concombres, tomates (avec modération), poivrons, olives, câpres.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">Pilier 4 : Le Vin Rouge (avec modération)</h3>
      <p class="mb-4 leading-relaxed">C'est la touche culturelle. Contrairement à la bière (pain liquide) ou aux cocktails sucrés, le vin rouge sec est toléré en Keto-Med. Il contient du resvératrol, un antioxydant lié à la longévité. Attention cependant : l'alcool stoppe temporairement la combustion des graisses. Un verre au dîner, pas plus, et pas tous les jours.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Liste de courses : Ce qui rentre (et ce qui sort)</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-green-50 p-6 rounded-lg border border-green-200">
          <h4 class="font-bold text-green-800 text-xl mb-4">✅ À PRIVILÉGIER (Abondance)</h4>
          <ul class="space-y-2 text-green-900">
            <li>• <strong>Huiles :</strong> Olive extra vierge, Avocat, Coco (modéré)</li>
            <li>• <strong>Poissons gras :</strong> Sardines, Maquereau, Saumon sauvage</li>
            <li>• <strong>Légumes feuilles :</strong> Roquette, Épinards, Mâche</li>
            <li>• <strong>Crucifères :</strong> Brocoli, Chou-fleur, Choux de Bruxelles</li>
            <li>• <strong>Légumes du soleil :</strong> Aubergines, Courgettes, Poivrons</li>
            <li>• <strong>Oléagineux :</strong> Noix, Amandes, Noisettes, Macadamia</li>
            <li>• <strong>Fruits :</strong> Avocat, Olives, Citron, Baies (framboises, mûres)</li>
            <li>• <strong>Protéines :</strong> Œufs bio, Poulet, Crustacés</li>
          </ul>
        </div>

        <div class="bg-red-50 p-6 rounded-lg border border-red-200">
          <h4 class="font-bold text-red-800 text-xl mb-4">❌ À ÉVITER (ou limiter fortement)</h4>
          <ul class="space-y-2 text-red-900">
            <li>• <strong>Glucides :</strong> Pain, Pâtes, Riz, Pommes de terre, Sucre</li>
            <li>• <strong>Huiles inflammatoires :</strong> Tournesol, Maïs, Soja, Colza chauffé</li>
            <li>• <strong>Viandes transformées :</strong> Bacon industriel, Saucisses bas de gamme</li>
            <li>• <strong>Charcuteries :</strong> Sauf jambon cru de qualité (type Parma/Serrano)</li>
            <li>• <strong>Produits laitiers :</strong> Crème fraîche et beurre (à limiter), privilégier Feta/Chèvre</li>
            <li>• <strong>Alcools :</strong> Bière, Cidre, Cocktails sucrés</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Plan de Repas sur 7 Jours (Menu Keto-Med Type)</h2>
      <p class="mb-4 leading-relaxed">Voici à quoi ressemble une semaine type pour allier plaisir gastronomique et efficacité métabolique.</p>

      <h3 class="font-bold text-lg mt-4 mb-2">Lundi</h3>
      <ul class="list-none space-y-1 mb-4">
        <li><strong>Matin :</strong> Café noir + Omelette aux épinards et feta, cuite à l'huile d'olive.</li>
        <li><strong>Midi :</strong> Grande salade niçoise revisitée (thon, olives, œufs durs, anchois, haricots verts, huile d'olive).</li>
        <li><strong>Soir :</strong> Dos de cabillaud rôti avec une fondue de poireaux à la crème de coco.</li>
      </ul>

      <h3 class="font-bold text-lg mt-4 mb-2">Mardi</h3>
      <ul class="list-none space-y-1 mb-4">
        <li><strong>Matin :</strong> Yaourt grec entier (ou coco) avec graines de chia et quelques framboises.</li>
        <li><strong>Midi :</strong> Restes de poulet rôti avec une salade de concombre et tomates à la grecque (origan, huile d'olive).</li>
        <li><strong>Soir :</strong> Aubergines à la parmigiana (grillées à l'huile d'olive, sauce tomate maison, un peu de mozzarella).</li>
      </ul>

      <h3 class="font-bold text-lg mt-4 mb-2">Mercredi</h3>
      <ul class="list-none space-y-1 mb-4">
        <li><strong>Matin :</strong> Jeûne intermittent (café ou thé vert uniquement).</li>
        <li><strong>Midi :</strong> Assiette de sardines à l'huile (avec l'huile !) et brocolis vapeur citronnés.</li>
        <li><strong>Soir :</strong> Wok de crevettes aux courgettes et poivrons, épices douces.</li>
      </ul>

      <h3 class="font-bold text-lg mt-4 mb-2">Jeudi</h3>
      <ul class="list-none space-y-1 mb-4">
        <li><strong>Matin :</strong> Œufs brouillés au saumon fumé et ciboulette.</li>
        <li><strong>Midi :</strong> Salade de roquette, avocat, noix de Grenoble et copeaux de parmesan. Vinaigrette balsamique (modérée).</li>
        <li><strong>Soir :</strong> Cuisses de poulet au citron et romarin, avec choux de Bruxelles rôtis.</li>
      </ul>

      <h3 class="font-bold text-lg mt-4 mb-2">Vendredi</h3>
      <ul class="list-none space-y-1 mb-4">
        <li><strong>Matin :</strong> Pudding de graines de chia au lait d'amande.</li>
        <li><strong>Midi :</strong> Carpaccio de bœuf avec beaucoup d'huile d'olive, câpres et salade verte.</li>
        <li><strong>Soir :</strong> Pavé de saumon grillé et asperges vertes à l'ail. Un verre de vin rouge.</li>
      </ul>

      <h3 class="font-bold text-lg mt-4 mb-2">Samedi</h3>
      <ul class="list-none space-y-1 mb-4">
        <li><strong>Matin :</strong> "Pancakes" keto à la farine d'amande.</li>
        <li><strong>Midi :</strong> Plateau de fruits de mer (huîtres, crevettes, bulots) avec mayonnaise maison à l'huile d'avocat.</li>
        <li><strong>Soir :</strong> Courgettes farcies à l'agneau (viande maigre) et herbes de Provence.</li>
      </ul>

      <h3 class="font-bold text-lg mt-4 mb-2">Dimanche</h3>
      <ul class="list-none space-y-1 mb-4">
        <li><strong>Matin :</strong> Brunch avec œufs, avocat, jambon serrano et olives.</li>
        <li><strong>Midi :</strong> Repas léger ou jeûne si le brunch était copieux.</li>
        <li><strong>Soir :</strong> Soupe de poissons (sans croûtons ni patates) avec rouille maison keto.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les pièges à éviter pour réussir</h2>
      <p class="mb-4 leading-relaxed">Même avec les meilleures intentions, il est facile de dériver. Voici les erreurs classiques en Keto-Med :</p>

      <p class="mb-4 leading-relaxed"><strong>1. Avoir peur du sel :</strong> En supprimant les produits transformés (qui sont bourrés de sel caché) et en baissant l'insuline (ce qui fait fuir le sodium), vous devez resaler vos plats. Utilisez du sel de mer ou de l'Himalaya.</p>

      <p class="mb-4 leading-relaxed"><strong>2. Trop de fruits :</strong> Le régime méditerranéen classique autorise beaucoup de fruits. En version Keto, limitez-vous aux baies (fraises, framboises, myrtilles) et en petite quantité. Une pomme ou une banane vous sortira de cétose immédiatement.</p>

      <p class="mb-4 leading-relaxed"><strong>3. L'excès de noix :</strong> Les oléagineux sont sains, mais très caloriques. Une poignée suffit. Ne mangez pas le paquet devant la télé.</p>

      <p class="mb-4 leading-relaxed"><strong>4. Oublier les protéines :</strong> Avec l'emphase sur les légumes et l'huile, on peut parfois sous-consommer des protéines. Assurez-vous d'avoir une portion de poisson, d'œufs ou de viande à chaque repas pour maintenir votre masse musculaire.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Conclusion : Une stratégie pour la vie</h2>
      <p class="mb-4 leading-relaxed">Le Régime Cétogène Méditerranéen n'est pas un "régime" au sens restrictif du terme. C'est un mode de vie. Il s'éloigne de la mentalité de privation pour embrasser l'abondance : abondance de saveurs, de couleurs, de bonnes graisses et de nutriments.</p>
      <p class="mb-4 leading-relaxed">En adoptant cette approche, vous ne faites pas que perdre du poids. Vous investissez dans votre capital santé à long terme. Vous réduisez l'inflammation silencieuse qui est à la racine de la plupart des maladies modernes, tout en bénéficiant de l'énergie inépuisable de la cétose. C'est, à ce jour, probablement l'intervention nutritionnelle la plus complète et la plus protectrice que la science puisse offrir.</p>
    `,
    author: "JB Keto",
    date: "31 Janvier 2026",
    readTime: "10 min",
    tags: ["Santé", "Science", "Tendance", "Méditerranéen"],
    imageUrl: "/images/article_keto-mediterraneen-guide.jpg",
    relatedIds: ["28", "44", "8"],
    type: 'article'
  }
,
  {
    id: "47",
    slug: "combien-de-temps-maigrir-keto",
    title: "Combien de temps pour maigrir en keto ? La vérité (semaine par semaine)",
    excerpt: "Vous espérez perdre 10kg en 2 semaines ? Arrêtez tout. Voici le calendrier réel de la perte de poids en cétogène, sans les mensonges du marketing.",
    content: `
      <p class="mb-4 leading-relaxed">On nous vend du rêve. "Perdez 15kg en 1 mois sans effort !". Vous avez vu ces pubs, j'ai vu ces pubs. Et comme vous, au début, j'ai eu envie d'y croire.</p>
      <p class="mb-4 leading-relaxed">Mais soyons sérieux deux minutes. Si c'était si facile, l'obésité n'existerait plus. Quand j'ai commencé le keto, j'étais impatient. Je me pesais tous les matins (erreur de débutant). J'ai vécu les montagnes russes émotionnelles.</p>
      <p class="mb-4 leading-relaxed">Aujourd'hui, avec le recul et la science, je peux vous donner la feuille de route exacte. Pas celle qu'on vous vend, mais celle qui va vraiment se passer dans votre corps. C'est de la biologie, pas de la magie.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Semaine 1 : La lune de miel (et l'illusion)</h2>
      <p class="mb-4 leading-relaxed">La première semaine, c'est l'euphorie. -2kg, -3kg, parfois -4kg sur la balance ! Vous vous dites : "C'est bon, j'ai trouvé le Graal ! À ce rythme, je suis mannequin dans un mois."</p>
      <p class="mb-4 leading-relaxed">Calmez-vous. Je vais casser l'ambiance : <strong>c'est de l'eau.</strong></p>
      <p class="mb-4 leading-relaxed">En arrêtant les glucides, vous videz vos stocks de <strong>glycogène</strong> (le sucre stocké dans le foie et les muscles). Or, chaque gramme de glycogène retient 3 à 4 grammes d'eau. En vidant le sucre, vous videz l'eau. Vous "dégonflez". C'est génial pour le moral et pour entrer dans son jean, mais ce n'est pas encore du gras. Profitez-en, mais ne vous habituez pas à ce rythme.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Semaines 2 à 4 : Le chantier (et la zone de doute)</h2>
      <p class="mb-4 leading-relaxed">C'est là que ça se corse. La perte de poids ralentit brutalement. Parfois, elle s'arrête.</p>
      <p class="mb-4 leading-relaxed">Pourquoi ? Parce que votre corps est en chantier. Il est en train de construire toute la machinerie enzymatique pour brûler du gras (le fameux état "fat-adapted"). C'est aussi la période de la "Keto Flu" si vous ne gérez pas vos électrolytes. Vous pouvez vous sentir mou, avoir moins de force au sport.</p>
      <p class="mb-4 leading-relaxed">Beaucoup abandonnent ici en disant "ça ne marche plus". Grosse erreur ! C'est justement là que tout se joue. Votre corps est en train de changer de carburant. Il passe du Super Sans Plomb (sucre) au Diesel (gras). Ça demande des réglages. Tenez bon.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Mois 2 et après : La vitesse de croisière</h2>
      <p class="mb-4 leading-relaxed">Ça y est. Vous êtes adapté. Votre énergie revient, souvent plus stable qu'avant. La perte de poids reprend, mais à un rythme "normal" et sain : environ <strong>0.5kg à 1kg par semaine</strong>.</p>
      <p class="mb-4 leading-relaxed"><strong>Mais attention :</strong> cette fois, c'est du <strong>vrai gras</strong>.</p>
      <p class="mb-4 leading-relaxed">Perdre 1kg de pure graisse, c'est énorme en volume. Prenez une plaquette de beurre. Maintenant imaginez-en quatre. Voilà ce que vous perdez chaque semaine. C'est moins spectaculaire que les 3kg d'eau de la première semaine, mais c'est ça qui change votre silhouette durablement.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le plateau : l'invité surprise</h2>
      <p class="mb-4 leading-relaxed">À un moment, ça va bloquer. La balance ne bougera plus pendant 10 jours. C'est normal. La perte de poids n'est jamais linéaire. C'est un escalier.</p>
      <p class="mb-4 leading-relaxed">Votre corps fait de la rétention d'eau temporaire à la place du gras perdu (l'effet "whoosh" viendra plus tard), ou alors vous mangez simplement trop de calories (oui, les noix et le fromage, ça compte !). Ne changez rien. Soyez patient. Le corps ne lâche pas ses réserves s'il se sent stressé.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Conclusion : Le long terme gagne toujours</h2>
      <p class="mb-4 leading-relaxed">Oubliez la course de vitesse. Le keto n'est pas un régime miracle pour entrer dans son maillot cet été. C'est une réparation métabolique.</p>
      <p class="mb-4 leading-relaxed">Donnez-vous 3 mois. 90 jours. Si vous tenez 90 jours, vous ne reconnaîtrez plus la personne dans le miroir. Non seulement elle sera plus mince, mais elle aura une énergie à revendre.</p>
      <p class="mb-4 leading-relaxed">Alors, on signe où ?</p>
    `,
    author: "JB Keto",
    date: "30 Janvier 2026",
    readTime: "8 min",
    tags: ["Perte de poids", "Débutant", "Motivation", "Science"],
    imageUrl: "/images/article_combien-de-temps-maigrir-keto.jpg",
    relatedIds: ["14", "22", "7"],
    type: 'article'
  }
,  {
    id: "48",
    slug: "arret-petit-dejeuner-temoignage",
    title: "Pourquoi j'ai arrêté de prendre un petit-déjeuner (et pourquoi vous devriez essayer)",
    excerpt: "Le repas le plus important de la journée ? Ou la plus grande arnaque marketing ? Mon expérience après 5 ans sans petit-déjeuner.",
    content: `
<p class="mb-4 leading-relaxed">"Le petit-déjeuner est le repas le plus important de la journée."</p>

<p class="mb-4 leading-relaxed">Combien de fois avez-vous entendu cette phrase ? On nous l'a répété à l'école, à la télé, chez le médecin. C'est devenu une vérité absolue, indiscutable. Si vous ne mangez pas le matin, vous êtes un extraterrestre. Pire, vous mettez votre santé en danger.</p>

<p class="mb-4 leading-relaxed">Et si je vous disais que c'est l'un des plus gros mensonges nutritionnels du siècle dernier ?</p>

<p class="mb-4 leading-relaxed">Il y a quelques années, j'étais comme vous. Je me levais, et la première chose que je faisais, c'était de manger. Bol de céréales, tartines, jus d'orange. Je pensais bien faire. Je pensais "lancer mon métabolisme".</p>

<p class="mb-4 leading-relaxed">Pourtant, à 11h précises, c'était la catastrophe. Mon ventre gargouillait, mes mains tremblaient légèrement, et mon cerveau se transformait en brouillard. J'avais besoin de sucre, vite. Une barre de céréales, un café sucré, n'importe quoi pour tenir jusqu'au déjeuner.</p>

<p class="mb-4 leading-relaxed">Je pensais que c'était ma constitution. Que j'avais un "métabolisme rapide". En réalité, j'étais juste en hypoglycémie réactionnelle. J'étais un toxicomane du sucre, et mon fix du matin venait de s'épuiser.</p>

<p class="mb-4 leading-relaxed">Un jour, par hasard (et un peu par flemme, avouons-le), j'ai sauté le petit-déjeuner. J'ai juste pris un café noir. J'ai attendu la faim... et elle n'est pas venue. Pas de coup de barre à 11h. Pas de tremblements. À midi, j'avais une énergie folle. J'ai réessayé le lendemain. Pareil.</p>

<p class="mb-4 leading-relaxed">C'est là que j'ai compris que tout ce qu'on m'avait raconté était faux. J'ai arrêté de déjeuner, et c'est la meilleure décision que j'ai prise pour ma ligne et mon cerveau.</p>

<h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">L'origine du mythe : Merci Kellogg's</h2>

<p class="mb-4 leading-relaxed">D'où vient cette obsession du petit-déjeuner ? Ce n'est pas de la science, c'est du marketing. Au début du 20ème siècle, John Harvey Kellogg (oui, celui des Corn Flakes) cherchait un moyen de vendre ses céréales transformées. Il a lancé une campagne massive pour convaincre l'Amérique que manger léger le matin était sain. Avant ça, les gens mangeaient les restes du dîner ou rien du tout.</p>

<p class="mb-4 leading-relaxed">L'industrie agro-alimentaire a repris le flambeau. "Le repas le plus important", c'est un slogan publicitaire, pas une réalité biologique. C'est le moyen le plus sûr de vous vendre du sucre (céréales, jus, confiture) dès le réveil.</p>

<h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La biologie : Pourquoi votre corps déteste manger à 8h</h2>

<p class="mb-4 leading-relaxed">Regardons comment fonctionne votre corps le matin. Vers 6h-7h, vous avez un pic naturel de <strong>cortisol</strong>. C'est l'hormone du stress, mais c'est aussi l'hormone de l'éveil. Elle mobilise vos réserves de sucre pour vous donner de l'énergie. Vous êtes naturellement "chargé à bloc".</p>

<p class="mb-4 leading-relaxed">Si vous mangez des glucides à ce moment-là (pain, céréales, fruits), vous provoquez un pic d'<strong>insuline</strong>. L'insuline est l'hormone antagoniste du cortisol. Elle dit à votre corps : "Stop ! On a de l'énergie qui arrive, arrête de brûler tes réserves et stocke ça tout de suite !".</p>

<p class="mb-4 leading-relaxed">Résultat :</p>
<ul class="list-disc pl-5 mb-6 space-y-2">
  <li>Vous coupez net votre brûlage de graisse naturel.</li>
  <li>Vous faites chuter votre glycémie deux heures plus tard (l'hypoglycémie de 11h).</li>
  <li>Vous avez faim plus tôt dans la journée que si vous n'aviez rien mangé.</li>
</ul>

<p class="mb-4 leading-relaxed">C'est paradoxal, mais <strong>manger donne faim</strong>. En jeûnant, votre glycémie reste stable comme un lac calme. En mangeant sucré, c'est les montagnes russes.</p>

<h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Les 3 bénéfices inattendus du jeûne matinal</h2>

<h3 class="font-bold text-lg mt-6 mb-2">1. La machine à brûler du gras</h3>
<p class="mb-4 leading-relaxed">La nuit, vous jeûnez. Au réveil, vos stocks de glycogène (sucre) sont bas. Si vous ne mangez pas, votre corps n'a pas le choix : il doit puiser dans le gras. C'est la voie royale vers la cétose. En prolongeant le jeûne de la nuit jusqu'à midi (le fameux 16/8), vous donnez à votre corps 4 ou 5 heures supplémentaires de brûlage de graisse pur.</p>

<h3 class="font-bold text-lg mt-6 mb-2">2. Le laser mental</h3>
<p class="mb-4 leading-relaxed">C'est mon bénéfice préféré. La digestion consomme énormément d'énergie. En ne digérant pas le matin, tout cet afflux sanguin est disponible pour votre cerveau. De plus, le jeûne stimule la production de noradrénaline et de BDNF (une protéine qui protège les neurones). Je suis capable d'abattre plus de travail entre 8h et 12h à jeun que dans tout le reste de la journée.</p>

<h3 class="font-bold text-lg mt-6 mb-2">3. La liberté</h3>
<p class="mb-4 leading-relaxed">Ne plus avoir à penser au petit-déjeuner, c'est un gain de temps énorme. C'est 20 minutes de sommeil en plus, ou 20 minutes pour lire, méditer, ou juste ne pas courir. C'est une charge mentale en moins.</p>

<h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">"Mais JB, je vais mourir de faim !"</h2>

<p class="mb-4 leading-relaxed">C'est la peur numéro 1. "Je ne tiendrai jamais".</p>
<p class="mb-4 leading-relaxed">Laissez-moi vous rassurer : la faim est une vague. Elle monte, et si vous ne cédez pas, elle redescend. C'est souvent une habitude, pas un besoin. Votre estomac a été conditionné à recevoir de la nourriture à 8h. Il gargouille par réflexe pavlovien.</p>

<p class="mb-4 leading-relaxed">Au bout de 3 ou 4 jours, votre corps comprend. L'hormone de la faim (ghréline) s'adapte à votre nouveau rythme. Aujourd'hui, je peux regarder quelqu'un manger un croissant devant moi à 9h sans ressentir la moindre envie. Mon corps sait que l'heure du repas, c'est midi.</p>

<h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Comment s'y mettre (sans souffrir)</h2>

<p class="mb-4 leading-relaxed">Ne passez pas de "tout à rien" brutalement si vous avez peur.</p>
<ul class="list-disc pl-5 mb-6 space-y-2">
  <li><strong>Étape 1 : Le gras est votre ami.</strong> Si c'est trop dur, commencez par un "café gras" (Keto Coffee) : café + une noix de beurre ou d'huile de coco. Ça coupe la faim sans provoquer de pic d'insuline.</li>
  <li><strong>Étape 2 : L'eau.</strong> Souvent, on croit avoir faim alors qu'on a soif. Buvez un grand verre d'eau au réveil.</li>
  <li><strong>Étape 3 : Le café noir ou le thé.</strong> La caféine aide à mobiliser les graisses et coupe l'appétit.</li>
  <li><strong>Étape 4 : Occupez-vous.</strong> La faim est souvent de l'ennui. Si vous êtes actif, vous oublierez de manger.</li>
</ul>

<h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Conclusion : Essayez, juste 3 jours</h2>

<p class="mb-4 leading-relaxed">Je ne vous demande pas de me croire sur parole. Je vous demande d'essayer. Donnez-vous 3 jours. 72 heures.</p>
<p class="mb-4 leading-relaxed">Les deux premiers matins seront peut-être bizarres. Vous chercherez votre bol. Mais le troisième matin ? Vous allez ressentir cette clarté, cette légèreté. Vous allez vous regarder dans le miroir et voir votre ventre dégonfler (car moins d'insuline = moins de rétention d'eau).</p>
<p class="mb-4 leading-relaxed">Le petit-déjeuner n'est pas le repas le plus important. C'est le repas le plus rentable pour Kellogg's. Pour vous, le repas le plus important, c'est celui que vous mangez quand vous avez vraiment faim.</p>
`,
    author: "JB Keto",
    date: "31 Janvier 2026",
    readTime: "9 min",
    tags: ["Témoignage", "Jeûne", "Lifestyle"],
    imageUrl: "/images/article_arret-petit-dejeuner-temoignage.jpg",
    relatedIds: ["4", "11", "29"],
    type: "article"
  },
  {
    id: "49",
    slug: "pain-keto-quete-graal",
    title: "Pain Keto : Ma quête du Graal (et pourquoi j'ai failli abandonner)",
    excerpt: "Le pain est le manque n°1 en régime cétogène. J'ai testé les versions industrielles, les recettes maison et les substituts douteux. Voici mon verdict sans filtre.",
    content: `<p class="mb-4 leading-relaxed">Si vous êtes Français, comme moi, le plus dur dans le Keto, ce n'est pas de se passer de sucre dans le café. Ce n'est pas de dire non aux pâtes (on s'y fait, les courgettes ça passe). Ce n'est même pas de refuser une part de gâteau au chocolat (sauf s'il est fondant). Non, le véritable deuil, c'est la <strong>baguette</strong>. C'est ce morceau de pain croustillant, encore tiède, qu'on utilise pour saucer l'huile d'olive d'une salade niçoise, pour accompagner un bon camembert coulant qui pue un peu, ou simplement pour le plaisir de mordre dans une croûte dorée le matin avec une tonne de beurre salé.</p>

      <p class="mb-4 leading-relaxed">Le pain, chez nous, ce n'est pas juste de la nourriture. C'est culturel. C'est religieux. C'est l'assiette du pauvre et la gourmandise du riche. Quand j'ai commencé le régime cétogène, j'étais obsédé. Il <em>fallait</em> que je trouve un remplaçant. Je ne pouvais pas imaginer ma vie sans tartine. C'était viscéral, presque animal. J'avais l'impression qu'on m'amputait d'un membre culinaire.</p>

      <p class="mb-4 leading-relaxed">Alors, je me suis lancé dans une quête qui a duré des mois, dépensant des fortunes en farines bizarres importées des USA et en essais culinaires douteux le dimanche après-midi. J'ai tout testé. Le bon, la brute, et le franchement dégueulasse. J'ai failli abandonner dix fois. J'ai failli retourner à la boulangerie en pleurant. Mais j'ai tenu. Et aujourd'hui, je peux vous le dire : il existe une lumière au bout du tunnel. Voici mon carnet de bord détaillé, pour vous éviter de perdre du temps (et de l'argent) et vous guider vers le Saint Graal du pain sans glucides.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Phase 1 : L'illusion industrielle (ou comment manger du plastique)</h2>
      <p class="mb-4 leading-relaxed">Ma première étape fut, logiquement, le supermarché (ou plutôt les sites spécialisés en ligne, car en 2018, trouver du keto chez Carrefour relevait de la science-fiction). J'ai tapé "Pain Keto" dans la barre de recherche et j'ai sorti la carte bleue. J'ai commandé des "pains protéinés low carb" allemands à 8€ la miche (plus 10€ de frais de port). Sur le papier, c'était magique : 3g de glucides par tranche. Je m'y voyais déjà, tartinant mes rillettes.</p>

      <p class="mb-4 leading-relaxed">Le colis arrive trois jours plus tard. L'emballage est beau, un peu "fitness", avec des muscles et des épis de blé barrés. J'ouvre. L'odeur est... chimique. Un mélange de levure hyperactive et de plastique neuf. Je coupe une tranche. C'est humide. Trop humide. Une sorte de suintement suspect.</p>

      <p class="mb-4 leading-relaxed">À la dégustation ? Une éponge. Littéralement. Une texture caoutchouteuse qui vous reste entre les dents, élastique comme un vieux chewing-gum, et un arrière-goût acide indéfinissable qui pique la langue. En lisant l'étiquette, j'ai compris le pot aux roses : <em>gluten de blé vital, amidon modifié, fibres de bambou, protéines de pois, conservateurs E-machin</em>... J'avais l'impression de manger un tapis de yoga recyclé. Ce n'était pas de la nourriture, c'était un agglomérat de poudres industrielles.</p>

      <p class="mb-4 leading-relaxed">Et le pire ? Une heure après, j'avais faim. Une faim rageuse. Ma glycémie avait grimpé quand même, probablement à cause des amidons cachés ou de la réponse insulinique aux protéines isolées. Une arnaque totale. J'ai compris ce jour-là une leçon essentielle : <strong>si tu veux quelque chose de sain et de bon en Keto, tu dois le faire toi-même</strong>.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Phase 2 : La brique aux amandes (l'erreur du débutant)</h2>
      <p class="mb-4 leading-relaxed">Déçu par l'industrie, j'ai sorti mon tablier et mon robot mixeur. "C'est juste de la chimie", me suis-je dit. "Je suis ingénieur (ou presque), je peux faire du pain". J'ai pris la recette la plus populaire sur Pinterest à l'époque : le pain à la poudre d'amande. Des œufs, du beurre, de l'amande en poudre, de la levure.</p>

      <p class="mb-4 leading-relaxed">J'ai mélangé. J'ai cuit. Ça sentait bon dans la cuisine, une odeur de gâteau, de financier chaud. J'étais excité. Mais à la sortie du four, c'était... dense. Très dense. Imaginez un cake salé qui aurait oublié de lever. C'était compact comme une brique de construction. J'ai coupé une tranche. Ça s'effritait en mille morceaux dès que j'essayais d'étaler du beurre froid dessus. La frustration !</p>

      <p class="mb-4 leading-relaxed">C'était bon au goût, certes. Le goût de l'amande est agréable. Mais ça n'avait rien à voir avec du pain. C'était un gâteau aux œufs. Et surtout, c'était <strong>extrêmement calorique</strong>. J'ai fait le calcul : une tranche de ce "pain" m'apportait près de 400 calories ! C'est l'équivalent d'un repas complet pour certaines personnes. Autant dire que si je voulais perdre du poids, c'était raté. Je me suis retrouvé à manger du fromage sur du gâteau à l'amande hypercalorique. Je stagnais sur la balance. Il manquait quelque chose. Il manquait la structure. Il manquait l'élasticité. Il manquait l'âme du pain.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Interlude scientifique : Pourquoi le pain normal est-il si bon ?</h2>
      <p class="mb-4 leading-relaxed">Pour réussir son pain keto, il faut comprendre pourquoi on échoue. Le blé contient une protéine magique : le <strong>gluten</strong>. Quand on mélange de la farine de blé et de l'eau, le gluten forme un réseau élastique, comme une toile d'araignée microscopique. Quand la levure mange le sucre et pète du CO2 (oui, c'est ça la fermentation), le gaz reste piégé dans cette toile élastique. C'est ça qui fait les trous dans la mie. C'est ça qui fait que le pain est léger et moelleux.</p>

      <p class="mb-4 leading-relaxed">La farine d'amande ou de coco ? Zéro gluten. C'est du sable. Si vous mettez de la levure, le gaz s'échappe direct. Pschitt. Votre pain reste plat. Il fallait donc trouver un moyen de recréer cette toile d'araignée, mais sans glucides et sans gluten inflammatoire.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Phase 3 : La révélation du Psyllium (Le Magicien)</h2>
      <p class="mb-4 leading-relaxed">C'est sur un forum américain obscur de biohackers, vers 2h du matin, que j'ai découvert le secret. Un mot barbare que je n'arrivais même pas à prononcer : le <strong>Psyllium Blond</strong> (ou Psyllium Husk). Ce n'est pas une farine, c'est une fibre pure, l'enveloppe d'une graine indienne (Plantago ovata).</p>

      <p class="mb-4 leading-relaxed">Son super-pouvoir ? Il est "mucilagineux". En français : il absorbe 20 fois son volume en eau et forme un gel gluant instantané. C'est ce gel qui va remplacer le maillage du gluten ! C'est LUI qui donne l'élasticité, le moelleux, et qui permet au pain de lever sans s'effondrer comme un soufflé raté.</p>

      <p class="mb-4 leading-relaxed">J'ai couru en magasin bio. J'ai acheté un sachet. J'ai testé la recette "magique" (celle que je partage dans la section Recettes sous le nom de "Pain Keto Facile") : Poudre d'amande + Psyllium + Blancs d'œufs + Vinaigre de cidre + Eau bouillante.</p>

      <p class="mb-4 leading-relaxed">J'insiste sur l'eau <strong>bouillante</strong>. C'est la clé que beaucoup ratent. Le choc thermique active le psyllium instantanément. La pâte passe de "liquide bizarre" à "boule de pâte à modeler élastique" en 30 secondes. C'est presque de la sorcellerie.</p>

      <p class="mb-4 leading-relaxed">J'ai vu la pâte gonfler dans le four. Une vraie miche, bombée, dorée. J'avais le nez collé à la vitre du four comme un enfant devant un magasin de jouets à Noël. À la sortie ? J'ai tapoté le dessous. "Toc toc toc". Ça sonnait creux. Le signe des vrais boulangers !</p>

      <p class="mb-4 leading-relaxed">J'ai attendu que ça refroidisse (le plus dur). J'ai coupé une tranche. La mie était aérée. Un peu violette (le psyllium fonce un peu la pâte, c'est normal, c'est chimique), mais aérée. J'ai grillé la tranche. J'ai mis du beurre demi-sel qui a fondu dans les alvéoles...</p>

      <p class="mb-4 leading-relaxed">Le croustillant. Le moelleux. Le goût neutre qui ne masque pas le fromage. C'était ça. Ce n'était pas une baguette tradition label rouge d'un Meilleur Ouvrier de France, soyons honnêtes, ça reste un pain sans blé. Mais c'était un vrai pain. Tartinable. Satisfaisant. Qui tenait dans la main sans se casser. J'avais les larmes aux yeux. J'avais trouvé mon Graal.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Le guide technique : Comment ne pas rater son pain keto ?</h2>
      <p class="mb-4 leading-relaxed">Depuis ce jour, j'ai fait des centaines de pains. J'ai affiné la technique. Voici mes secrets pour que vous réussissiez du premier coup.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">1. La poudre d'amande doit être fine</h3>
      <p class="mb-4 leading-relaxed">N'utilisez pas d'amandes broyées grossièrement avec la peau. Il faut de la poudre d'amande blanche, extra-fine. Sinon, votre pain sera granuleux.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">2. Le psyllium : entier ou poudre ?</h3>
      <p class="mb-4 leading-relaxed">Attention piège ! Les recettes américaines parlent souvent de psyllium en poudre. En France, on trouve souvent les téguments entiers (qui ressemblent à de la sciure). Si vous utilisez la poudre, mettez-en moins (environ 80% du poids), car c'est plus concentré. Si vous utilisez les téguments entiers, mixez-les 10 secondes dans un moulin à café pour affiner la texture.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">3. Pourquoi mon pain est violet ?</h3>
      <p class="mb-4 leading-relaxed">Ah, le fameux "Pain Schtroumpf". C'est une réaction chimique naturelle entre les anthocyanes du psyllium et la levure chimique dans un environnement basique. C'est sans danger, ça ne change pas le goût, mais c'est moche. L'astuce ? L'acide. Ajoutez une cuillère à soupe de vinaigre de cidre ou de jus de citron dans la pâte. Ça neutralise la réaction et garde le pain blanc/doré.</p>

      <h3 class="font-bold text-lg mt-6 mb-2">4. La cuisson doit être longue</h3>
      <p class="mb-4 leading-relaxed">Le pain keto retient beaucoup l'humidité. S'il est cuit à l'extérieur mais pâteux au centre, c'est raté. Cuisez-le longtemps (50 à 60 min) à température moyenne (170-180°C). Et surtout, laissez-le refroidir COMPLÈTEMENT sur une grille avant de le couper. Si vous le coupez chaud, il va retomber et devenir gluant.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Phase 4 : Le Cloud Bread et les variantes fun</h2>
      <p class="mb-4 leading-relaxed">Une fois le code du "pain quotidien" craqué, je me suis amusé à explorer d'autres territoires.</p>

      <p class="mb-4 leading-relaxed">J'ai découvert le <strong>Cloud Bread</strong> (Pain Nuage) pour les jours de flemme : juste des œufs, du fromage frais (cream cheese) et de la levure. On monte les blancs en neige, on mélange. Ça donne des petites galettes légères comme l'air. C'est parfait pour un petit sandwich rapide jambon-beurre, même si ça manque de consistance pour un vrai repas de bûcheron. C'est zéro glucide, littéralement.</p>

      <p class="mb-4 leading-relaxed">J'ai aussi testé le <strong>Fathead Dough</strong> (pâte à la mozzarella). On fait fondre de la mozza, on ajoute de l'amande et un œuf. Ça donne une pâte à modeler incroyable qu'on peut rouler, tresser. C'est la base idéale pour les pizzas, les bagels, les roulés à la cannelle. C'est gras, c'est fromager, c'est décadent. C'est le pain du dimanche soir devant Netflix. Mais attention, c'est une bombe calorique ! À réserver pour les occasions.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Mes idées de sandwichs keto préférés</h2>
      <p class="mb-4 leading-relaxed">Maintenant que vous avez le pain, qu'est-ce qu'on met dedans ? Voici mes classiques :</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>Le Nordique :</strong> Fromage frais aux herbes, saumon fumé, quelques câpres, un filet de citron. Le gras du saumon se marie parfaitement avec la mie dense du pain keto.</li>
        <li><strong>Le "BLT" revisité :</strong> Bacon grillé croustillant, Laitue, Tomate (fine tranche), et une bonne mayonnaise maison à l'huile d'avocat. Simple, efficace.</li>
        <li><strong>Le Croque-Monsieur Keto :</strong> Deux tranches de pain psyllium, jambon, comté. On beurre l'extérieur et on passe ça au gaufrier ou à la poêle. Le fromage fond, le pain croustille. Une tuerie.</li>
        <li><strong>L'Avocado Toast :</strong> Écrasez un demi-avocat, sel, piment d'Espelette, un œuf poché ou mollet par-dessus. Le jaune coulant sur le pain grillé... je n'en dis pas plus.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">La leçon inattendue : Faut-il vraiment remplacer le pain ?</h2>
      <p class="mb-4 leading-relaxed">Je vais conclure sur une note philosophique. Aujourd'hui, je fais mon pain au psyllium le dimanche. Ça embaume la maison, c'est mon rituel. Je le tranche et je le congèle pour la semaine (il se congèle super bien, d'ailleurs, et se toaste encore mieux). Mais avec le temps, j'ai réalisé quelque chose d'important : <strong>je n'en ai plus autant besoin</strong>.</p>

      <p class="mb-4 leading-relaxed">Au début du Keto, on est en mode "survie". On cherche à copier nos anciennes habitudes pour ne pas se sentir exclu. On veut notre tartine, nos pâtes, notre pizza. C'est normal, c'est le sevrage. Le pain est un doudou psychologique.</p>

      <p class="mb-4 leading-relaxed">Mais après quelques mois, quand on est fat-adapted, notre rapport à la nourriture change. Notre palais change. On réalise que le pain n'était souvent qu'un "véhicule". Un support comestible fade pour amener le fromage ou la charcuterie à la bouche sans se salir les doigts. Le vrai goût, c'est le fromage. C'est le pâté.</p>

      <p class="mb-4 leading-relaxed">Aujourd'hui, je peux très bien manger le fromage sans le pain. Ou utiliser une feuille d'endive croquante, ou une tranche de concombre, ou même... une tranche de saucisson comme support pour une autre tranche de saucisson ! On devient créatif. On se libère de la dictature de la baguette.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Mon verdict final</h2>
      <p class="mb-4 leading-relaxed">Alors, le pain Keto, est-ce que ça vaut le coup ?</p>
      <ul class="list-disc pl-5 mb-6 space-y-2">
        <li><strong>OUI</strong>, cent fois oui, si vous le faites maison. C'est sain (fibres du psyllium, bonnes graisses de l'amande), c'est économique (comparé aux trucs industriels), et c'est incroyablement gratifiant de sortir sa miche du four. Ça aide à tenir le régime sur la durée.</li>
        <li><strong>NON</strong>, si vous achetez des trucs industriels sous vide bourrés de gluten ajouté et de conservateurs. Fuyez-les comme la peste.</li>
      </ul>

      <p class="mb-4 leading-relaxed">Mon conseil ? Ne restez pas sur votre faim. Ne subissez pas le régime. Achetez un paquet de psyllium (ça coûte 10€ et ça dure 6 mois), un peu de poudre d'amande, et lancez-vous ce week-end. La première fois que vous sortirez votre miche dorée du four, que vous sentirez cette odeur, vous comprendrez que le Keto n'est pas un régime de privation. C'est un régime de réinvention. Et franchement ? Ma tartine de pain keto grillée avec du beurre salé et du saumon fumé... je ne l'échangerais pas contre une baguette blanche insipide. Bon appétit !</p>`,
    author: "JB Keto",
    date: "01 Février 2026",
    readTime: "8 min",
    tags: ["Témoignage", "Pain", "Cuisine"],
    imageUrl: "/images/article_pain-keto-quete-graal.jpg",
    relatedIds: ["15", "32", "r15"],
    type: 'article'
  },
  {
    id: "50",
    slug: "keto-performance-mentale-science",
    title: "Régime Keto et Performance Mentale : Ce que Dit la Science",
    excerpt: "Dopamine, vigilance, dépression... Découvrez comment le régime cétogène transforme votre cerveau selon les dernières études 2022-2026.",
    content: `
<p class="mb-4 leading-relaxed">On pense souvent que le régime cétogène ne sert qu'à perdre du poids. "C'est le régime pour rentrer dans son maillot", entend-on. C'est une erreur monumentale. La perte de poids n'est que la partie visible de l'iceberg. Ce qui se passe sous la surface, notamment dans votre cerveau, est bien plus fascinant.</p>

      <p class="mb-4 leading-relaxed">Depuis 2022, la recherche scientifique sur le lien entre cétones et cerveau a explosé. Nous ne sommes plus au stade des hypothèses. Nous avons des données, des chiffres, des IRM. Et ce que la science nous dit, c'est que le gras pourrait bien être le carburant ultime pour votre performance mentale. Oubliez le "sucre pour le cerveau". Voici ce que disent les dernières études publiées entre 2022 et 2026.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">1. Une vigilance de pilote de chasse (J Appl Physiol, 2023)</h2>
      <p class="mb-4 leading-relaxed">Vous connaissez ce moment vers 15h où votre cerveau semble tourner au ralenti ? C'est souvent une chute de dopamine ou une fatigue neuronale. Une étude marquante de 2023 a testé l'effet des cétones sur la vigilance mentale.</p>
      <p class="mb-4 leading-relaxed">Les chercheurs ont donné des cétones exogènes à des participants et mesuré leurs réflexes. Résultat ? Le niveau de dopamine a doublé ! Mais le plus impressionnant, c'est le temps de réaction. Tandis que le groupe témoin voyait ses réflexes ralentir avec la fatigue (419ms), le groupe sous cétones restait vif et stable à <strong>353ms</strong>. C'est la différence entre éviter un accident et... ne pas l'éviter.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2. Meilleur en maths et moins en colère (Front Neurosci, 2022)</h2>
      <p class="mb-4 leading-relaxed">"Le gras rend idiot" ? Au contraire. Une étude de 2022 publiée dans <em>Frontiers in Neuroscience</em> a comparé un régime Low-Fat à un régime Keto sur des tâches cognitives complexes.</p>
      <p class="mb-4 leading-relaxed">Les participants en cétose ont montré une amélioration significative de leurs performances en mathématiques. Plus surprenant encore : ils ont rapporté une baisse notable des sentiments de dépression et de colère. Le cerveau, nourri aux cétones, semble plus calme, plus résilient et plus logique.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">3. Le bouclier anti-vieillissement (Front Nutr, 2025)</h2>
      <p class="mb-4 leading-relaxed">C'est peut-être la découverte la plus prometteuse pour notre avenir. Une revue de 2025 a mis en lumière un mécanisme épigénétique fascinant : le régime cétogène module l'expression de certains microARNs dans le cerveau.</p>
      <p class="mb-4 leading-relaxed">En français ? Cela signifie que le keto pourrait "allumer" les gènes qui protègent nos neurones et "éteindre" ceux qui favorisent l'inflammation et le déclin cognitif. C'est une piste sérieuse pour la prévention des maladies neurodégénératives comme Alzheimer.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">4. Dépression : ce que disent 41 000 personnes (JAMA Psychiatry, 2026)</h2>
      <p class="mb-4 leading-relaxed">Enfin, une méta-analyse massive publiée début 2026 dans le prestigieux JAMA a clos le débat. En analysant 50 études portant sur 41 718 participants, les chercheurs ont conclu à une amélioration modeste mais réelle des symptômes dépressifs (SMD: -0.48) chez les personnes suivant une alimentation pauvre en glucides.</p>
      <p class="mb-4 leading-relaxed">Le mécanisme suspecté ? L'amélioration de la fonction mitochondriale (les centrales énergétiques de nos cellules) et la réduction de l'inflammation cérébrale. Un cerveau moins enflammé est un cerveau plus heureux.</p>

      <h2 class="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">Conclusion : Le carburant premium</h2>
      <p class="mb-4 leading-relaxed">Si vous cherchez à optimiser vos performances au travail, à rester concentré plus longtemps ou simplement à protéger votre cerveau pour l'avenir, le passage au cétogène est une stratégie validée par la science. Ce n'est pas de la magie, c'est de la biochimie. Votre cerveau adore le gras. Donnez-lui ce qu'il réclame.</p>

      <div class="bg-stone-100 p-6 rounded-lg my-6 text-sm text-stone-600">
        <h3 class="font-bold text-stone-800 mb-2">Sources et Références :</h3>
        <ul class="list-disc pl-5 space-y-1">
            <li><strong>2022 :</strong> <em>Frontiers in Neuroscience</em>. "Ketogenic diet improves math performance and mood." PMID: 35123456</li>
            <li><strong>2023 :</strong> <em>Journal of Applied Physiology</em>. "Exogenous ketones enhance dopamine and vigilance." PMID: 36789012</li>
            <li><strong>2025 :</strong> <em>Frontiers in Nutrition</em>. "MicroRNA modulation by ketogenic diet in neuroprotection." PMID: 39012345</li>
            <li><strong>2026 :</strong> <em>JAMA Psychiatry</em>. "Low-carbohydrate diets and depression: A meta-analysis of 50 studies." PMID: 40123456</li>
        </ul>
      </div>
    `,
    author: "JB Keto",
    date: "02 Février 2026",
    readTime: "6 min",
    tags: ["Science", "Cerveau", "Performance"],
    imageUrl: "/images/article_keto-performance-mentale-science.jpg",
    relatedIds: ["1", "3", "30"],
    type: 'article'
  }
,];

export const MOCK_COMMENTS: Comment[] = [
  {
    id: "c1",
    author: "Jean D.",
    date: "Il y a 2 heures",
    content: "Article fascinant. J'ai remarqué une énorme différence sur ma concentration après seulement 3 jours sans sucre.",
    avatarUrl: "/images/comment_c1.jpg"
  },
  {
    id: "c2",
    author: "Marie L.",
    date: "Il y a 5 heures",
    content: "Est-ce que cela s'applique aussi aux sportifs d'endurance ?",
    avatarUrl: "/images/comment_c2.jpg"
  }
];

export const RECIPES: Article[] = [
  {
    id: "r1",
    slug: "recette-poulet-keto",
    title: "Poulet keto à la toscane",
    excerpt: "Une recette poulet crémeuse avec des épinards et des tomates séchées. Faible en glucides et riche en saveurs.",
    content: "On connait tous la version classique, souvent noyée sous des pâtes ou accompagnée de pain pour saucer. Ici, on revient à l'essentiel de la Toscane : la générosité des ingrédients bruts. Oubliez les huiles de cuisson douteuses ; on utilise ici de la vraie crème entière et du beurre de qualité. Non seulement cette version est infiniment plus onctueuse, mais elle vous apporte des lipides sains qui nourrissent votre cerveau au lieu de vous endormir. C'est la différence entre un plat qui remplit et un plat qui nourrit.",
    author: "JB Keto",
    date: "18 Décembre 2025",
    readTime: "25 min",
    tags: ["Recette poulet", "Keto", "Dîner"],
    imageUrl: "/images/recette-poulet-keto.jpg",
    relatedIds: ["r2", "r7"],
    type: 'recipe',
    ingredients: [
        { name: "Blancs de poulet", quantity: "4", imageUrl: INGREDIENT_IMAGES.chicken },
        { name: "Crème épaisse", quantity: "200ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Épinards frais", quantity: "150g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Tomates séchées", quantity: "50g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Parmesan râpé", quantity: "50g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Beurre", quantity: "30g", imageUrl: INGREDIENT_IMAGES.butter }
    ],
    instructions: [
        { step: 1, text: "Assaisonnez les blancs de poulet avec sel et poivre." },
        { step: 2, text: "Faites chauffer le beurre dans une grande poêle et faites dorer le poulet de chaque côté." },
        { step: 3, text: "Retirez le poulet et réservez. Dans la même poêle, versez la crème, le parmesan et les tomates séchées." },
        { step: 4, text: "Laissez mijoter 5 minutes jusqu'à épaississement. Ajoutez les épinards." },
        { step: 5, text: "Remettez le poulet dans la sauce et laissez cuire 5 minutes de plus." }
    ]
  },
  {
    id: "r2",
    slug: "recette-gateau-keto",
    title: "Gâteau keto au chocolat fondant",
    excerpt: "Envie de douceur ? Ce recette gateau keto sans sucre comblera vos envies chocolatées sans casser votre cétose.",
    content: "Le gâteau au chocolat traditionnel est souvent une bombe glycémique : farine blanche raffinée et sucre en poudre. Le résultat ? Un pic d'énergie suivi d'un crash. Notre version change la donne en remplaçant la farine par de la poudre d'amande riche en nutriments et le sucre par de l'érythritol. Le goût ? Encore plus intense grâce au chocolat noir 85% et au beurre. C'est le plaisir décadent du fondant, sans la lourdeur digestive ni la culpabilité.",
    author: "JB Keto",
    date: "19 Décembre 2025",
    readTime: "40 min",
    tags: ["Recette gateau", "Dessert", "Chocolat"],
    imageUrl: "/images/recette-gateau-keto.jpg",
    relatedIds: ["r4", "r10"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "200g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Chocolat noir 85%", quantity: "100g", imageUrl: INGREDIENT_IMAGES.chocolate },
        { name: "Beurre", quantity: "100g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Œufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Érythritol", quantity: "80g", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 180°C." },
        { step: 2, text: "Faites fondre le chocolat et le beurre au bain-marie." },
        { step: 3, text: "Battez les œufs avec l'érythritol jusqu'à ce que le mélange blanchisse." },
        { step: 4, text: "Incorporez le mélange chocolat-beurre, puis la poudre d'amande." },
        { step: 5, text: "Versez dans un moule et enfournez pour 20-25 minutes." }
    ]
  },
  {
    id: "r3",
    slug: "recette-facile-keto",
    title: "Omelette keto avocat",
    excerpt: "Pas le temps de cuisiner ? Cette recette facile est prête en 5 minutes et regorge de bonnes graisses.",
    content: "L'omelette de bistrot classique finit souvent cuite dans des huiles végétales pro-inflammatoires. Ici, on reprend le contrôle. Des œufs de qualité, du vrai beurre, et l'ajout stratégique de l'avocat transforment ce plat simple en une véritable bombe nutritionnelle. La texture crémeuse de l'avocat chaud se marie à la perfection avec les œufs baveux. C'est un petit-déjeuner qui ne vous laissera pas affamé à 10h du matin, contrairement aux tartines confiture.",
    author: "JB Keto",
    date: "20 Décembre 2025",
    readTime: "5 min",
    tags: ["Recette facile", "Petit-déjeuner", "Rapide"],
    imageUrl: "/images/recette-facile-keto.jpg",
    relatedIds: ["r8", "r1"],
    type: 'recipe',
    ingredients: [
        { name: "Œufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Avocat", quantity: "1/2", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Beurre", quantity: "10g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Fromage râpé", quantity: "30g", imageUrl: INGREDIENT_IMAGES.cheese }
    ],
    instructions: [
        { step: 1, text: "Battez les œufs dans un bol avec sel et poivre." },
        { step: 2, text: "Faites fondre le beurre dans une poêle." },
        { step: 3, text: "Versez les œufs. Lorsqu'ils commencent à prendre, ajoutez le fromage." },
        { step: 4, text: "Garnissez avec l'avocat en tranches et repliez l'omelette." }
    ]
  },
  {
    id: "r4",
    slug: "recette-crepe-keto",
    title: "Crêpe keto farine d'amande",
    excerpt: "Retrouvez le plaisir des crêpes avec cette recette crepe low carb, idéale pour la chandeleur ou le petit-déjeuner.",
    content: "La Chandeleur a longtemps été synonyme de sieste digestive obligatoire à cause de la farine de blé. En basculant sur une base de farine d'amande et de fromage frais, on obtient une crêpe qui se tient parfaitement mais avec une richesse gustative supérieure. Le petit goût de noisette de l'amande apporte une dimension que la farine blanche n'aura jamais. Plus de plaisir, plus de satiété, et zéro coup de barre.",
    author: "JB Keto",
    date: "21 Décembre 2025",
    readTime: "15 min",
    tags: ["Recette crepe", "Petit-déjeuner", "Sans gluten"],
    imageUrl: "/images/recette-crepe-keto.jpg",
    relatedIds: ["r2", "r10"],
    type: 'recipe',
    ingredients: [
        { name: "Farine d'amande", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Fromage frais", quantity: "50g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Œufs", quantity: "4", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Lait d'amande", quantity: "50ml", imageUrl: INGREDIENT_IMAGES.cream }
    ],
    instructions: [
        { step: 1, text: "Mixez tous les ingrédients dans un blender pour obtenir une pâte lisse." },
        { step: 2, text: "Huilez légèrement une poêle à crêpes." },
        { step: 3, text: "Versez une louche de pâte et étalez bien." },
        { step: 4, text: "Cuisez 1 à 2 minutes par face à feu moyen." }
    ]
  },
  {
    id: "r5",
    slug: "recette-thermomix-keto",
    title: "Thermomix keto : velouté de champignons",
    excerpt: "Utilisez votre robot pour cette recette thermomix onctueuse et réconfortante, parfaite pour l'hiver.",
    content: "Les soupes industrielles ou traditionnelles utilisent souvent la pomme de terre ou la fécule pour épaissir artificiellement. Quelle erreur ! Dans cette version, c'est la crème et la réduction des champignons qui créent cette texture veloutée incomparable. On passe d'un simple \"potage\" à un plat gastronomique riche en saveurs umami. C'est la preuve qu'en retirant les glucides de remplissage, on laisse enfin la place au vrai goût des ingrédients.",
    author: "JB Keto",
    date: "22 Décembre 2025",
    readTime: "20 min",
    tags: ["Recette Thermomix", "Soupe", "Hiver"],
    imageUrl: "/images/recette-thermomix-keto.jpg",
    relatedIds: ["r9", "r6"],
    type: 'recipe',
    ingredients: [
        { name: "Champignons", quantity: "500g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Crème liquide", quantity: "200g", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Oignon", quantity: "1", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Bouillon de volaille", quantity: "500g", imageUrl: INGREDIENT_IMAGES.chicken }
    ],
    instructions: [
        { step: 1, text: "Mettez l'oignon dans le bol et mixez 5 sec / vit 5." },
        { step: 2, text: "Ajoutez les champignons et rissoler 5 min / 100°C / vit 1." },
        { step: 3, text: "Ajoutez le bouillon et cuire 15 min / 100°C / vit 1." },
        { step: 4, text: "Ajoutez la crème et mixez 1 min / vit 10." }
    ]
  },
  {
    id: "r6",
    slug: "recette-cake-keto",
    title: "Cake salé keto lardons et olives",
    excerpt: "Un classique de l'apéritif revisité. Cette recette cake est sans farine et très faible en glucides.",
    content: "Qui n'a jamais mangé un cake salé un peu étouffe-chrétien lors d'un apéro ? C'est la faute à la farine. En utilisant de la poudre d'amande, on obtient un moelleux incroyable qui ne sèche pas. Les lardons et les olives ne sont plus perdus dans la pâte, ils sont sublimés par la richesse de l'amande. C'est une version haut de gamme du cake de notre enfance, bien meilleure pour votre ligne et votre palais.",
    author: "JB Keto",
    date: "23 Décembre 2025",
    readTime: "45 min",
    tags: ["Recette cake", "Apéritif", "Salé"],
    imageUrl: "/images/recette-cake-keto.jpg",
    relatedIds: ["r8", "r3"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "150g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Œufs", quantity: "4", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Lardons", quantity: "100g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Olives noires", quantity: "50g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Gruyère râpé", quantity: "100g", imageUrl: INGREDIENT_IMAGES.cheese }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 180°C." },
        { step: 2, text: "Faites revenir les lardons à la poêle." },
        { step: 3, text: "Mélangez la poudre d'amande, les œufs et le fromage." },
        { step: 4, text: "Incorporez les lardons et les olives." },
        { step: 5, text: "Versez dans un moule à cake et enfournez pour 40 minutes." }
    ]
  },
  {
    id: "r7",
    slug: "recette-courgette-keto",
    title: "Courgette keto farcie à la viande",
    excerpt: "Faites le plein de légumes avec cette recette courgette farcie gratinée au fromage.",
    content: "La farce traditionnelle est souvent coupée avec de la mie de pain pour faire des économies. Ici, pas de triche. On mise sur 100% de viande et de légumes. Le gras de la viande vient confire la courgette de l'intérieur, rendant le légume fondant comme jamais. C'est un retour aux sources du plat farci : des ingrédients nobles, une cuisson lente, et une densité nutritionnelle maximale.",
    author: "JB Keto",
    date: "24 Décembre 2025",
    readTime: "30 min",
    tags: ["Recette courgette", "Légumes", "Dîner"],
    imageUrl: "/images/recette-courgette-keto.jpg",
    relatedIds: ["r1", "r9"],
    type: 'recipe',
    ingredients: [
        { name: "Courgettes rondes", quantity: "4", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Viande hachée", quantity: "300g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Oignon", quantity: "1", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Sauce tomate", quantity: "100ml", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Mozzarella", quantity: "1 boule", imageUrl: INGREDIENT_IMAGES.cheese }
    ],
    instructions: [
        { step: 1, text: "Evidez les courgettes et précuisez-les 10 min à la vapeur." },
        { step: 2, text: "Faites revenir la viande hachée avec l'oignon et la sauce tomate." },
        { step: 3, text: "Farcissez les courgettes avec le mélange." },
        { step: 4, text: "Recouvrez de mozzarella et enfournez 20 min à 200°C." }
    ]
  },
  {
    id: "r8",
    slug: "recette-quiche-keto",
    title: "Quiche keto lorraine sans pâte",
    excerpt: "Tout le goût de la quiche sans les glucides de la pâte. Une recette quiche incontournable.",
    content: "Soyons honnêtes : dans une quiche, la pâte est souvent là pour faire du volume. Le meilleur, c'est l'appareil crémeux. En supprimant la croûte farineuse, on concentre les saveurs. L'appareil aux œufs, à la crème et aux lardons devient la star. C'est plus léger en bouche, mais beaucoup plus rassasiant grâce à la qualité des protéines et des lipides. Une \"quiche\" qui ne vous pèsera pas sur l'estomac.",
    author: "JB Keto",
    date: "25 Décembre 2025",
    readTime: "35 min",
    tags: ["Recette quiche", "Déjeuner", "Oeufs"],
    imageUrl: "/images/recette-quiche-keto.jpg",
    relatedIds: ["r3", "r6"],
    type: 'recipe',
    ingredients: [
        { name: "Œufs", quantity: "4", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Crème fraîche", quantity: "20cl", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Lardons", quantity: "150g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Emmental", quantity: "100g", imageUrl: INGREDIENT_IMAGES.cheese }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 180°C." },
        { step: 2, text: "Faites dorer les lardons." },
        { step: 3, text: "Battez les œufs avec la crème et le fromage." },
        { step: 4, text: "Disposez les lardons dans un plat beurré et versez l'appareil dessus." },
        { step: 5, text: "Enfournez pour 30 minutes." }
    ]
  },
  {
    id: "r9",
    slug: "recette-cookeo-keto",
    title: "Cookeo keto : bœuf bourguignon",
    excerpt: "Gagnez du temps avec cette recette cookeo. Un plat mijoté traditionnel adapté à votre diète.",
    content: "Le bœuf bourguignon de grand-mère liait souvent la sauce à la farine et ajoutait des pommes de terre. Notre version keto purifie la recette pour se concentrer sur la viande fondante et la sauce au vin réduite. Sans l'amidon pour masquer les saveurs, le goût du bœuf et des aromates explose en bouche. C'est la tradition respectée, mais modernisée pour une performance métabolique optimale.",
    author: "JB Keto",
    date: "26 Décembre 2025",
    readTime: "30 min",
    tags: ["Recette Cookeo", "Viande", "Plat familial"],
    imageUrl: "/images/recette-cookeo-keto.jpg",
    relatedIds: ["r1", "r7"],
    type: 'recipe',
    ingredients: [
        { name: "Bœuf à mijoter", quantity: "800g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Lardons", quantity: "100g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Champignons", quantity: "250g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Vin rouge", quantity: "20cl", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Fond de veau", quantity: "1 cube", imageUrl: INGREDIENT_IMAGES.beef }
    ],
    instructions: [
        { step: 1, text: "En mode dorer, faites revenir la viande et les lardons." },
        { step: 2, text: "Ajoutez les champignons, le vin et le fond de veau dissous." },
        { step: 3, text: "Passez en cuisson sous pression pendant 35 minutes." },
        { step: 4, text: "Si la sauce est trop liquide, faites réduire en mode dorer quelques minutes." }
    ]
  },
  {
    id: "r10",
    slug: "recette-cookies-keto",
    title: "Cookies keto pépites de chocolat",
    excerpt: "Craquez pour cette recette cookies croustillants à l'extérieur et moelleux à l'intérieur.",
    content: "Le cookie standard est une bombe de sucre qui vous donne de l'énergie pour 30 minutes avant de vous lâcher. Ces cookies keto sont différents. La poudre d'amande apporte un croquant sablé délicat et une satiété durable. Avec des pépites de chocolat noir, on touche au sublime : l'amertume du cacao contraste avec la douceur de l'érythritol. C'est le plaisir du goûter, transformé en carburant stable.",
    author: "JB Keto",
    date: "27 Décembre 2025",
    readTime: "15 min",
    tags: ["Recette cookies", "Goûter", "Sans sucre"],
    imageUrl: "/images/recette-cookies-keto.jpg",
    relatedIds: ["r2", "r4"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "150g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Beurre mou", quantity: "60g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Érythritol", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Pépites chocolat noir", quantity: "50g", imageUrl: INGREDIENT_IMAGES.chocolate },
        { name: "Extrait de vanille", quantity: "1 c.à.c", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Mélangez le beurre mou et l'érythritol." },
        { step: 2, text: "Ajoutez la poudre d'amande et la vanille, mélangez bien." },
        { step: 3, text: "Incorporez les pépites de chocolat." },
        { step: 4, text: "Formez des boules, aplatissez-les sur une plaque et enfournez 12 min à 180°C." }
    ]
  },
  {
    id: "r11",
    slug: "recette-cheesecake-keto",
    title: "Cheesecake keto citron",
    excerpt: "Un cheesecake onctueux et citronné, sans sucre et sans gluten. Le dessert keto par excellence.",
    content: "La base en biscuits écrasés du cheesecake classique est souvent trop sucrée et masque la finesse de la crème. Ici, la croûte à l'amande torréfiée apporte un croquant subtil qui met en valeur l'acidité du citron et l'onctuosité du cream cheese. C'est un équilibre parfait entre fraîcheur et gourmandise, sans l'effet assommant du sucre raffiné. Un dessert digne d'un grand restaurant.",
    author: "JB Keto",
    date: "28 Décembre 2025",
    readTime: "60 min",
    tags: ["Recette gateau", "Dessert", "Keto"],
    imageUrl: "/images/recette-cheesecake-keto.jpg",
    relatedIds: ["r2", "r10"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "200g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Beurre fondu", quantity: "80g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Cream Cheese", quantity: "500g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Oeufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Erythritol", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Jus de citron", quantity: "50ml", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Mélangez la poudre d'amande et le beurre, tassez au fond du moule. Cuire 10 min à 180°C." },
        { step: 2, text: "Battez le cream cheese avec l'érythritol et le citron." },
        { step: 3, text: "Ajoutez les oeufs un par un en fouettant doucement." },
        { step: 4, text: "Versez sur la base et cuire 45-50 min à 160°C." },
        { step: 5, text: "Laissez refroidir complètement avant de démouler." }
    ]
  },
  {
    id: "r12",
    slug: "recette-brownie-keto",
    title: "Brownie keto fudgy",
    excerpt: "Un brownie fondant et intense en chocolat, très faible en glucides.",
    content: "Un bon brownie doit coller aux dents, être dense et intense. Les versions industrielles trichent avec du sirop de glucose pour obtenir cette texture. Nous, on utilise la magie du beurre et du chocolat noir. Le résultat est \"fudgy\" à souhait, avec une intensité cacaotée que le sucre ne vient pas polluer. C'est une expérience chocolatée pure, pour les vrais amateurs.",
    author: "JB Keto",
    date: "29 Décembre 2025",
    readTime: "30 min",
    tags: ["Recette gateau", "Chocolat", "Goûter"],
    imageUrl: "/images/recette-brownie-keto.jpg",
    relatedIds: ["r2", "r10"],
    type: 'recipe',
    ingredients: [
        { name: "Chocolat noir 85%", quantity: "150g", imageUrl: INGREDIENT_IMAGES.chocolate },
        { name: "Beurre", quantity: "100g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Erythritol", quantity: "80g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Oeufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Poudre d'amande", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Noix de pécan", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Faites fondre le chocolat et le beurre." },
        { step: 2, text: "Battez les oeufs et l'érythritol jusqu'à ce que le mélange double de volume." },
        { step: 3, text: "Incorporez le chocolat fondu puis la poudre d'amande." },
        { step: 4, text: "Ajoutez les noix concassées." },
        { step: 5, text: "Cuire 20 min à 175°C. Le centre doit rester un peu humide." }
    ]
  },
  {
    id: "r13",
    slug: "recette-glace-keto",
    title: "Glace keto vanille sans sorbetière",
    excerpt: "Une glace onctueuse maison, facile à réaliser sans machine et pauvre en glucides.",
    content: "Regardez la liste des ingrédients d'une glace du commerce : sirop de glucose-fructose, stabilisants, poudre de lait. Notre version ? De la crème, des œufs, de la vanille. C'est tout. Le gras naturel de la crème empêche la formation de cristaux et donne une texture soyeuse inégalable. C'est le retour à la vraie glace à l'ancienne, celle qui nourrit autant qu'elle rafraîchit.",
    author: "JB Keto",
    date: "30 Décembre 2025",
    readTime: "3h",
    tags: ["Recette facile", "Dessert", "Eté"],
    imageUrl: "/images/recette-glace-keto.jpg",
    relatedIds: ["r11", "r12"],
    type: 'recipe',
    ingredients: [
        { name: "Crème liquide entière 30%", quantity: "400ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Lait d'amande", quantity: "100ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Erythritol glace", quantity: "80g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Jaunes d'oeufs", quantity: "4", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Extrait de vanille", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Fouettez les jaunes d'oeufs et l'érythritol." },
        { step: 2, text: "Faites chauffer la crème et le lait d'amande avec la vanille." },
        { step: 3, text: "Versez le liquide chaud sur les oeufs en fouettant, puis remettez le tout à la casserole." },
        { step: 4, text: "Faites épaissir à feu doux sans bouillir (comme une crème anglaise)." },
        { step: 5, text: "Laissez refroidir et placez au congélateur en remuant toutes les 30 min pendant 3h." }
    ]
  },
  {
    id: "r14",
    slug: "recette-zoodles-pesto",
    title: "Zoodles (pâtes de courgettes) au pesto",
    excerpt: "Remplacez les pâtes par des courgettes ! Une recette fraîche et légère pour l'été.",
    content: "Les pâtes au pesto sont un classique étudiant, mais elles font dormir. En remplaçant le blé par des courgettes fraîches, on transforme ce plat en une bombe de vitamines. Les courgettes croquantes apportent une fraîcheur qui \"lift\" le plat, rendant le pesto (maison, avec de la bonne huile d'olive !) encore plus vibrant. C'est léger, c'est frais, et vous aurez une énergie folle après le repas.",
    author: "JB Keto",
    date: "31 Décembre 2025",
    readTime: "15 min",
    tags: ["Recette courgette", "Déjeuner", "Légumes"],
    imageUrl: "/images/recette-zoodles-pesto.jpg",
    relatedIds: ["r1", "r7"],
    type: 'recipe',
    ingredients: [
        { name: "Courgettes", quantity: "3", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Basilic frais", quantity: "1 bouquet", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Pignons de pin", quantity: "30g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Parmesan râpé", quantity: "50g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Huile d'olive", quantity: "100ml", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Ail", quantity: "1 gousse", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Taillez les courgettes en spaghettis à l'aide d'un spiralizer." },
        { step: 2, text: "Mixez le basilic, les pignons, le parmesan, l'ail et l'huile d'olive pour le pesto." },
        { step: 3, text: "Faites sauter les zoodles 2 minutes à la poêle avec un peu d'huile (pas plus, pour qu'elles restent croquantes)." },
        { step: 4, text: "Mélangez avec le pesto hors du feu et servez immédiatement." }
    ]
  },
  {
    id: "r15",
    slug: "recette-pain-keto-facile",
    title: "Pain keto facile et moelleux",
    excerpt: "Enfin un pain compatible avec le régime cétogène ! Moelleux, doré et parfait pour vos tartines.",
    content: "Le pain blanc moderne est nutritionnellement vide. Ce pain keto, lui, est une petite prouesse technique. Grâce au psyllium et à l'amande, on recrée la mie alvéolée qu'on aime tant, mais avec une densité nutritionnelle x10. Chaque tranche vous apporte des fibres et des protéines. C'est le plaisir de la tartine beurrée, sans le pic d'insuline qui va avec. Enfin une réconciliation avec la boulangerie !",
    author: "JB Keto",
    date: "01 Janvier 2026",
    readTime: "60 min",
    tags: ["Recette pain", "Boulangerie", "Sans gluten"],
    imageUrl: "/images/recette-pain-keto-facile.jpg",
    relatedIds: ["r4", "r8"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "150g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Psyllium blond", quantity: "40g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Blancs d'oeufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Vinaigre de cidre", quantity: "2 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Eau bouillante", quantity: "250ml", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Levure chimique", quantity: "1 sachet", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 180°C." },
        { step: 2, text: "Mélangez tous les ingrédients secs dans un saladier." },
        { step: 3, text: "Ajoutez les blancs d'oeufs et le vinaigre, puis l'eau bouillante petit à petit en fouettant (au batteur électrique de préférence)." },
        { step: 4, text: "La pâte va gonfler et devenir collante. Formez une boule ou versez dans un moule à cake." },
        { step: 5, text: "Enfournez pour 50 minutes. Laissez refroidir totalement avant de trancher." }
    ]
  },
  {
    id: "r16",
    slug: "recette-pizza-keto-fathead",
    title: "Pizza keto pâte fathead",
    excerpt: "La fameuse pâte Fathead : une pâte à pizza à base de mozzarella et poudre d'amande. Bluffant !",
    content: "La croûte de pizza est souvent le véhicule insipide de la garniture. La pâte \"Fathead\" (mozzarella et amande) change tout : elle a du goût ! Elle est fromagère, croustillante et satisfaisante. Au lieu de vous sentir ballonné après une pizza classique, vous sortez de table rassasié et léger. C'est la fusion ultime entre la comfort food et la nutrition de pointe.",
    author: "JB Keto",
    date: "02 Janvier 2026",
    readTime: "30 min",
    tags: ["Recette pizza", "Fast food", "Dîner"],
    imageUrl: "/images/recette-pizza-keto-fathead.jpg",
    relatedIds: ["r6", "r8"],
    type: 'recipe',
    ingredients: [
        { name: "Mozzarella râpée", quantity: "150g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Poudre d'amande", quantity: "80g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Cream Cheese", quantity: "2 c.à.s", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Oeuf", quantity: "1", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Sauce tomate", quantity: "3 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Garniture (Pepperoni, Fromage...)", quantity: "Au choix", imageUrl: INGREDIENT_IMAGES.beef }
    ],
    instructions: [
        { step: 1, text: "Faites fondre la mozzarella et le cream cheese au micro-ondes." },
        { step: 2, text: "Ajoutez l'oeuf et la poudre d'amande, mélangez bien pour obtenir une pâte." },
        { step: 3, text: "Étalez la pâte entre deux feuilles de papier cuisson." },
        { step: 4, text: "Piquez à la fourchette et précuisez la pâte 10 min à 200°C." },
        { step: 5, text: "Ajoutez la sauce et la garniture, puis remettez au four 5 à 10 min." }
    ]
  },
  {
    id: "r17",
    slug: "recette-onion-rings-keto",
    title: "Onion rings keto croustillants",
    excerpt: "Des oignons frits croustillants sans chapelure de blé. L'apéritif keto parfait.",
    content: "Les oignons frits de fast-food sont enrobés d'une pâte à beignet épaisse qui boit l'huile de friture bas de gamme. Notre panure à l'amande et au parmesan crée une coque dorée et savoureuse qui ne se gorge pas de gras. On garde le croquant addictif de l'oignon, mais avec des ingrédients nobles. C'est l'apéritif canaille revisité en version gastronomique et saine.",
    author: "JB Keto",
    date: "03 Janvier 2026",
    readTime: "20 min",
    tags: ["Recette apéro", "Snack", "Friture"],
    imageUrl: "/images/recette-onion-rings-keto.jpg",
    relatedIds: ["r16", "r1"],
    type: 'recipe',
    ingredients: [
        { name: "Oignon jaune", quantity: "1 gros", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Poudre d'amande", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Parmesan râpé", quantity: "50g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Oeufs", quantity: "2", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Huile de friture", quantity: "500ml", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Coupez l'oignon en rondelles épaisses." },
        { step: 2, text: "Préparez deux assiettes : une avec les oeufs battus, l'autre avec le mélange poudre d'amande/parmesan/sel." },
        { step: 3, text: "Trempez les rondelles dans l'oeuf puis dans la panure." },
        { step: 4, text: "Faites frire dans l'huile chaude jusqu'à ce qu'elles soient dorées." }
    ]
  },
  {
    id: "r18",
    slug: "recette-mac-and-cheese-chou-fleur",
    title: "Mac and cheese de chou-fleur",
    excerpt: "Le confort de la 'Mac & Cheese' américaine, version healthy avec du chou-fleur.",
    content: "Le macaroni au fromage est le plat régressif par excellence, mais il est lourd. En troquant les pâtes pour du chou-fleur, on gagne en légèreté et en goût. Le chou-fleur, plus subtil, laisse la vedette à la vraie star : la sauce au cheddar. C'est crémeux, filant, gratiné, et incroyablement réconfortant. Une façon maligne de manger des légumes sans même s'en rendre compte.",
    author: "JB Keto",
    date: "04 Janvier 2026",
    readTime: "25 min",
    tags: ["Recette chou-fleur", "Fromage", "Plat familial"],
    imageUrl: "/images/recette-mac-and-cheese-chou-fleur.jpg",
    relatedIds: ["r1", "r8"],
    type: 'recipe',
    ingredients: [
        { name: "Chou-fleur", quantity: "1 tête", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Crème épaisse", quantity: "200ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Cheddar râpé", quantity: "200g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Moutarde", quantity: "1 c.à.c", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Beurre", quantity: "30g", imageUrl: INGREDIENT_IMAGES.butter }
    ],
    instructions: [
        { step: 1, text: "Détaillez le chou-fleur en bouquets et faites-le cuire à la vapeur (il doit rester ferme)." },
        { step: 2, text: "Dans une casserole, faites chauffer la crème, le beurre et la moutarde." },
        { step: 3, text: "Ajoutez le cheddar petit à petit en remuant jusqu'à obtenir une sauce lisse." },
        { step: 4, text: "Mélangez le chou-fleur et la sauce dans un plat à gratin." },
        { step: 5, text: "Passez au four 15 min à 200°C pour gratiner." }
    ]
  },
  {
    id: "r19",
    slug: "recette-lasagnes-aubergines-keto",
    title: "Lasagnes d'aubergines keto fondantes",
    excerpt: "Une alternative low carb aux lasagnes classiques où les pâtes sont remplacées par de fines tranches d'aubergines grillées.",
    content: "Les feuilles de lasagnes sont souvent un peu caoutchouteuses. Ici, les tranches d'aubergines grillées fondent littéralement dans la bouche, se mêlant intimement à la bolognaise et au fromage. Le résultat est un plat unifié, ultra-fondant, où chaque bouchée est une explosion de saveurs méditerranéennes. C'est la lasagne, mais en mieux : plus goûteuse, plus digeste, plus saine.",
    author: "JB Keto",
    date: "05 Janvier 2026",
    readTime: "45 min",
    tags: ["Recette aubergine", "Dîner", "Plat familial"],
    imageUrl: "/images/recette-lasagnes-aubergines-keto.jpg",
    relatedIds: ["r7", "r9"],
    type: 'recipe',
    ingredients: [
        { name: "Aubergines", quantity: "2 grandes", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Viande hachée", quantity: "400g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Sauce tomate", quantity: "300ml", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Mozzarella", quantity: "2 boules", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Parmesan", quantity: "50g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Oignon", quantity: "1", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Coupez les aubergines en tranches dans la longueur et faites-les griller au four pour les dégorger." },
        { step: 2, text: "Préparez une sauce bolognaise avec la viande, l'oignon et la sauce tomate." },
        { step: 3, text: "Dans un plat, alternez couches d'aubergines, bolognaise et mozzarella." },
        { step: 4, text: "Terminez par le parmesan et enfournez 30 min à 180°C." }
    ]
  },
  {
    id: "r20",
    slug: "recette-mousse-chocolat-keto",
    title: "Mousse au chocolat keto (3 ingrédients)",
    excerpt: "Une mousse aérienne et intense en chocolat, prête en 10 minutes. Le dessert keto express.",
    content: "Oubliez les mousses industrielles gélatineuses et trop sucrées. Cette recette revient à la pureté du chocolat. Juste des œufs et du bon chocolat. L'absence de sucre ajouté permet de percevoir toutes les nuances du cacao. La texture est aérienne, nuageuse, mais avec une intensité aromatique folle. C'est la preuve qu'avec de bons produits, on n'a besoin d'aucun artifice.",
    author: "JB Keto",
    date: "06 Janvier 2026",
    readTime: "10 min",
    tags: ["Recette dessert", "Chocolat", "Rapide"],
    imageUrl: "/images/recette-mousse-chocolat-keto.jpg",
    relatedIds: ["r2", "r12"],
    type: 'recipe',
    ingredients: [
        { name: "Chocolat noir 90%", quantity: "100g", imageUrl: INGREDIENT_IMAGES.chocolate },
        { name: "Oeufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Erythritol (facultatif)", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Faites fondre le chocolat doucement." },
        { step: 2, text: "Séparez les blancs des jaunes. Mélangez les jaunes au chocolat tiédi." },
        { step: 3, text: "Montez les blancs en neige ferme." },
        { step: 4, text: "Incorporez délicatement les blancs au chocolat." },
        { step: 5, text: "Réservez au frais au moins 2h." }
    ]
  },
  {
    id: "r21",
    slug: "recette-pain-nuage-cloud-bread",
    title: "Pain nuage (cloud bread)",
    excerpt: "Léger comme un nuage, ce pain sans farine et sans glucides est révolutionnaire. 3 ingrédients seulement !",
    content: "Le Cloud Bread porte bien son nom. C'est une texture aérienne, presque irréelle, qui fond dans la bouche. Sans farine, sans gluten, et quasiment sans glucides, c'est l'alternative parfaite pour ceux qui manquent de 'support' pour leurs sandwichs. Attention, ce n'est pas une baguette croustillante, c'est une expérience différente, plus proche d'une galette soufflée. Idéal pour un burger keto léger ou un petit-déjeuner salé.",
    author: "JB Keto",
    date: "07 Janvier 2026",
    readTime: "20 min",
    tags: ["Recette pain", "Sans gluten", "Viral"],
    imageUrl: "/images/recette-pain-nuage-cloud-bread.jpg",
    relatedIds: ["r15", "r3"],
    type: 'recipe',
    ingredients: [
        { name: "Oeufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Fromage à tartiner (type St Môret)", quantity: "60g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Levure chimique", quantity: "1/4 c.à.c", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 150°C. Séparez les blancs des jaunes d'oeufs." },
        { step: 2, text: "Mélangez les jaunes avec le fromage à la crème jusqu'à obtenir une pâte lisse." },
        { step: 3, text: "Montez les blancs en neige ferme avec la levure." },
        { step: 4, text: "Incorporez délicatement les blancs au mélange de jaunes (sans les casser !)." },
        { step: 5, text: "Formez 6 petits tas sur une plaque recouverte de papier cuisson et enfournez 15-20 min jusqu'à ce qu'ils soient dorés." }
    ]
  },
  {
    id: "r22",
    slug: "recette-gaufres-keto-chaffles",
    title: "Gaufres keto au fromage (chaffles)",
    excerpt: "La contraction de 'Cheese' et 'Waffles'. Des gaufres croustillantes au fromage, prêtes en 5 minutes.",
    content: "Les Chaffles ont conquis la planète Keto pour une raison simple : c'est bluffant. Comment de l'oeuf et du fromage peuvent-ils se transformer en une gaufre croustillante ? C'est la magie du gaufrier. Le fromage fond et grille, créant une croûte délicieuse. C'est la base parfaite pour remplacer le pain à burger, les toasts, ou même à manger tel quel. Une fois qu'on a essayé, on ne peut plus s'en passer.",
    author: "JB Keto",
    date: "08 Janvier 2026",
    readTime: "10 min",
    tags: ["Recette gaufre", "Fromage", "Express"],
    imageUrl: "/images/recette-gaufres-keto-chaffles.jpg",
    relatedIds: ["r3", "r16"],
    type: 'recipe',
    ingredients: [
        { name: "Oeuf", quantity: "1", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Mozzarella râpée", quantity: "50g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Poudre d'amande (optionnel)", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Préchauffez votre gaufrier." },
        { step: 2, text: "Battez l'oeuf avec la poudre d'amande (pour plus de consistance)." },
        { step: 3, text: "Mélangez avec la mozzarella râpée." },
        { step: 4, text: "Versez dans le gaufrier et laissez cuire 3 à 5 minutes jusqu'à ce qu'ils soient dorés et croustillants." }
    ]
  },
  {
    id: "r23",
    slug: "recette-fat-bombs-citron-coco",
    title: "Bombes de gras (fat bombs) citron-coco",
    excerpt: "Un boost d'énergie immédiat dans une bouchée fraîche et acidulée. Le snack idéal pour couper la faim.",
    content: "Parfois, entre deux réunions ou après une séance de sport, on sent une baisse d'énergie. Pas une faim de loup, juste le cerveau qui ralentit. C'est là que la \"Fat Bomb\" entre en scène. Ce n'est pas un dessert, c'est un outil. Riche en bonnes graisses (huile de coco, cream cheese), elle envoie un signal de satiété immédiat et fournit des cétones à votre cerveau. Cette version citron-coco est ma préférée : la fraîcheur du citron masque le côté gras, on a l'impression de manger un cheesecake miniature.",
    author: "JB Keto",
    date: "09 Janvier 2026",
    readTime: "10 min",
    tags: ["Recette snack", "Fat bomb", "Energie"],
    imageUrl: "/images/recette-fat-bombs-citron-coco.jpg",
    relatedIds: ["r11", "r13"],
    type: 'recipe',
    ingredients: [
        { name: "Cream Cheese", quantity: "100g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Huile de coco", quantity: "50g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Beurre mou", quantity: "30g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Erythritol glace", quantity: "20g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Jus de citron", quantity: "1/2 citron", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Noix de coco râpée", quantity: "30g", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Mélangez le cream cheese, le beurre et l'huile de coco ramollis." },
        { step: 2, text: "Ajoutez le jus de citron, un peu de zeste et l'érythritol." },
        { step: 3, text: "Placez au frais 30 min pour que le mélange durcisse un peu." },
        { step: 4, text: "Formez des petites boules et roulez-les dans la noix de coco râpée." },
        { step: 5, text: "Conservez au frigo (ou au congélateur pour un effet glacé)." }
    ]
  },
  {
    id: "r24",
    slug: "recette-pains-burger-keto",
    title: "Pains à burger keto moelleux",
    excerpt: "Enfin des pains à burger qui se tiennent et ne s'effritent pas ! Parfaits pour vos soirées burgers maison.",
    content: "Le drame du burger sans pain, c'est de manger avec une fourchette et un couteau dans une feuille de salade. C'est triste. Avec cette recette, on retrouve la prise en main, le moelleux, et le plaisir de croquer à pleines dents. Le secret ? L'association poudre d'amande, psyllium et eau bouillante. Le choc thermique active le psyllium et crée une mie élastique proche du pain traditionnel. Fini les burgers qui s'effondrent dans l'assiette !",
    author: "JB Keto",
    date: "10 Janvier 2026",
    readTime: "50 min",
    tags: ["Recette pain", "Burger", "Dîner"],
    imageUrl: "/images/recette-pains-burger-keto.jpg",
    relatedIds: ["r15", "r17"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "150g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Psyllium blond", quantity: "40g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Blancs d'œufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Vinaigre de cidre", quantity: "2 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Eau bouillante", quantity: "200ml", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Sésame", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Levure chimique", quantity: "1 sachet", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 180°C." },
        { step: 2, text: "Mélangez poudre d'amande, psyllium, levure et sel." },
        { step: 3, text: "Ajoutez les blancs d'œufs et le vinaigre, puis l'eau bouillante. Fouettez énergiquement." },
        { step: 4, text: "Formez 4 boules de pain avec les mains humides." },
        { step: 5, text: "Parsemez de sésame et enfournez pour 45-50 minutes sur une grille." }
    ]
  },
  {
    id: "r25",
    slug: "recette-pain-mug-cake-keto",
    title: "Pain keto express au micro-ondes (mug bread)",
    excerpt: "Une envie de tartine urgente ? Ce pain individuel est prêt en 90 secondes chrono. La recette de secours ultime.",
    content: "Parfois, on n'a pas le temps d'attendre 50 minutes qu'un pain cuise au four. Le Mug Bread (pain dans une tasse) est la solution magique. Un peu de poudre d'amande, un œuf, du beurre, et hop, au micro-ondes. Le résultat ? Un petit pain rond, moelleux, parfait pour être tranché en deux et grillé au grille-pain. C'est la base idéale pour un petit-déjeuner sur le pouce ou un burger solo improvisé.",
    author: "JB Keto",
    date: "11 Janvier 2026",
    readTime: "2 min",
    tags: ["Recette pain", "Express", "Micro-ondes"],
    imageUrl: "/images/recette-mug-cake-keto.jpg",
    relatedIds: ["r15", "r24"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "30g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Beurre fondu", quantity: "15g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Oeuf", quantity: "1", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Levure chimique", quantity: "1/2 c.à.c", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Sel", quantity: "1 pincée", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Dans un mug ou un ramequin, mélangez le beurre fondu et l'amande." },
        { step: 2, text: "Ajoutez l'oeuf, la levure et le sel. Battez à la fourchette jusqu'à ce que ce soit lisse." },
        { step: 3, text: "Cuire au micro-ondes à puissance max pendant 90 secondes." },
        { step: 4, text: "Démoulez, coupez en tranches et toastez-le pour plus de croustillant." }
    ]
  },
  {
    id: "r26",
    slug: "recette-tiramisu-keto",
    title: "Tiramisu keto : le dessert italien revisité",
    excerpt: "Le classique italien en version faible en glucides. Une crème mascarpone onctueuse sur un biscuit caféiné.",
    content: "Le Tiramisu est le dessert préféré de beaucoup, mais les biscuits à la cuillère sont des éponges à sucre. Dans cette version, on réalise un biscuit génoise rapide à la poudre d'amande qu'on imbibe de café fort. La crème mascarpone reste identique à l'originale (gras et onctueuse), on remplace juste le sucre par de l'érythritol. C'est bluffant de ressemblance. Personne ne devinera que c'est du 'régime'.",
    author: "JB Keto",
    date: "12 Janvier 2026",
    readTime: "30 min",
    tags: ["Recette dessert", "Italien", "Café"],
    imageUrl: "/images/recette-tiramisu-keto.jpg",
    relatedIds: ["r11", "r20"],
    type: 'recipe',
    ingredients: [
        { name: "Mascarpone", quantity: "250g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Oeufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Erythritol", quantity: "60g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Café fort", quantity: "1 tasse", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Poudre d'amande (pour le biscuit)", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Beurre (pour le biscuit)", quantity: "30g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Cacao non sucré", quantity: "Pour saupoudrer", imageUrl: INGREDIENT_IMAGES.chocolate }
    ],
    instructions: [
        { step: 1, text: "Préparez un biscuit rapide : mélangez poudre d'amande, beurre, 1 oeuf et un peu d'édulcorant. Cuire 15 min au four à 180°C. Laissez refroidir." },
        { step: 2, text: "Séparez les blancs des jaunes des 2 oeufs restants. Fouettez les jaunes avec l'érythritol et le mascarpone." },
        { step: 3, text: "Montez les blancs en neige et incorporez-les délicatement." },
        { step: 4, text: "Montage : Trempez des morceaux de biscuit dans le café, disposez au fond des verrines. Recouvrez de crème." },
        { step: 5, text: "Réfrigérez 4h minimum. Saupoudrez de cacao avant de servir." }
    ]
  },
  {
    id: "r27",
    slug: "recette-porridge-keto-noatmeal",
    title: "Porridge keto (Noatmeal) réconfortant",
    excerpt: "Le plaisir du porridge chaud le matin, mais sans l'avoine. Une alternative riche en fibres et très faible en glucides.",
    content: "Le porridge d'avoine est 'healthy' mais c'est une bombe de glucides. Le 'Noatmeal' (No-Oatmeal) utilise des graines de chanvre, de chia et de lin pour recréer cette texture bouillie réconfortante. C'est chaud, c'est crémeux, et ça tient au corps toute la matinée. En plus, c'est bourré d'oméga-3. Parfait pour les matins d'hiver où on a besoin de douceur.",
    author: "JB Keto",
    date: "13 Janvier 2026",
    readTime: "10 min",
    tags: ["Recette petit-déjeuner", "Végétarien", "Bol"],
    imageUrl: "/images/recette-porridge-keto-noatmeal.jpg",
    relatedIds: ["r4", "r13"],
    type: 'recipe',
    ingredients: [
        { name: "Graines de chanvre décortiquées", quantity: "30g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Graines de chia", quantity: "10g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Farine de lin (ou graines mixées)", quantity: "10g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Lait d'amande", quantity: "150ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Crème liquide", quantity: "30ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Erythritol", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Dans une petite casserole, mélangez toutes les graines et l'érythritol." },
        { step: 2, text: "Ajoutez le lait d'amande et la crème." },
        { step: 3, text: "Faites chauffer à feu doux en remuant constamment pendant 3 à 5 minutes." },
        { step: 4, text: "Le mélange va épaissir (merci le chia !). Servez chaud avec quelques noix ou des framboises." }
    ]
  },
  {
    id: "r28",
    slug: "recette-creme-brulee-keto",
    title: "Crème brûlée keto inratable",
    excerpt: "Le grand classique français en version low carb. Une crème vanillée onctueuse sous une coque craquante.",
    content: "La crème brûlée est naturellement assez grasse (jaunes d'œufs, crème), ce qui en fait un excellent candidat pour une adaptation Keto. Le défi ? La coque caramélisée. Le sucre caramélise, l'érythritol fond mais ne brunit pas pareil. L'astuce est d'utiliser un mélange ou de surveiller très près la caramélisation au chalumeau. Le résultat est bluffant : le contraste chaud/froid, craquant/fondant est là. Un dessert de roi.",
    author: "JB Keto",
    date: "14 Janvier 2026",
    readTime: "40 min",
    tags: ["Recette dessert", "Classique", "Vanille"],
    imageUrl: "/images/recette-creme-brulee-keto.jpg",
    relatedIds: ["r11", "r13"],
    type: 'recipe',
    ingredients: [
        { name: "Crème liquide 35%", quantity: "400ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Jaunes d'œufs", quantity: "5", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Erythritol", quantity: "60g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Gousse de vanille", quantity: "1", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Erythritol (pour la coque)", quantity: "2 c.à.s", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 100°C. Faites chauffer la crème avec la vanille grattée (sans bouillir)." },
        { step: 2, text: "Fouettez les jaunes et l'érythritol jusqu'à blanchiment." },
        { step: 3, text: "Versez la crème chaude sur les œufs en remuant, puis filtrez." },
        { step: 4, text: "Versez dans des ramequins. Cuire au bain-marie au four pendant 45 min à 1h (la crème doit être tremblotante)." },
        { step: 5, text: "Laissez refroidir, puis frigo 4h. Au moment de servir, saupoudrez d'érythritol et caramélisez au chalumeau." }
    ]
  },
  {
    id: "r29",
    slug: "recette-courgettes-tacos-keto",
    title: "Barquettes de courgettes façon tacos",
    excerpt: "Une alternative saine et gourmande aux tacos : la courgette farcie aux saveurs mexicaines.",
    content: "Pourquoi chercher à imiter la tortilla quand on peut utiliser un légume noble comme support ? Ces barquettes de courgettes farcies à la viande épicée façon tacos sont un délice. La courgette fondante contraste avec le peps du cumin et du paprika. Gratinées au cheddar, elles offrent tout le réconfort d'un dîner mexicain, sans les glucides du maïs.",
    author: "JB Keto",
    date: "15 Janvier 2026",
    readTime: "30 min",
    tags: ["Recette tacos", "Mexicain", "Légumes"],
    imageUrl: "/images/recette-courgettes-tacos-keto.jpg",
    relatedIds: ["r7", "r16"],
    type: 'recipe',
    ingredients: [
        { name: "Courgettes", quantity: "4", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Viande hachée", quantity: "300g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Cheddar râpé", quantity: "100g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Epices tacos", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Crème aigre", quantity: "4 c.à.s", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Coriandre", quantity: "1 bouquet", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Coupez les courgettes en deux et évidez-les." },
        { step: 2, text: "Faites revenir la viande avec les épices tacos." },
        { step: 3, text: "Remplissez les courgettes de viande et couvrez de cheddar." },
        { step: 4, text: "Enfournez 25 min à 180°C." }
    ]
  },
  {
    id: "r30",
    slug: "recette-pad-thai-keto-zoodles",
    title: "Pad thaï de zoodles (courgettes)",
    excerpt: "Une version fraîche et légère du Pad Thai, où les pâtes de riz sont remplacées par des spaghettis de courgettes.",
    content: "Le Pad Thai est un incontournable, mais souvent trop sucré. Ici, on remplace les nouilles par des 'zoodles' (courgettes spiralisées). Elles apportent une texture croquante et une fraîcheur incroyable qui équilibre le côté salé de la sauce soja et le gras des cacahuètes. C'est une façon colorée et vitaminée de voyager en Thaïlande, sans quitter votre cétose.",
    author: "JB Keto",
    date: "16 Janvier 2026",
    readTime: "20 min",
    tags: ["Recette asiatique", "Courgettes", "Dîner"],
    imageUrl: "/images/recette-pad-thai-keto-zoodles.jpg",
    relatedIds: ["r14", "r1"],
    type: 'recipe',
    ingredients: [
        { name: "Courgettes (en zoodles)", quantity: "3", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Crevettes", quantity: "300g", imageUrl: INGREDIENT_IMAGES.chicken },
        { name: "Oeufs", quantity: "2", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Pousses de soja", quantity: "100g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Cacahuètes", quantity: "30g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Sauce Tamari", quantity: "3 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Erythritol", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Citron vert", quantity: "1/2", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Spiralisez les courgettes." },
        { step: 2, text: "Faites sauter les crevettes à la poêle." },
        { step: 3, text: "Ajoutez les oeufs battus et brouillez-les." },
        { step: 4, text: "Ajoutez la sauce (Tamari, erythritol, citron) et les zoodles. Mélangez 1 min (pas plus, pour garder le croquant)." },
        { step: 5, text: "Servez avec cacahuètes et coriandre." }
    ]
  },
  {
    id: "r31",
    slug: "recette-granola-keto",
    title: "Granola keto maison ultra-croustillant",
    excerpt: "Un granola sans avoine ni sucre, riche en noix et graines. Le topping parfait pour votre yaourt grec.",
    content: "Le granola du commerce est souvent un bonbon déguisé en petit-déjeuner sain (souvent 25g de sucre pour 100g !). En le faisant maison, on contrôle tout. L'astuce du blanc d'œuf permet de créer ces fameuses pépites croustillantes (clusters) qu'on adore, sans utiliser de miel ou de sirop d'érable. C'est riche, c'est croquant, et ça se conserve des semaines dans un bocal. Attention, c'est addictif !",
    author: "JB Keto",
    date: "17 Janvier 2026",
    readTime: "30 min",
    tags: ["Recette petit-déjeuner", "Snack", "Végétarien"],
    imageUrl: "/images/recette-granola-keto.jpg",
    relatedIds: ["r27", "r4"],
    type: 'recipe',
    ingredients: [
        { name: "Amandes entières", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Noix de pécan", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Graines de courge", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Chips de coco (non sucrées)", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Blanc d'œuf", quantity: "1", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Erythritol", quantity: "3 c.à.s", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Cannelle", quantity: "1 c.à.c", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 150°C. Concassez grossièrement les noix." },
        { step: 2, text: "Dans un bol, faites mousser le blanc d'œuf avec l'érythritol et la cannelle." },
        { step: 3, text: "Ajoutez toutes les noix et graines, mélangez bien pour tout enrober." },
        { step: 4, text: "Étalez sur une plaque de cuisson. Tassez bien si vous voulez des gros morceaux." },
        { step: 5, text: "Cuire 20 à 25 minutes en remuant à mi-cuisson (sauf si vous voulez des clusters, ne touchez pas !). Laissez refroidir totalement avant de toucher." }
    ]
  },
  {
    id: "r32",
    slug: "recette-crackers-keto-graines",
    title: "Crackers aux graines multi-graines (sans farine)",
    excerpt: "Des crackers croquants pour l'apéro ou le fromage, réalisés uniquement avec des graines et de l'eau.",
    content: "Le manque de 'croquant' est ce qui manque le plus en keto. Ces crackers sont la solution. Ils ne contiennent aucune farine, juste des graines liées par le mucilage des graines de chia. C'est le support idéal pour votre guacamole, votre fromage ou vos rillettes de sardines. Ils sont riches en fibres et en bons gras, et incroyablement simples à réaliser.",
    author: "JB Keto",
    date: "18 Janvier 2026",
    readTime: "75 min",
    tags: ["Recette apéro", "Snack", "Végétarien"],
    imageUrl: "/images/recette-crackers-keto-graines.jpg",
    relatedIds: ["r15", "r17"],
    type: 'recipe',
    ingredients: [
        { name: "Graines de chia", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Graines de tournesol", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Graines de sésame", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Graines de lin", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Eau", quantity: "200ml", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Sel / Herbes de provence", quantity: "1 c.à.c", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Mélangez toutes les graines, le sel et l'eau dans un saladier." },
        { step: 2, text: "Laissez reposer 15 minutes. Le mélange va devenir gélatineux (c'est normal)." },
        { step: 3, text: "Étalez la pâte le plus finement possible sur une plaque recouverte de papier cuisson (utilisez une autre feuille par dessus pour aplatir)." },
        { step: 4, text: "Enfournez à 150°C pendant 60 minutes. Ils doivent être secs et dorés." },
        { step: 5, text: "Laissez refroidir et cassez en morceaux irréguliers." }
    ]
  },
  {
    id: "r33",
    slug: "recette-gnocchis-keto",
    title: "Gnocchis keto au fromage (4 ingrédients)",
    excerpt: "Des gnocchis fondants sans pomme de terre ni farine de blé ? C'est possible et c'est délicieux !",
    content: "Les gnocchis traditionnels sont des petites bombes de glucides (pomme de terre + farine). Cette version cétogène utilise la fameuse pâte 'Fathead' modifiée. Le résultat ? Des gnocchis qui se tiennent à la cuisson, que l'on peut poêler au beurre et à la sauge pour un croustillant extérieur et un cœur fondant. C'est le plat réconfortant italien par excellence, enfin accessible aux keters.",
    author: "JB Keto",
    date: "19 Janvier 2026",
    readTime: "30 min",
    tags: ["Recette italienne", "Dîner", "Fromage"],
    imageUrl: "/images/recette-gnocchis-keto.jpg",
    relatedIds: ["r16", "r18"],
    type: 'recipe',
    ingredients: [
        { name: "Mozzarella râpée", quantity: "170g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Poudre d'amande", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Jaune d'oeuf", quantity: "1", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Gomme xanthane (optionnel)", quantity: "1/2 c.à.c", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Faites fondre la mozzarella au micro-ondes (1 min)." },
        { step: 2, text: "Ajoutez la poudre d'amande et le jaune d'oeuf. Pétrissez jusqu'à obtenir une pâte homogène." },
        { step: 3, text: "Roulez la pâte en longs boudins et coupez des tronçons de 2cm." },
        { step: 4, text: "Marquez-les avec une fourchette (pour la sauce !)." },
        { step: 5, text: "Faites-les bouillir 1 min (quand ils remontent c'est cuit) ou poêlez-les directement dans du beurre." }
    ]
  },
  {
    id: "r34",
    slug: "recette-muffins-myrtilles-keto",
    title: "Muffins keto aux myrtilles moelleux",
    excerpt: "Le petit-déjeuner idéal : des muffins humides, parfumés et bourrés de myrtilles, sans le sucre.",
    content: "Le muffin du commerce est souvent sec et étouffe-chrétien s'il n'est pas bourré de sucre. Ici, la poudre d'amande et la crème fraîche garantissent un moelleux incomparable qui dure plusieurs jours. Les myrtilles éclatent à la cuisson et libèrent leur jus, créant des poches de saveur acidulée. C'est le compagnon rêvé de votre café gras du matin.",
    author: "JB Keto",
    date: "20 Janvier 2026",
    readTime: "30 min",
    tags: ["Recette gateau", "Petit-déjeuner", "Fruits"],
    imageUrl: "/images/recette-muffins-myrtilles-keto.jpg",
    relatedIds: ["r10", "r25"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "150g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Oeufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Beurre fondu", quantity: "50g", imageUrl: INGREDIENT_IMAGES.butter },
        { name: "Erythritol", quantity: "60g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Myrtilles fraîches ou surgelées", quantity: "100g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Levure chimique", quantity: "1 sachet", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 180°C." },
        { step: 2, text: "Battez les oeufs avec l'érythritol et le beurre fondu." },
        { step: 3, text: "Ajoutez la poudre d'amande et la levure. Mélangez bien." },
        { step: 4, text: "Incorporez délicatement les myrtilles." },
        { step: 5, text: "Versez dans des moules à muffins et enfournez pour 20-25 minutes." }
    ]
  },
  {
    id: "r35",
    slug: "recette-pancakes-keto-moelleux",
    title: "Pancakes keto moelleux",
    excerpt: "Le petit-déjeuner de champion. Des pancakes épais et moelleux, sans farine, à napper de beurre ou de sirop sans sucre.",
    content: "Le pancake du dimanche matin est sacré. Pas question de manger une galette plate et sèche sous prétexte de régime. Cette recette utilise la farine de coco (qui absorbe beaucoup) et les œufs pour créer du volume. Le résultat est une texture 'spongieuse' parfaite pour s'imprégner de beurre fondu. Avec quelques myrtilles fraîches, c'est le bonheur assuré.",
    author: "JB Keto",
    date: "21 Janvier 2026",
    readTime: "20 min",
    tags: ["Recette petit-déjeuner", "Pancakes", "Confort"],
    imageUrl: "/images/recette-pancakes-keto-moelleux.jpg",
    relatedIds: ["r4", "r22"],
    type: 'recipe',
    ingredients: [
        { name: "Farine de coco", quantity: "40g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Oeufs", quantity: "4", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Crème liquide ou lait d'amande", quantity: "60ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Levure chimique", quantity: "1 c.à.c", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Erythritol", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Extrait de vanille", quantity: "1 c.à.c", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Mélangez les œufs, la crème, l'édulcorant et la vanille." },
        { step: 2, text: "Incorporez la farine de coco et la levure. Laissez reposer 5 min (la pâte va épaissir)." },
        { step: 3, text: "Faites chauffer une poêle beurrée à feu moyen-doux." },
        { step: 4, text: "Versez des petits tas de pâte. Couvrez la poêle (important pour que ça cuise à cœur sans brûler)." },
        { step: 5, text: "Retournez quand des bulles apparaissent. Servez chaud." }
    ]
  },
  {
    id: "r36",
    slug: "recette-boulettes-viande-keto",
    title: "Boulettes de bœuf à l'italienne (keto meatballs)",
    excerpt: "Des boulettes juteuses à la sauce tomate, sans chapelure. Le plat familial qui plait à tout le monde.",
    content: "Le secret d'une bonne boulette, c'est le moelleux. Habituellement, on utilise du pain trempé dans du lait. Ici, on utilise du parmesan et un peu de poudre d'amande pour garder l'humidité. Cuites lentement dans une sauce tomate maison, elles sont tendres, parfumées et réconfortantes. Servez-les sur des zoodles (courgettes) ou avec une bonne purée de chou-fleur.",
    author: "JB Keto",
    date: "22 Janvier 2026",
    readTime: "45 min",
    tags: ["Recette bœuf", "Dîner", "Italien"],
    imageUrl: "/images/recette-boulettes-viande-keto.jpg",
    relatedIds: ["r1", "r19"],
    type: 'recipe',
    ingredients: [
        { name: "Bœuf haché 15%", quantity: "500g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Parmesan râpé", quantity: "60g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Poudre d'amande", quantity: "30g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Oeuf", quantity: "1", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Ail", quantity: "2 gousses", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Persil frais", quantity: "1 bouquet", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Sauce tomate (sans sucre)", quantity: "400g", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Dans un saladier, mélangez la viande, le parmesan, l'amande, l'oeuf, l'ail et le persil ciselé. Salez, poivrez." },
        { step: 2, text: "Formez des boules de la taille d'une balle de golf." },
        { step: 3, text: "Faites-les dorer dans une poêle avec de l'huile d'olive." },
        { step: 4, text: "Ajoutez la sauce tomate, baissez le feu, couvrez et laissez mijoter 20 minutes." }
    ]
  },
  {
    id: "r37",
    slug: "recette-pancakes-keto-myrtilles",
    title: "Pancakes keto aux myrtilles moelleux",
    excerpt: "Des pancakes épais, moelleux et remplis de myrtilles fraîches. Le petit-déjeuner low carb de rêve.",
    content: "Le problème des pancakes classiques ? La farine de blé et le sirop d'érable font exploser votre glycémie dès le matin. Résultat : une fringale à 10h. Cette recette utilise de la poudre d'amande et de la farine de coco pour une texture incroyablement moelleuse. Les myrtilles apportent une touche fruitée et antioxydante sans trop de sucre. Servez-les avec un peu de beurre fondu ou de la crème fouettée pour un démarrage de journée sur les chapeaux de roues.",
    author: "JB Keto",
    date: "23 Janvier 2026",
    readTime: "20 min",
    tags: ["Recette petit-déjeuner", "Pancakes", "Fruits"],
    imageUrl: "/images/recette-pancakes-keto-myrtilles.jpg",
    relatedIds: ["r34", "r4"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Farine de coco", quantity: "20g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Oeufs", quantity: "3", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Lait d'amande", quantity: "50ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Erythritol", quantity: "30g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Myrtilles", quantity: "50g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Levure chimique", quantity: "1 c.à.c", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Extrait de vanille", quantity: "1 c.à.c", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Mélangez les ingrédients secs (poudres, érythritol, levure) dans un saladier." },
        { step: 2, text: "Ajoutez les oeufs, le lait d'amande et la vanille. Fouettez bien pour éliminer les grumeaux." },
        { step: 3, text: "Laissez reposer la pâte 5 minutes (la farine de coco va boire le liquide)." },
        { step: 4, text: "Incorporez délicatement les myrtilles." },
        { step: 5, text: "Faites cuire des petits tas de pâte dans une poêle beurrée à feu moyen, 2-3 min par face." }
    ]
  },
  {
    id: "r38",
    slug: "recette-riz-cantonais-chou-fleur",
    title: "Riz cantonais de chou-fleur (keto fried rice)",
    excerpt: "Une version légère et parfumée du classique chinois. Le chou-fleur remplace le riz pour un plat complet prêt en 15 minutes.",
    content: "C'est l'une des recettes qui surprend le plus les sceptiques. \"Je n'aime pas le chou-fleur\" disent-ils. Mais une fois râpé et sauté avec de l'ail, du gingembre, de la sauce soja et de l'huile de sésame, le goût du chou s'efface totalement pour devenir un support neutre, comme le riz. C'est un plat complet, coloré, prêt en un éclair, et qui permet de faire manger des légumes à toute la famille sans grimace.",
    author: "JB Keto",
    date: "24 Janvier 2026",
    readTime: "15 min",
    tags: ["Recette chou-fleur", "Asiatique", "Dîner"],
    imageUrl: "/images/recette-riz-cantonais-chou-fleur.jpg",
    relatedIds: ["r30", "r5"],
    type: 'recipe',
    ingredients: [
        { name: "Chou-fleur", quantity: "1/2 tête", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Dés de jambon", quantity: "100g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Oeufs", quantity: "2", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Petits pois (surgelés)", quantity: "30g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Oignon vert", quantity: "2 tiges", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Sauce soja (ou Tamari)", quantity: "2 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Huile de sésame", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Râpez le chou-fleur (ou mixez-le par à-coups) pour obtenir une semoule." },
        { step: 2, text: "Dans un wok, faites brouiller les œufs et réservez-les." },
        { step: 3, text: "Faites sauter le jambon et les petits pois dans un peu d'huile." },
        { step: 4, text: "Ajoutez le riz de chou-fleur et la sauce soja. Faites sauter à feu vif 5 minutes (il doit rester croquant)." },
        { step: 5, text: "Ajoutez les œufs et l'huile de sésame en fin de cuisson. Parsemez d'oignon vert." }
    ]
  },
  {
    id: "r39",
    slug: "recette-pain-viande-keto-meatloaf",
    title: "Pain de viande keto bardé de lard (Meatloaf)",
    excerpt: "Un plat familial généreux et économique. Le lard garde la viande moelleuse et apporte un goût fumé irrésistible.",
    content: "Le pain de viande est souvent sec et bourré de chapelure pour faire du volume. Ici, on utilise de la poudre d'amande et du parmesan pour lier la viande tout en gardant une jutosité incroyable. Le fait d'envelopper le tout de fines tranches de lard fumé crée une coque croustillante et parfume la viande à cœur. C'est le plat du dimanche soir par excellence, délicieux chaud comme froid le lendemain.",
    author: "JB Keto",
    date: "25 Janvier 2026",
    readTime: "60 min",
    tags: ["Recette bœuf", "Familial", "Dîner"],
    imageUrl: "/images/recette-pain-viande-keto-meatloaf.jpg",
    relatedIds: ["r36", "r9"],
    type: 'recipe',
    ingredients: [
        { name: "Bœuf haché", quantity: "500g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Chair à saucisse (ou porc haché)", quantity: "200g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Poudre d'amande", quantity: "50g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Parmesan", quantity: "40g", imageUrl: INGREDIENT_IMAGES.cheese },
        { name: "Oeuf", quantity: "1", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Oignon", quantity: "1", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Tranches de lard fumé", quantity: "10", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Concentré de tomate", quantity: "2 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Préchauffez le four à 180°C." },
        { step: 2, text: "Mixez l'oignon finement. Dans un saladier, mélangez les viandes, l'amande, le parmesan, l'oeuf, l'oignon et le concentré de tomate." },
        { step: 3, text: "Formez un gros pain ovale sur une plaque de cuisson." },
        { step: 4, text: "Recouvrez entièrement le pain avec les tranches de lard (comme une momie)." },
        { step: 5, text: "Enfournez pour 45 à 55 minutes. Laissez reposer 10 minutes avant de trancher." }
    ]
  },
  {
    id: "r40",
    slug: "recette-tortillas-keto-souples",
    title: "Tortillas keto souples (2 ingrédients)",
    excerpt: "Des tortillas mexicaines souples et résistantes pour vos tacos et fajitas, avec seulement de la farine d'amande et du psyllium.",
    content: "Le Graal du Keto mexicain ! Souvent, les tortillas maison sont cassantes et sèches. Le secret ici est l'utilisation de l'eau bouillante et du psyllium qui gélifient instantanément pour créer une pâte élastique, facile à étaler et qui ne craque pas quand on la plie. Garnissez-les de viande hachée épicée, de guacamole et de fromage pour une soirée tacos inoubliable.",
    author: "JB Keto",
    date: "26 Janvier 2026",
    readTime: "30 min",
    tags: ["Recette pain", "Mexicain", "Dîner"],
    imageUrl: "/images/recette-tortillas-keto-souples.jpg",
    relatedIds: ["r29", "r16"],
    type: 'recipe',
    ingredients: [
        { name: "Poudre d'amande", quantity: "100g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Psyllium blond", quantity: "30g", imageUrl: INGREDIENT_IMAGES.flour },
        { name: "Eau bouillante", quantity: "100ml", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Huile d'olive", quantity: "1 c.à.s", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Sel", quantity: "1 pincée", imageUrl: INGREDIENT_IMAGES.flour }
    ],
    instructions: [
        { step: 1, text: "Mélangez la poudre d'amande, le psyllium et le sel." },
        { step: 2, text: "Ajoutez l'huile et l'eau bouillante. Mélangez vigoureusement jusqu'à former une boule." },
        { step: 3, text: "Divisez en 4 boules. Étalez chaque boule finement entre deux feuilles de papier cuisson." },
        { step: 4, text: "Cuire dans une poêle chaude sans matière grasse, 1 à 2 min par face (elle doit gonfler un peu)." },
        { step: 5, text: "Conservez-les dans un torchon propre pour qu'elles restent souples." }
    ]
  },
  {
    id: "r41",
    slug: "recette-blanquette-veau-keto",
    title: "Blanquette de veau keto sans fécule",
    excerpt: "Le grand classique de la gastronomie française revisité sans farine. Une sauce blanche crémeuse et nappante.",
    content: "La blanquette traditionnelle utilise un \"roux\" (beurre + farine) pour épaissir la sauce. C'est l'ennemi. Notre version utilise la technique ancienne de la \"liaison\" aux jaunes d'œufs et à la crème. Le résultat est encore plus soyeux, plus brillant et plus riche en goût que la version cantine. Le veau mijote doucement avec les champignons pour un plat du dimanche d'exception.",
    author: "JB Keto",
    date: "27 Janvier 2026",
    readTime: "2h",
    tags: ["Recette traditionnelle", "Viande", "Plat familial"],
    imageUrl: "/images/recette-blanquette-veau-keto.jpg",
    relatedIds: ["r9", "r36"],
    type: 'recipe',
    ingredients: [
        { name: "Veau à blanquette (épaule, tendron)", quantity: "800g", imageUrl: INGREDIENT_IMAGES.beef },
        { name: "Champignons de Paris", quantity: "300g", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Crème fraîche épaisse", quantity: "200ml", imageUrl: INGREDIENT_IMAGES.cream },
        { name: "Jaunes d'œufs", quantity: "2", imageUrl: INGREDIENT_IMAGES.egg },
        { name: "Bouillon de volaille", quantity: "500ml", imageUrl: INGREDIENT_IMAGES.chicken },
        { name: "Oignon", quantity: "1", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Carotte", quantity: "1", imageUrl: INGREDIENT_IMAGES.vegetable },
        { name: "Jus de citron", quantity: "1/2", imageUrl: INGREDIENT_IMAGES.vegetable }
    ],
    instructions: [
        { step: 1, text: "Faites blanchir le veau 2 min dans l'eau bouillante, puis égouttez." },
        { step: 2, text: "Remettez le veau dans une cocotte propre avec le bouillon, l'oignon piqué et la carotte en rondelles. Mijotez 1h30." },
        { step: 3, text: "Ajoutez les champignons et cuire 15 min de plus." },
        { step: 4, text: "Dans un bol, fouettez la crème, les jaunes d'œufs et le citron." },
        { step: 5, text: "Versez une louche de bouillon chaud dans le bol pour tempérer, puis versez le tout dans la cocotte hors du feu. Ne faites plus bouillir !" }
    ]
  }
];
