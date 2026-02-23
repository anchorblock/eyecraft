"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1583331553158-ce47b79a5ade?w=1920&q=80&fit=crop"
          alt="Person wearing stylish sunglasses"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Limited Edition
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
            Summer 2026
            <br />
            <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-white/50 text-lg mb-8 leading-relaxed">
            Bold frames. Bolder statements. Our latest drop features premium
            acetate and titanium designs crafted for the season.
          </p>
          <div className="flex items-center gap-6">
            <span className="px-8 py-4 bg-accent text-primary font-semibold tracking-wider text-sm uppercase cursor-default">
              Explore Now
            </span>
            <span className="text-white/40 text-sm">
              Starting from <span className="text-accent font-semibold">৳2,500</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
