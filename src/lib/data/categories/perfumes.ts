import { Princess_Sofia } from 'next/font/google';
import { Category } from '../../types';

export const perfumesCategory: Category = {
  slug: "perfumes",
  name: "Perfumes",
  tagline: "La esencia CAMPER",
  image: "/images/asad-perfume.jpg",
  returnsPolicy: "Por la naturaleza del producto (perfume sellado), no se aceptan cambios ni devoluciones una vez abierto. Aplica garantía únicamente por defecto de fábrica.",
  products: [
    {
      id: 23,
      slug: "linea-lattafa",
      name: "Linea Lattafa",
      price: "Desde 30.00 BCV",
      numericPrice: 30.00,
      image: "/images/asad-perfume.jpg",
      colors: [
        {
          name: "Asad",
          displayName: "Lattafa Asad",
          available: true,
          image: "/images/asad-perfume.jpg",
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
          image: "/images/asad-elixir-perfume.jpg",
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
          image: "/images/asad-zanzibar-perfume.jpg",
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
          image: "/images/asad-bourbon-perfume.jpg",
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
          image: "/images/yara-perfume.jpg",
          description: `Descripción:
Yara de Lattafa es una fragancia dulce, atalcada y sumamente femenina. Con un carácter cremoso y tropical que recuerda a un delicado postre de frutas y vainilla, es un aroma envolvente, encantador y lleno de delicadeza.

Notas Olfativas

 Notas de Salida: Orquídea, heliotropo y mandarina.

 Notas de Corazón: Acorde goloso (gourmand) y frutas tropicales.

 Notas de Fondo: Vainilla, almizcle y sándalo.

Ocasión de Uso: 

 Momentos ideales: Uso diario, salidas casuales, citas románticas o eventos de día en cualquier estación del año.`,
        },
        {
          name: "Art of Universe",
          displayName: "Lattafa Pride - Art of Universe",
          available: true,
          price: "65.00 BCV",
          numericPrice: 65.00,
          image: "/images/art-of-universe-perfume.jpg",
          description: `Art of Universe - Lattafa Pride

Descripción:

Art of Universe de la colección Lattafa Pride es una fragancia oriental amaderada y especiada con un perfil sofisticado, misterioso y envolvente. Combina notas cítricas y especiadas de entrada con un corazón balsámico y un fondo cálido de maderas y resinas, logrando un aroma imponente, exclusivo y de gran presencia.

Notas Olfativas:

 Notas de Salida: Bergamota, pimienta rosa y cardamomo.

 Notas de Corazón: Incienso, lavanda y notas florales oscuras.

 Notas de Fondo: Ámbar, sándalo, pachulí y vainilla.

Ocasión de Uso:

 Momentos ideales: Eventos nocturnos, reuniones formales, salidas especiales o climas templados y fríos.
`,
        },
        {
          name: "Eclaire",
          displayName: "Lattafa Eclaire",
          available: true,
          image: "/images/eclaire-perfume.jpg",
          description: `Eclaire - Lattafa Perfumes Dama 

Descripción:

Eclaire de Lattafa es una fragancia gourmand irresistible, cálida y envolvente. Con un perfil deliciosamente dulce que combina matices acaramelados, cremosos y de vainilla, destaca por su aura reconfortante, seductora y de larga duración.

Notas Olfativas:

 Notas de Salida: Caramelo, leche y azúcar.

 Notas de Corazón: Miel y flores blancas.

 Notas de Fondo: Vainilla, praliné y almizcle.

Ocasión de Uso: 

 Momentos ideales: Salidas informales, citas románticas, uso diario o climas frescos y fríos (otoño e invierno).`,
        },
      ],
      gallery: ["/images/asad-perfume.jpg", "/images/asad-elixir-perfume.jpg", "/images/asad-zanzibar-perfume.jpg", "/images/asad-bourbon-perfume.jpg", "/images/yara-perfume.jpg", "/images/art-of-universe-perfume.jpg", "/images/eclaire-perfume.jpg",],
    },
    {
      id: 24,
      slug: "linea-odissey",
      name: "Linea Odissey",
      price: "Desde 35.00 BCV",
      numericPrice: 35.00,
      image: "/images/odissey-homme-perfume.jpg",
      colors: [
        {
          name: "Odyssey Homme",
          displayName: "Odyssey Homme",
          available: true,
          price: "35.00 BCV",
          numericPrice: 35.00,
          image: "/images/odissey-homme-perfume.jpg",
          description: `Odyssey Homme - Armaf

Descripción:
Odyssey Homme de Armaf es una fragancia oriental amaderada intensa, elegante y seductora. Con una combinación equilibrada de notas florales oscuras, especias cálidas y un fondo dulce ambarado, destaca por su aire de sofisticación, misterio y distinción.

Notas Olfativas:

 Notas de Salida: Vainilla y ámbar.

 Notas de Corazón: Iris, especias y orientales.

 Notas de Fondo: Vainilla, cuero y jazmín.

Ocasión de Uso:

 Momentos ideales: Eventos nocturnos, cenas formales, citas especiales o climas fríos y templados (otoño e invierno).
`,
        },
        {
          name: "Odyssey Mandarin Sky",
          displayName: "Odyssey Mandarin Sky",
          available: true,
          price: "45.00 BCV",
          numericPrice: 45.00,
          image: "/images/odyssey-mandarin-sky-perfume.jpg",
          description: `Odyssey Mandarin Sky - Armaf

Descripción: 
Odyssey Mandarin Sky (Limited Edition) de Armaf es una fragancia vibrante, dulce y energizante. Con un perfil cítrico, gourmand y ligeramente acaramelado, destaca por su aura juvenil, moderna y sumamente adictiva. 

Notas Olfativas:

 Notas de Salida: Mandarina, naranja, azafrán y salvia.

 Notas de Corazón: Caramelo, haba tonka y tagetes (flor de caléndula).

 Notas de Fondo: Ambrosan, cedro y vetiver.

Ocasión de Uso:

 Momentos ideales: Salidas casuales, fiestas, citas, o uso diario en climas templados y fríos.`,
        },
        {
          name: "Odyssey Mandarin Sky Elixir",
          displayName: "Odyssey Mandarin Sky Elixir",
          available: true,
          price: "45.00 BCV",
          numericPrice: 45.00,
          image: "/images/odyssey-mandarin-sky-elixir-perfume.jpg",
          description: `Odyssey Mandarin Sky Elixir - Armaf

Descripción:

Odyssey Mandarin Sky Elixir (Limited Edition) de Armaf es una versión más intensa, concentrada y profunda del éxito Mandarin Sky. Combina la frescura cítrica de la mandarina con notas resinosas, amaderadas y especiadas, ofreciendo un aroma opulento, magnético y de gran duración.

Notas Olfativas:

 Notas de Salida: Mandarina, naranja, salvia y cardamomo.

 Notas de Corazón: Caramelo, haba tonka, resinas y especias finas.

 Notas de Fondo: Ámbar denso, cedro, vetiver y ambroxan.

Ocasión de Uso:

 Momentos ideales: Eventos nocturnos, salidas especiales, fiestas o clima templado y frío.
`,
        },
        {
          name: "Odyssey Mega",
          displayName: "Odyssey Mega",
          available: true,
          price: "35.00 BCV",
          numericPrice: 35.00,
          image: "/images/odyssey-mega1-perfume.jpg",
          description: `Odyssey Mega - Armaf

Descripción:

Odyssey Mega (Limited Edition) de Armaf es una fragancia fresca, amaderada y aromática que destaca por su carácter dinámico y revitalizante. Con un perfil versátil e imponente, combina notas cítricas, herbales y amaderadas para proyectar una elegancia moderna y activa.

Notas Olfativas:

 Notas de Salida: Bergamota, naranja, jengibre, menta y limón.

 Notas de Corazón: Enebro de Virginia, geranio, salvia y piña.

 Notas de Fondo: Habas tonka, vetiver, cedro, almizcle y ámbar gris.

Ocasión de Uso: 

 Momentos ideales: Uso diario, reuniones de trabajo, actividades al aire libre, gimnasio o días cálidos (primavera y verano).
`,
        },
        {
          name: "Odyssey Wild One Gold Edition",
          displayName: "Odyssey Wild One Gold Edition",
          available: true,
          price: "35.00 BCV",
          numericPrice: 35.00,
          image: "/images/odyssey-wild-one-perfume.jpg",
          description: `Odyssey Wild One Gold Edition - Armaf

Descripción:

Odyssey Wild One Gold Edition de Armaf es una fragancia audaz, especiada y magnética que evoca un espíritu libre e indomable. Con un equilibrio entre notas cítricas vibrantes, un corazón cálido y un fondo amaderado profundo, destaca por su carácter masculino, imponente y sofisticado.

Notas Olfativas:

 Notas de Salida: Pimienta negra, bergamota, limón y menta.

 Notas de Corazón: Vainilla, pimienta rosa, lavanda y vetiver.

 Notas de Fondo: Ámbar, cedro, pachulí y maderas preciosas.

Ocasión de Uso: 

 Momentos ideales: Eventos nocturnos, salidas informales o elegantes, citas especiales y climas templados o fríos.
`,
        },
        {
          name: "Odyssey Tyrant Special Edition",
          displayName: "Odyssey Tyrant Special Edition",
          available: true,
          price: "35.00 BCV",
          numericPrice: 35.00,
          image: "/images/odyssey-tyrant.jpg",
          description: `Odyssey Tyrant Special Edition - Armaf

Descripción:

Odyssey Tyrant Special Edition de Armaf es una fragancia amaderada, cítrica y especiada con un marcado carácter masculino e imponente. Su combinación de frescura intensa con matices cálidos y resinosos proyecta una vibra audaz, poderosa y de gran liderazgo.

Notas Olfativas:

 Notas de Salida: Toronja (pomelo) y cítricos frescos.

 Notas de Corazón: Geranio, lavanda, pimienta y elemí.

 Notas de Fondo: Ambroxan, maderas de cedro, vetiver y pimienta negra.

Ocasión de Uso: 

 Momentos ideales: Eventos importantes, reuniones de negocios, salidas informales o de noche, y uso diario para destacar en cualquier estación.
`,
        },
      ],
      gallery: ["/images/odissey-homme-perfume.jpg", "/images/odyssey-mandarin-sky-perfume.jpg", "/images/odyssey-mandarin-sky-elixir-perfume.jpg", "/images/odyssey-mega1-perfume.jpg", "/images/odyssey-wild-one-perfume.jpg", "/images/odyssey-tyrant.jpg",],
    },
    {
      id: 25,
      slug: "amber-gold",
      name: "Amber Oud Gold Edition",
      price: "55.00 BCV",
      numericPrice: 55.00,
      badge: "unisex",
      image: "/images/amber-gold-perfume.jpg",
      description: `Amber Oud Gold Edition - Al Haramain

Descripción: 

Amber Oud Gold Edition de Al Haramain es una fragancia unisex opulenta, dulce y frutal que proyecta un lujo deslumbrante. Con un equilibrio perfecto entre la jugosidad de las frutas tropicales y una base cálida de ámbar y vainilla.

Notas Olfativas: 

 Notas de Salida: Bergamota y notas verdes.

 Notas de Corazón: Notas dulces, melón, piña y ámbar.

 Notas de Fondo: Almizcle, vainilla y notas amaderadas.

Ocasión de Uso:

 Momentos ideales: Eventos especiales, salidas nocturnas, fiestas o cualquier ocasión donde desees ser el centro de atención en cualquier época del año.
`,
    },
    {
      id: 26,
      slug: "Linea-Afnan",
      name: "Linea Afnan",
      price: "desde 40.00 BCV",
      numericPrice: 40.00,
      image: "/images/9pm-night-perfume.jpg",
      colors: [
        {
          name: "9 PM Night Out",
          displayName: "9 PM Night Out",
          available: true,
          price: "45.00 BCV",
          numericPrice: 45.00,
          image: "/images/9pm-night-perfume.jpg",
          description: ``,
        },
        {
          name: "9 PM Rebel",
          displayName: "9 PM Rebel",
          available: true,
          price: "40.00 BCV",
          numericPrice: 40.00,
          image: "/images/9pm-rebel-perfume.jpg",
          description: ``,
        },
        {
          name: "9 PM Elixir",
          displayName: "9 PM Elixir",
          available: true,
          price: "40.00 BCV",
          numericPrice: 40.00,
          image: "/images/9pm-elixir-perfume.jpg",
          description: ``,
        },
        {
          name: "9 PM",
          displayName: "9 PM",
          available: true,
          price: "40.00 BCV",
          numericPrice: 40.00,
          image: "/images/9pm-perfume.jpg",
          description: ``,
        },
      ],
      gallery: ["/images/9pm-night-perfume.jpg", "/images/9pm-rebel-perfume.jpg", "/images/9pm-elixir-perfume.jpg", "/images/9pm-perfume.jpg",],
    },
    {
      id: 27,
      slug: "linea-versace",
      name: "Linea Versace",
      price: "26.00 BCV",
      numericPrice: 26.00,
      image: "/images/eros-versace.jpg",
      colors: [
        {
          name: "Eros",
          displayName: "Eros",
          available: true,
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/eros-versace.jpg",
          description: `Eros - Versace

Descripción:

Eros de Versace es una fragancia icónica, fresca, apasionada y vibrante. Inspirada en la mitología griega y el amor pasional, combina la vitalidad de notas cítricas y mentoladas con la calidez envolvente de la vainilla y maderas nobles, logrando una presencia magnética e inolvidable.

Notas Olfativas:

 Notas de Salida: Menta, manzana verde y limón.

 Notas de Corazón: Haba tonka, ambroxan y geranio.

 Notas de Fondo: Vainilla de Madagascar, cedro de Virginia, cedro del Atlas, vetiver y musgo de roble.

Ocasión de Uso: 

 Momentos ideales: Fiestas, eventos nocturnos, citas románticas, clubbing y salidas informales en cualquier estación.
`,
        },
        {
          name: "Eros Energy",
          displayName: "Eros Energy",
          available: true,
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/eros-energy-versace.jpg",
          description: `Eros Energy - Versace

Descripción:

Eros Energy de Versace es una propuesta efervescente, ultra refrescante y llena de vitalidad. Con una explosión cítrica brillante combinada con un corazón herbal y un fondo amaderado sensual, reinterpreta el ADN de la saga Eros ofreciendo un aroma dinámico, elegante y energizante.

Notas Olfativas:

 Notas de Salida: Bergamota de Calabria, limón italiano, toronja (pomelo), lima (limón verde), mandarina y naranja sangrina.

 Notas de Corazón: Pimienta rosa, grosella negra y pimienta blanca.

 Notas de Fondo: Ámbar gris, almizcle y musgo de roble.

Ocasión de Uso:

 Momentos ideales: Días calurosos, actividades al aire libre, uso diario, eventos de día o vacaciones en primavera y verano.
`,
        },
      ],
      gallery: ["/images/eros-versace.jpg", "/images/eros-energy-versace.jpg"],
    },
    {
      id: 28,
      slug: "sauvage",
      name: "Sauvage",
      price: "26.00 BCV",
      numericPrice: 26.00,
      image: "/images/sauvage-perfume.jpg",
      description: `Sauvage Parfum - Dior

Descripción:

Sauvage Parfum de Dior es una interpretación altamente concentrada, rica y profunda del icónico Sauvage. Con una frescura nocturna mezclada con matices cálidos de maderas y resinas, destaca por una presencia sofisticada, nocturna e imponente que deja una huella inolvidable.

Notas Olfativas:

 Notas de Salida: Bergamota de Calabria, mandarina y elemi.

 Notas de Corazón: Sándalo de Sri Lanka y acordes amaderados.

 Notas de Fondo: Vainilla absoluta de Papúa Nueva Guinea, haba tonka y incienso (olíbano).

Ocasión de Uso: 

 Momentos ideales: Eventos nocturnos, cenas de gala, reuniones formales, citas especiales o climas templados y fríos.
`,
    },
    {
      id: 29,
      slug: "king-solei",
      name: "King Soleil - Bharara Beauty",
      price: "45.00 BCV",
      numericPrice: 45.00,
      image: "/images/king-solei-perfume.jpg",
      description: `King Soleil - Bharara Beauty

Descripción:

Bharara King Soleil de Bharara es una fragancia imponente, refinada y vibrante que rinde homenaje a la fuerza y la sofisticación. Combina notas cítricas y frútales brillantes con un fondo amaderado y cálido, proyectando un aroma magnético, versátil y lleno de elegancia.

Observación: enciende luz 

Notas Olfativas:

 Notas de Salida: Bergamota, limón (lima ácida) y naranja.

 Notas de Corazón: Notas frutales y acordes florales suaves.

 Notas de Fondo: Ámbar, almizcle blanco y vainilla.

Ocasión de Uso:

 Momentos ideales: Reuniones importantes, uso diario de alto nivel, eventos sociales y salidas especiales en cualquier época del año.`,
    },
    {
      id: 30,
      slug: "linea-jean-paul-gaultier",
      name: "Linea Jean Paul Gaultier",
      price: "Desde 26.00 BCV",
      numericPrice: 26.00,
      image: "/images/scandal-pour-perfume.jpg",
      colors: [
        {
          name: "Scandal Pour Homme",
          displayName: "Scandal Pour Homme",
          available: true,
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/scandal-pour-perfume.jpg",
          description: `Scandal Pour Homme - Jean Paul Gaultier

Descripción:

Scandal Pour Homme de Jean Paul Gaultier es una fragancia oriental amaderada intensa, audaz y carismática. Diseñada para romper reglas, combina la sensualidad del caramelo artesanal con notas refrescantes de salvia y la solidez del vetiver, logrando un aroma magnético, energizante y de gran impacto.

Notas Olfativas:

 Notas de Salida: Clary sage (salvia esclarea) y mandarina.

 Notas de Corazón: Caramelo y haba tonka.

 Notas de Fondo: Vetiver.

Ocasión de Uso:

 Momentos ideales: Eventos nocturnos, fiestas, citas románticas, salidas informales de impacto o climas frescos y fríos.

`,
        },
        {
          name: "Scandal Pour Homme Absolu",
          displayName: "Scandal Pour Homme Absolu",
          available: true,
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/scandal-pour-absolu-perfume.jpg",
          description: `Scandal Pour Homme Absolu - Jean Paul Gaultier

Descripción:

Scandal Pour Homme Absolu de Jean Paul Gaultier es una fragancia intensamente ambarina y amaderada, diseñada para llevar la seducción al siguiente nivel. 

Notas Olfativas:

 Notas de Salida: Mirra y notas aromáticas.

 Notas de Corazón: Castaña y caramelo.

 Notas de Fondo: Sándalo y notas amaderadas.

Ocasión de Uso:

 Momentos ideales: Eventos nocturnos, citas románticas de alto impacto, celebraciones exclusivas y climas templados o fríos.

`,
        },
        {
          name: "Gaultier Divine Le Parfum",
          displayName: "Gaultier Divine Le Parfum",
          available: false,
          badge: "AGOTADO",
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/gaultier-divine-perfume.jpg",
          description: `Gaultier Divine Le Parfum - Jean Paul Gaultier Dama 

Descripción: 

Notas Olfativas:

 Notas de Salida: Notas solares y azucena.

 Notas de Corazón: Frangipani (plumeria) y sal de mar.

 Notas de Fondo: Ámbar y benjuí.

Ocasión de Uso:

 Momentos ideales: Eventos especiales, citas nocturnas, celebraciones exclusivas y climas templados o fríos.

`,
        },
        {
          name: "Le Male Le Parfum",
          displayName: "Le Male Le Parfum",
          available: false,
          badge: "AGOTADO",
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/le-male-perfume.jpg",
          description: `Le Male Le Parfum - Jean Paul Gaultier

Descripción:

Le Male Le Parfum de Jean Paul Gaultier es una fragancia de la familia olfativa ámbar para hombres, elegante, intensa y sofisticada. Vestido con el icónico uniforme de oficial en tonos negros y dorados, combina la potencia especiada del cardamomo con la suavidad atalcada del iris y un fondo avainillado sumamente adictivo.

Notas Olfativas
 Notas de Salida: Cardamomo.

 Notas de Corazón: Lavanda e iris.

 Notas de Fondo: Vainilla, notas orientales y notas amaderadas.

Ocasión de Uso: 

 Momentos ideales: Eventos nocturnos, cenas formales, citas románticas y climas templados o fríos (otoño e invierno).
`,
        },
        {
          name: "Le Beau",
          displayName: "Le Beau",
          available: false,
          badge: "AGOTADO",
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/le-beau-perfume.jpg",
          description: `Le Beau - Jean Paul Gaultier

Descripción:

Le Beau de Jean Paul Gaultier es una fragancia amaderada aromática para hombres que evoca la tentación de un jardín paradisíaco. Con un contraste magnético entre la frescura efervescente del bergamota, la cremosidad exótica de la madera de coco y la calidez del haba tonka, proyecta un aura ultra seductora, fresca y adictiva.

Notas Olfativas:

 Notas de Salida: Bergamota.

 Notas de Corazón: Madera de coco.

 Notas de Fondo: Haba tonka.

Ocasión de Uso:

 Momentos ideales: Días calurosos, tardes de verano, salidas informales, eventos al aire libre y citas románticas.

`,
        },
        {
          name: "Le Beau Paradise Garden",
          displayName: "Le Beau Paradise Garden",
          available: false,
          badge: "AGOTADO",
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/le-beau-paradise.jpg",
          description: `Le Beau Paradise Garden - Jean Paul Gaultier

Descripción:

Le Beau Paradise Garden de Jean Paul Gaultier es una fragancia acuática amaderada que rinde tributo a la pasión exuberante del jardín de Gaultier. Destaca por su aroma salvaje y refrescante, donde los acordes salados y la flor de loto se entrelazan con una madera de coco cremosa y un fondo verde reconfortante, creando una estela exótica, libre y sumamente atractiva.

Notas Olfativas:

 Notas de Salida: Menta fresca, notas acuáticas, jengibre y flor de loto.

 Notas de Corazón: Madera de coco, sal marina y maracuyá (parchita).

 Notas de Fondo: Haba tonka y sándalo.

Ocasión de Uso:

 Momentos ideales: Días calurosos, vacaciones, eventos al aire libre, salidas casuales y noches de verano.

`,
        },
      ],
      gallery: ["/images/scandal-pour-perfume.jpg", "/images/scandal-pour-absolu-perfume.jpg", "/images/gaultier-divine-perfume.jpg", "/images/le-male-perfume.jpg", "/images/le-beau-perfume.jpg", "/images/le-beau-paradise.jpg",],
    },
    {
      id: 31,
      slug: "1-million-rabanne",
      name: "1 Million - Rabanne",
      price: "26.00 BCV",
      numericPrice: 26.00,
      image: "/images/one-million.jpg",
      description: `1 Million - Rabanne

Descripción:

1 Million de Rabanne es una de las fragancias masculinas más icónicas, audaces y seductoras del mundo. Presentada en su distintivo frasco en forma de lingote de oro, combina notas de cítricos efervescentes con la calidez de la canela y un fondo de cuero especiado, logrando una presencia magnética, inolvidable y llena de extravagancia.

Notas Olfativas:

 Notas de Salida: Mandarina sangrina, pomelo (toronja) y menta fresca.

 Notas de Corazón: Canela, notas especiadas y rosa.

 Notas de Fondo: Cuero, ámbar, notas amaderadas y pachulí hindú.

Ocasión de Uso:

 Momentos ideales: Fiestas, eventos nocturnos, clubbing, citas románticas y climas templados o fríos.
`,
    },
    {
      id: 32,
      slug: "carolina-herrera",
      name: "Linea Carolina Herrera",
      price: "30.00 BCV",
      numericPrice: 30.00,
      image: "/images/bad-boy-perfume1.jpg",
      description: ``,
      colors: [
        {
          name: "Bad Boy",
          displayName: "Bad Boy - Carolina Herrera",
          available: true,
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/bad-boy-perfume1.jpg",
          description: `Bad Boy - Carolina Herrera

Descripción:

Bad Boy de Carolina Herrera es una fragancia oriental especiada que celebra la nueva masculinidad: una fascinante dualidad entre la fuerza y la sensibilidad, la confianza y el misterio. Presentada en su icónico frasco en forma de rayo, combina la frescura de las pimientas con la calidez adictiva del haba tonka y el cacao.

Notas Olfativas:

 Notas de Salida: Pimienta negra, pimienta blanca y bergamota de Calabria.

 Notas de Corazón: Salvia y cedro.

 Notas de Fondo: Haba tonka, cacao y madera de ámbar.

Ocasión de Uso:

 Momentos ideales: Eventos nocturnos, citas románticas, salidas informales de impacto y climas templados o fríos.

`,
        },
        {
          name: "Good Girl",
          displayName: "Good Girl - Carolina Herrera",
          available: true,
          price: "26.00 BCV",
          numericPrice: 26.00,
          image: "/images/good-girl-perfume1.jpg",
          description: `Good Girl - Carolina Herrera

Descripción:

Good Girl de Carolina Herrera es una fragancia audaz, sofisticada y profundamente seductora. Presentada en su icónico frasco con forma de zapato de tacón aguja, combina notas luminosas de flores blancas con la intensidad oscura y adictiva del haba tonka y el cacao, reflejando la dualidad de la mujer moderna.

Notas Olfativas

 Notas de Salida: Almendras, café, bergamota y limón (lima ácida).

 Notas de Corazón: Nardos (tuberosas), jazmín sambac (sampeguita), flor de azahar del naranjo, raíz de lirio y rosa búlgara.

 Notas de Fondo: Haba tonka, cacao, vainilla, praliné, sándalo, ámbar, almizcle, madera de cachemira, pachulí y canela.

Ocasión de Uso:

 Momentos ideales: Eventos nocturnos, citas románticas, fiestas y climas templados o fríos (otoño e invierno).
`,
        },
      ],
      gallery: ["/images/bad-boy-perfume1.jpg", "/images/good-girl-perfume1.jpg"],
    },
  ],
};