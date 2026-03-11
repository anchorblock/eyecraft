"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type DeliveryZone = "inside-dhaka" | "outside-dhaka";
type PaymentMethod = "cod" | "bkash" | "nagad" | "card";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone>("inside-dhaka");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryCost = deliveryZone === "inside-dhaka" ? 70 : 120;
  const finalTotal = totalPrice + deliveryCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto px-6 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-heading font-bold mb-3">Order Placed!</h1>
            <p className="text-white/50 text-sm mb-2">
              Thank you for your order, {name}. We&apos;ll send a confirmation to your phone shortly.
            </p>
            <p className="text-white/40 text-xs mb-8">
              Order ID: #EC{Date.now().toString().slice(-6)}
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-accent text-primary font-semibold text-sm uppercase tracking-wider hover:bg-accent-light transition-colors"
            >
              Continue Shopping
            </Link>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">No items to checkout</h1>
            <Link href="/" className="text-accent hover:underline text-sm">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-5 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Link href="/cart" className="text-white/40 hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </Link>
              <h1 className="text-2xl md:text-3xl font-heading font-bold">
                Checkout
              </h1>
            </div>
            <p className="text-white/40 text-xs uppercase tracking-wider">
              Guest checkout — no account required
            </p>
          </motion.div>

          <form onSubmit={handlePlaceOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left: Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Contact Information */}
                <div className="bg-surface/50 border border-white/5 rounded-xl p-4 sm:p-6">
                  <h2 className="text-base font-semibold mb-5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center font-bold">1</span>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="bg-surface/50 border border-white/5 rounded-xl p-4 sm:p-6">
                  <h2 className="text-base font-semibold mb-5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center font-bold">2</span>
                    Delivery Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="House no., road, block, area"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                        City *
                      </label>
                      <select
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-accent/40 transition-colors appearance-none"
                      >
                        <option value="" className="bg-primary">Select city</option>
                        <option value="dhaka" className="bg-primary">Dhaka</option>
                        <option value="chittagong" className="bg-primary">Chittagong</option>
                        <option value="sylhet" className="bg-primary">Sylhet</option>
                        <option value="rajshahi" className="bg-primary">Rajshahi</option>
                        <option value="khulna" className="bg-primary">Khulna</option>
                        <option value="barishal" className="bg-primary">Barishal</option>
                        <option value="rangpur" className="bg-primary">Rangpur</option>
                        <option value="mymensingh" className="bg-primary">Mymensingh</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                        Area
                      </label>
                      <input
                        type="text"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="Gulshan, Dhanmondi, etc."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Delivery Zone */}
                  <div className="mt-5">
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-3">
                      Delivery Zone
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "inside-dhaka" as DeliveryZone, label: "Inside Dhaka", cost: "৳70" },
                        { id: "outside-dhaka" as DeliveryZone, label: "Outside Dhaka", cost: "৳120" },
                      ].map((zone) => (
                        <button
                          key={zone.id}
                          type="button"
                          onClick={() => setDeliveryZone(zone.id)}
                          className={`flex items-center justify-between px-3 sm:px-4 py-3 rounded-lg border transition-all text-left ${
                            deliveryZone === zone.id
                              ? "border-accent bg-accent/5"
                              : "border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                              deliveryZone === zone.id ? "border-accent" : "border-white/30"
                            }`}>
                              {deliveryZone === zone.id && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                            </div>
                            <span className="text-sm">{zone.label}</span>
                          </div>
                          <span className="text-xs text-white/50">{zone.cost}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Order Note */}
                  <div className="mt-5">
                    <label className="block text-xs text-white/50 uppercase tracking-wider mb-2">
                      Order Note (optional)
                    </label>
                    <textarea
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="Special instructions for delivery"
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-accent/40 transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-surface/50 border border-white/5 rounded-xl p-4 sm:p-6">
                  <h2 className="text-base font-semibold mb-5 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center font-bold">3</span>
                    Payment Method
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        id: "cod" as PaymentMethod,
                        label: "Cash on Delivery",
                        description: "Pay when you receive your order",
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                          </svg>
                        ),
                      },
                      {
                        id: "bkash" as PaymentMethod,
                        label: "bKash",
                        description: "Pay with your bKash mobile wallet",
                        icon: (
                          <span className="text-[#E2136E] font-bold text-sm">b</span>
                        ),
                      },
                      {
                        id: "nagad" as PaymentMethod,
                        label: "Nagad",
                        description: "Pay with your Nagad account",
                        icon: (
                          <span className="text-[#F6921E] font-bold text-sm">N</span>
                        ),
                      },
                      {
                        id: "card" as PaymentMethod,
                        label: "Credit / Debit Card",
                        description: "Visa, Mastercard, AMEX",
                        icon: (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                          </svg>
                        ),
                      },
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg border transition-all text-left ${
                          paymentMethod === method.id
                            ? "border-accent bg-accent/5"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          paymentMethod === method.id ? "border-accent" : "border-white/30"
                        }`}>
                          {paymentMethod === method.id && <div className="w-2 h-2 rounded-full bg-accent" />}
                        </div>
                        <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                          {method.icon}
                        </div>
                        <div>
                          <span className="text-sm font-medium block">{method.label}</span>
                          <span className="text-xs text-white/40">{method.description}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="sticky top-28 bg-surface/50 border border-white/5 rounded-xl p-4 sm:p-6 space-y-5">
                  <h2 className="text-base font-semibold">
                    Order Summary ({items.length} {items.length === 1 ? "item" : "items"})
                  </h2>

                  {/* Items */}
                  <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-hide">
                    {items.map((item) => {
                      const colorData = item.product.colors.find(
                        (c) => c.name === item.selectedColor
                      );
                      const itemPrice = item.product.price + item.selectedLens.priceAdd;
                      return (
                        <div
                          key={`${item.product.slug}-${item.selectedColor}-${item.selectedLens.id}`}
                          className="flex gap-3"
                        >
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-surface flex-shrink-0">
                            <Image
                              src={colorData?.images[0]?.url || item.product.colors[0].images[0].url}
                              alt={item.product.name}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full text-[9px] font-bold flex items-center justify-center text-primary">
                              {item.quantity}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate">{item.product.name}</p>
                            <p className="text-[10px] text-white/40 truncate">
                              {item.selectedColor} &middot; {item.selectedLens.label}
                            </p>
                            <p className="text-xs text-accent mt-0.5">
                              ৳{(itemPrice * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Totals */}
                  <div className="border-t border-white/10 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Subtotal</span>
                      <span>৳{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Delivery</span>
                      <span>৳{deliveryCost}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex justify-between items-baseline">
                    <span className="font-medium">Total</span>
                    <span className="text-2xl font-heading font-bold text-accent">
                      ৳{finalTotal.toLocaleString()}
                    </span>
                  </div>

                  {/* Place Order */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent text-primary font-semibold text-sm uppercase tracking-wider hover:bg-accent-light transition-colors"
                  >
                    Place Order
                  </button>

                  <p className="text-[10px] text-white/25 text-center leading-relaxed">
                    By placing this order, you agree to our Terms & Conditions and Privacy Policy.
                  </p>

                  {/* Trust signals */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-center gap-4 text-white/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <span className="text-[10px] uppercase tracking-wider">100% Secure Checkout</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
