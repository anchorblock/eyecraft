"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-primary border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-lg font-heading font-bold">
                Shopping Cart ({items.length})
              </h2>
              <button
                onClick={closeDrawer}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg className="w-16 h-16 text-white/20 mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <p className="text-white/40 text-sm mb-4">Your cart is empty</p>
                  <button
                    onClick={closeDrawer}
                    className="text-accent text-sm hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item, index) => {
                  const colorData = item.product.colors.find(
                    (c) => c.name === item.selectedColor
                  );
                  const itemPrice = item.product.price + item.selectedLens.priceAdd;
                  return (
                    <div
                      key={`${item.product.slug}-${item.selectedColor}-${item.selectedLens.id}`}
                      className="flex gap-4 pb-6 border-b border-white/5"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-surface flex-shrink-0">
                        <Image
                          src={colorData?.images[0]?.url || item.product.colors[0].images[0].url}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium truncate">
                          {item.product.brand} {item.product.name}
                        </h3>
                        <p className="text-xs text-white/40 mt-0.5">
                          {item.selectedColor} &middot; {item.selectedSize}
                        </p>
                        <p className="text-xs text-white/40">
                          {item.selectedLens.label}
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity */}
                          <div className="flex items-center gap-2 border border-white/10 rounded">
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                            >
                              -
                            </button>
                            <span className="text-xs w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                            >
                              +
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-accent text-sm font-semibold">
                              ৳{(itemPrice * item.quantity).toLocaleString()}
                            </span>
                            <button
                              onClick={() => removeItem(index)}
                              className="text-white/30 hover:text-red-400 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Subtotal</span>
                  <span className="text-lg font-heading font-bold text-accent">
                    ৳{totalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-white/30">
                  Shipping & taxes calculated at checkout
                </p>
                <Link
                  href="/cart"
                  onClick={closeDrawer}
                  className="block w-full py-3.5 bg-accent text-primary font-semibold text-sm uppercase tracking-wider text-center hover:bg-accent-light transition-colors"
                >
                  View Full Cart
                </Link>
                <button
                  onClick={closeDrawer}
                  className="block w-full py-3 border border-white/15 text-sm uppercase tracking-wider text-white/60 hover:text-accent hover:border-accent/40 transition-all text-center"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
