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
      slug: "overzise-serene-scape",
      name: "Oversize Serene Scape ",
      price: "$29.00 BCV",
      numericPrice: 29.00,
      image: "/images/oversize-serene-scape.jpeg",
      badge: "Bestseller",
      subtitle: "Inventario en el camino",
      variants: [
        {
          color: "Azul Oscuro",
          sizes: ["L"],
          gallery: ["/images/oversize-serene-scape-3.jpg", "/images/oversize-serene-scape.jpeg", "/images/overzise-serene-4.jpg"]
        },
        {
          color: "Azul Claro",
          sizes: ["XL"], // Tallas disponibles para este color
          gallery: ["/images/oversize-serene-claro.jpg", "/images/oversize-serene-claro2.jpeg", "/images/oversize-serene-claro3.jpg"]
        }
      ]
    },
    {
      id: 2,
      slug: "franela-urban-dark",
      name: "Franela Urban Dark",
      price: "$35.00 BCV",
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
      price: "$32.00 BCV",
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
      price: "$42.00 BCV",
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
