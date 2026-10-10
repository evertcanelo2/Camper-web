'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  productName: string;
  /** Opcional: índice activo controlado desde fuera. */
  activeIndex?: number;
  onIndexChange?: (index: number) => void;
}

export default function ImageGallery({ images, productName, activeIndex, onIndexChange }: ImageGalleryProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeImageIndex = activeIndex ?? internalIndex;
  const setActiveImageIndex = (next: number | ((prev: number) => number)) => {
    const value = typeof next === 'function' ? next(activeImageIndex) : next;
    setInternalIndex(value);
    onIndexChange?.(value);
  };

  return (
    <div className="lg:col-span-7 flex flex-col gap-4">
      <div className="relative aspect-[4/5] bg-[#F5F5F5] rounded-2xl overflow-hidden group">
        <Image 
          src={images[activeImageIndex]} 
          alt={`${productName} view ${activeImageIndex + 1}`} 
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand-denim shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-brand-denim shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button 
              key={idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              className={cn(
                "relative w-20 aspect-[4/5] rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F5F5]",
                activeImageIndex === idx ? "ring-1 ring-brand-denim ring-offset-2 opacity-100" : "opacity-60"
              )}
            >
              <Image src={img} alt={`Thumbnail ${idx}`} fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
