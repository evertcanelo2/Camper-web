import { Category } from '../../types';

const lentesDescription = `Micas: Lente tipo pantalla espejada en tono azul intenso que ofrece un campo visual amplio y protección contra el brillo solar.

Montura: Diseño ergonómico envolvente con acabado texturizado/estampado de gran ligereza y sujeción firme.

Funciones: Ideal para actividades al aire libre, running, ciclismo o entrenamiento, brindando cobertura total y comodidad prolongada.

Materiales: Fabricados con componentes resistentes de alta calidad para soportar el uso diario y el movimiento constante.

Importante: Diseño exclusivo de selección limitada en stock. Lo que ves hoy, mañana ya no está.

Precio: 11$ BCV`;

// Descripción propia de Lentes Sport Espejo IV
const lentesEspejoIVDescription = `Funciones: Ideal para actividades al aire libre, running, ciclismo o entrenamiento, brindando cobertura total y comodidad prolongada.

Materiales: Fabricados con componentes resistentes de alta calidad para soportar el uso diario y el movimiento constante.

Importante: Diseño exclusivo de selección limitada en stock. Lo que ves hoy, mañana ya no está.

Precio: 11$ BCV`;

export const lentesCategory: Category = {
  slug: "lentes",
  name: "Lentes",
  tagline: "Visión con actitud",
  image: "/images/lentes1.webp",
  products: [
    {
      id: 44,
      slug: "lentes-sport-espejo-i",
      name: "Lentes Sport Espejo I",
      price: "$11.00 BCV",
      numericPrice: 11.00,
      image: "/images/lentes1.webp",
      badge: "Nuevo",
      subtitle: "Selección limitada",
      description: lentesDescription,
      gallery: ["/images/lentes1.webp", "/images/lentes2.webp"],
    },
    {
      id: 45,
      slug: "lentes-sport-espejo-ii",
      name: "Lentes Sport Espejo II",
      price: "$11.00 BCV",
      numericPrice: 11.00,
      image: "/images/lentes3.webp",
      badge: "Nuevo",
      subtitle: "Selección limitada",
      description: lentesDescription,
      gallery: ["/images/lentes3.webp", "/images/lentes4.webp"],
    },
    {
      id: 46,
      slug: "lentes-sport-espejo-iii",
      name: "Lentes Sport Espejo III",
      price: "$11.00 BCV",
      numericPrice: 11.00,
      image: "/images/lentes5.webp",
      badge: "Nuevo",
      subtitle: "Selección limitada",
      description: lentesDescription,
      gallery: ["/images/lentes5.webp", "/images/lentes6.webp"],
    },
    {
      id: 47,
      slug: "lentes-sport-espejo-iv",
      name: "Lentes Sport Espejo IV",
      price: "$11.00 BCV",
      numericPrice: 11.00,
      image: "/images/lentes.webp",
      badge: "Nuevo",
      subtitle: "Selección limitada",
      description: lentesEspejoIVDescription,
      gallery: ["/images/lentes.webp", "/images/lentes00.webp"],
    },
    {
      id: 48,
      slug: "lentes-sport-espejo-v",
      name: "Lentes Sport Espejo V",
      price: "$11.00 BCV",
      numericPrice: 11.00,
      image: "/images/lentes10.webp",
      badge: "Nuevo",
      subtitle: "Selección limitada",
      description: lentesDescription,
      gallery: ["/images/lentes10.webp"],
    },
    {
      id: 51,
      slug: "lentes-sport-espejo-vi",
      name: "Lentes Sport Espejo VI",
      price: "$11.00 BCV",
      numericPrice: 11.00,
      image: "/images/lentes11.webp",
      badge: "Nuevo",
      subtitle: "Selección limitada",
      description: lentesDescription,
      gallery: ["/images/lentes11.webp", "/images/lentes12.webp"],
    },
    {
      id: 52,
      slug: "lentes-sport-espejo-vii",
      name: "Lentes Sport Espejo VII",
      price: "$11.00 BCV",
      numericPrice: 11.00,
      image: "/images/lentes13.webp",
      badge: "Nuevo",
      subtitle: "Selección limitada",
      description: lentesDescription,
      gallery: ["/images/lentes13.webp", "/images/lentes14.webp"],
    },
  ],
};
