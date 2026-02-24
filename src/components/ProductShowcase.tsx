"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Aurelius Gold Wire",
    price: "৳4,500",
    originalPrice: "৳5,500",
    image: "https://images.unsplash.com/photo-1760337871482-9dd93e75fa88?w=600&q=80&fit=crop",
    tag: "Best Seller",
    category: "Eyeglasses",
  },
  {
    name: "Noir Square Frame",
    price: "৳3,800",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1760446032732-c042b0d43580?w=600&q=80&fit=crop",
    tag: "New",
    category: "Sunglasses",
  },
  {
    name: "Heritage Tortoise",
    price: "৳5,200",
    originalPrice: "৳6,000",
    image: "https://images.unsplash.com/photo-1722569354346-c2fc2e360808?w=600&q=80&fit=crop",
    tag: null,
    category: "Eyeglasses",
  },
  {
    name: "Crystal Clear Rimless",
    price: "৳4,000",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1686165863154-b8f9d69add82?w=600&q=80&fit=crop",
    tag: "Popular",
    category: "Eyeglasses",
  },
  {
    name: "Velvet Black Acetate",
    price: "৳3,500",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1686165862772-44e52b7a78bf?w=600&q=80&fit=crop",
    tag: null,
    category: "Eyeglasses",
  },
  {
    name: "Gold Luxe Aviator",
    price: "৳6,500",
    originalPrice: "৳8,000",
    image: "https://images.unsplash.com/photo-1758552322632-ba288778c770?w=600&q=80&fit=crop",
    tag: "Premium",
    category: "Sunglasses",
  },
  {
    name: "Minimal Wire Round",
    price: "৳3,200",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1686165863059-6531a1d16e17?w=600&q=80&fit=crop",
    tag: null,
    category: "Eyeglasses",
  },
  {
    name: "Retro Clubmaster",
    price: "৳4,800",
    originalPrice: "৳5,500",
    image: "https://images.unsplash.com/photo-1674835255169-8f4a0a514af7?w=600&q=80&fit=crop",
    tag: "Trending",
    category: "Eyeglasses",
  },
  {
    name: "Aero Sport Shield",
    price: "৳5,800",
    originalPrice: "৳7,000",
    image: "https://images.unsplash.com/photo-1605050824920-0c7f4e04d111?w=600&q=80&fit=crop",
    tag: "Sport",
    category: "Sport Eyewear",
  },
  {
    name: "Trail Runner Pro",
    price: "৳4,200",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1605050824853-7fb0755face3?w=600&q=80&fit=crop",
    tag: "New",
    category: "Sport Eyewear",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,110,0.04),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <p className="text-accent text-xs tracking-[0.3em] uppercase">
                Our Products
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Shop <span className="text-gradient">Eyewear</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed">
            Each frame is handcrafted with premium materials — acetate, titanium, and stainless steel — designed to last and look timeless.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag */}
                {product.tag && (
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm ${
                      product.tag === "Sport"
                        ? "bg-emerald-500 text-white"
                        : "bg-accent text-primary"
                    }`}>
                      {product.tag}
                    </span>
                  </div>
                )}

                {/* Quick view icon on hover */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <p className="text-[11px] text-white/30 tracking-[0.2em] uppercase mb-1">
                  {product.category}
                </p>
                <h3 className="text-base font-medium mb-2 group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-semibold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-white/30 text-sm line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
