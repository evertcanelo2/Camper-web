import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import { getProductBySlug, getCategoryByProductSlug } from '@/lib/collectionData';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    redirect('/catalogo');
  }

  // Categoría del producto: el botón "Volver" regresa a su sección del catálogo
  const category = getCategoryByProductSlug(slug);
  const backHref = category ? `/catalogo#${category.slug}` : '/catalogo';

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-8 md:pt-40 pb-20">
        
        <div className="flex justify-end items-center mb-8 text-xs md:text-sm text-brand-denim/70 font-light tracking-wide">
          <Link href={backHref} className="hover:text-brand-denim transition-colors flex items-center gap-1">
            Volver <ChevronRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Galería + detalles (Client Component, comparten el color elegido) */}
          <ProductDetail product={product} images={images} returnsPolicy={category?.returnsPolicy} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
