"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const heroVideo =
  "https://jaqmueav36qxuzcg.public.blob.vercel-storage.com/videos/fashion-vid.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Layer */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Base dark overlay — ensures text is always readable regardless of video brightness */}
        <div className="absolute inset-0 bg-black/45" />
        {/* Stronger left-side gradient where text lives — more even coverage on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40 md:to-black/20" />
        {/* Top/bottom bleed into page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        {/* Vignette to frame the content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(15,15,15,0.7))]" />
      </div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay noise-bg" />

      {/* Animated accent line */}
      <motion.div
        className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/40 to-transparent"
        style={{ left: "8%" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 pt-24 md:pt-32 pb-28 md:pb-16 w-full">
        <div className="max-w-3xl">
          {/* Eyewear badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mb-5 md:mb-8"
          >
            <div className="w-8 md:w-12 h-[1px] bg-accent" />
            <p className="text-accent font-medium tracking-[0.3em] uppercase text-[10px] md:text-xs">
              Premium Eyewear 2026
            </p>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.08] mb-4 md:mb-6 tracking-tight">
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
            className="text-white/50 text-base md:text-xl max-w-xl mb-7 md:mb-10 font-light leading-relaxed"
          >
            Handcrafted frames where precision engineering meets timeless elegance.
            Discover eyewear designed for the extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-start"
          >
            <a
              href="#categories"
              className="group relative px-8 md:px-10 py-3.5 md:py-4 bg-accent text-primary font-semibold rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)] tracking-wider text-xs md:text-sm uppercase text-center"
            >
              <span className="relative z-10">Find My Frames</span>
              <div className="absolute inset-0 bg-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            <a
              href="#try-on"
              className="group px-8 md:px-10 py-3.5 md:py-4 border border-white/20 font-medium transition-all duration-300 hover:border-accent hover:text-accent tracking-wider text-xs md:text-sm uppercase flex items-center justify-center gap-3"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
              </svg>
              Try On Now
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 max-w-3xl"
        >
          {[
            { number: "500+", label: "Frame Styles" },
            { number: "50K+", label: "Happy Customers" },
            { number: "14 Day", label: "Free Returns" },
            { number: "Free", label: "Nationwide Delivery" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              className="relative pl-3 md:pl-4 border-l-2 border-accent/40"
            >
              <div className="text-2xl md:text-5xl font-heading font-bold text-accent leading-none">
                {stat.number}
              </div>
              <div className="text-xs md:text-base text-white/70 mt-1 md:mt-2 font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md border-t border-accent/10"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-2.25h7.5m-7.5 2.25v-2.25m0 0h-7.5m7.5 0v2.25M3.375 7.5h17.25c.621 0 1.125.504 1.125 1.125v3.375", text: "Free Delivery" },
            { icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99", text: "14-Day Returns" },
            { icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", text: "100% Authentic" },
            { icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155", text: "Free Consultation" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <span className="text-[11px] md:text-sm text-white/80 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
