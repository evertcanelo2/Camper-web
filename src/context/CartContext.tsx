'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string; // unique ID for cart entry, e.g. `${product.id}-${color}-${size}`
  productId: number;
  name: string;
  price: string; // formatted string
  numericPrice: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Hydrate cart from localStorage on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    try {
      const savedCart = localStorage.getItem('camper_cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.warn('Failed to access localStorage for cart hydration', e);
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('camper_cart', JSON.stringify(cartItems));
      } catch (e) {
        console.warn('Failed to save to localStorage', e);
      }
    }
  }, [cartItems, isMounted]);

  const addToCart = (newItem: Omit<CartItem, 'id'>) => {
    const id = `${newItem.productId}-${newItem.color}-${newItem.size}`;
    
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === id);
      if (existingItem) {
        return prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, { ...newItem, id }];
    });
    
    // Auto-open cart when item added
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + item.numericPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
