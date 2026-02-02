import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ARTICLES, RECIPES, SITE_NAME } from '../constants';
import ArticleCard from '../components/ArticleCard';
import FeaturedArticle from '../components/FeaturedArticle';
import QuizModal from '../components/QuizModal';
import { Zap, ChefHat, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { Article } from '../types';

// Helper for date sorting
const monthMap: { [key: string]: number } = {
  'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
  'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
};

const parseDate = (dateStr: string): Date => {
  const parts = dateStr.split(/[\s\u00A0]+/);
  if (parts.length !== 3) return new Date(0);
  const day = parseInt(parts[0], 10);
  const month = monthMap[parts[1]];
  const year = parseInt(parts[2], 10);
  if (isNaN(day) || month === undefined || isNaN(year)) return new Date(0);
  return new Date(year, month, day);
};

const isRecent = (date: Date): boolean => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);
  return diffInHours >= 0 && diffInHours <= 48;
};

const Home: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [articlePage, setArticlePage] = useState(1);
  const [recipePage, setRecipePage] = useState(1);
  const itemsPerPage = 9;

  // Sort articles and recipes by date (newest first)
  const sortedArticles = [...ARTICLES].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const sortedRecipes = [...RECIPES].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  // Determine the absolute latest item to feature
  const latestArticle = sortedArticles[0];
  const latestRecipe = sortedRecipes[0];

  // We always feature the latest article at the top, and the latest recipe above the recipe list
  const featuredArticle = latestArticle;

  // Pagination Logic Articles
  const allDisplayArticles = sortedArticles.slice(1);
  const displayArticles = allDisplayArticles.slice((articlePage - 1) * itemsPerPage, articlePage * itemsPerPage);
  const totalArticlePages = Math.ceil(allDisplayArticles.length / itemsPerPage);

  // Pagination Logic Recipes
  const featuredRecipe = latestRecipe;
  const allDisplayRecipes = sortedRecipes.slice(1);
  const displayRecipes = allDisplayRecipes.slice((recipePage - 1) * itemsPerPage, recipePage * itemsPerPage);
  const totalRecipePages = Math.ceil(allDisplayRecipes.length / itemsPerPage);

  return (
    <>
      <Helmet>
        <title>{`Accueil - ${SITE_NAME} | Nutrition & Productivité`}</title>
        <meta name="description" content="Découvrez comment le régime low carb et cétogène peut transformer votre santé mentale, votre concentration et votre énergie au quotidien." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-stone-900 text-stone-100 py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1154756785?background=1&playsinline=1&muted=1"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Background Video"
          ></iframe>
          {/* Overlay to fade video into background */}
          <div className="absolute inset-0 bg-stone-900/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center bg-brand-900/50 text-brand-300 border border-brand-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
            <Zap size={12} className="mr-2" /> Mise à jour 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Optimisez votre <span className="text-brand-500">cerveau</span> par l'assiette
          </h1>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Une approche scientifique et minimaliste de la nutrition pour une clarté mentale durable, sans les pics de sucre.
          </p>

          <button
            onClick={() => setIsQuizOpen(true)}
            className="bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 text-lg"
          >
            Commencer ici
          </button>
        </div>
      </section>

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

      {/* Featured Item Section */}
      {featuredArticle && (
        <div className="mt-16">
          <FeaturedArticle article={featuredArticle} />
        </div>
      )}

      {/* Articles Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10 border-b border-stone-200 pb-4">
          <h2 className="text-2xl font-serif font-bold text-stone-800">Derniers articles</h2>
          <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Édition mensuelle</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((article) => (
            <ArticleCard key={article.id} article={article} isNew={isRecent(parseDate(article.date))} />
          ))}
        </div>

        {/* Article Pagination */}
        {totalArticlePages > 1 && (
          <div className="flex justify-center mt-12 space-x-4 items-center">
            <button
              onClick={() => setArticlePage(p => Math.max(1, p - 1))}
              disabled={articlePage === 1}
              className="p-2 rounded-full border border-stone-200 text-stone-600 disabled:opacity-30 hover:bg-stone-50 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-medium text-stone-500">
              Page {articlePage} sur {totalArticlePages}
            </span>
            <button
              onClick={() => setArticlePage(p => Math.min(totalArticlePages, p + 1))}
              disabled={articlePage === totalArticlePages}
              className="p-2 rounded-full border border-stone-200 text-stone-600 disabled:opacity-30 hover:bg-stone-50 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>

      {/* Recipes Section */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-serif font-bold text-stone-800 flex items-center">
              <ChefHat className="mr-3 text-brand-600" /> Recettes keto populaires
            </h2>
            <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Top 10</span>
          </div>

          {featuredRecipe && (
             <div className="mb-12">
               <FeaturedArticle article={featuredRecipe} />
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayRecipes.map((recipe) => (
              <ArticleCard key={recipe.id} article={recipe} isNew={isRecent(parseDate(recipe.date))} />
            ))}
          </div>

          {/* Recipe Pagination */}
          {totalRecipePages > 1 && (
            <div className="flex justify-center mt-12 space-x-4 items-center">
              <button
                onClick={() => setRecipePage(p => Math.max(1, p - 1))}
                disabled={recipePage === 1}
                className="p-2 rounded-full border border-stone-200 text-stone-600 disabled:opacity-30 hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm font-medium text-stone-500">
                Page {recipePage} sur {totalRecipePages}
              </span>
              <button
                onClick={() => setRecipePage(p => Math.min(totalRecipePages, p + 1))}
                disabled={recipePage === totalRecipePages}
                className="p-2 rounded-full border border-stone-200 text-stone-600 disabled:opacity-30 hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="bg-brand-50 border-y border-brand-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12">Pourquoi le low carb ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 shadow-sm border border-brand-100">
                 <span className="font-bold text-xl">1</span>
               </div>
               <h3 className="font-bold text-lg mb-2 text-stone-800">Énergie stable</h3>
               <p className="text-stone-600 text-sm">Fini le coup de barre de 14h. Profitez d'un flux d'énergie constant tout au long de la journée.</p>
            </div>
            <div className="p-6">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 shadow-sm border border-brand-100">
                 <span className="font-bold text-xl">2</span>
               </div>
               <h3 className="font-bold text-lg mb-2 text-stone-800">Focus profond</h3>
               <p className="text-stone-600 text-sm">Les corps cétoniques sont un super-carburant pour le cerveau, favorisant le travail intellectuel intense.</p>
            </div>
            <div className="p-6">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 shadow-sm border border-brand-100">
                 <span className="font-bold text-xl">3</span>
               </div>
               <h3 className="font-bold text-lg mb-2 text-stone-800">Santé long terme</h3>
               <p className="text-stone-600 text-sm">Réduisez l'inflammation systémique et protégez vos fonctions cognitives futures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-stone-900 py-20 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-900/30 text-brand-400 rounded-full mb-6">
            <Mail size={24} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Restez informé</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Recevez nos dernières découvertes scientifiques chaque mois et ne manquez aucune mise à jour. Pas de spam, promis.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-grow bg-stone-800 border border-stone-700 text-white text-sm px-6 py-3 rounded-md focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none placeholder-stone-500"
            />
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-md transition-colors font-bold whitespace-nowrap">
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
