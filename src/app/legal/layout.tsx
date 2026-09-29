import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSupport from '@/components/ContactSupport';

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Usamos el Navbar existente con un fondo sólido oscuro para que contraste bien el texto en blanco */}
      <div className="bg-brand-denim h-[80px]">
        <Navbar />
      </div>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <h2 className="text-xl font-medium text-brand-denim mb-6">Políticas Legales</h2>
            <nav className="flex flex-col gap-4">
              <Link href="/legal/terminos" className="text-sm font-light text-brand-mocha/70 hover:text-brand-gold hover:translate-x-2 transition-transform">
                Términos y Condiciones
              </Link>
              <Link href="/legal/privacidad" className="text-sm font-light text-brand-mocha/70 hover:text-brand-gold hover:translate-x-2 transition-transform">
                Política de Privacidad
              </Link>
              <Link href="/legal/cookies" className="text-sm font-light text-brand-mocha/70 hover:text-brand-gold hover:translate-x-2 transition-transform">
                Política de Cookies
              </Link>
            </nav>
            
            <div className="mt-12 p-6 bg-brand-nylon/10 rounded-2xl">
              <h3 className="text-sm font-medium text-brand-denim mb-3">¿Tienes alguna duda?</h3>
              <p className="text-xs font-light text-brand-mocha/70 mb-4">
                Nuestro equipo de atención al cliente está disponible para ayudarte.
              </p>
              <ContactSupport />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl prose prose-brand-mocha">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
