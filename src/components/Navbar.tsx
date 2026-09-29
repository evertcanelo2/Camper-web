"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, subtotal } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isOpen) setIsOpen(false);
  };

  const smoothScrollTo = (targetPosition: number, duration: number = 2000) => {
    // Si ya hay una animación en curso, la cancelamos para evitar peleas entre loops (el bug del doble click)
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start: number | null = null;
    
    // Easing function (easeInOutCubic) para un arranque y frenado suaves
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };
    
    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, run);
      
      if (timeElapsed < duration) {
        animationFrameId.current = requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetPosition);
        animationFrameId.current = null;
      }
    };
    
    animationFrameId.current = requestAnimationFrame(animation);
  };

  // Force glass state when menus are open for readability
  const showGlass = scrolled || isOpen || isCartOpen;

  return (
    <>
      {/* Overlay oscuro semitransparente */}
      <div 
        className={`fixed inset-0 bg-black/40 transition-opacity duration-700 z-40 ${isOpen || isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => { setIsOpen(false); setIsCartOpen(false); }}
      />

      <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none ${
        showGlass ? 'px-4 md:px-6 pt-3' : 'px-6 md:px-10 pt-4'
      }`}>
        <nav 
          className={`pointer-events-auto text-white rounded-full px-5 md:px-8 w-full flex items-center justify-between relative transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            showGlass 
              ? 'max-w-4xl h-[52px] bg-black/30 shadow-[0_2px_24px_rgba(0,0,0,0.12)] border border-white/[0.08]' 
              : 'max-w-5xl h-14 bg-transparent shadow-none border border-transparent'
          }`}
          style={{
            backdropFilter: showGlass ? 'blur(24px) saturate(1.4)' : 'blur(0px)',
            WebkitBackdropFilter: showGlass ? 'blur(24px) saturate(1.4)' : 'blur(0px)',
          }}
        >
          
          {/* Mobile Menu */}
          <div className="md:hidden flex-1">
            <button 
              onClick={toggleMenu}
              className="text-white/90 hover:text-white transition-colors duration-300 outline-none p-2 -ml-2"
            >
              <Menu className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
          </div>

          {/* Desktop Links - Left */}
          <div className="hidden md:flex flex-1 gap-6 text-[11px] font-light tracking-[0.2em] text-white/80">
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                
                const target = document.getElementById('colecciones');
                if (!target) return;
                
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                smoothScrollTo(targetPosition);
              }}
              className="hover:text-white transition-colors duration-300 tracking-[0.2em] outline-none font-light"
            >
              COLECCIONES
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center px-6">
            <Link 
              href="/" 
              className="flex items-center justify-center cursor-pointer" 
              onClick={() => { 
                setIsOpen(false); 
                setIsCartOpen(false); 
              }}
            >
              <Image 
                src="/images/CamperLogoWhite.png" 
                alt="Camper Logo" 
                width={160} 
                height={60} 
                className={`object-contain translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  showGlass ? 'scale-[0.88]' : 'scale-100'
                }`}
              />
            </Link>
          </div>

          {/* Icons - Right */}
          <div className="flex-1 flex justify-end gap-5 items-center text-white/80">
            <button 
              onClick={toggleCart}
              className="hover:text-white transition-colors duration-300 relative outline-none p-2 -mr-2"
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.25} />
              <span className={`absolute top-0 right-0 text-white text-[9px] font-medium w-[15px] h-[15px] rounded-full flex items-center justify-center transition-all duration-500 ${
                showGlass 
                  ? 'bg-white/15 backdrop-blur-sm border border-white/10' 
                  : 'bg-white/20 border border-white/10'
              }`}>
                {cartItems.length}
              </span>
            </button>
          </div>

          {/* Mega Menu Desplegable (Colecciones) */}
          <div 
            className={`pointer-events-auto absolute top-full mt-2 left-0 w-full bg-neutral-900/95 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] border border-white/5 shadow-2xl ${isOpen ? 'max-h-[60vh] opacity-100' : 'max-h-0 opacity-0 border-transparent pointer-events-none'}`}
          >
            <div className="p-6 flex flex-col items-center">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  
                  const target = document.getElementById('colecciones');
                  if (!target) return;
                  
                  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                  smoothScrollTo(targetPosition);
                }}
                className={`text-white text-sm font-medium tracking-[0.2em] py-4 w-full text-center hover:text-brand-gold transition-all duration-700 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${isOpen ? 150 : 0}ms` }}
              >
                COLECCIONES
              </button>
            </div>
          </div>

          {/* Cart Dropdown (Mini Carrito) */}
          <div 
            className={`pointer-events-auto absolute top-full mt-2 right-0 w-80 sm:w-96 bg-neutral-900/95 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] border border-white/5 shadow-2xl origin-top-right ${isCartOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0 border-transparent pointer-events-none'}`}
          >
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-white font-medium text-sm border-b border-white/10 pb-4">Tu Carrito ({cartItems.length})</h3>
              
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[40vh] pr-2 custom-scrollbar">
                {cartItems.length === 0 ? (
                  <p className="text-white/50 text-sm font-light text-center py-8">Tu carrito está vacío</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`flex gap-4 items-center transform transition-all duration-700 ease-out ${isCartOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                      style={{ transitionDelay: `${isCartOpen ? index * 75 + 100 : 0}ms` }}
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-neutral-800 flex-shrink-0 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium">{item.name}</h4>
                        <p className="text-white/50 text-xs mt-1 font-light">Talla: {item.size} | Color: {item.color}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center bg-white/10 rounded-md">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 text-white/70 hover:text-white cursor-pointer touch-manipulation">-</button>
                            <span className="text-xs text-white px-1">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-white/70 hover:text-white cursor-pointer touch-manipulation">+</button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-white/30 hover:text-red-400 transition-colors cursor-pointer touch-manipulation">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <div className="text-brand-gold text-sm font-medium">
                        {item.price}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className={`mt-2 pt-4 border-t border-white/10 flex flex-col gap-4 transition-opacity duration-700 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${isCartOpen ? 300 : 0}ms` }}>
                  <div className="flex justify-between items-center text-sm font-medium text-white">
                    <span className="text-white/70">Subtotal</span>
                    <span className="text-brand-gold text-base">${subtotal.toFixed(2)} USD</span>
                  </div>
                  <a 
                    href={`https://wa.me/584145096447?text=${encodeURIComponent(`¡Hola! Quisiera comprar los siguientes artículos:\n\n${cartItems.map(i => `- ${i.quantity}x ${i.name} (${i.size}, ${i.color}) a ${i.price}`).join('\n')}\n\nSubtotal: $${subtotal.toFixed(2)} USD`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-white hover:bg-gray-200 text-black font-bold text-xs tracking-widest uppercase py-3 rounded-xl transition-colors cursor-pointer touch-manipulation"
                  >
                    Compra
                  </a>
                </div>
              )}
            </div>
          </div>

        </nav>
      </div>
    </>
  );
}
