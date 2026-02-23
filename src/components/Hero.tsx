"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1546484654-06630968ae41?w=1920&q=80&fit=crop"
          alt="Fashion model wearing elegant eyewear"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(15,15,15,0.8))]" />
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay noise-bg" />

      {/* Animated accent line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent"
        style={{ left: "8%" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Eyewear badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-accent" />
            <p className="text-accent font-medium tracking-[0.3em] uppercase text-xs">
              Premium Eyewear 2026
            </p>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] mb-6 tracking-tight">
              Crafted for
              <br />
              <span className="text-gradient">Those Who See</span>
              <br />
              Beyond
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/50 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed"
          >
            Handcrafted frames where precision engineering meets timeless elegance.
            Discover eyewear designed for the extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href="#products"
              className="group relative px-10 py-4 bg-accent text-primary font-semibold rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)] tracking-wider text-sm uppercase"
            >
              <span className="relative z-10">Shop Collection</span>
              <div className="absolute inset-0 bg-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            <a
              href="#lookbook"
              className="group px-10 py-4 border border-white/20 font-medium transition-all duration-300 hover:border-accent hover:text-accent tracking-wider text-sm uppercase flex items-center gap-3"
            >
              View Lookbook
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-white/10 pt-8"
        >
          {[
            { number: "500+", label: "Frame Styles" },
            { number: "50K+", label: "Happy Customers" },
            { number: "100%", label: "UV Protection" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
                {stat.number}
              </div>
              <div className="text-[11px] text-white/40 mt-1 tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
