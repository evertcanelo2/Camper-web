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
 * el estado: al elegir un color/variante, la galería cambia a la foto de ese color,
 * el nombre del producto cambia si la variante define `displayName`,
 * y la descripción cambia si la variante define `description`.
 */
export default function ProductDetail({ product, images, returnsPolicy }: ProductDetailProps) {
  // Color y foto inicial: el primer color disponible (o la primera foto de la galería)
  const initialColor = product.colors?.find((c) => c.available);
  const initialIndex = Math.max(0, initialColor?.image ? images.indexOf(initialColor.image) : 0);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [selectedColor, setSelectedColor] = useState(initialColor?.name || '');

  // Nombre y descripción activos según la variante seleccionada
  const activeVariant = product.colors?.find((c) => c.name === selectedColor);
  const displayName = activeVariant?.displayName ?? product.name;
  const activeDescription = activeVariant?.description ?? product.description;
  const activePrice = activeVariant?.price ?? product.price;

  // Al cambiar de foto (miniatura o flechas): si esa foto pertenece a un color, se selecciona ese color
  const handleIndexChange = (index: number) => {
    setActiveIndex(index);
    const color = product.colors?.find((c) => c.available && c.image === images[index]);
    if (color) setSelectedColor(color.name);
  };

  return (
    <>
      {/* Left Column: Image Gallery */}
      <ImageGallery
        images={images}
        productName={displayName}
        activeIndex={activeIndex}
        onIndexChange={handleIndexChange}
      />

      {/* Right Column: Product Details */}
      <div className="lg:col-span-5 flex flex-col pt-2 md:pt-6">
        <h1
          className="text-3xl md:text-5xl font-bold italic tracking-tight text-brand-denim mb-4 transition-all duration-300"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {displayName}
        </h1>

        <div className="text-xl md:text-2xl font-light text-brand-denim mb-2">
          {activePrice}
        </div>

        {product.subtitle && (
          <div className="text-sm font-light text-brand-mocha/70 mb-8">
            {product.subtitle}
          </div>
        )}

        <ProductInteractions
          product={product}
          returnsPolicy={returnsPolicy}
          selectedColor={selectedColor}
          activeDescription={activeDescription}
          onColorChange={(color) => {
            setSelectedColor(color.name);
            const idx = color.image ? images.indexOf(color.image) : -1;
            if (idx >= 0) setActiveIndex(idx);
          }}
        />
      </div>
    </>
  );
}
