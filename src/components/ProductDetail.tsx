'use client';

import { useState } from 'react';
import ImageGallery from '@/components/ImageGallery';
import ProductInteractions from '@/components/ProductInteractions';
import type { Product } from '@/lib/types';

interface ProductDetailProps {
  product: Product;
  images: string[];
  returnsPolicy?: string;
}

export default function ProductDetail({ product, images, returnsPolicy }: ProductDetailProps) {
  // Estructura nueva (variants: cada color con su galería) o clásica (colors con una imagen)
  const hasVariants = !!product.variants?.length;
  const initialColor = hasVariants
    ? product.variants![0].color
    : product.colors?.find((c) => c.available)?.name ?? product.colors?.[0]?.name ?? '';

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVariant = product.variants?.find((v) => v.color === selectedColor);
  const activeColor = product.colors?.find((c) => c.name === selectedColor);

  // Fotos del frame: las de la variante activa, o la galería general del producto
  const displayImages = activeVariant?.gallery?.length ? activeVariant.gallery : images;
  const displayName = activeVariant?.name ?? activeColor?.displayName ?? product.name;
  const activePrice = activeVariant?.price ?? activeColor?.price ?? product.price;
  const activeDescription = activeVariant?.description ?? activeColor?.description ?? product.description;

  const handleColorChange = (colorName: string) => {
    setSelectedColor(colorName);

    if (hasVariants) {
      // Nueva galería → empezar por la primera foto de ese color
      setActiveIndex(0);
      return;
    }

    // Estructura clásica: saltar a la foto de ese color dentro de la galería
    const colorImage = product.colors?.find((c) => c.name === colorName)?.image;
    const idx = colorImage ? images.indexOf(colorImage) : -1;
    if (idx >= 0) setActiveIndex(idx);
  };

  // Al cambiar de foto (miniatura o flechas), en la estructura clásica se
  // selecciona también el color al que pertenece esa foto.
  const handleIndexChange = (idx: number) => {
    setActiveIndex(idx);
    if (hasVariants) return;

    const color = product.colors?.find((c) => c.image === images[idx]);
    if (color && color.name !== selectedColor) setSelectedColor(color.name);
  };

  return (
    <>
      {/* key: al cambiar de variante se remonta la galería con sus fotos */}
      <ImageGallery
        key={hasVariants ? selectedColor : 'gallery'}
        images={displayImages}
        productName={displayName}
        isAvailable={product.available !== false}
        activeIndex={activeIndex}
        onIndexChange={handleIndexChange}
      />

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
          activePrice={activePrice}
          activeDescription={activeDescription}
          onColorChange={handleColorChange}
        />
      </div>
    </>
  );
}