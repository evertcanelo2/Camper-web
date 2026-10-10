'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories } from '@/lib/collectionData';
import Link from 'next/link';
import Image from 'next/image';

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 bg-brand-nylon text-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
              Colecciones Completas
            </h1>
            <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl">
              Explora nuestra gama de productos diseñados bajo la filosofía del minimalismo y la elegancia atemporal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <div id="colecciones" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-24 space-y-24 md:space-y-32">
        {categories.map((category) => (
          <section 
            key={category.slug} 
            id={category.slug} 
            className="scroll-mt-32"
          >
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-12 border-b border-brand-nylon/20 pb-4"
            >
              <h2 className="text-3xl md:text-4xl font-light text-brand-denim tracking-tight">
                {category.name}
              </h2>
              <p className="text-sm md:text-base font-light text-brand-mocha/70 mt-2 uppercase tracking-[0.2em]">
                {category.tagline}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
              {category.products.map((product, prodIndex) => (
                <Link
                  href={`/producto/${product.slug}`}
                  key={product.id}
                  className="group cursor-pointer outline-none"
                >
                  <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: prodIndex * 0.1 }}
                  >
                    <div className="relative aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden mb-6">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-denim text-xs font-medium px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-lg font-medium text-brand-denim mb-1 transition-colors group-hover:text-brand-gold">
                        {product.name}
                      </h3>
                      <p className="text-brand-mocha/70 font-light">
                        {product.price}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
