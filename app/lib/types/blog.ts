export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
  authorName: string;
  tags: string[];
  readingTime: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogPostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  published: boolean;
  authorName: string;
  tags: string[];
}