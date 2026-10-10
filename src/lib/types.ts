export interface ProductColor {
  name: string;
  hex?: string;
  available: boolean;
  image?: string;
}

export interface ProductSize {
  name: string;
  available: boolean;
}

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
  colors?: ProductColor[];
  sizes?: ProductSize[];
  gallery?: string[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  products: Product[];
  returnsPolicy?: string;
}
