import React, { useState, useMemo } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuestionOption {
  label: string;
  value: string;
  image?: string;
  score: number;
}

interface Question {
  id: number;
  question: string;
  layout: 'list' | 'grid';
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "À quoi ressemble votre assiette typique ?",
    layout: 'grid',
    options: [
      {
        label: "Riche en glucides (pâtes, riz, pain)",
        value: "High carb",
        image: "/images/quiz_high_carb.jpg",
        score: 10
      },
      {
        label: "Équilibrée (viande, légumes, féculents)",
        value: "Low carb",
        image: "/images/quiz_low_carb.jpg",
        score: 50
      },
      {
        label: "Keto (viande, légumes, gras)",
        value: "Keto",
        image: "/images/quiz_keto.jpg",
        score: 90
      }
    ]
  },
  {
    id: 2,
    question: "Quel est votre objectif principal ?",
    layout: 'list',
    options: [
      { label: "Perte de poids", value: "Perte de poids", score: 0 },
      { label: "Regain d'énergie", value: "Regain d'énergie", score: 0 },
      { label: "Santé mentale / focus", value: "Santé mentale", score: 0 },
      { label: "Performance sportive", value: "Performance", score: 0 }
    ]
  },
  {
    id: 3,
    question: "Avez-vous déjà suivi un régime low carb ?",
    layout: 'list',
    options: [
      { label: "Oui, j'ai de l'expérience", value: "Expérimenté", score: 10 },
      { label: "J'ai essayé mais arrêté", value: "Essai abandonné", score: 5 },
      { label: "Non, c'est nouveau pour moi", value: "Novice", score: 0 },
      { label: "J'en ai entendu parler", value: "Curieux", score: 0 }
    ]
  },
  {
    id: 4,
    question: "Combien de repas prenez-vous par jour ?",
    layout: 'list',
    options: [
      { label: "1 à 2 (jeûne intermittent)", value: "Jeûne", score: 10 },
      { label: "3 repas classiques", value: "3 repas", score: 0 },
      { label: "3 repas + collations", value: "Collations", score: -5 },
      { label: "Je grignote souvent", value: "Grignotage", score: -10 }
    ]
  },
  {
    id: 5,
    question: "Quelle est votre relation avec le sucre ?",
    layout: 'list',
    options: [
      { label: "J'y suis accro", value: "Accro", score: -20 },
      { label: "Consommation modérée", value: "Modérée", score: -5 },
      { label: "Je peux m'en passer", value: "Contrôle", score: 5 },
      { label: "Je n'en mange pas", value: "Zero sucre", score: 10 }
    ]
  },
  {
    id: 6,
    question: "Quel est votre niveau d'activité physique ?",
    layout: 'list',
    options: [
      { label: "Sédentaire (bureau, peu de sport)", value: "Sédentaire", score: -5 },
      { label: "Actif (marche, activité régulière)", value: "Actif", score: 5 },
      { label: "Sportif (plus de 3 séances/semaine)", value: "Sportif", score: 10 }
    ]
  },
  {
    id: 7,
    question: "Comment dormez-vous ?",
    layout: 'list',
    options: [
      { label: "Comme un bébé", value: "Bien", score: 10 },
      { label: "Réveils nocturnes fréquents", value: "Moyen", score: -5 },
      { label: "Insomnies / difficultés", value: "Mal", score: -10 }
    ]
  },
  {
    id: 8,
    question: "Quel est votre plus grand obstacle ?",
    layout: 'list',
    options: [
      { label: "Le temps pour cuisiner", value: "Temps", score: 0 },
      { label: "Les sorties sociales", value: "Social", score: 0 },
      { label: "Le budget", value: "Budget", score: 0 },
      { label: "La volonté / grignotage", value: "Volonté", score: -5 }
    ]
  }
];

const PRICING_TIERS = [
  {
    name: "Starter",
    price: 25,
    description: "Pour les débutants",
    features: [
      "Guide de démarrage rapide",
      "Liste de courses type",
      "Accès au groupe Facebook",
      "Suivi de poids simple"
    ],
    highlight: false
  },
  {
    name: "Growth",
    price: 50,
    description: "Pour aller plus loin",
    features: [
      "Tout du plan Starter",
      "Plan de repas mensuel",
      "Recettes exclusives vidéo",
      "Suivi des macros détaillé",
      "Webinaires mensuels"
    ],
    highlight: true
  },
  {
    name: "Scale",
    price: 110,
    description: "Transformation totale",
    features: [
      "Tout du plan Growth",
      "Coaching mensuel 1-on-1",
      "Analyse sanguine personnalisée",
      "Accès prioritaire support",
      "Programme sportif adapté"
    ],
    highlight: false
  }
];

