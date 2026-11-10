'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const WA_HREF = `https://wa.me/584145096447?text=${encodeURIComponent(
  'Holaaa bienvenido a camper 💙🤎\n\nIndícanos los siguientes datos para guardar tu número y así mantenerte informad@ 🙌🏻\n\n📎Nombre y apellido: \n📍¿En qué estado te encuentras?: \n\n¿como podemos ayudarte?'
)}`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function LinkPage() {
  return (
    <main className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-brand-denim">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HeroForPhone.webp"
          alt=""
          fill
          className="object-cover object-[center_top] md:hidden"
          priority
        />
        <Image
          src="/images/HeroForDesk.webp"
          alt=""
          fill
          className="hidden md:block object-cover object-[center_top] md:object-center"
          priority
        />
        {/* Gradient overlay — heavier at bottom so buttons stay legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-denim/65 via-brand-denim/60 to-brand-denim/85" />
      </div>

      {/* Card */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-[360px] px-5 py-14"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Logo */}
        <motion.div variants={item} className="mb-1">
          <Image
            src="/images/CamperLogoWhite.webp"
            alt="Camper VE"
            width={130}
            height={48}
            className="object-contain brightness-0 invert drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-brand-nylon/70 text-[10px] font-light tracking-[0.3em] uppercase mb-10"
        >
          Crea tu propio estilo
        </motion.p>

        {/* WhatsApp */}
        <motion.a
          variants={item}
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/[0.17] backdrop-blur-md border border-white/15 hover:border-brand-gold/50 text-white rounded-2xl px-5 py-4 mb-3 transition-all duration-300 group"
        >
          <span className="w-10 h-10 rounded-xl bg-brand-gold/20 group-hover:bg-brand-gold/30 flex items-center justify-center transition-colors shrink-0">
            {/* Logo de WhatsApp */}
            <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
          <span className="flex flex-col text-left min-w-0">
            <span className="font-medium text-sm leading-tight">Escribirnos por WhatsApp</span>
            <span className="text-white/45 text-xs mt-0.5 font-light">Pedidos · Tallas · Envíos</span>
          </span>
          <span className="ml-auto text-white/25 group-hover:text-brand-gold/70 transition-colors text-lg leading-none shrink-0">→</span>
        </motion.a>

        {/* Catálogo */}
        <motion.div variants={item} className="w-full mb-3">
          <Link
            href="/catalogo"
            className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/[0.17] backdrop-blur-md border border-white/15 hover:border-brand-gold/50 text-white rounded-2xl px-5 py-4 transition-all duration-300 group"
          >
            <span className="w-10 h-10 rounded-xl bg-brand-gold/20 group-hover:bg-brand-gold/30 flex items-center justify-center transition-colors shrink-0">
              <ShoppingBag className="w-5 h-5 text-brand-gold" />
            </span>
            <span className="flex flex-col text-left min-w-0">
              <span className="font-medium text-sm leading-tight">Ver Catálogo</span>
              <span className="text-white/45 text-xs mt-0.5 font-light">Franelas · Gorras · Accesorios</span>
            </span>
            <span className="ml-auto text-white/25 group-hover:text-brand-gold/70 transition-colors text-lg leading-none shrink-0">→</span>
          </Link>
        </motion.div>

        {/* Instagram */}
        <motion.a
          variants={item}
          href="https://www.instagram.com/camper.ve"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-4 bg-white/10 hover:bg-white/[0.17] backdrop-blur-md border border-white/15 hover:border-brand-gold/50 text-white rounded-2xl px-5 py-4 mb-12 transition-all duration-300 group"
        >
          <span className="w-10 h-10 rounded-xl bg-brand-gold/20 group-hover:bg-brand-gold/30 flex items-center justify-center transition-colors shrink-0">
            <svg className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span className="flex flex-col text-left min-w-0">
            <span className="font-medium text-sm leading-tight">@camper.ve</span>
            <span className="text-white/45 text-xs mt-0.5 font-light">Síguenos en Instagram</span>
          </span>
          <span className="ml-auto text-white/25 group-hover:text-brand-gold/70 transition-colors text-lg leading-none shrink-0">→</span>
        </motion.a>

        {/* Copyright */}
        <motion.p variants={item} className="text-white/20 text-[10px] font-light tracking-widest uppercase">
          camper.ve © {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </main>
  );
}
