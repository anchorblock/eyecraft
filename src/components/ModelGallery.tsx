"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const models = [
  {
    image: "https://images.unsplash.com/photo-1752486268300-1bb7d6d9867d?w=600&q=80&fit=crop",
    name: "Retro Square",
    subtitle: "Bold oversized frames",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1752486268262-6ce6b339a8de?w=600&q=80&fit=crop",
    name: "Blue Square Frame",
    subtitle: "Smart everyday wear",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1755519024827-fd05075a7200?w=600&q=80&fit=crop",
    name: "Classic Rectangle",
    subtitle: "Sharp & refined",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1552358155-515e264cb8b8?w=600&q=80&fit=crop",
    name: "Urban Classic",
    subtitle: "Men's essentials",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1609360071320-e33f1ceae03a?w=600&q=80&fit=crop",
    name: "Noir Round",
    subtitle: "Vintage sophistication",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1630827223910-8ccfd64aca23?w=600&q=80&fit=crop",
    name: "Junior Cool",
    subtitle: "Kids collection",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1760630662720-992b32425b85?w=600&q=80&fit=crop",
    name: "Sport Aero",
    subtitle: "Performance cycling",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1617726340820-3f8419e3e384?w=600&q=80&fit=crop",
    name: "Gold Wire",
    subtitle: "Minimalist luxury",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1574132190990-cfd62178bb1c?w=600&q=80&fit=crop",
    name: "Little Scholar",
    subtitle: "Kids classics",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1640276349458-04c63be0610e?w=600&q=80&fit=crop",
    name: "Trail Runner",
    subtitle: "Sport performance",
    tall: true,
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
            See how our eyewear transforms everyday looks. Men, kids, and athletes
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
