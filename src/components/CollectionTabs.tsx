'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { categories, type Category } from '@/lib/collectionData';
import { cn } from '@/lib/utils';

interface CollectionTabsProps {
  activeCategory?: string;
}

export default function CollectionTabs({ activeCategory }: CollectionTabsProps) {
  const [active, setActive] = useState(activeCategory || 'franelas');

  useEffect(() => {
    if (activeCategory) {
      setActive(activeCategory);
    }
  }, [activeCategory]);

  const current: Category | undefined = categories.find(
    (c) => c.slug === active,
  );

  return (
    <section id="collection-tabs" className="pt-8 md:pt-16 pb-12 md:pb-24">
      {/* ── Section Header ── */}
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-light text-white">
          Selección Exclusiva
        </h2>
        <button className="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300">
          Ver Todo
        </button>
      </div>

      {/* ── Tabs — Desktop ── */}
      <div className="hidden md:flex items-center gap-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActive(cat.slug)}
            className={cn(
              'uppercase tracking-[0.15em] text-sm font-medium pb-2 transition-all duration-300',
              active === cat.slug
                ? 'text-white border-b-2 border-brand-gold'
                : 'text-white/50 hover:text-white/80 border-b-2 border-transparent',
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ── Tabs — Mobile (scrollable pills) ── */}
      <div className="md:hidden mb-6 -mx-1 overflow-x-auto scroll-smooth scrollbar-hide">
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
        `}</style>
        <div className="flex items-center gap-2 px-1 w-max">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={cn(
                'px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all duration-300',
                active === cat.slug
                  ? 'bg-brand-gold/20 text-white border border-brand-gold/40'
                  : 'text-white/50 border border-white/10 hover:text-white/80 hover:border-white/20',
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Product Grid with AnimatePresence ── */}
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.slug}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {current.products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-mocha/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-brand-gold text-brand-mocha text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="mt-3">
                  <p className="text-base font-medium text-white">
                    {product.name}
                  </p>
                  <p className="text-white/80 mt-0.5">{product.price}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
