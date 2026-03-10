"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const categories = [
  {
    name: "Eyeglasses",
    slug: "eyeglasses",
    description: "Precision-crafted frames for everyday clarity",
    image:
      "https://images.unsplash.com/photo-1741031874640-578deef86df3?w=1400&q=80&fit=crop",
    count: "200+ styles",
    tags: [
      { label: "Kids", slug: "kids" },
      { label: "Male", slug: "male" },
      { label: "Female", slug: "female" },
      { label: "Unisex", slug: "unisex" },
    ],
    align: "left" as const,
  },
  {
    name: "Sunglasses",
    slug: "sunglasses",
    description: "Shield your eyes in style with UV protection",
    image:
      "https://images.unsplash.com/photo-1582584658349-4a39bbe5acfe?w=1400&q=80&fit=crop",
    count: "150+ styles",
    tags: [
      { label: "Kids", slug: "kids" },
      { label: "Male", slug: "male" },
      { label: "Female", slug: "female" },
      { label: "Unisex", slug: "unisex" },
    ],
    align: "right" as const,
  },
  {
    name: "Sport Eyewear",
    slug: "sport-eyewear",
    description: "High-performance frames for active lifestyles",
    image:
      "https://images.unsplash.com/photo-1513908512605-c58d3f08079f?w=1400&q=80&fit=crop",
    count: "90+ styles",
    tags: [
      { label: "Biking", slug: "biking" },
      { label: "Mountaineering", slug: "mountaineering" },
      { label: "Swimming", slug: "swimming" },
    ],
    align: "left" as const,
  },
];

const frameShapes = [
  {
    name: "Square",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="12" width="32" height="24" rx="4" />
      </svg>
    ),
  },
  {
    name: "Aviator",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 16c0-2 2-4 4-4h28c2 0 4 2 4 4v4c0 10-8 16-18 16S6 30 6 20v-4Z" />
        <line x1="24" y1="12" x2="24" y2="16" />
      </svg>
    ),
  },
  {
    name: "Round",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="14" />
      </svg>
    ),
  },
  {
    name: "Cat-Eye",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 20c0-6 4-10 10-10h16c6 0 10 4 10 10v4c0 8-6 14-18 14S6 32 6 24v-4Z" />
        <path d="M6 14l4 2M42 14l-4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Clubmaster",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 18h36v2c0 8-6 14-18 14S6 28 6 20v-2Z" />
        <path d="M6 18c0-4 4-6 8-6h20c4 0 8 2 8 6" strokeWidth="3" />
      </svg>
    ),
  },
  {
    name: "Wayfarer",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 14c0-2 2-4 4-4h28c2 0 4 2 4 4v12c0 6-4 10-10 10H16c-6 0-10-4-10-10V14Z" />
      </svg>
    ),
  },
];

function CategoryCard({
  cat,
  index,
}: {
  cat: (typeof categories)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const isRight = cat.align === "right";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative w-full h-[55vh] min-h-[400px] max-h-[600px] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="object-cover scale-110 transition-transform duration-1000 group-hover:scale-[1.15]"
          sizes="100vw"
          priority={index === 0}
        />
      </motion.div>

      {/* Base overlay for consistent readability */}
      <div className="absolute inset-0 bg-black/35" />
      {/* Gradient Overlay — direction matches text alignment */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isRight
            ? "bg-gradient-to-l from-black/70 via-black/40 to-transparent group-hover:from-black/80"
            : "bg-gradient-to-r from-black/70 via-black/40 to-transparent group-hover:from-black/80"
        }`}
      />

      {/* Content — positioned left or right */}
      <div
        className={`absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 ${
          isRight ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isRight ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
          className="max-w-lg"
        >
          {/* Count Badge */}
          <span className="inline-block px-3 py-1 mb-4 text-[11px] tracking-[0.2em] uppercase bg-accent/15 border border-accent/25 rounded-full text-accent">
            {cat.count}
          </span>

          {/* Title */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 group-hover:text-accent transition-colors duration-500">
            {cat.name}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6 max-w-md">
            {cat.description}
          </p>

          {/* Subcategory Tags */}
          <div
            className={`flex flex-wrap gap-2.5 ${
              isRight ? "justify-end" : "justify-start"
            }`}
          >
            {cat.tags.map((tag, i) => (
              <motion.div
                key={tag.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              >
                <Link
                  href={`/products/${cat.slug}/${tag.slug}`}
                  className="px-4 py-2 text-xs tracking-wider uppercase bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-white/80 hover:bg-accent/20 hover:border-accent/40 hover:text-accent transition-all duration-300 inline-block"
                >
                  {tag.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Explore Arrow */}
          <motion.div
            className={`mt-6 flex items-center gap-2 text-white/40 group-hover:text-accent transition-all duration-500 ${
              isRight ? "justify-end" : "justify-start"
            }`}
          >
            <span className="text-sm tracking-wider uppercase">Explore</span>
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section id="categories" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.04),transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
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

        {/* Full-Width Stacked Category Cards */}
        <div className="flex flex-col gap-8">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>

        {/* Browse by Frame Shape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-[1px] bg-accent/40" />
            <p className="text-accent/70 text-xs tracking-[0.3em] uppercase">
              Browse by Frame Shape
            </p>
            <div className="w-8 h-[1px] bg-accent/40" />
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide justify-start md:justify-center">
            {frameShapes.map((shape, i) => (
              <motion.button
                key={shape.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                className="group flex flex-col items-center gap-3 min-w-[100px] snap-start cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-white/40 group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                  {shape.icon}
                </div>
                <span className="text-xs text-white/50 group-hover:text-accent tracking-wider uppercase transition-colors duration-300">
                  {shape.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
