"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { CartItem, Product, LensOption } from "./types";

interface CartContextType {
  items: CartItem[];
  isDrawerOpen: boolean;
  addItem: (product: Product, color: string, size: string, lens: LensOption) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addItem = useCallback(
    (product: Product, color: string, size: string, lens: LensOption) => {
      setItems((prev) => {
        const existing = prev.findIndex(
          (item) =>
            item.product.slug === product.slug &&
            item.selectedColor === color &&
            item.selectedSize === size &&
            item.selectedLens.id === lens.id
        );
        if (existing >= 0) {
          const updated = [...prev];
          updated[existing] = {
            ...updated[existing],
            quantity: updated[existing].quantity + 1,
          };
          return updated;
        }
        return [...prev, { product, selectedColor: color, selectedSize: size, selectedLens: lens, quantity: 1 }];
      });
      setIsDrawerOpen(true);
    },
    []
  );

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const updateQuantity = useCallback((index: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((_, i) => i !== index));
      return;
    }
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], quantity };
      return updated;
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + (item.product.price + item.selectedLens.priceAdd) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isDrawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openDrawer,
        closeDrawer,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
