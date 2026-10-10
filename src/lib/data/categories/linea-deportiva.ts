import { Category } from '../../types';
import { defaultDescription, defaultSizes } from './common';

export const lineaDeportivaCategory: Category = {
  slug: "linea-deportiva",
  name: "Línea Deportiva",
  tagline: "Muévete con estilo",
  image: "/images/Franela3.png",
  products: [
    { id: 14, slug: "jersey-training-pro", name: "Jersey Training Pro", price: "$45.00 USD", numericPrice: 45.00, image: "/images/Franela3.png", badge: "Nuevo", description: defaultDescription, sizes: defaultSizes, gallery: ["/images/Franela3.png"] },
    { id: 15, slug: "short-performance", name: "Short Performance", price: "$38.00 USD", numericPrice: 38.00, image: "/images/Franela2.png", description: defaultDescription, sizes: defaultSizes, gallery: ["/images/Franela2.png"] },
    { id: 16, slug: "tank-top-breathe", name: "Tank Top Breathe", price: "$32.00 USD", numericPrice: 32.00, image: "/images/FranelSinFondo.png", description: defaultDescription, sizes: defaultSizes, gallery: ["/images/FranelSinFondo.png"] },
  ],
};
