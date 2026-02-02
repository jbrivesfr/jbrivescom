import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME } from '../constants';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{`À propos - ${SITE_NAME}`}</title>
        <meta name="description" content="Notre mission : démocratiser l'approche nutritionnelle métabolique pour la performance cognitive." />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-6">Notre mission</h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-10">
          Chez <span className="font-bold text-brand-700">keto.fr</span>, nous croyons que l'alimentation est le levier le plus puissant pour optimiser le potentiel humain.
        </p>

        <div className="prose prose-stone prose-lg">
          <p>
            Fondé en 2024, ce projet est né d'un constat simple : la plupart des conseils nutritionnels modernes négligent l'impact direct de la glycémie sur le cerveau.
          </p>
          <p>
            Notre objectif n'est pas de promouvoir un dogme diététique strict, mais de fournir des informations basées sur la science pour aider chacun à retrouver :
          </p>
          
          <ul className="grid grid-cols-1 gap-4 my-8 list-none pl-0">
            <li className="flex items-start">
              <CheckCircle className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Une concentration inébranlable</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Une humeur stable</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
              <span>Une santé métabolique robuste</span>
            </li>
          </ul>

          <p>
            Nous privilégions une approche "Low Carb" intelligente, riche en nutriments, durable et adaptée au mode de vie contemporain.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;