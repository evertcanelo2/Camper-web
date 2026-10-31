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

export interface ProductSize {
  name: string;
  available: boolean;
}

export interface ProductVariant {
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
  colors?: ProductColor[];
  sizes?: ProductSize[];
  gallery?: string[];
  available?: boolean;
  variants?: ProductVariant[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  products: ProductVariant[];
  returnsPolicy?: string;
}
