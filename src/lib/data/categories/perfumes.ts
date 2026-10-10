import { Category } from '../../types';
import { defaultDescription } from './common';

export const perfumesCategory: Category = {
  slug: "perfumes",
  name: "Perfumes",
  tagline: "La esencia CAMPER",
  image: "/images/Pefume1.jpg",
  products: [
    { id: 17, slug: "eau-de-parfum-n1", name: "Eau de Parfum N°1", price: "$85.00 USD", numericPrice: 85.00, image: "/images/Pefume1.jpg", badge: "Exclusivo", description: defaultDescription, gallery: ["/images/Pefume1.jpg"] },
    { id: 18, slug: "cologne-fresh-sport", name: "Cologne Fresh Sport", price: "$65.00 USD", numericPrice: 65.00, image: "/images/Perfume2.jpg", description: defaultDescription, gallery: ["/images/Perfume2.jpg"] },
    { id: 19, slug: "parfum-intense-noir", name: "Parfum Intense Noir", price: "$95.00 USD", numericPrice: 95.00, image: "/images/Pefume1.jpg", description: defaultDescription, gallery: ["/images/Pefume1.jpg"] },
  ],
};
