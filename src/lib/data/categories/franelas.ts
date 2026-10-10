import { Category } from '../../types';
import { defaultColors, defaultSizes, defaultDescription } from './common';

export const franelasCategory: Category = {
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
};
