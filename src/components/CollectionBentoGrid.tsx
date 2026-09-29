'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { categories } from '@/lib/collectionData';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface CollectionBentoGridProps {
  onCategoryClick?: (slug: string) => void;
}

export default function CollectionBentoGrid({
  onCategoryClick,
}: CollectionBentoGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full">
      {/* ── Section header ── */}
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-light text-white tracking-tight"
        >
          Colecciones
        </motion.h2>

        {/* Scroll hint button — desktop only */}
        <button
          onClick={scrollRight}
          className="hidden md:flex items-center gap-1 text-white/30 hover:text-white/70 text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          Explorar
          <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Horizontal scroll container ── */}
      <div className="relative -mx-4 md:-mx-8 lg:-mx-16">
        <div
          ref={scrollRef}
          className="custom-scrollbar flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[10vw] sm:px-[20vw] md:px-8 lg:px-16 pb-6"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.2) transparent',
          }}
        >
          <style>{`
            .custom-scrollbar::-webkit-scrollbar { 
              height: 6px; 
              display: block;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.15);
              border-radius: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #ffffff;
              border-radius: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #e2e8f0;
            }
          `}</style>

          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/catalogo#${category.slug}`}
              className={cn(
                'group flex-shrink-0 cursor-pointer snap-center md:snap-start block outline-none',
                'w-[80vw] sm:w-[60vw] md:w-[340px] lg:w-[380px]',
              )}
              aria-label={`Ver categoría ${category.name}`}
            >
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full h-full"
              >
              {/* ── Image ── */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={category.image}
                  alt={category.name}
                  className={cn(
                    'w-full h-full object-cover',
                    'transition-transform duration-700 ease-out',
                    'group-hover:scale-105'
                  )}
                  loading="lazy"
                />
              </div>

              {/* ── Label ── */}
              <div className="mt-4 flex items-center justify-between">
                <h3
                  className={cn(
                    'text-sm md:text-base font-light text-white/70 uppercase tracking-[0.2em]',
                    'transition-colors duration-300',
                    'group-hover:text-brand-gold'
                  )}
                >
                  {category.name}
                </h3>
                <ChevronRight
                  className={cn(
                    'w-4 h-4 text-white/30',
                    'transition-all duration-300',
                    'group-hover:text-brand-gold group-hover:translate-x-1'
                  )}
                  strokeWidth={1.5}
                />
              </div>
              </motion.div>
            </Link>
          ))}

          {/* Spacer at the end for clean scroll ending */}
          <div className="flex-shrink-0 w-4 md:w-8 lg:w-16" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
