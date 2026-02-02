import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Article } from '../types';
import { SITE_NAME } from '../constants';
import { ArrowLeft, Clock, Share2, ChefHat, Bot, Zap } from 'lucide-react';
import CommentSection from './CommentSection';
import SchemaOrg from './SchemaOrg';

interface GuideViewProps {
  article: Article;
  relatedArticles: Article[];
}

const GuideView: React.FC<GuideViewProps> = ({ article, relatedArticles }) => {
  const isAutomation = article.type === 'automation';

  const guideSchema = {
    "@context": "https://schema.org",
    "@type": isAutomation ? "HowTo" : "Recipe",
    "name": article.title,
    "image": article.imageUrl,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "description": article.excerpt,
    [isAutomation ? "tool" : "recipeIngredient"]: article.ingredients?.map(i => `${i.quantity} ${i.name}`),
    [isAutomation ? "step" : "recipeInstructions"]: article.instructions?.map(i => ({
      "@type": "HowToStep",
      "text": i.text
    })),
    "datePublished": article.date
  };

  const LabelIcon = isAutomation ? Bot : ChefHat;
  const LabelText = isAutomation ? "Guide Automatisation" : "Recette Keto";
  const IngredientsLabel = isAutomation ? "Outils Requis" : "Ingrédients";
  const InstructionsLabel = isAutomation ? "Workflow / Étapes" : "Préparation";

  return (
    <>
      <SchemaOrg schema={guideSchema} />
      <Helmet>
        <title>{`${article.title} - ${SITE_NAME}`}</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.imageUrl} />
      </Helmet>

      <div className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] w-full">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end pb-12 px-4">
            <div className="max-w-5xl mx-auto w-full">
                <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                  <ArrowLeft size={20} className="mr-2" /> Retour à l'accueil
                </Link>
                <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-brand-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full flex items-center">
                        <LabelIcon size={14} className="mr-1" /> {LabelText}
                    </span>
                    {article.tags.map(tag => (
                        <span key={tag} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight max-w-3xl drop-shadow-lg">
                    {article.title}
                </h1>
                <div className="flex items-center text-white/90 space-x-6 text-sm font-medium">
                    <div className="flex items-center">
                         <img
                            src="/images/jb-keto-avatar.jpg"
                            alt={article.author}
                            className="w-8 h-8 rounded-full object-cover mr-2 border-2 border-white/50"
                         />
                        <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                        <Clock size={18} className="mr-2" />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-16">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">

                {/* Intro / Excerpt */}
                <div className="p-8 md:p-10 border-b border-stone-100">
                    <p className="text-xl text-stone-600 italic font-serif leading-relaxed">
                        {article.excerpt}
                    </p>
                    {article.content && (
                        <div className="mt-6 prose prose-stone text-stone-600" dangerouslySetInnerHTML={{ __html: article.content }} />
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">

                    {/* Left: Ingredients/Tools */}
                    <div className="md:col-span-4 bg-stone-50 p-8 md:p-10 border-r border-stone-100">
                        <h3 className="text-xl font-serif font-bold text-stone-900 mb-6 flex items-center">
                            {IngredientsLabel}
                        </h3>
                        <ul className="space-y-6">
                            {article.ingredients?.map((ing, idx) => (
                                <li key={idx} className="flex items-center group">
                                    <div className="flex-shrink-0 mr-4">
                                        <img
                                            src={ing.imageUrl}
                                            alt={ing.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm group-hover:scale-110 transition-transform bg-white"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-stone-800 text-sm">{ing.name}</p>
                                        <p className="text-stone-500 text-xs font-medium">{ing.quantity}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Instructions/Workflow */}
                    <div className="md:col-span-8 p-8 md:p-10 bg-white">
                         <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-serif font-bold text-stone-900">
                                {InstructionsLabel}
                            </h3>
                            <button className="flex items-center text-stone-400 hover:text-brand-600 transition-colors text-sm font-medium">
                                <Share2 size={16} className="mr-2" /> Partager
                            </button>
                         </div>

                         <div className="space-y-8">
                             {article.instructions?.map((inst) => (
                                 <div key={inst.step} className="flex">
                                     <div className="flex-shrink-0 mr-6">
                                         <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm font-serif">
                                             {inst.step}
                                         </div>
                                     </div>
                                     <div>
                                         <p className="text-stone-700 leading-relaxed pt-1">
                                             {inst.text}
                                         </p>
                                     </div>
                                 </div>
                             ))}
                         </div>

                         {/* Bottom CTA / Comments Trigger could go here */}
                         <div className="mt-12 pt-8 border-t border-stone-100">
                             <h4 className="font-bold text-stone-900 mb-4">Cet article vous a aidé ?</h4>
                             <CommentSection slug={article.slug} />
                         </div>
                    </div>

                </div>
            </div>
        </div>

        {/* Related */}
        {relatedArticles.length > 0 && (
          <aside className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">
                  {isAutomation ? "Autres guides & workflows" : "Autres recettes"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map(rel => (
                     <div key={rel.id} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                         <div className="h-48 overflow-hidden">
                             <img src={rel.imageUrl} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         </div>
                         <div className="p-4">
                             <h4 className="font-bold text-stone-800 group-hover:text-brand-700 transition-colors mb-2 line-clamp-2">{rel.title}</h4>
                         </div>
                     </div>
                  ))}
              </div>
          </aside>
        )}
      </div>
    </>
  );
};

export default GuideView;