const getAnalysis = (score: number, answers: Record<number, string>) => {
  const analysis = [];

  // Score based intro
  if (score > 80) {
      analysis.push("Votre profil est idéal pour le régime cétogène. Vous avez déjà de bonnes bases ou une excellente prédisposition.");
  } else if (score > 50) {
      analysis.push("Vous avez un bon potentiel, mais quelques habitudes freinent vos résultats. Le programme va vous aider à corriger cela.");
  } else {
      analysis.push("Vos habitudes actuelles sont éloignées du métabolisme cétogène, ce qui explique probablement votre fatigue ou vos difficultés de poids. Le changement sera radical et bénéfique.");
  }

  // Specific feedback
  if (answers[2] === "Perte de poids") {
      analysis.push("Pour la perte de poids, le keto est redoutable car il coupe la faim naturellement en stabilisant la ghréline.");
  } else if (answers[2] === "Regain d'énergie") {
      analysis.push("En stabilisant votre glycémie, vous allez dire adieu aux coups de barre de l'après-midi et retrouver une énergie constante.");
  } else if (answers[2] === "Santé mentale") {
      analysis.push("Les cétones sont un carburant 'propre' pour le cerveau, réduisant l'inflammation et améliorant la concentration.");
  }

  if (answers[7] === "Mal" || answers[7] === "Moyen") {
      analysis.push("Votre sommeil semble perturbé. Le keto améliore souvent la qualité du sommeil profond en régulant le cortisol nocturne.");
  }

  if (answers[5] === "Accro") {
      analysis.push("Votre dépendance au sucre est votre principal ennemi. Le sevrage sera difficile les 3 premiers jours, mais notre plan inclut des desserts keto pour compenser.");
  }

  if (answers[8] === "Temps") {
      analysis.push("Le manque de temps n'est pas une fatalité. Nos plans incluent des recettes 'Meal Prep' pour cuisiner une seule fois pour toute la semaine.");
  }

  return analysis;
};

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ketoScore = useMemo(() => {
    let score = 0;
    QUESTIONS.forEach(q => {
      const answerVal = answers[q.id];
      const option = q.options.find(o => o.value === answerVal);
      if (option) {
        score += option.score;
      }
    });
    // Clamp between 0 and 100
    return Math.max(0, Math.min(100, score));
  }, [answers]);

  const analysisPoints = useMemo(() => getAnalysis(ketoScore, answers), [ketoScore, answers]);

  const handleAnswer = (option: QuestionOption) => {
    setAnswers(prev => ({ ...prev, [QUESTIONS[currentStep].id]: option.value }));
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(QUESTIONS.length); // Move to Analysis
    }
  };

  const handleSelectPlan = async (planName: string) => {
    setIsSubmitting(true);
    try {
      // Simulation of API call
      const response = await fetch('/api/send-quiz-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          ketoScore,
          selectedPlan: planName
        })
      });

      // We allow failure here for the demo/mock environment if the endpoint doesn't exist
      // In a real app we would check response.ok
      setCurrentStep(QUESTIONS.length + 2); // Move to Success

    } catch (error) {
      console.error(error);
      // Fallback for demo
      setCurrentStep(QUESTIONS.length + 2);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Render Quiz Question
  if (currentStep < QUESTIONS.length) {
    const currentQ = QUESTIONS[currentStep];
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden my-4 relative">
          <div className="bg-brand-600 p-4 flex justify-between items-center">
            <h2 className="text-white font-serif font-bold text-lg">Le régime keto est-il fait pour vous ?</h2>
            <button onClick={onClose} className="text-white/80 hover:text-white transition">
              <X size={24} />
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-6">
              <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                Question {currentStep + 1} / {QUESTIONS.length}
              </span>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div
                  className="bg-brand-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-6">{currentQ.question}</h3>

            <div className={currentQ.layout === 'grid' ? "grid grid-cols-1 md:grid-cols-3 gap-4" : "space-y-3"}>
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className={`
                    w-full text-left rounded-lg border border-stone-200 hover:border-brand-500 hover:bg-brand-50 transition-all text-stone-700 font-medium group
                    ${currentQ.layout === 'grid' ? 'p-0 overflow-hidden flex flex-col h-full' : 'p-4'}
                  `}
                >
                  {currentQ.layout === 'grid' && option.image && (
                    <div className="h-32 w-full overflow-hidden">
                        <img
                            src={option.image}
                            alt={option.label}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                  )}
                  <div className={currentQ.layout === 'grid' ? "p-4 flex-grow flex items-center justify-center text-center text-sm" : ""}>
                    {option.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Analysis (New Step)
  if (currentStep === QUESTIONS.length) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8 overflow-hidden">
                <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 z-10">
                    <X size={24} />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Column: Score */}
                    <div className="bg-brand-600 p-8 md:w-1/3 text-white flex flex-col justify-center items-center text-center">
                        <h2 className="text-2xl font-serif font-bold mb-6">Votre profil keto</h2>
                        <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="70"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    fill="transparent"
                                    className="text-brand-800"
                                />
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="70"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    fill="transparent"
                                    strokeDasharray={440}
                                    strokeDashoffset={440 - (440 * ketoScore) / 100}
                                    className="text-white transition-all duration-1000 ease-out"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-4xl font-bold">{ketoScore}%</span>
                                <span className="text-xs uppercase opacity-80">Compatibilité</span>
                            </div>
                        </div>
                        <p className="text-brand-100 font-medium">
                            {ketoScore > 70 ? "Profil excellent" : (ketoScore > 40 ? "Profil prometteur" : "Gros potentiel de progrès")}
                        </p>
                    </div>

                    {/* Right Column: Analysis */}
                    <div className="p-8 md:w-2/3 flex flex-col justify-center">
                        <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">Analyse de vos résultats</h3>
                        <div className="space-y-4 mb-8">
                            {analysisPoints.map((point, idx) => (
                                <p key={idx} className="text-stone-600 leading-relaxed border-l-4 border-brand-200 pl-4">
                                    {point}
                                </p>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentStep(QUESTIONS.length + 1)}
                            className="w-full bg-brand-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-brand-700 transition flex items-center justify-center gap-2 group shadow-lg shadow-brand-200"
                        >
                            Voir les offres adaptées
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      );
  }

  // Render Offer (Pricing)
  if (currentStep === QUESTIONS.length + 1) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full my-8">
           <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 z-10">
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">
                  Choisissez votre plan de transformation
                </h2>
                <p className="text-stone-600 text-lg max-w-2xl mx-auto">
                   Basé sur votre profil (Score: {ketoScore}%), voici les programmes que nous recommandons pour atteindre vos objectifs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PRICING_TIERS.map((tier) => (
                  <div key={tier.name} className={`rounded-xl border ${tier.name === 'Growth' ? 'border-brand-500 ring-1 ring-brand-500' : 'border-stone-200'} p-6 flex flex-col`}>
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-stone-900">{tier.name}</h3>
                      <p className="text-stone-500 text-sm">{tier.description}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-stone-500 text-xs uppercase font-semibold">À partir de</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-stone-900">${tier.price}</span>
                        <span className="text-stone-500">USD/mois</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectPlan(tier.name)}
                      disabled={isSubmitting}
                      className={`w-full py-3 px-4 rounded-lg font-bold mb-6 transition-colors ${
                        tier.name === 'Growth'
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : (tier.name === 'Scale' ? 'bg-pink-300 text-white hover:bg-pink-400' : 'bg-green-500 text-white hover:bg-green-600')
                      }`}
                    >
                      Démarrer l'essai gratuit de 14 jours
                    </button>

                    <div className="mt-auto">
                      <p className="font-bold text-stone-800 text-sm mb-3">Inclus</p>
                      <ul className="space-y-3">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-stone-600">
                            <Check size={16} className={`mr-2 mt-0.5 flex-shrink-0 ${
                                tier.name === 'Growth' ? 'text-blue-500' : (tier.name === 'Scale' ? 'text-pink-400' : 'text-green-500')
                            }`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      { tier.name !== 'Scale' && (
                        <div className="mt-4 pt-4 border-t border-stone-100">
                           <p className="text-xs text-stone-400 flex items-center">
                             <span className="mr-1">ℹ️</span> Voir tout dans {tier.name}
                           </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    );
  }

  // Render Success
  if (currentStep === QUESTIONS.length + 2) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">C'est parti !</h2>
            <p className="text-stone-600 mb-8">
              Vos réponses ont été envoyées. Vous allez recevoir un email de confirmation avec les détails de votre essai gratuit.
            </p>
            <button
              onClick={onClose}
              className="bg-stone-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-800 transition"
            >
              Retour à l'accueil
            </button>
          </div>
      </div>
    );
  }

  return null;
};

export default QuizModal;
