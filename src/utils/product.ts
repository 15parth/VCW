import type { Product } from '../types';

export function parsePrice(price: string): number {
  return Number(price.replace(/[^\d]/g, '')) || 0;
}

export function formatPrice(value: number): string {
  return `₹ ${value.toLocaleString('en-IN')}`;
}

export function getProductSizes(product: Product): string[] {
  return product.sizes ?? ['XS', 'S', 'M', 'L', 'XL'];
}
