import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Clock, ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-12">
      <Link to={`/article/${article.slug}`} className="group block bg-white rounded-lg shadow-xl overflow-hidden border border-stone-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-64 lg:h-auto overflow-hidden relative">
             <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md z-10">
                À la une
              </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center text-sm text-stone-500 mb-4 space-x-2">
              <span className="font-semibold text-brand-600 uppercase tracking-wide">{article.tags[0]}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-stone-900 mb-4 leading-tight group-hover:text-brand-800 transition-colors">
              {article.title}
            </h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed line-clamp-3 lg:line-clamp-none">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-100">
               <div className="flex items-center text-stone-500 text-sm">
                  <span className="font-medium text-stone-900 mr-2">{article.author}</span>
                  <span className="flex items-center"><Clock size={14} className="mr-1"/> {article.readTime}</span>
               </div>
               <span className="text-brand-600 font-bold flex items-center group-hover:translate-x-1 transition-transform">
                 Lire l'article <ArrowRight size={18} className="ml-2" />
               </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedArticle;
