import { Category } from '../../types';

export const relojesCategory: Category = {
  slug: "relojes",
  name: "Relojes",
  tagline: "El tiempo con estilo",
  image: "/images/reloj-qcong-negro.jpg",
  returnsPolicy: "Solo se ofrecen 10 días para devoluciones por defectos de fábrica.",
  products: [
    {
      id: 8, slug: "reloj-qcong", name: "Reloj Qcong", price: "$15.00 USD", numericPrice: 15.00, image: "/images/Reloj1.jpg", description: `Sofisticado reloj de caballero con una marcada caja de forma cuadrada/cojín y un llamativo dial texturizado en tono marrón, blanco y negro. Su acabado metálico pulido le aporta una presencia moderna, versátil y de gran personalidad para cualquier ocasión.

Funciones:
• Cuenta con indicación precisa de hora y ventanilla de fecha.
• Acero inoxidable de alta resistencia con acabado pulido espejo.
• Cómoda y duradera correa de goma (silicona).

Importante: Resistente solo a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Negro', hex: '#111111', available: true, image: "/images/reloj-qcong-negro.jpg" },
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/reloj-qcong-blanco.jpg" },
        { name: 'Marrón', hex: '#6B4226', available: true, image: "/images/reloj-qcong-marron.jpg" },
      ],
      gallery: ["/images/reloj-qcong-negro.jpg", "/images/reloj-qcong-blanco.jpg", "/images/reloj-qcong-marron.jpg"]
    },
    {
      id: 9, slug: "reloj-casio-enticer-mtp", name: "Reloj Casio Enticer MTP", price: "$15.00 USD", numericPrice: 15.00, image: "/images/casio-enticer-mtp.jpg", imagePosition: "center 65%", description: `Casio Enticer MTP 

Clásico, elegante y atemporal. Cuenta con una sofisticada caja redonda de acero inoxidable y un limpio dial con finos marcadores e índices plateados, ideal para un look formal y versátil en el día a día.

Funciones: Cuenta con indicación precisa de hora y ventanilla de fecha 

Acero inoxidable de alta calidad con acabado pulido y brillante.

Correa clásica de eslabones metálicos resistente, duradero y cómodo para la muñeca.

Medidas de la caja del reloj 4cm de ancho x 4cm de largo

Importante: 
Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/casio-enticer-mtp-blanco.jpg" },
        { name: 'Negro', hex: '#111111', available: true, image: "/images/casio-enticer-mtp.jpg" },
        { name: 'Marrón', hex: '#6B4226', available: true, image: "/images/casio-enticer-mtp-marron.jpg" },
      ],
      gallery: ["/images/casio-enticer-mtp-blanco.jpg", "/images/casio-enticer-mtp.jpg", "/images/casio-enticer-mtp-marron.jpg"]
    },
    {
      id: 10, slug: "reloj-casio-vintage-ltp", name: "Reloj Casio Vintage Cuadrado LTP", price: "$15.00 USD", numericPrice: 15.00, image: "/images/casio-vintage-ltp.jpg", description: `Reloj Casio Vintage Cuadrado de Caballero LTP 

Moderno, retro y con mucha personalidad. Presenta una llamativa caja de forma cuadrada/cojín con esquinas redondeadas y un elegante dial
ideal para destacar con un estilo clásico y urbano a la vez.

Funciones: Cuenta con indicación precisa de hora y ventanilla de fecha 

Caja: Fabricada en acero inoxidable de alta calidad con un acabado brillante y pulido.

Correa metálica de eslabones ajustables 

Medida de la caja del reloj 4cm de ancho x 4cm de largo 

Importante: Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/casio-vintage-ltp.jpg" },
        { name: 'Azul', hex: '#1F3A6B', available: true, image: "/images/casio-vintage-ltp-azul.jpg" },
        { name: 'Champán', hex: '#D8C3A0', available: true, image: "/images/casio-vintage-ltp-champan.jpg" },
        { name: 'Negro', hex: '#111111', available: true, image: "/images/casio-vintage-ltp-negro.jpg" },
      ],
      gallery: ["/images/casio-vintage-ltp.jpg", "/images/casio-vintage-ltp-azul.jpg", "/images/casio-vintage-ltp-champan.jpg", "/images/casio-vintage-ltp-negro.jpg"]
    },
    {
      id: 20,
      slug: "reloj-caterpillar",
      name: "Reloj Caterpillar",
      price: "$15.00 USD",
      numericPrice: 15.00,
      image: "/images/caterpillar-azul-oscuro.jpg",
      description: `Reloj Caterpillar (CAT) para Caballero

Robusto, moderno y deportivo. Cuenta con una imponente caja redonda en color negro mate, marcadores numéricos llamativos y un dial texturizado en tonos oscuros que resalta la icónica marca CAT, diseñado para un estilo audaz y masculino.

Funciones: Cuenta con indicación precisa de hora, subesferas decorativas estilo cronógrafo 

Caja: Fabricada en acero inoxidable con revestimiento negro mate de alta resistencia.

Correa de cuero sintético (semicuero)

Medida de la caja 5cm x 5cm 

Importante: Resistente únicamente a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      colors: [
        { name: 'Azul oscuro', hex: '#1F2A44', available: true, image: "/images/caterpillar-azul-oscuro.jpg" },
        { name: 'Marrón', hex: '#6B4226', available: true, image: "/images/caterpillar-marron.jpg" },
        { name: 'Negro', hex: '#111111', available: true, image: "/images/caterpillar-negro.jpg" },
      ],
      gallery: ["/images/caterpillar-azul-oscuro.jpg", "/images/caterpillar-marron.jpg", "/images/caterpillar-negro.jpg"]
    },
    {
      id: 21,
      slug: "reloj-casio",
      name: "Reloj Casio",
      price: "$15.00 USD",
      numericPrice: 15.00,
      image: "/images/casio.jpg",
      description: `Reloj Casio 

Sofisticado reloj de caballero tipo deportivo, su acabado metálico pulido le aporta una presencia moderna, versátil y de gran personalidad para cualquier ocasión.

Funciones: 
Cuenta con indicación precisa de hora y ventanilla de fecha

Acero inoxidable 

Cómoda y duradera correa de goma (silicona) 

Importante: Resistente solo a salpicaduras accidentales (lavado de manos o lluvia leve). No apto para sumergir, ducha o natación.`,
      gallery: ["/images/casio.jpg", "/images/reloj-casio2.jpg"]
    },
    {
      id: 22,
      slug: "reloj-casio-enticer-mtp-1302",
      name: "Reloj Casio Enticer MTP-1302",
      price: "$15.00 USD",
      numericPrice: 15.00,
      image: "/images/casio-enticer-mtp-1302.jpg",
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
        { name: 'Negro', hex: '#111111', available: true, image: "/images/casio-enticer-mtp-1302.jpg" },
        { name: 'Blanco', hex: '#FFFFFF', available: true, image: "/images/casio-enticer-mtp-1302-blanco.jpg" },
      ],
      gallery: ["/images/casio-enticer-mtp-1302.jpg", "/images/casio-enticer-mtp-1302-blanco.jpg"]
    },
  ],
};
