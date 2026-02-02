import React, { useState, useMemo } from 'react';
import { ARTICLES, RECIPES, SITE_NAME } from '../constants';
import { Brain } from 'lucide-react';
import { Article } from '../types';

// Helper for date parsing
const monthMap: { [key: string]: number } = {
  'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
  'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
};

const parseDate = (dateStr: string): Date => {
  const parts = dateStr.split(' ');
  if (parts.length !== 3) return new Date(0);
  const day = parseInt(parts[0], 10);
  const month = monthMap[parts[1]];
  const year = parseInt(parts[2], 10);
  if (isNaN(day) || month === undefined || isNaN(year)) return new Date(0);
  return new Date(year, month, day);
};

const CreateNewsletter: React.FC = () => {
  // Default to a date that shows some content (Nov 17, 2025)
  // Articles start Oct 14, 2025. Recipes start Nov 10, 2025.
  const [referenceDate, setReferenceDate] = useState<string>('2025-11-17');

  const { recentArticles, recentRecipes } = useMemo(() => {
    const refDate = new Date(referenceDate);
    const sevenDaysAgo = new Date(refDate);
    sevenDaysAgo.setDate(refDate.getDate() - 7);

    const filterRecent = (items: Article[]) => {
      return items.filter(item => {
        const itemDate = parseDate(item.date);
        return itemDate >= sevenDaysAgo && itemDate <= refDate;
      }).sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
    };

    return {
      recentArticles: filterRecent(ARTICLES),
      recentRecipes: filterRecent(RECIPES)
    };
  }, [referenceDate]);

  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold text-stone-900">Générateur de newsletter</h1>
            <p className="text-stone-600 text-sm mt-1">
              Aperçu pour la semaine se terminant le :
            </p>
          </div>
          <div className="flex items-center space-x-4">
             <input
               type="date"
               value={referenceDate}
               onChange={(e) => setReferenceDate(e.target.value)}
               className="border border-stone-300 rounded px-3 py-2 text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
             />
          </div>
        </div>
      </div>

      {/* Newsletter Preview */}
      <div className="max-w-2xl mx-auto bg-white shadow-xl overflow-hidden" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>

        {/* Header */}
        <div className="bg-stone-50 border-b border-stone-200 p-8 text-center">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="bg-stone-900 text-white p-2 rounded-sm">
               <Brain size={32} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-stone-900">{SITE_NAME}</span>
          </div>
          <h2 className="text-xl text-stone-600 font-serif italic">
            L'essentiel de la semaine
          </h2>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-stone-700 leading-relaxed mb-8">
            Bonjour, <br/><br/>
            Voici votre récapitulatif des nouveautés sur <strong>{SITE_NAME}</strong> pour ces 7 derniers jours.
            Découvrez nos derniers articles scientifiques et nos nouvelles recettes pour garder le cap sur votre cétose.
          </p>

          {/* Articles Section */}
          {recentArticles.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-bold text-brand-700 border-b-2 border-brand-100 pb-2 mb-6 uppercase tracking-wide text-sm">
                Articles de la semaine
              </h3>
              <div className="space-y-8">
                {recentArticles.map(article => (
                  <div key={article.id} className="flex flex-col sm:flex-row gap-4 items-start">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full sm:w-32 h-24 object-cover rounded bg-stone-200"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-stone-900 mb-1 leading-tight">
                        <a href={`https://keto.fr/article/${article.slug}`} className="hover:text-brand-600">
                          {article.title}
                        </a>
                      </h4>
                      <div className="text-xs text-stone-500 mb-2">{article.readTime} de lecture • {article.date}</div>
                      <p className="text-stone-600 text-sm line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>
                      <a
                        href={`https://keto.fr/article/${article.slug}`}
                        className="text-brand-600 font-bold text-sm hover:underline"
                      >
                        Lire l'article &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recipes Section */}
          {recentRecipes.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-bold text-brand-700 border-b-2 border-brand-100 pb-2 mb-6 uppercase tracking-wide text-sm">
                Recettes de la semaine
              </h3>
              <div className="space-y-8">
                {recentRecipes.map(recipe => (
                  <div key={recipe.id} className="flex flex-col sm:flex-row gap-4 items-start">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      className="w-full sm:w-32 h-24 object-cover rounded bg-stone-200"
                    />
                    <div>
                      <h4 className="font-bold text-lg text-stone-900 mb-1 leading-tight">
                        <a href={`https://keto.fr/article/${recipe.slug}`} className="hover:text-brand-600">
                          {recipe.title}
                        </a>
                      </h4>
                      <div className="text-xs text-stone-500 mb-2">{recipe.readTime} • {recipe.date}</div>
                      <p className="text-stone-600 text-sm line-clamp-2 mb-3">
                        {recipe.excerpt}
                      </p>
                      <a
                        href={`https://keto.fr/article/${recipe.slug}`}
                        className="text-brand-600 font-bold text-sm hover:underline"
                      >
                        Voir la recette &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {recentArticles.length === 0 && recentRecipes.length === 0 && (
            <div className="text-center py-12 bg-stone-50 rounded text-stone-500 italic">
              Aucun contenu publié cette semaine.
            </div>
          )}

          <div className="mt-12 text-center">
            <a
              href="https://keto.fr"
              className="inline-block bg-brand-600 text-white font-bold py-3 px-6 rounded shadow hover:bg-brand-500"
            >
              Visiter le site web
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-100 p-6 text-center text-xs text-stone-500 border-t border-stone-200">
          <p className="mb-2">
            Cet email a été envoyé par {SITE_NAME}.<br/>
            Vous recevez cet email car vous êtes abonné à notre newsletter.
          </p>
          <div className="space-x-4">
            <a href="#" className="underline hover:text-stone-700">Se désinscrire</a>
            <span>|</span>
            <a href="https://keto.fr/privacy" className="underline hover:text-stone-700">Politique de confidentialité</a>
          </div>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateNewsletter;
