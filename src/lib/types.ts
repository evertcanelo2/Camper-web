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

/** Convierte cualquier talla (string u objeto) a { name, available }. */
export const normalizeSize = (size: ProductSize): ProductSizeObject =>
  typeof size === 'string' ? { name: size, available: true } : size;

// Variante de color con sus propias fotos y tallas (ej. la franela negra)
export interface ProductVariant {
  color: string;
  hex?: string;
  available?: boolean;
  sizes: ProductSize[];
  gallery: string[];
  price?: string;
  numericPrice?: number;
  description?: string;
  name?: string;
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