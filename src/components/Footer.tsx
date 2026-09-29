import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-brand-mocha py-12 px-4 md:py-24 md:px-6 border-t border-brand-nylon/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <div>
            <div className="mb-6 -ml-3">
              <Image
                src="/images/CamperLogoWhite.png"
                alt="Camper Logo"
                width={140}
                height={52}
                className="object-contain brightness-0 opacity-80"
              />
            </div>
            <p className="text-sm font-normal text-brand-mocha/80 max-w-sm leading-relaxed">
              Redefinimos la elegancia a través del minimalismo. Prendas esenciales diseñadas para la máxima expresión de sofisticación.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold tracking-widest text-xs uppercase mb-6 text-brand-gold">Atención</h3>
          <ul className="space-y-4 text-sm font-normal text-brand-mocha/90">
            <li><Link href="/legal/terminos#contacto" className="hover:text-brand-gold transition-colors">Contacto</Link></li>
            <li><Link href="/legal/terminos#envios" className="hover:text-brand-gold transition-colors">Envíos</Link></li>
            <li><Link href="/legal/terminos#devoluciones" className="hover:text-brand-gold transition-colors">Devoluciones</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold tracking-widest text-xs uppercase mb-6 text-brand-gold">Legal</h3>
          <ul className="space-y-4 text-sm font-normal text-brand-mocha/90">
            <li><Link href="/legal/terminos" className="hover:text-brand-gold transition-colors">Términos y Condiciones</Link></li>
            <li><Link href="/legal/privacidad" className="hover:text-brand-gold transition-colors">Política de Privacidad</Link></li>
            <li><Link href="/legal/cookies" className="hover:text-brand-gold transition-colors">Política de Cookies</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 md:mt-24 md:pt-8 border-t border-brand-mocha/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-normal text-brand-mocha/70">
        <p>© {new Date().getFullYear()} Camper VE. Todos los derechos reservados.</p>

        {/* Redes Sociales (Placeholder) */}
        <div className="flex gap-6">
          <a href="https://www.instagram.com/camper.ve?stkn=MWI0ZmpvNm9namZxNA==" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-brand-gold transition-colors">TikTok</a>
          <a href="#" className="hover:text-brand-gold transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
