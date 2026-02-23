"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const models = [
  {
    image: "https://images.unsplash.com/photo-1737852757337-7657639bbc78?w=600&q=80&fit=crop",
    name: "Aurelius Collection",
    subtitle: "Gold wire frames",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1752486268240-0507bb1ebc7e?w=600&q=80&fit=crop",
    name: "Crystal Series",
    subtitle: "Transparent frames",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1755519024831-6833a37098ad?w=600&q=80&fit=crop",
    name: "Noir Cat Eye",
    subtitle: "Dramatic silhouettes",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1552358155-515e264cb8b8?w=600&q=80&fit=crop",
    name: "Urban Classic",
    subtitle: "Men's essentials",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1750390200298-3d5f30f670a1?w=600&q=80&fit=crop",
    name: "Safari Leopard",
    subtitle: "Bold patterns",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1760433403526-47f671997ca1?w=600&q=80&fit=crop",
    name: "Titanium Edge",
    subtitle: "Lightweight precision",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1597606475458-0c7c8c10e777?w=600&q=80&fit=crop",
    name: "Retro Round",
    subtitle: "Vintage inspired",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1750390200293-92d5a788d3a2?w=600&q=80&fit=crop",
    name: "Minimal Square",
    subtitle: "Clean aesthetics",
    tall: false,
  },
];

export default function ModelGallery() {
  return (
    <section id="lookbook" className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,110,0.06),transparent_50%)]" />

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
              The Lookbook
            </p>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Worn by <span className="text-gradient">Real People</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
            See how our eyewear transforms everyday looks. Real customers and models
            showcasing the EyeCraft difference.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-default"
            >
              <div className={`relative ${model.tall ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image
                  src={model.image}
                  alt={`Model wearing ${model.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Info on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[10px] text-accent tracking-[0.2em] uppercase mb-1">
                    {model.subtitle}
                  </p>
                  <h3 className="text-lg font-heading font-semibold">
                    {model.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
