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
      variants: [
        {
          color: "Azul", hex: '#020c79ff',
          sizes: ["L"],
          gallery: ["/images/oversize-serene-scape-3.jpg", "/images/oversize-serene-scape.jpeg", "/images/overzise-serene-4.jpg"]
        },
        {
          color: "Azul Claro", hex: '#90d5ff',
          sizes: ["XL"], // Tallas disponibles para este color
          gallery: ["/images/oversize-serene-claro.jpg", "/images/oversize-serene-claro2.jpeg", "/images/oversize-serene-claro3.jpg"]
        }
      ]
    },
    {
      id: 2,
      slug: "versize-endless-summer",
      name: "Versize Endless Summer",
      price: "$35.00 BCV",
      numericPrice: 35.00,
      image: "/images/versize-endless-summer.jpg",
      subtitle: "Envío inmediato",
      variants: [
        {
          color: "Azul", hex: '#020c79ff',
          sizes: ["XL"],
          gallery: ["/images/versize-endless-summer.jpg", "/images/versize-endless-summer-3.jpeg", "/images/versize-endless-summer-2.jpg"]
        },
      ]
    },
    {
      id: 3,
      slug: "oversize-unicolor-hueso",
      name: "Oversize Unicolor Hueso",
      price: "$32.00 BCV",
      numericPrice: 32.00,
      image: "/images/oversize-unicolor-hueso.jpg",
      subtitle: "Pocas unidades",
      description: defaultDescription,
      variants: [
        {
          color: "Hueso", hex: '#f6f2ea',
          sizes: ["M"],
          gallery: ["/images/oversize-unicolor-hueso.jpg",]
        },
      ]
    },
    {
      id: 4,
      slug: "oversize-circuitflow",
      name: "Oversize CircuitFlow",
      price: "$42.00 BCV",
      numericPrice: 42.00,
      image: "/images/oversize-circuitflow2.jpg",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: defaultDescription,
      variants: [
        {
          color: "Beige", hex: '#C3BCAB',
          sizes: ["M"],
          gallery: ["/images/oversize-circuitflow.jpg", "/images/oversize-circuitflow2.jpg",]
        },
      ],
    },
  ],
};
