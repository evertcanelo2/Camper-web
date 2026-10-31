'use client';

import { useState, useEffect } from 'react';
import ImageGallery from '@/components/ImageGallery';
import ProductInteractions from '@/components/ProductInteractions';
import type { ProductVariant } from '@/lib/types';

interface ProductDetailProps {
  product: ProductVariant;
  images: string[];
  returnsPolicy?: string;
}

export default function ProductDetail({ product, images, returnsPolicy }: ProductDetailProps) {
  // 1. Detectar si el producto usa la nueva estructura de variantes (variants) o la vieja (colors)
  const initialVariant = product.variants?.[0] || null;
  const fallbackColor = product.colors?.find((c) => c.available);

  // 2. Estados principales
  const [activeVariant, setActiveVariant] = useState(initialVariant);
  const [selectedColor, setSelectedColor] = useState(initialVariant?.colors || fallbackColor?.name || '');
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Variables dinámicas basadas en la variante activa (o fallback a producto normal)
  const displayImages = activeVariant ? activeVariant.gallery : images;
  const displayName = activeVariant?.name ?? product.name;
  const activePrice = activeVariant?.price ?? product.price;
  const activeDescription = activeVariant?.description ?? product.description;

  // Si cambia la variante/color, reiniciamos el carrusel a la primera foto (índice 0)
  useEffect(() => {
    setActiveIndex(0);
  }, [displayImages]);

  const handleIndexChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* Columna Izquierda: Galería de Imágenes */}
      {/* Ahora le inyectamos 'displayImages' (las fotos específicas de ese color) */}
      <ImageGallery
        images={displayImages}
        productName={displayName}
        isAvailable={product.available !== false}
        activeIndex={activeIndex}
        onIndexChange={handleIndexChange}
      />

      {/* Columna Derecha: Detalles del Producto */}
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

        {/* Componente de Interacciones (Botones de color, talla, agregar al carrito) */}
        <ProductInteractions
          product={product}
          returnsPolicy={returnsPolicy}
          selectedColor={selectedColor}
          activePrice={activePrice}
          activeDescription={activeDescription}
          onColorChange={(colorData) => {
            // Extraer el nombre del color dependiendo de lo que devuelva tu ProductInteractions
            const newColorName = typeof colorData === 'string' ? colorData : colorData.name;
            setSelectedColor(newColorName);

            // Si existen variantes, actualizamos toda la variante (para cambiar fotos y tallas)
            if (product.variants) {
              const matchedVariant = product.variants.find((v) => v.color === newColorName);
              if (matchedVariant) setActiveVariant(matchedVariant);
            }
          }}
        />
      </div>
    </>
  );
}