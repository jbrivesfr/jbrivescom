import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME } from '../constants';
import { CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{`À propos - ${SITE_NAME}`}</title>
        <meta name="description" content="L'histoire de JB Rives : de la productivité obsessionnelle à l'automatisation technologique, en passant par la santé métabolique." />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-6">Salut, c'est JB.</h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-10">
          Il y a 10 ans, j'étais obsédé par la "Productivité" et les "Revenus Passifs". J'ai écrit des livres, créé des blogs, cherché la formule magique pour ne plus travailler.
        </p>

        <div className="prose prose-stone prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-stone-800">Chapitre 1 : L'illusion du Rentier</h2>
          <p>
            J'ai atteint mes objectifs. J'ai eu la liberté financière. Et vous savez quoi ? Je me suis ennuyé à mourir. J'ai compris que l'humain n'est pas fait pour l'oisiveté. Il est fait pour créer, pour résoudre des problèmes, pour avoir de l'impact.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-stone-800">Chapitre 2 : La reconstruction physique</h2>
          <p>
            En parallèle, mon corps m'a lâché. Fatigue, brouillard mental. J'ai dû tout réapprendre. J'ai découvert que la productivité ne sert à rien si le moteur (le corps) est encrassé. J'ai adopté le jeûne, le froid, et j'ai banni le sucre. J'ai retrouvé une énergie que je n'avais pas à 20 ans.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-stone-800">Chapitre 3 : La Révolution Technologique (2025)</h2>
          <p>
            Et puis, la révolution technologique est arrivée. Pas juste ChatGPT. La technologie agentique. La capacité de coder sans être développeur. La capacité de déléguer à des machines.
          </p>
          <p>
            J'ai réalisé que mon rêve de "travailler moins" était enfin accessible, mais pas en étant passif. En étant <strong>augmenté</strong>.
          </p>

          <div className="bg-brand-50 border-l-4 border-brand-500 p-6 my-8">
            <h3 className="font-bold text-brand-900 mb-2">Ma mission aujourd'hui</h3>
            <p className="text-brand-800 m-0">
              Aider ceux qui veulent reprendre le contrôle.
              <br/>
              1. <strong>Contrôle du temps</strong> grâce à l'automatisation technologique.
              <br/>
              2. <strong>Contrôle de l'énergie</strong> grâce à la santé métabolique.
            </p>
          </div>

          <p>
            Je n'ai rien à vous vendre. Je partage juste mes outils, mes scripts et mes découvertes. Si ça peut vous faire gagner 10 ans, j'aurai réussi.
          </p>

          <div className="mt-8">
              <a href="/" className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800 transition-colors">
                  Lire mes derniers articles <ArrowRight size={20} className="ml-2" />
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
