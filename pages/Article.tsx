import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ARTICLES, AUTOMATIONS, SITE_NAME } from '../constants';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import CommentSection from '../components/CommentSection';
import GuideView from '../components/GuideView';
import SchemaOrg from '../components/SchemaOrg';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  // Search in both collections
  const article = ARTICLES.find((a) => a.slug === slug) || AUTOMATIONS.find((a) => a.slug === slug);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  // Find related from both
  const allContent = [...ARTICLES, ...AUTOMATIONS];
  const relatedArticles = allContent.filter(a => article.relatedIds.includes(a.id));

  // Conditional Rendering for Recipe/Automation Type
  if (article.type === 'recipe' || article.type === 'automation') {
    return <GuideView article={article} relatedArticles={relatedArticles} />;
  }

  // Standard Article Layout
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": article.imageUrl,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": "https://jbrives.com/logo.png"
      }
    },
    "datePublished": article.date,
    "description": article.excerpt
  };

  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <Helmet>
        <title>{`${article.title} - ${SITE_NAME}`}</title>
        <meta name="description" content={article.excerpt} />
        {/* Open Graph for better sharing */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.imageUrl} />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Link to="/" className="inline-flex items-center text-sm text-stone-500 hover:text-brand-600 transition-colors mb-8 group">
          <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Retour à l'accueil
        </Link>

        {/* Header */}
        <header className="mb-10 text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
                 {article.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider rounded-full">
                         {tag}
                     </span>
                 ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                {article.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center text-sm text-stone-500 space-x-4 md:space-x-8">
                <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{article.readTime} de lecture</span>
                </div>
            </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-sm overflow-hidden shadow-sm">
            <img src={article.imageUrl} alt={article.title} className="w-full max-h-[500px] object-cover" />
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
            {/* Excerpt */}
            <p className="text-xl text-stone-600 italic font-serif leading-relaxed mb-10 border-l-4 border-stone-300 pl-4">
                {article.excerpt}
            </p>

            {/* Body */}
            <div 
                className="prose prose-stone prose-lg prose-headings:font-serif prose-headings:text-stone-900 prose-a:text-brand-600 hover:prose-a:text-brand-800 prose-img:rounded-sm"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share / Tags Footer */}
            <div className="mt-12 pt-8 border-t border-stone-200 flex justify-between items-center">
                <div className="text-sm font-medium text-stone-500">
                    Sujets: {article.tags.join(', ')}
                </div>
                <button className="flex items-center text-stone-500 hover:text-brand-600 transition-colors">
                    <Share2 size={18} className="mr-2" />
                    <span className="text-sm font-medium">Partager</span>
                </button>
            </div>

            {/* Author Bio Box */}
            <div className="bg-stone-100 p-6 mt-12 rounded-sm flex items-start space-x-4">
                 <img
                    src="/images/jb-keto-avatar.jpg"
                    alt={article.author}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                 />
                 <div>
                     <h4 className="font-bold text-stone-900 text-sm mb-1">À propos de {article.author}</h4>
                     <p className="text-xs text-stone-600 leading-relaxed">
                         Passionné par l'intersection entre le potentiel humain (santé, productivité) et la puissance de l'IA.
                     </p>
                 </div>
            </div>

            {/* Comments */}
            <CommentSection slug={article.slug} />
        </div>
      </article>

      {/* Related Articles Strip */}
      {relatedArticles.length > 0 && (
          <aside className="bg-stone-50 border-t border-stone-200 py-16 mt-12">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8">Dans la même thématique</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {relatedArticles.map(rel => (
                         <div key={rel.id} className="group block bg-white border border-stone-200 p-4 hover:shadow-md transition-shadow">
                             <Link to={`/article/${rel.slug}`}>
                                 <h4 className="font-bold text-stone-800 group-hover:text-brand-700 transition-colors mb-2 line-clamp-2">{rel.title}</h4>
                                 <p className="text-xs text-stone-500 line-clamp-2">{rel.excerpt}</p>
                             </Link>
                         </div>
                      ))}
                  </div>
              </div>
          </aside>
      )}
    </>
  );
};

export default Article;
