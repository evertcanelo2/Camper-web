import { Category } from '../../types';

export const perfumesCategory: Category = {
  slug: "perfumes",
  name: "Perfumes",
  tagline: "La esencia CAMPER",
  image: "/images/asad-perfume.png",
  returnsPolicy: "Por la naturaleza del producto (perfume sellado), no se aceptan cambios ni devoluciones una vez abierto. Aplica garantía únicamente por defecto de fábrica.",
  products: [
    {
      id: 23,
      slug: "lattafa-asad",
      name: "Lattafa Asad",
      price: "30.00 USD",
      numericPrice: 30.00,
      image: "/images/asad-perfume.png",
      colors: [
        {
          name: "Asad",
          displayName: "Lattafa Asad",
          available: true,
          image: "/images/asad-perfume.png",
          description: `Asad - Lattafa Perfumes

Descripción
Asad de Lattafa es una fragancia masculina cautivadora, elegante y llena de personalidad. Con un carácter cálido, especiado y amaderado, destaca por su aura sofisticada e imponente que deja una huella memorable.

Notas Olfativas:

 -Notas de Salida: 
OPimienta negra, piña y tabaco.

 -Notas de Corazón: 
Café, pachulí e iris.

 -Notas de Fondo: 
Ámbar, vainilla, maderas secas, benzoin y labdanum.

Ocasión de Uso
 Momentos ideales: Eventos nocturnos, citas románticas, reuniones formales o clima frío/templado (otoño e invierno).`,
        },
        {
          name: "Asad Elixir",
          displayName: "Lattafa Asad Elixir",
          available: true,
          image: "/images/asad-elixir-perfume.png",
          description: `Asad Elixir - Lattafa Perfumes

Descripción: 

Asad Elixir de Lattafa es una reinterpretación aún más opulenta, profunda y sofisticada de la línea Asad. Con una composición oriental, especiada y amaderada, resalta por su personalidad imponente, cálida y magnética que deja una huella elegante e inolvidable.

Notas Olfativas: 

 Notas de Salida: Pimienta rosa, azafrán y toronja.

 Notas de Corazón: Tabaco, vainilla y madera de cedro.

 Notas de Fondo: Ámbar, incienso, pachulí y madera de cachemira.

Ocasión de Uso: Eventos nocturnos, citas especiales, reuniones formales o clima frío/templado (otoño e invierno).`,
        },
        {
          name: "Asad Zanzibar",
          displayName: "Lattafa Asad Zanzibar",
          available: true,
          image: "/images/asad-zanzibar-perfume.png",
          description: `Asad Zanzibar - Lattafa Perfumes

Descripción
Asad Zanzibar de Lattafa es una propuesta exótica, fresca y cautivadora que reinventa la línea Asad. Con un perfil tropical, cremoso y ligeramente especiado, evoca la brisa marina y el lujo relajante, destacando por una personalidad vibrante y refinada.

Notas Olfativas: 

 Notas de Salida: Pimienta negra y lavanda.

 Notas de Corazón: Agua de coco, sal marina y iris.

 Notas de Fondo: Vainilla e incienso.

Ocasión de uso: 

Días cálidos, salidas al aire libre, eventos de día, vacaciones o tardes de verano.`,
        },
        {
          name: "Asad Bourbon",
          displayName: "Lattafa Asad Bourbon",
          available: true,
          image: "/images/asad-bourbon-perfume.png",
          description: `Descripción: 
Asad Bourbon de Lattafa es una fragancia cálida, licorosa y envolvente que aporta una faceta rica y seductora a la saga Asad. Destaca por sus matices dulce-amaderados y ahumados, creando una presencia reconfortante, sofisticada y sumamente elegante.

Notas Olfativas: 

 Notas de Salida: Pimienta rosa, pimienta negra, canela y bergamota.

 Notas de Corazón: Acorde de bourbon, flor de azahar y cacao.

 Notas de Fondo: Vainilla de Bourbon, haba tonka, ámbar y maderas finas.

Ocasión de Uso:
Citas nocturnas, eventos elegantes, salidas especiales o clima frío/templado (otoño e invierno).`,
        },
        {
          name: "Yara",
          displayName: "Lattafa Yara",
          available: true,
          image: "/images/yara-perfume.png",
          description: `Descripción:
Yara de Lattafa es una fragancia dulce, atalcada y sumamente femenina. Con un carácter cremoso y tropical que recuerda a un delicado postre de frutas y vainilla, es un aroma envolvente, encantador y lleno de delicadeza.

Notas Olfativas

 Notas de Salida: Orquídea, heliotropo y mandarina.

 Notas de Corazón: Acorde goloso (gourmand) y frutas tropicales.

 Notas de Fondo: Vainilla, almizcle y sándalo.

Ocasión de Uso: 

 Momentos ideales: Uso diario, salidas casuales, citas románticas o eventos de día en cualquier estación del año.`,
        },
      ],
      gallery: ["/images/asad-perfume.png", "/images/asad-elixir-perfume.png", "/images/asad-zanzibar-perfume.png", "/images/asad-bourbon-perfume.png", "/images/yara-perfume.png",],
    },
  ],
};
