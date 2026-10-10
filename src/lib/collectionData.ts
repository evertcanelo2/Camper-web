export * from './types';

import { Category, Product } from './types';
import { franelasCategory } from './data/categories/franelas';
import { gorrasCategory } from './data/categories/gorras';
import { relojesCategory } from './data/categories/relojes';
import { lentesCategory } from './data/categories/lentes';
import { lineaDeportivaCategory } from './data/categories/linea-deportiva';
import { perfumesCategory } from './data/categories/perfumes';

export const categories: Category[] = [
  franelasCategory,
  gorrasCategory,
  relojesCategory,
  lentesCategory,
  lineaDeportivaCategory,
  perfumesCategory,
];

// Helper functions
export function getProductById(id: number): Product | undefined {
  for (const category of categories) {
    const product = category.products.find(p => p.id === id);
    if (product) return product;
  }
  return undefined;
}

export function getProductBySlug(slug: string): Product | undefined {
  for (const category of categories) {
    const product = category.products.find(p => p.slug === slug);
    if (product) return product;
  }
  return undefined;
}

export function getCategoryByProductSlug(slug: string): Category | undefined {
  for (const category of categories) {
    if (category.products.some(p => p.slug === slug)) {
      return category;
    }
  }
  return undefined;
}
