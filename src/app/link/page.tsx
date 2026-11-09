'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

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
        animate={mounted ? 'show' : 'hidden'}
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
            <MessageCircle className="w-5 h-5 text-brand-gold" />
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
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
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
