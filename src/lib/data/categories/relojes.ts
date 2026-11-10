import { Category } from '../../types';

export const relojesCategory: Category = {
  slug: "relojes",
  name: "Relojes",
  tagline: "El tiempo con estilo",
  image: "/images/reloj-qcong-blanco.webp",
  returnsPolicy: "Solo se ofrecen 10 días para devoluciones por defectos de fábrica.",
  products: [
    {
      id: 8, slug: "reloj-qcong", name: "Reloj Qcong", price: "$13.50 BCV", numericPrice: 13.50, image: "/images/reloj-qcong-negro.webp", description: `Sofisticado reloj de caballero con una marcada caja de forma cuadrada/cojín y un llamativo dial texturizado en tono marrón, blanco y negro. Su acabado metálico pulido le aporta una presencia moderna, versátil y de gran personalidad para cualquier ocasión.

Funciones:
• Cuenta con indicación precisa de hora y ventanilla de fecha.
• Acero inoxidable de alta resistencia con acabado pulido espejo.
• Cómoda y duradera correa de goma (silicona).

Importante: Resistente solo a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Negro', hex: '#111111', available: true, image: "/images/reloj-qcong-negro.webp" },
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/reloj-qcong-blanco.webp" },
        { name: 'Marrón', hex: '#6B4226', available: true, image: "/images/reloj-qcong-marron.webp" },
      ],
      gallery: ["/images/reloj-qcong-negro.webp", "/images/reloj-qcong-blanco.webp", "/images/reloj-qcong-marron.webp"]
    },
    {
      id: 9, slug: "reloj-casio-enticer-mtp", name: "Reloj Casio Enticer MTP", price: "$13.50 BCV", numericPrice: 13.50, image: "/images/casio-enticer-mtp.webp", imagePosition: "center 65%", description: `Casio Enticer MTP 

Clásico, elegante y atemporal. Cuenta con una sofisticada caja redonda de acero inoxidable y un limpio dial con finos marcadores e índices plateados, ideal para un look formal y versátil en el día a día.

Funciones: Cuenta con indicación precisa de hora y ventanilla de fecha 

Acero inoxidable de alta calidad con acabado pulido y brillante.

Correa clásica de eslabones metálicos resistente, duradero y cómodo para la muñeca.

Medidas de la caja del reloj 4cm de ancho x 4cm de largo

Importante: 
Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/casio-enticer-mtp-blanco.webp" },
        { name: 'Negro', hex: '#111111', available: true, image: "/images/casio-enticer-mtp.webp" },
        { name: 'Marrón', hex: '#6B4226', available: true, image: "/images/casio-enticer-mtp-marron.webp" },
      ],
      gallery: ["/images/casio-enticer-mtp-blanco.webp", "/images/casio-enticer-mtp.webp", "/images/casio-enticer-mtp-marron.webp"]
    },
    {
      id: 10, slug: "reloj-casio-vintage-ltp", name: "Reloj Casio Vintage Cuadrado LTP", price: "$13.50 BCV", numericPrice: 13.50, image: "/images/casio-vintage-ltp.webp", description: `Reloj Casio Vintage Cuadrado de Caballero LTP 

Moderno, retro y con mucha personalidad. Presenta una llamativa caja de forma cuadrada/cojín con esquinas redondeadas y un elegante dial
ideal para destacar con un estilo clásico y urbano a la vez.

Funciones: Cuenta con indicación precisa de hora y ventanilla de fecha 

Caja: Fabricada en acero inoxidable de alta calidad con un acabado brillante y pulido.

Correa metálica de eslabones ajustables 

Medida de la caja del reloj 4cm de ancho x 4cm de largo 

Importante: Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/casio-vintage-ltp.webp" },
        { name: 'Azul', hex: '#1F3A6B', available: true, image: "/images/casio-vintage-ltp-azul.webp" },
        { name: 'Champán', hex: '#D8C3A0', available: true, image: "/images/casio-vintage-ltp-champan.webp" },
        { name: 'Negro', hex: '#111111', available: true, image: "/images/casio-vintage-ltp-negro.webp" },
      ],
      gallery: ["/images/casio-vintage-ltp.webp", "/images/casio-vintage-ltp-azul.webp", "/images/casio-vintage-ltp-champan.webp", "/images/casio-vintage-ltp-negro.webp"]
    },
    {
      id: 20,
      slug: "reloj-caterpillar",
      name: "Reloj Caterpillar",
      price: "$13.50 BCV",
      numericPrice: 13.50,
      image: "/images/caterpillar-azul-oscuro.webp",
      description: `Reloj Caterpillar (CAT) para Caballero

Robusto, moderno y deportivo. Cuenta con una imponente caja redonda en color negro mate, marcadores numéricos llamativos y un dial texturizado en tonos oscuros que resalta la icónica marca CAT, diseñado para un estilo audaz y masculino.

Funciones: Cuenta con indicación precisa de hora, subesferas decorativas estilo cronógrafo 

Caja: Fabricada en acero inoxidable con revestimiento negro mate de alta resistencia.

Correa de cuero sintético (semicuero)

Medida de la caja 5cm x 5cm 

Importante: Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Azul oscuro', hex: '#1F2A44', available: true, image: "/images/caterpillar-azul-oscuro.webp" },
        { name: 'Marrón', hex: '#6B4226', available: true, image: "/images/caterpillar-marron.webp" },
        { name: 'Negro', hex: '#111111', available: true, image: "/images/caterpillar-negro.webp" },
      ],
      gallery: ["/images/caterpillar-azul-oscuro.webp", "/images/caterpillar-marron.webp", "/images/caterpillar-negro.webp"]
    },
    {
      id: 21,
      slug: "reloj-casio",
      name: "Reloj Casio",
      price: "$13.50 BCV",
      numericPrice: 13.50,
      image: "/images/casio.webp",
      description: `Reloj Casio 

Sofisticado reloj de caballero tipo deportivo, su acabado metálico pulido le aporta una presencia moderna, versátil y de gran personalidad para cualquier ocasión.

Funciones: 
Cuenta con indicación precisa de hora y ventanilla de fecha

Acero inoxidable 

Cómoda y duradera correa de goma (silicona) 

Importante: Resistente solo a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      gallery: ["/images/casio.webp", "/images/reloj-casio2.webp"]
    },
    {
      id: 22,
      slug: "reloj-casio-enticer-mtp-1302",
      name: "Reloj Casio Enticer MTP-1302",
      price: "$15.00 BCV",
      numericPrice: 15.00,
      image: "/images/casio-enticer-mtp-1302.webp",
      description: `Casio Enticer MTP-1302

Clásico, elegante y atemporal. Cuenta con una sofisticada caja redonda de acero inoxidable y un limpio dial con finos marcadores e índices plateados

Funciones: Cuenta con indicación precisa de hora y ventanilla de fecha 

Posee un bisel texturizado de diseño estriado o tipo moneda alrededor del cristal

Acero inoxidable de alta calidad 

Correa clásica de eslabones metálicos 

Medidas de la caja del reloj 4.5cm de largo x 4cm de ancho

Importante: 
Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Negro', hex: '#111111', available: true, image: "/images/casio-enticer-mtp-1302.webp" },
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/casio-enticer-mtp-1302-blanco.webp" },
        { name: 'Rojo', hex: '#D90429', available: true, image: "/images/casio-enticer-mtp-1302-rojo.webp" },
      ],
      gallery: ["/images/casio-enticer-mtp-1302.webp", "/images/casio-enticer-mtp-1302-blanco.webp", "/images/casio-enticer-mtp-1302-rojo.webp"]
    },
    {
      id: 33,
      slug: "reloj-casio-ltp-esferas-lunares",
      name: "Reloj Casio LTP Esferas Lunares",
      price: "$13.50 BCV",
      numericPrice: 13.50,
      image: "/images/reloj-casio-esferas-negras.webp",
      description: `Reloj Casio LTP esferas lunares Cuadrado caballero 

Moderno, retro y con mucha personalidad. Presenta una llamativa caja de forma cuadrada/cojín con esquinas redondeadas y un elegante dial
ideal para destacar con un estilo clásico y urbano a la vez.

Funciones: Cuenta con indicación precisa de hora y ventanilla de fecha 

Caja: Fabricada en acero inoxidable de alta calidad con un acabado brillante y pulido.

Correa metálica de eslabones ajustables 

Medida de la caja del reloj 4cm de ancho x 4cm de largo 

Importante: Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Negro', hex: '#111111', available: true, image: "/images/reloj-casio-esferas-negras.webp" },
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/reloj-casio-esferas-blanca.webp" },
      ],
      gallery: ["/images/reloj-casio-esferas-negras.webp", "/images/reloj-casio-esferas-blanca.webp",]
    },
    {
      id: 36,
      slug: "rolex-submariner",
      name: "Reloj Rolex Submariner",
      price: "$30.00 BCV",
      numericPrice: 30.00,
      image: "/images/reloj-rolex-submariner.webp",
      description: ``,
      colors: [
        { name: 'Dorado', hex: '#D4AF37', available: true, image: "/images/reloj-rolex-submariner.webp" },
        { name: 'Negro', hex: '#111111', available: true, image: "/images/reloj-rolex-submariner-negro.webp" },
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/reloj-rolex-submariner-blanco.webp" },
      ],
      gallery: ["/images/reloj-rolex-submariner.webp", "/images/reloj-rolex-submariner-negro.webp", "/images/reloj-rolex-submariner-blanco.webp"]
    },
    {
      id: 49,
      slug: "rolex-datejust-dorado",
      name: "Reloj Rolex Datejust",
      price: "$35.00 BCV",
      numericPrice: 35.00,
      image: "/images/rolex-dorado.webp",
      badge: "Nuevo",
      description: `Reloj Rolex caballero dorado

Presencia, lujo y distinción en una sola pieza.

Funciones: cuenta con indicación precisa de hora y ventanilla de fecha

Caja: fabricada en acero inoxidable de alta calidad

-Correa de eslabones
-Caja Rolex verde

Importante: Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.

35$ BCV`,
      gallery: ["/images/rolex-dorado.webp"]
    },
    {
      id: 50,
      slug: "rolex-dama",
      name: "Reloj Rolex de Dama",
      price: "$35.00 BCV",
      numericPrice: 35.00,
      image: "/images/rolex-dama2.webp",
      badge: "Nuevo",
      description: `Reloj Rolex Dama

Presencia, lujo y distinción en una sola pieza.

Funciones: cuenta con indicación precisa de hora y ventanilla de fecha

Caja: fabricada en acero inoxidable de alta calidad

-Correa de eslabones
-Caja Rolex verde

Importante: Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.

35$ BCV`,
      gallery: ["/images/rolex-dama.webp", "/images/rolex-dama2.webp"]
    },
  ],
};
