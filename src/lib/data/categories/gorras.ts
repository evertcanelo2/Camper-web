import { Category } from '../../types';
import { defaultColors, defaultDescription } from './common';

export const gorrasCategory: Category = {
  slug: "gorras",
  name: "Gorras Top Quality",
  tagline: "Tu corona urbana",
  image: "/images/nueva-gorra1.jpg",
  products: [
    {
      id: 5,
      slug: "gorra-america-verde",
      name: "Gorra Signature Black",
      price: "$20.00 USD",
      numericPrice: 20.00,
      image: "/images/nueva-gorra1.jpg",
      badge: "Popular",
      description: defaultDescription,
      colors: [
        { name: 'Verde', hex: '#3B4E43', available: true, image: "/images/nueva-gorra1.jpg" },
        { name: 'Beige', hex: '#D4B895', available: true, image: "/images/nueva-gorra-6.jpg" },
      ],
      gallery: ["/images/nueva-gorra1.jpg", "/images/nueva-gorra-6.jpg",],
    },
    {
      id: 6,
      slug: "gorra-2",
      name: "Top Quality Lackpard",
      price: "$20.00 USD",
      numericPrice: 20.00,
      image: "/images/nueva-gorra2.jpg",
      badge: "Popular",
      description: defaultDescription,
      gallery: ["/images/nueva-gorra2.jpg"],
    },

    {
      id: 7,
      slug: "gorra-3",
      name: "Top Quality Barcelona",
      price: "$20.00 USD",
      numericPrice: 20.00,
      image: "/images/nueva-gorra3.jpg",
      badge: "Popular",
      description: defaultDescription,
      gallery: ["/images/nueva-gorra3.jpg"],
    },
    {
      id: 8,
      slug: "gorra-4",
      name: "Top Quality HUGO",
      price: "$20.00 USD",
      numericPrice: 20.00,
      image: "/images/nueva-gorra4.jpg",
      badge: "Popular",
      description: defaultDescription,
      gallery: ["/images/nueva-gorra4.jpg"],
    },
    {
      id: 9,
      slug: "gorra-5",
      name: "Top Quality Bass Pro Shop ",
      price: "$20.00 USD",
      numericPrice: 20.00,
      image: "/images/nueva-gorra5.jpg",
      description: defaultDescription,
      gallery: ["/images/nueva-gorra5.jpg"],
    },
  ],

};
