"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497275955405-2894f1f641a8?w=1920&q=80&fit=crop"
          alt="Child wearing eyeglasses smiling"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center relative"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-accent" />
          <p className="text-accent text-xs tracking-[0.3em] uppercase">
            Stay In The Loop
          </p>
          <div className="w-8 h-[1px] bg-accent" />
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Get <span className="text-gradient">Early Access</span>
        </h2>
        <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Be the first to know about new collections, exclusive deals, and
          when our Virtual Try-On feature goes live.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-surface/80 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors backdrop-blur-sm"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-accent text-primary font-semibold hover:shadow-[0_0_30px_rgba(201,169,110,0.4)] transition-all duration-300 tracking-wider text-sm uppercase"
          >
            Subscribe
          </button>
        </form>

        <p className="text-white/20 text-xs mt-4 tracking-wider">
          No spam, ever. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}
