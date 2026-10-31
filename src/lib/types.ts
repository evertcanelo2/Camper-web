export interface ProductColor {
  name: string;
  /** Nombre visible del producto al seleccionar esta variante (opcional). Si se omite, se usa el nombre del producto. */
  displayName?: string;
  hex?: string;
  available: boolean;
  image?: string;
  /** Descripción específica de esta variante/fragancia (opcional). Si se omite, se usa la descripción del producto. */
  price?: string;
  numericPrice?: number;
  description?: string;
  badge?: string;
}

export interface ProductSizeObject {
  name: string;
  available: boolean;
}

// Soporta tanto el objeto { name: 'M', available: true } como un string directo 'M'
export type ProductSize = ProductSizeObject | string;

// Define específicamente cómo es una variante de color (ej. la franela negra)
export interface ProductVariant {
  color: string;
  sizes: ProductSize[];
  gallery: string[];
  price?: string;
  numericPrice?: number;
  description?: string;
  name?: string;
  colors?: ProductColor[];
}

// INTERFAZ PRINCIPAL: Define cómo es un Producto completo
export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  numericPrice?: number;
  image: string;
  imagePosition?: string;
  badge?: string;
  subtitle?: string;
  description?: string;
  available?: boolean;
  // Estructura clásica
  colors?: ProductColor[];
  sizes?: ProductSize[];
  gallery?: string[];
  // Estructura nueva por variantes (Franelas)
  variants?: ProductVariant[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  products: Product[];
  returnsPolicy?: string;
}