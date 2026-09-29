'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/collectionData';

interface ProductInteractionsProps {
  product: Product;
}

export default function ProductInteractions({ product }: ProductInteractionsProps) {
  const { addToCart } = useCart();

  const initialColor = product?.colors?.find(c => c.available)?.name || '';
  const initialSize = product?.sizes?.find(s => s.available)?.name || '';

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddToCart = useCallback(() => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      numericPrice: product.numericPrice || 0,
      image: product.image,
      color: selectedColor || 'N/A',
      size: selectedSize || 'N/A',
      quantity
    });
  }, [addToCart, product, selectedColor, selectedSize, quantity]);

  const getWhatsAppLink = () => {
    const text = `¡Hola! Quisiera comprar directamente este artículo:\n\n- ${quantity}x ${product.name} (Talla: ${selectedSize || 'N/A'}, Color: ${selectedColor || 'N/A'}) a ${product.price}\n\nTotal: $${((product.numericPrice || 0) * quantity).toFixed(2)} USD`;
    return `https://wa.me/584145096447?text=${encodeURIComponent(text)}`;
  };

  return (
    <div>
      {/* Debug: remove after confirming fix */}
      {!isClient && (
        <div style={{ padding: '8px', background: '#fee2e2', border: '1px solid #ef4444', borderRadius: '4px', marginBottom: '12px', fontSize: '12px', color: '#991b1b' }}>
          ⚠️ JavaScript no ha hidratado. Los botones no funcionarán.
        </div>
      )}

      {/* Color Selector */}
      {product.colors && product.colors.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-brand-denim mb-3">Color</h3>
          <div className="flex flex-wrap gap-3">
            {product.colors.map(color => (
              <button
                key={color.name}
                type="button"
                disabled={!color.available}
                onClick={() => setSelectedColor(color.name)}
                className={cn(
                  "px-4 py-2 border text-sm rounded-md bg-white appearance-none",
                  selectedColor === color.name 
                    ? "border-brand-denim border-[1.5px] text-brand-denim font-medium bg-gray-50"
                    : "border-gray-200 text-brand-denim/70",
                  !color.available && "opacity-40 bg-gray-50 line-through decoration-gray-300"
                )}
              >
                {color.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-brand-denim mb-3">Size</h3>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map(size => (
              <button
                key={size.name}
                type="button"
                disabled={!size.available}
                onClick={() => setSelectedSize(size.name)}
                className={cn(
                  "min-w-[3rem] px-4 py-2 border text-sm rounded-md flex justify-center items-center bg-white appearance-none",
                  selectedSize === size.name 
                    ? "border-brand-denim border-[1.5px] text-brand-denim font-medium bg-gray-50"
                    : "border-gray-200 text-brand-denim/70",
                  !size.available && "opacity-40 bg-gray-50 line-through decoration-gray-300"
                )}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-brand-denim mb-3">Cantidad</h3>
        <div className="inline-flex items-center border border-gray-200 rounded-md bg-white">
          <button 
            type="button"
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            className="w-10 h-10 flex items-center justify-center text-brand-denim/70 bg-white appearance-none"
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className="w-12 h-10 flex items-center justify-center text-sm font-medium border-x border-gray-100">
            {quantity}
          </div>
          <button 
            type="button"
            onClick={() => setQuantity(prev => prev + 1)}
            className="w-10 h-10 flex items-center justify-center text-brand-denim/70 bg-white appearance-none"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 mb-12">
        <button 
          type="button"
          onClick={handleAddToCart}
          className="w-full py-4 border border-brand-denim text-brand-denim font-medium text-xs tracking-widest uppercase rounded-md bg-white appearance-none"
        >
          Agregar al carrito
        </button>
        <a 
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-brand-nylon text-white font-bold text-xs tracking-widest uppercase rounded-md shadow-sm text-center block"
        >
          Comprar
        </a>
      </div>

      {/* Accordions */}
      <div className="border-t border-gray-200">
        {[
          { id: 'desc', title: 'Descripción', content: product.description },
          { id: 'returns', title: 'Cambio y devoluciones', content: 'Ofrecemos 15 días para cambios de talla o color por defectos de fábrica. El producto debe estar en su estado original con etiquetas adjuntas y sin signos de uso.' },
          { id: 'shipping', title: 'Envíos y Entregas', content: 'Envíos a nivel nacional a través de MRW, Tealca y Zoom. Entregas personales y delivery express disponible para zonas céntricas.' },
        ].map(item => (
          <div key={item.id} className="border-b border-gray-200">
            <button 
              type="button"
              onClick={() => setActiveAccordion(prev => prev === item.id ? null : item.id)}
              className="w-full py-5 flex justify-between items-center text-left bg-white appearance-none"
            >
              <span className="text-sm font-semibold text-brand-denim">{item.title}</span>
              <span className="text-brand-denim/50">
                {activeAccordion === item.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {activeAccordion === item.id && (
              <div className="pb-6 text-sm font-light text-brand-denim/80 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
