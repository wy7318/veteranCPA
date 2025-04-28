import { Database } from './supabase';

export interface NavItem {
  name: string;
  path: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: number;
  name: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string[];
  image: string;
}

export interface InsightTopic {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

export interface Post {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  published: boolean;
  published_at: string;
  category: string;
  organization_id: string;
}