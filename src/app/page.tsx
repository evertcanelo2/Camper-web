import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Skiper30 from '@/components/Skiper30';
import CollectionBentoGrid from '@/components/CollectionBentoGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Skiper30 Parallax Gallery */}
      <Skiper30 />

      {/* Collection Section */}
      <section id="colecciones" className="relative z-10 bg-brand-nylon pt-16 pb-12 px-4 md:pt-32 md:pb-24 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <CollectionBentoGrid />
        </div>
      </section>

      {/* Modern Minimalist Footer */}
      <Footer />
    </main>
  );
}

