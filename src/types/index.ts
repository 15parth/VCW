import type { ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  aspectRatio?: string;
  secondaryImage?: string;
  sizes?: string[];
  viewers?: number;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface ToastMessage {
  id: string;
  title: string;
  subtitle?: string;
  type: 'success' | 'info';
}

export interface Collection {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  variant: 'tall' | 'sq';
  path: '/women' | '/men';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export interface LookbookItem {
  id: string;
  number: string;
  name: string;
  price: string;
  image: string;
}

export interface Article {
  id: string;
  category: string;
  title: ReactNode;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
}

export interface TrendReport {
  id: string;
  trend: string;
  name: string;
  image: string;
}

export interface ColorSwatch {
  id: string;
  name: string;
  className: string;
}

export interface SaleItem {
  id: string;
  name: string;
  image: string;
  discount: string;
  newPrice: string;
  oldPrice: string;
}

export interface Bundle {
  id: string;
  tag: string;
  name: string;
  description: string;
  price: string;
  oldPrice: string;
  images: [string, string];
}

export interface MenFeaturedProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  layout: 'tall' | 'short';
}

export interface NavLink {
  path: string;
  label: string;
}
