"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const collections = [
  {
    title: "Urban Minimalist",
    desc: "Clean lines for the modern professional",
    tag: "NEW",
    image: "https://images.unsplash.com/photo-1761957352666-2b4aa99cc1eb?w=800&q=80&fit=crop",
  },
  {
    title: "Heritage Classic",
    desc: "Timeless designs that never go out of style",
    tag: "POPULAR",
    image: "https://images.unsplash.com/photo-1761726080804-11212181d9f5?w=800&q=80&fit=crop",
  },
  {
    title: "Sport Performance",
    desc: "Lightweight frames built for active lifestyles",
    tag: "TRENDING",
    image: "https://images.unsplash.com/photo-1552434220-a95c95de26f1?w=800&q=80&fit=crop",
  },
  {
    title: "Luxury Edition",
    desc: "Premium materials with exquisite detailing",
    tag: "EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1643110279326-6ff17149856a?w=800&q=80&fit=crop",
  },
];

export default function FeaturedCollection() {
  return (
    <section id="collections" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase">
              Curated For You
            </p>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Trending <span className="text-gradient">Collections</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {collections.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative rounded-xl overflow-hidden min-h-[320px] md:min-h-[380px] cursor-default"
            >
              {/* Background Image */}
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end relative z-10">
                <span className="inline-block w-fit px-3 py-1 text-[10px] font-bold tracking-widest bg-accent/20 text-accent backdrop-blur-sm border border-accent/20 mb-4">
                  {col.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {col.title}
                </h3>
                <p className="text-white/50 text-sm mb-4">{col.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm text-accent/70 group-hover:text-accent transition-colors w-fit">
                  View Collection
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
