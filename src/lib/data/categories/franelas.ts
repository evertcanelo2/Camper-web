import { Category } from '../../types';
import { defaultColors, defaultSizes } from './common';

export const franelasCategory: Category = {
  slug: "franelas",
  name: "Franelas",
  tagline: "El clásico reimaginado",
  image: "/images/versize-endless-summer.webp",
  products: [
    {
      id: 1,
      slug: "overzise-serene-scape",
      name: "Oversize Serene Scape ",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-serene-scape.webp",
      badge: "Bestseller",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Serene Scape forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: L / XL",
      variants: [
        {
          color: "Azul", hex: '#020c79ff',
          sizes: ["L"],
          gallery: ["/images/oversize-serene-scape-3.webp", "/images/oversize-serene-scape.webp", "/images/overzise-serene-4.webp"]
        },
        {
          color: "Azul Claro", hex: '#90d5ff',
          sizes: ["XL"],
          gallery: ["/images/oversize-serene-claro.webp", "/images/oversize-serene-claro2.webp", "/images/oversize-serene-claro3.webp"]
        }
      ]
    },
    {
      id: 2,
      slug: "versize-endless-summer",
      name: "Versize Endless Summer",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/versize-endless-summer.webp",
      subtitle: "Envío inmediato",
      description: "En Camper apostamos por la exclusividad real. Esta Versize Endless Summer forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: XL",
      variants: [
        {
          color: "Azul", hex: '#020c79ff',
          sizes: ["XL"],
          gallery: ["/images/versize-endless-summer.webp", "/images/versize-endless-summer-3.webp", "/images/versize-endless-summer-2.webp"]
        },
      ]
    },
    {
      id: 3,
      slug: "oversize-unicolor-hueso",
      name: "Oversize Unicolor Hueso",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-unicolor-hueso.webp",
      subtitle: "Pocas unidades",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Unicolor Hueso forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: M",
      variants: [
        {
          color: "Hueso", hex: '#f6f2ea',
          sizes: ["M"],
          gallery: ["/images/oversize-unicolor-hueso.webp",]
        },
      ]
    },
    {
      id: 4,
      slug: "oversize-circuitflow",
      name: "Oversize CircuitFlow",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-circuitflow2.webp",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize CircuitFlow forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: M",
      variants: [
        {
          color: "Beige", hex: '#C3BCAB',
          sizes: ["M"],
          gallery: ["/images/oversize-circuitflow.webp", "/images/oversize-circuitflow2.webp",]
        },
      ],
    },
    {
      id: 37,
      slug: "oversize-unicolor-marron",
      name: "Oversize Unicolor Marron",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/franela-basica-marron.webp",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Unicolor Marron forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: L",
      variants: [
        {
          color: "Marron", hex: '#964B00',
          sizes: ["L"],
          gallery: ["/images/franela-basica-marron2.webp", "/images/franela-basica-marron.webp",]
        },
      ],
    },
    {
      id: 38,
      slug: "oversize-dzinin",
      name: "Oversize Dzinin",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-dzinin.webp",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Dzinin forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: L",
      variants: [
        {
          color: "Gris", hex: '#B8B7AE',
          sizes: ["L"],
          gallery: ["/images/oversize-dzinin2.webp", "/images/oversize-dzinin.webp",]
        },
      ],
    },
    {
      id: 40,
      slug: "oversize-most",
      name: "Oversize Most",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-most.webp",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Most forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: L",
      variants: [
        {
          color: "Arena", hex: '#C5AD82',
          sizes: ["L"],
          gallery: ["/images/oversize-most.webp", "/images/oversize-most2.webp", "/images/oversize-most3.webp"]
        },
      ],
    },
    {
      id: 41,
      slug: "oversize-believer",
      name: "Oversize Believer",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-believer.webp",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Believer forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: L",
      variants: [
        {
          color: "Crema", hex: '#DFD0BC',
          sizes: ["L"],
          gallery: ["/images/oversize-believer.webp", "/images/oversize-believer2.webp"]
        },
      ],
    },
    {
      id: 42,
      slug: "oversize-possible",
      name: "Oversize Possible",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-possible_11_11zon.webp",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Possible forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: L",
      variants: [
        {
          color: "Verde Militar", hex: '#64664A',
          sizes: ["L"],
          gallery: ["/images/oversize-possible_11_11zon.webp", "/images/oversize-possible2_12_11zon.webp"]
        },
      ],
    },
    {
      id: 43,
      slug: "oversize-ginal",
      name: "Oversize Ginal",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-ginal.webp",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Ginal forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: L",
      variants: [
        {
          color: "Taupe", hex: '#B9B19E',
          sizes: ["L"],
          gallery: ["/images/oversize-ginal.webp", "/images/oversize-ginal2.webp", "/images/oversize-ginal3.webp"]
        },
      ],
    },
    {
      id: 39,
      slug: "oversize-most-men",
      name: "Oversize Most Men",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/oversize-most-men.webp",
      badge: "Nuevo",
      subtitle: "Exclusivo web",
      description: "En Camper apostamos por la exclusividad real. Esta Oversize Most Men forma parte de nuestra selección limitada: diseño impecable, corte oversize y la certeza de llevar una prenda irrepetible en tu armario. Talla: L / S",
      variants: [
        {
          color: "Grafito", hex: '#4D4E53',
          sizes: ["L"],
          gallery: ["/images/oversize-most-men.webp",]
        },
        {
          color: "Azul Cielo", hex: '#9EC2D8',
          sizes: ["L"],
          gallery: ["/images/oversize-most-men-azul.webp",]
        },
        {
          color: "Beige", hex: '#B4AA98',
          sizes: ["S"],
          gallery: ["/images/oversize-most-men-arena.webp",]
        },
      ],
    },
  ],
};
