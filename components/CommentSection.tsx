import React, { useState } from 'react';
import { Comment } from '../types';
import { Send, MessageSquare } from 'lucide-react';

import { useEffect } from 'react';

interface CommentSectionProps {
  slug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ slug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/comments/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          console.error('Failed to fetch comments');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    try {
        const response = await fetch(`/api/comments/${slug}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: authorName,
                email: email,
                content: newComment
            })
        });

        if (response.ok) {
            const addedComment = await response.json();
            setComments([addedComment, ...comments]);
            setNewComment('');
            setAuthorName('');
            setEmail('');
        }
    } catch (error) {
        console.error('Error posting comment:', error);
    }
  };

  return (
    <section className="mt-16 pt-10 border-t border-stone-200" id="comments">
      <h3 className="text-2xl font-serif font-bold text-stone-900 mb-8 flex items-center">
        <MessageSquare className="mr-3 text-brand-600" />
        Discussion <span className="text-stone-400 text-lg ml-2 font-normal">({comments.length})</span>
      </h3>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-12 bg-stone-50 p-6 rounded-lg border border-stone-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Votre nom</label>
              <input
                type="text"
                id="name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                placeholder="Jean Dupont"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Votre email (pour l'avatar)</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                placeholder="jean.dupont@example.com"
              />
            </div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-stone-700 mb-1">Votre message</label>
          <textarea
            id="comment"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-4 py-2 bg-white border border-stone-300 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
            placeholder="Partagez votre expérience ou posez une question..."
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-2 bg-stone-900 text-white font-medium text-sm hover:bg-brand-700 transition-colors rounded-sm"
        >
          Publier <Send size={14} className="ml-2" />
        </button>
      </form>

      {/* List */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex-shrink-0">
               <img 
                src={comment.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author)}`} 
                alt={comment.author} 
                className="w-10 h-10 rounded-full border border-stone-200"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-stone-900 text-sm">{comment.author}</h4>
                <span className="text-xs text-stone-400">{comment.date}</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;