'use client';

import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';
import ProductInteractions from '@/components/ProductInteractions';
import type { Product } from '@/lib/collectionData';

interface ProductDetailProps {
  product: Product;
  images: string[];
  returnsPolicy?: string;
}

/**
 * Une la galería (izquierda) con los detalles (derecha) para que compartan
 * el estado: al elegir un color, la galería cambia a la foto de ese color.
 */
export default function ProductDetail({ product, images, returnsPolicy }: ProductDetailProps) {
  // Foto inicial: la del primer color disponible (o la primera de la galería)
  const initialImage = product.colors?.find((c) => c.available)?.image;
  const initialIndex = Math.max(0, initialImage ? images.indexOf(initialImage) : 0);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <>
      {/* Left Column: Image Gallery */}
      <ImageGallery
        images={images}
        productName={product.name}
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
      />

      {/* Right Column: Product Details */}
      <div className="lg:col-span-5 flex flex-col pt-2 md:pt-6">
        <h1
          className="text-3xl md:text-5xl font-bold italic tracking-tight text-brand-denim mb-4"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {product.name}
        </h1>

        <div className="text-xl md:text-2xl font-light text-brand-denim mb-2">
          {product.price}
        </div>

        {product.subtitle && (
          <div className="text-sm font-light text-brand-mocha/70 mb-8">
            {product.subtitle}
          </div>
        )}

        <ProductInteractions
          product={product}
          returnsPolicy={returnsPolicy}
          onColorChange={(color) => {
            const idx = color.image ? images.indexOf(color.image) : -1;
            if (idx >= 0) setActiveIndex(idx);
          }}
        />
      </div>
    </>
  );
}
