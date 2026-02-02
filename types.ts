export interface Ingredient {
  name: string;
  quantity: string;
  imageUrl: string;
}

export interface InstructionStep {
  step: number;
  text: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string or Markdown-like content
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  relatedIds: string[];
  type?: 'article' | 'recipe' | 'automation';
  ingredients?: Ingredient[];
  instructions?: InstructionStep[];
}

export interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
  avatarUrl?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
}
