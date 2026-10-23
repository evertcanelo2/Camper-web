'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories } from '@/lib/collectionData';
import Link from 'next/link';
import Image from 'next/image';

export default function CatalogoPage() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  // Detecta cuando el sentinel (div invisible al final del hero) sale del viewport
  // → en ese momento el nav "llegó a su punto" y se desvanece hacia su estado glass
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

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

      {/* Sentinel: div invisible que marca el límite del hero */}
      <div ref={sentinelRef} className="h-0" aria-hidden="true" />

      {/* Category Quick-Nav — aparece flotando al hacer scroll */}
      <div className="sticky top-[62px] z-40 px-4 md:px-10 lg:px-20 py-2.5 pointer-events-none">
        <nav
          aria-label="Navegación por categorías del catálogo"
          className={`max-w-4xl mx-auto rounded-2xl pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isSticky
              ? 'bg-black/30 border border-white/[0.08] shadow-[0_2px_24px_rgba(0,0,0,0.12)] opacity-100'
              : 'bg-transparent border border-transparent shadow-none opacity-0 pointer-events-none'
          }`}
          style={{
            backdropFilter: isSticky ? 'blur(24px) saturate(1.4)' : 'blur(0px)',
            WebkitBackdropFilter: isSticky ? 'blur(24px) saturate(1.4)' : 'blur(0px)',
          }}
        >
          <ul
            role="list"
            className="flex items-center justify-center gap-1 md:gap-2 overflow-x-auto px-4 py-2.5"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {categories.map((category) => (
              <li key={category.slug} className="flex-shrink-0">
                <a
                  href={`#${category.slug}`}
                  aria-label={`Ir a la sección ${category.name}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(category.slug);
                    if (!target) return;
                    const offset = target.getBoundingClientRect().top + window.pageYOffset - 110;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                  }}
                  className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-[11px] font-light tracking-[0.18em] uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

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
