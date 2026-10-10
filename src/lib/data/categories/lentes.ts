import { Category } from '../../types';
import { defaultDescription } from './common';

export const lentesCategory: Category = {
  slug: "lentes",
  name: "Lentes",
  tagline: "Visión con actitud",
  image: "/images/Modelo1.jpg",
  products: [
    { id: 11, slug: "lentes-aviator-gold", name: "Lentes Aviator Gold", price: "$65.00 USD", numericPrice: 65.00, image: "/images/Modelo1.jpg", badge: "Trending", description: defaultDescription, gallery: ["/images/Modelo1.jpg"] },
    { id: 12, slug: "lentes-wayfarer-dark", name: "Lentes Wayfarer Dark", price: "$58.00 USD", numericPrice: 58.00, image: "/images/Modelo1.jpg", description: defaultDescription, gallery: ["/images/Modelo1.jpg"] },
    { id: 13, slug: "lentes-round-classic", name: "Lentes Round Classic", price: "$62.00 USD", numericPrice: 62.00, image: "/images/Modelo1.jpg", description: defaultDescription, gallery: ["/images/Modelo1.jpg"] },
  ],
};
