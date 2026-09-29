export interface ProductColor {
  name: string;
  hex?: string;
  available: boolean;
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
}

// Common options for reuse
const defaultColors: ProductColor[] = [
  { name: 'Black', hex: '#000000', available: true },
  { name: 'Cream', hex: '#FFFDD0', available: true },
  { name: 'Forest Green', hex: '#228B22', available: false },
  { name: 'Aquamarine', hex: '#7FFFD4', available: false },
  { name: 'Off White', hex: '#F8F8FF', available: true },
  { name: 'Grey', hex: '#808080', available: true },
];

const defaultSizes: ProductSize[] = [
  { name: 'XS', available: true },
  { name: 'S', available: true },
  { name: 'M', available: true },
  { name: 'L', available: true },
  { name: 'XL', available: true },
  { name: 'XXL', available: false },
];

const defaultDescription = "Una prenda esencial diseñada bajo la filosofía del minimalismo y la elegancia atemporal. Confeccionada con materiales premium para garantizar comodidad, durabilidad y un ajuste perfecto para cualquier ocasión. Ideal para el día a día.";

export const categories: Category[] = [
  {
    slug: "franelas",
    name: "Franelas",
    tagline: "El clásico reimaginado",
    image: "/images/Franela4.png",
    products: [
      { 
        id: 1, 
        slug: "franela-esencial-blanca",
        name: "Franela Esencial Blanca", 
        price: "$29.00 USD", 
        numericPrice: 29.00,
        image: "/images/FranelSinFondo.png", 
        badge: "Bestseller",
        subtitle: "Inventario en el camino",
        description: defaultDescription,
        colors: defaultColors,
        sizes: defaultSizes,
        gallery: ["/images/FranelSinFondo.png", "/images/Franela2.png", "/images/Franela3.png", "/images/Franela4.png"]
      },
      { 
        id: 2, 
        slug: "franela-urban-dark",
        name: "Franela Urban Dark", 
        price: "$35.00 USD", 
        numericPrice: 35.00,
        image: "/images/Franela2.png",
        subtitle: "Envío inmediato",
        description: defaultDescription,
        colors: defaultColors,
        sizes: defaultSizes,
        gallery: ["/images/Franela2.png", "/images/FranelSinFondo.png"]
      },
      { 
        id: 3, 
        slug: "franela-classic-fit",
        name: "Franela Classic Fit", 
        price: "$32.00 USD", 
        numericPrice: 32.00,
        image: "/images/Franela3.png",
        subtitle: "Pocas unidades",
        description: defaultDescription,
        colors: defaultColors,
        sizes: defaultSizes,
        gallery: ["/images/Franela3.png"]
      },
      { 
        id: 4, 
        slug: "franela-premium-navy",
        name: "Franela Premium Navy", 
        price: "$42.00 USD", 
        numericPrice: 42.00,
        image: "/images/Franela4.png", 
        badge: "Nuevo",
        subtitle: "Exclusivo web",
        description: defaultDescription,
        colors: defaultColors,
        sizes: defaultSizes,
        gallery: ["/images/Franela4.png"]
      },
    ],
  },
  {
    slug: "gorras",
    name: "Gorras",
    tagline: "Tu corona urbana",
    image: "/images/Gorra1.jpg",
    products: [
      { id: 5, slug: "gorra-signature-black", name: "Gorra Signature Black", price: "$25.00 USD", numericPrice: 25.00, image: "/images/Gorra1.jpg", badge: "Popular", description: defaultDescription, colors: defaultColors, gallery: ["/images/Gorra1.jpg"] },
      { id: 6, slug: "gorra-classic-denim", name: "Gorra Classic Denim", price: "$28.00 USD", numericPrice: 28.00, image: "/images/Gorra1.jpg", description: defaultDescription, colors: defaultColors, gallery: ["/images/Gorra1.jpg"] },
      { id: 7, slug: "gorra-sport-edition", name: "Gorra Sport Edition", price: "$30.00 USD", numericPrice: 30.00, image: "/images/Gorra1.jpg", description: defaultDescription, colors: defaultColors, gallery: ["/images/Gorra1.jpg"] },
    ],
  },
  {
    slug: "relojes",
    name: "Relojes",
    tagline: "El tiempo con estilo",
    image: "/images/Reloj1.jpg",
    products: [
      { id: 8, slug: "reloj-minimal-gold", name: "Reloj Minimal Gold", price: "$120.00 USD", numericPrice: 120.00, image: "/images/Reloj1.jpg", badge: "Premium", description: defaultDescription, gallery: ["/images/Reloj1.jpg"] },
      { id: 9, slug: "reloj-classic-leather", name: "Reloj Classic Leather", price: "$95.00 USD", numericPrice: 95.00, image: "/images/Reloj1.jpg", description: defaultDescription, gallery: ["/images/Reloj1.jpg"] },
      { id: 10, slug: "reloj-sport-carbon", name: "Reloj Sport Carbon", price: "$110.00 USD", numericPrice: 110.00, image: "/images/Reloj1.jpg", description: defaultDescription, gallery: ["/images/Reloj1.jpg"] },
    ],
  },
  {
    slug: "lentes",
    name: "Lentes",
    tagline: "Visión con actitud",
    image: "/images/Modelo1.jpg",
    products: [
      { id: 11, slug: "lentes-aviator-gold", name: "Lentes Aviator Gold", price: "$65.00 USD", numericPrice: 65.00, image: "/images/Modelo1.jpg", badge: "Trending", description: defaultDescription, gallery: ["/images/Modelo1.jpg"] },
      { id: 12, slug: "lentes-wayfarer-dark", name: "Lentes Wayfarer Dark", price: "$58.00 USD", numericPrice: 58.00, image: "/images/Modelo1.jpg", description: defaultDescription, gallery: ["/images/Modelo1.jpg"] },
      { id: 13, slug: "lentes-round-classic", name: "Lentes Round Classic", price: "$62.00 USD", numericPrice: 62.00, image: "/images/Modelo1.jpg", description: defaultDescription, gallery: ["/images/Modelo1.jpg"] },
    ],
  },
  {
    slug: "linea-deportiva",
    name: "Línea Deportiva",
    tagline: "Muévete con estilo",
    image: "/images/Franela3.png",
    products: [
      { id: 14, slug: "jersey-training-pro", name: "Jersey Training Pro", price: "$45.00 USD", numericPrice: 45.00, image: "/images/Franela3.png", badge: "Nuevo", description: defaultDescription, sizes: defaultSizes, gallery: ["/images/Franela3.png"] },
      { id: 15, slug: "short-performance", name: "Short Performance", price: "$38.00 USD", numericPrice: 38.00, image: "/images/Franela2.png", description: defaultDescription, sizes: defaultSizes, gallery: ["/images/Franela2.png"] },
      { id: 16, slug: "tank-top-breathe", name: "Tank Top Breathe", price: "$32.00 USD", numericPrice: 32.00, image: "/images/FranelSinFondo.png", description: defaultDescription, sizes: defaultSizes, gallery: ["/images/FranelSinFondo.png"] },
    ],
  },
  {
    slug: "perfumes",
    name: "Perfumes",
    tagline: "La esencia CAMPER",
    image: "/images/Pefume1.jpg",
    products: [
      { id: 17, slug: "eau-de-parfum-n1", name: "Eau de Parfum N°1", price: "$85.00 USD", numericPrice: 85.00, image: "/images/Pefume1.jpg", badge: "Exclusivo", description: defaultDescription, gallery: ["/images/Pefume1.jpg"] },
      { id: 18, slug: "cologne-fresh-sport", name: "Cologne Fresh Sport", price: "$65.00 USD", numericPrice: 65.00, image: "/images/Perfume2.jpg", description: defaultDescription, gallery: ["/images/Perfume2.jpg"] },
      { id: 19, slug: "parfum-intense-noir", name: "Parfum Intense Noir", price: "$95.00 USD", numericPrice: 95.00, image: "/images/Pefume1.jpg", description: defaultDescription, gallery: ["/images/Pefume1.jpg"] },
    ],
  },
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
