'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (product: Product, quantity = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.productId === product.id);

        if (existingItem) {
          const updatedItems = currentItems.map(item =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          set({ 
            items: updatedItems,
            total: calculateTotal(updatedItems)
          });
        } else {
          const newItems = [...currentItems, { productId: product.id, quantity, product }];
          set({ 
            items: newItems,
            total: calculateTotal(newItems)
          });
        }
      },
      removeItem: (productId: string) => {
        const newItems = get().items.filter(item => item.productId !== productId);
        set({ 
          items: newItems,
          total: calculateTotal(newItems)
        });
      },
      updateQuantity: (productId: string, quantity: number) => {
        const newItems = get().items.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        );
        set({ 
          items: newItems,
          total: calculateTotal(newItems)
        });
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
};