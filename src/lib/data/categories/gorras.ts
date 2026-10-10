import { Category } from '../../types';
import { defaultColors, defaultDescription } from './common';

export const gorrasCategory: Category = {
  slug: "gorras",
  name: "Gorras",
  tagline: "Tu corona urbana",
  image: "/images/Gorra1.jpg",
  products: [
    { id: 5, slug: "gorra-signature-black", name: "Gorra Signature Black", price: "$25.00 USD", numericPrice: 25.00, image: "/images/Gorra1.jpg", badge: "Popular", description: defaultDescription, colors: defaultColors, gallery: ["/images/Gorra1.jpg"] },
    { id: 6, slug: "gorra-classic-denim", name: "Gorra Classic Denim", price: "$28.00 USD", numericPrice: 28.00, image: "/images/Gorra1.jpg", description: defaultDescription, colors: defaultColors, gallery: ["/images/Gorra1.jpg"] },
    { id: 7, slug: "gorra-sport-edition", name: "Gorra Sport Edition", price: "$30.00 USD", numericPrice: 30.00, image: "/images/Gorra1.jpg", description: defaultDescription, colors: defaultColors, gallery: ["/images/Gorra1.jpg"] },
  ],
};
