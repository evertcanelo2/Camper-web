import { Category } from '../../types';
import { defaultColors, defaultSizes, defaultDescription } from './common';

export const franelasCategory: Category = {
  slug: "franelas",
  name: "Franelas",
  tagline: "El clásico reimaginado",
  image: "/images/versize-endless-summer.jpg",
  products: [
    {
      id: 1,
      slug: "overzise-serene-scape",
      name: "Oversize Serene Scape ",
      price: "$15.00 BCV",
      numericPrice: 15.00,
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
      price: "$15.00 BCV",
      numericPrice: 15.00,
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
      price: "$15.00 BCV",
      numericPrice: 15.00,
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
      price: "$15.00 BCV",
      numericPrice: 15.00,
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
    {
      id: 37,
      slug: "oversize-unicolor-marron",
      name: "Oversize Unicolor Marron",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/franela-basica-marron.jpg",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: defaultDescription,
      variants: [
        {
          color: "Marron", hex: '#964B00',
          sizes: ["L"],
          gallery: ["/images/franela-basica-marron2.jpeg", "/images/franela-basica-marron.jpg",]
        },
      ],
    },
    {
      id: 38,
      slug: "oversize-dzinin",
      name: "Oversize Dzinin",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-dzinin.jpeg",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: defaultDescription,
      variants: [
        {
          color: "Gris", hex: '#B8B7AE',
          sizes: ["L"],
          gallery: ["/images/oversize-dzinin2.jpg", "/images/oversize-dzinin.jpeg",]
        },
      ],
    },
    {
      id: 40,
      slug: "oversize-most",
      name: "Oversize Most",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-most.jpg",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: defaultDescription,
      variants: [
        {
          color: "Arena", hex: '#C5AD82',
          sizes: ["L"],
          gallery: ["/images/oversize-most.jpg", "/images/oversize-most2.jpg", "/images/oversize-most3.jpg"]
        },
      ],
    },
    {
      id: 41,
      slug: "oversize-believer",
      name: "Oversize Believer",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-believer.jpg",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: defaultDescription,
      variants: [
        {
          color: "Crema", hex: '#DFD0BC',
          sizes: ["L"],
          gallery: ["/images/oversize-believer.jpg", "/images/oversize-believer2.jpg"]
        },
      ],
    },
    {
      id: 42,
      slug: "oversize-possible",
      name: "Oversize Possible",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-possible_11_11zon.jpg",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: defaultDescription,
      variants: [
        {
          color: "Verde Militar", hex: '#64664A',
          sizes: ["L"],
          gallery: ["/images/oversize-possible_11_11zon.jpg", "/images/oversize-possible2_12_11zon.jpg"]
        },
      ],
    },
    {
      id: 43,
      slug: "oversize-ginal",
      name: "Oversize Ginal",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-ginal.jpg",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: defaultDescription,
      variants: [
        {
          color: "Taupe", hex: '#B9B19E',
          sizes: ["L"],
          gallery: ["/images/oversize-ginal.jpg", "/images/oversize-ginal2.jpg", "/images/oversize-ginal3.jpg"]
        },
      ],
    },
    {
      id: 39,
      slug: "oversize-most-men",
      name: "Oversize Most Men",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-most-men.jpg",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: defaultDescription,
      variants: [
        {
          color: "Grafito", hex: '#4D4E53',
          sizes: ["L"],
          gallery: ["/images/oversize-most-men.jpg",]
        },
        {
          color: "Azul Cielo", hex: '#9EC2D8',
          sizes: ["L"],
          gallery: ["/images/oversize-most-men-azul.jpg",]
        },
        {
          color: "Beige", hex: '#B4AA98',
          sizes: ["S"],
          gallery: ["/images/oversize-most-men-arena.jpeg",]
        },
      ],
    },
  ],
};
