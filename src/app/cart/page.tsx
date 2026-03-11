"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const shippingCost = totalPrice >= 3000 ? 0 : 120;
  const discount = promoApplied ? Math.round(totalPrice * 0.1) : 0;
  const finalTotal = totalPrice - discount + shippingCost;

  const handlePromoApply = () => {
    if (promoCode.toLowerCase() === "eyecraft10") {
      setPromoApplied(true);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I would like to place an order:\n\n${items
      .map(
        (item) =>
          `- ${item.product.brand} ${item.product.name} (${item.selectedColor}, ${item.selectedLens.label}) x${item.quantity} = ৳${((item.product.price + item.selectedLens.priceAdd) * item.quantity).toLocaleString()}`
      )
      .join("\n")}\n\nTotal: ৳${finalTotal.toLocaleString()}`
  );

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold">
              Shopping <span className="text-gradient">Cart</span>
            </h1>
            <p className="text-white/40 text-sm mt-2">
              {items.length} {items.length === 1 ? "item" : "items"} in your cart
            </p>
          </motion.div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <svg className="w-20 h-20 text-white/10 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <h2 className="text-xl font-heading font-bold mb-3">Your cart is empty</h2>
              <p className="text-white/40 text-sm mb-6">Discover our collection of handcrafted eyewear.</p>
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-accent text-primary font-semibold text-sm uppercase tracking-wider hover:bg-accent-light transition-colors"
              >
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Cart Items */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 space-y-6"
              >
                {items.map((item, index) => {
                  const colorData = item.product.colors.find(
                    (c) => c.name === item.selectedColor
                  );
                  const itemPrice = item.product.price + item.selectedLens.priceAdd;

                  return (
                    <div
                      key={`${item.product.slug}-${item.selectedColor}-${item.selectedLens.id}`}
                      className="flex gap-3 sm:gap-5 p-3 sm:p-5 bg-surface/50 border border-white/5 rounded-xl"
                    >
                      {/* Image */}
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-lg overflow-hidden bg-surface flex-shrink-0"
                      >
                        <Image
                          src={colorData?.images[0]?.url || item.product.colors[0].images[0].url}
                          alt={item.product.name}
                          fill
                          className="object-cover hover:scale-105 transition-transform"
                          sizes="144px"
                        />
                      </Link>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs text-accent tracking-wider uppercase mb-1">
                              {item.product.brand}
                            </p>
                            <Link
                              href={`/product/${item.product.slug}`}
                              className="text-base font-medium hover:text-accent transition-colors"
                            >
                              {item.product.name}
                            </Link>
                          </div>
                          <button
                            onClick={() => removeItem(index)}
                            className="text-white/30 hover:text-red-400 transition-colors flex-shrink-0"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-white/40">
                          <span>Color: {item.selectedColor}</span>
                          <span>Size: {item.selectedSize}</span>
                        </div>
                        <p className="text-xs text-white/40 mt-1">
                          Lens: {item.selectedLens.label}
                        </p>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-white/10 rounded">
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm"
                            >
                              -
                            </button>
                            <span className="w-6 sm:w-8 text-center text-xs sm:text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors text-sm"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-accent font-semibold text-base sm:text-lg whitespace-nowrap">
                            ৳{(itemPrice * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <button
                  onClick={clearCart}
                  className="text-xs text-white/30 hover:text-red-400 transition-colors uppercase tracking-wider"
                >
                  Clear Cart
                </button>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="sticky top-28 bg-surface/50 border border-white/5 rounded-xl p-4 sm:p-6 space-y-5">
                  <h2 className="text-lg font-heading font-bold">Order Summary</h2>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Subtotal</span>
                      <span>৳{totalPrice.toLocaleString()}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-400">
                        <span>Discount (10%)</span>
                        <span>-৳{discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-white/50">Shipping</span>
                      <span>
                        {shippingCost === 0 ? (
                          <span className="text-emerald-400">Free</span>
                        ) : (
                          `৳${shippingCost}`
                        )}
                      </span>
                    </div>
                    {shippingCost > 0 && (
                      <p className="text-xs text-white/30">
                        Free shipping on orders above ৳3,000
                      </p>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-4 flex justify-between items-baseline">
                    <span className="font-medium">Total</span>
                    <span className="text-xl sm:text-2xl font-heading font-bold text-accent">
                      ৳{finalTotal.toLocaleString()}
                    </span>
                  </div>

                  {/* Promo Code */}
                  <div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 min-w-0 px-3 py-2.5 bg-white/5 border border-white/10 rounded text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/40"
                      />
                      <button
                        onClick={handlePromoApply}
                        className="px-3 sm:px-4 py-2.5 text-xs uppercase tracking-wider border border-accent/30 text-accent hover:bg-accent/10 transition-colors rounded flex-shrink-0"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-xs text-emerald-400 mt-2">
                        Promo code applied! 10% discount
                      </p>
                    )}
                    <p className="text-xs text-white/20 mt-1">
                      Try: EYECRAFT10
                    </p>
                  </div>

                  {/* Checkout */}
                  <Link
                    href="/checkout"
                    className="block w-full py-4 bg-accent text-primary font-semibold text-sm uppercase tracking-wider hover:bg-accent-light transition-colors text-center"
                  >
                    Proceed to Checkout
                  </Link>

                  <a
                    href={`https://wa.me/8801872777452?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#20BD5A] transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    Order on WhatsApp
                  </a>

                  {/* Trust signals */}
                  <div className="pt-4 border-t border-white/5 space-y-3">
                    {[
                      { icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", text: "100% Authentic Products" },
                      { icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99", text: "14-Day Easy Returns" },
                      { icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-2.25h7.5m-7.5 2.25v-2.25m0 0h-7.5m7.5 0v2.25M3.375 7.5h17.25c.621 0 1.125.504 1.125 1.125v3.375", text: "Free Delivery over ৳3,000" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-accent/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                        <span className="text-xs text-white/40">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
