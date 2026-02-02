import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ARTICLES, AUTOMATIONS, SITE_NAME } from '../constants';
import ArticleCard from '../components/ArticleCard';
import FeaturedArticle from '../components/FeaturedArticle';
import { Zap, Bot, ChevronLeft, ChevronRight, Mail, Terminal, Activity } from 'lucide-react';

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
  const [articlePage, setArticlePage] = useState(1);
  const itemsPerPage = 6;

  // Sort articles and automations by date (newest first)
  const sortedArticles = [...ARTICLES].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
  const sortedAutomations = [...AUTOMATIONS].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  const featuredArticle = sortedArticles[0];

  // Pagination Logic Articles
  const allDisplayArticles = sortedArticles.slice(1);
  const displayArticles = allDisplayArticles.slice((articlePage - 1) * itemsPerPage, articlePage * itemsPerPage);
  const totalArticlePages = Math.ceil(allDisplayArticles.length / itemsPerPage);

  return (
    <>
      <Helmet>
        <title>{`Accueil - ${SITE_NAME} | IA & Santé`}</title>
        <meta name="description" content="JB Rives : Automatisation IA, Santé Métabolique et Productivité 2.0. Découvrez comment travailler moins mais mieux." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-stone-900 text-stone-100 py-24 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-900 via-stone-900 to-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center bg-brand-900/50 text-brand-300 border border-brand-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
            <Zap size={12} className="mr-2" /> Retour vers le futur 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Salut, c'est <span className="text-brand-500">JB</span>.
          </h1>
          <p className="text-lg md:text-2xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Je ne cherche plus à être productif. Je cherche à être libre.<br/>
            <span className="text-brand-400">Automatisation IA</span> + <span className="text-green-400">Santé Métabolique</span>.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#automations"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-1 text-lg flex items-center"
            >
              <Bot size={20} className="mr-2" /> Voir mes outils IA
            </a>
          </div>
        </div>
      </section>

      {/* Featured Item Section */}
      {featuredArticle && (
        <div className="mt-16">
          <FeaturedArticle article={featuredArticle} />
        </div>
      )}

      {/* Articles Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10 border-b border-stone-200 pb-4">
          <h2 className="text-2xl font-serif font-bold text-stone-800">Dernières pensées</h2>
          <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Blog</span>
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

      {/* Automations Section (formerly Recipes) */}
      <section id="automations" className="bg-stone-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10 border-b border-stone-200 pb-4">
            <h2 className="text-2xl font-serif font-bold text-stone-800 flex items-center">
              <Bot className="mr-3 text-brand-600" /> Guides & Automatisations
            </h2>
            <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Mes Workflows</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedAutomations.map((automation) => (
              <ArticleCard key={automation.id} article={automation} isNew={isRecent(parseDate(automation.date))} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="bg-brand-50 border-y border-brand-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-12">Ma philosophie en 3 piliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 shadow-sm border border-brand-100">
                 <Bot size={24} />
               </div>
               <h3 className="font-bold text-lg mb-2 text-stone-800">IA & Automatisation</h3>
               <p className="text-stone-600 text-sm">Ce qui prenait 1 heure doit prendre 1 minute. Déléguez aux machines ce qui n'est pas créatif.</p>
            </div>
            <div className="p-6">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 shadow-sm border border-brand-100">
                 <Activity size={24} />
               </div>
               <h3 className="font-bold text-lg mb-2 text-stone-800">Santé Métabolique</h3>
               <p className="text-stone-600 text-sm">Le cerveau ne fonctionne pas sans le corps. Jeûne, froid, et suppression du sucre pour une clarté laser.</p>
            </div>
            <div className="p-6">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-stone-600 shadow-sm border border-brand-100">
                 <Terminal size={24} />
               </div>
               <h3 className="font-bold text-lg mb-2 text-stone-800">Liberté Radicale</h3>
               <p className="text-stone-600 text-sm">Fini le "passive income" illusoire. Place au travail "actif mais sans effort" grâce à la technologie.</p>
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
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Rejoignez le mouvement</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Pas de spam, pas de vente de formation bidon. Juste mes dernières trouvailles IA et mes réflexions sur le futur du travail.
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
