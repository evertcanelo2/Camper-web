import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Camisa de Lino Esencial",
    price: "$89",
    image: "/images/product-1.jpg",
    category: "Esenciales",
  },
  {
    id: 2,
    name: "Pantalón Tailored Gris",
    price: "$120",
    image: "/images/product-2.jpg",
    category: "Novedades",
  },
  {
    id: 3,
    name: "Chaqueta Minimal Navy",
    price: "$210",
    image: "/images/product-3.jpg",
    category: "Outerwear",
  }
];

export default function ProductGrid() {
  return (
    <section className="w-full bg-transparent px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-end mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white">Selección Exclusiva</h2>
          <button className="text-white/80 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 font-medium text-sm tracking-widest uppercase cursor-pointer">
            Ver Todo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-gray-100 mb-6 overflow-hidden rounded-md">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-mocha/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-xs tracking-widest text-white/70 uppercase">{product.category}</span>
              <h3 className="text-lg font-medium text-white">{product.name}</h3>
              <p className="text-white/90">{product.price}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
