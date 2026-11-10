export * from './types';

// 1. Importamos Product en lugar de ProductVariant
import { Category, Product } from './types';
import { franelasCategory } from './data/categories/franelas';
import { gorrasCategory } from './data/categories/gorras';
import { relojesCategory } from './data/categories/relojes';
import { lentesCategory } from './data/categories/lentes';
import { perfumesCategory } from './data/categories/perfumes';

export const categories: Category[] = [
  franelasCategory,
  gorrasCategory,
  relojesCategory,
  lentesCategory,
  perfumesCategory,
];

// Helper functions
// 2. Cambiamos el tipo de retorno a Product
export function getProductById(id: number): Product | undefined {
  for (const category of categories) {
    const product = category.products.find(p => p.id === id);
    if (product) return product;
  }
  return undefined;
}

// 3. Cambiamos el tipo de retorno a Product
export function getProductBySlug(slug: string): Product | undefined {
  for (const category of categories) {
    const product = category.products.find(p => p.slug === slug);
    if (product) return product;
  }
  return undefined;
}

/**
 * Nombre y precio vigentes de un producto para el color elegido.
 * Lo usan el carrito (al añadir y al refrescar precios guardados) y el botón "Comprar".
 */
export function getItemDetails(product: Product, color?: string) {
  const variant = product.variants?.find((v) => v.color === color);
  const colorOption = product.colors?.find((c) => c.name === color);
  return {
    name: variant?.name ?? colorOption?.displayName ?? product.name,
    price: variant?.price ?? colorOption?.price ?? product.price,
    numericPrice: variant?.numericPrice ?? colorOption?.numericPrice ?? product.numericPrice ?? 0,
  };
}

export function getCategoryByProductSlug(slug: string): Category | undefined {
  for (const category of categories) {
    if (category.products.some(p => p.slug === slug)) {
      return category;
    }
  }
  return undefined;
}