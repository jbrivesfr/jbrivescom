import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  isNew?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, isNew }) => {
  return (
    <div className="group flex flex-col h-full border border-stone-200 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-sm overflow-hidden">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {isNew && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase tracking-wider shadow-sm z-10">
            Nouveau
          </div>
        )}
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-xs font-bold uppercase tracking-wider text-stone-800 backdrop-blur-sm">
          {article.tags[0]}
        </div>
      </div>
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center text-xs text-stone-500 mb-3 space-x-2">
          <span>{article.date}</span>
          <span>•</span>
          <span className="flex items-center"><Clock size={12} className="mr-1"/> {article.readTime}</span>
        </div>
        <Link to={`/article/${article.slug}`} className="block mb-3">
          <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-brand-800 transition-colors leading-tight">
            {article.title}
          </h3>
        </Link>
        <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
            <span className="text-xs font-medium text-stone-500">{article.author}</span>
            <Link to={`/article/${article.slug}`} className="text-brand-600 hover:text-brand-800 text-sm font-semibold flex items-center group/link">
              Lire l'article <ArrowRight size={16} className="ml-1 transition-transform group-hover/link:translate-x-1" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;