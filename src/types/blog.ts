// types/blog.ts

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: Author;
  category: Category;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  readingTime?: number;
  metadata: {
    description?: string;
    keywords?: string[];
  };
}

export interface BlogListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  author: Pick<Author, "name" | "avatar">;
  category: Pick<Category, "name" | "slug">;
  createdAt: Date;
  readingTime?: number;
}

// Params types cho dynamic routes
export interface BlogDetailParams {
  params: {
    slug: string;
  };
}

// Search/Filter types
export interface BlogFilters {
  category?: string;
  tag?: string;
  author?: string;
  searchQuery?: string;
  page?: number;
  limit?: number;
}

// API Response types
export interface BlogListResponse {
  posts: BlogListItem[];
  total: number;
  page: number;
  totalPages: number;
}
