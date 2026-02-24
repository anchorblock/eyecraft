"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    name: "Eyeglasses",
    description: "Precision-crafted frames for everyday clarity",
    image: "https://images.unsplash.com/photo-1686165862816-ed104011f9a9?w=500&q=80&fit=crop",
    count: "200+ styles",
  },
  {
    name: "Sunglasses",
    description: "Shield your eyes in style with UV protection",
    image: "https://images.unsplash.com/photo-1762331207337-42c09537103d?w=500&q=80&fit=crop",
    count: "150+ styles",
  },
  {
    name: "Sport Eyewear",
    description: "High-performance frames for active lifestyles",
    image: "https://images.unsplash.com/photo-1615161623825-2041f8436482?w=500&q=80&fit=crop",
    count: "90+ styles",
  },
  {
    name: "Computer Glasses",
    description: "Blue-light blocking for the digital age",
    image: "https://images.unsplash.com/photo-1755719401557-80ab7db3d278?w=500&q=80&fit=crop",
    count: "80+ styles",
  },
  {
    name: "Kids Eyewear",
    description: "Fun, durable frames for little adventurers",
    image: "https://images.unsplash.com/photo-1674835257299-d94aeecde62f?w=500&q=80&fit=crop",
    count: "60+ styles",
  },
  {
    name: "Accessories",
    description: "Cases, chains, and cleaning kits",
    image: "https://images.unsplash.com/photo-1768297087306-491d4d84ede1?w=500&q=80&fit=crop",
    count: "40+ items",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.04),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase">
              Browse By Category
            </p>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Find Your <span className="text-gradient">Perfect Pair</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl overflow-hidden cursor-default h-[280px]"
            >
              {/* Background Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end relative z-10">
                <span className="text-accent/70 text-[11px] tracking-[0.2em] uppercase mb-1">
                  {cat.count}
                </span>
                <h3 className="text-2xl font-heading font-bold mb-1 group-hover:text-accent transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
