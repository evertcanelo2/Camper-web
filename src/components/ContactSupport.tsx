"use client";

import { useState } from 'react';
import { Mail, MessageCircle, X } from 'lucide-react';

export default function ContactSupport() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-5 h-5" />,
      url: 'https://wa.me/584145096447',
    },
    {
      name: 'Instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
      url: 'https://www.instagram.com/camper.ve?stkn=MWI0ZmpvNm9namZxNA%3D%3D',
    },
    {
      name: 'TikTok',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
        </svg>
      ),
      url: 'https://www.tiktok.com/@camper.ve',
    },
    {
      name: 'Correo',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:soporte@camper.com.ve',
    }
  ];

  return (
    <>
      <button 
        onClick={toggleModal}
        className="text-xs font-medium text-brand-gold hover:text-brand-camel transition-colors outline-none text-left flex items-center gap-1"
      >
        Contactar Soporte <span>→</span>
      </button>

      {/* Modal Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 transition-opacity duration-700 z-[90] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleModal}
      />

      {/* Floating Card with Navbar-like Glassmorphism */}
      <div 
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-[90%] max-w-sm pointer-events-auto bg-neutral-900/95 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] border border-white/5 shadow-2xl ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <div className="p-6 relative">
          <button 
            onClick={toggleModal}
            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors outline-none"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center mb-6 mt-2">
            <h3 className="text-white font-medium text-lg mb-2">Contáctanos</h3>
            <p className="text-white/60 text-sm font-light px-2">
              Estamos aquí para ayudarte. Elige por dónde prefieres comunicarte con nosotros.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {socialLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-500 ease-out group transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${isOpen ? index * 100 + 200 : 0}ms` }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
                  {link.icon}
                </div>
                <span className="text-white font-medium text-sm group-hover:text-brand-gold transition-colors duration-300">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
