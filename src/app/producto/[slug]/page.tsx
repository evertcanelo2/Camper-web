import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import ProductInteractions from '@/components/ProductInteractions';
import { getProductBySlug } from '@/lib/collectionData';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    redirect('/catalogo');
  }

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-8 md:pt-40 pb-20">
        
        <div className="flex justify-end items-center mb-8 text-xs md:text-sm text-brand-denim/70 font-light tracking-wide">
          <Link href="/catalogo" className="hover:text-brand-denim transition-colors flex items-center gap-1">
            Volver <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Image Gallery (Client Component) */}
          <ImageGallery images={images} productName={product.name} />

          {/* Right Column: Product Details */}
          <div className="lg:col-span-5 flex flex-col pt-2 md:pt-6">
            
            <h1 className="text-3xl md:text-5xl font-bold italic tracking-tight text-brand-denim mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
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

            {/* All interactive elements (Client Component) */}
            <ProductInteractions product={product} />

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
