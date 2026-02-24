"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VirtualTryOn() {
  return (
    <section id="try-on" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/50 to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual - Male model image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1755519024540-2b4844df5d92?w=800&q=80&fit=crop"
                alt="Man showcasing virtual try-on experience with eyeglasses"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* === Rich Face Scanning Overlay === */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Subtle grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Scanning beam with glow */}
                <motion.div
                  className="absolute left-0 right-0 h-[1px]"
                  animate={{ top: ["15%", "65%", "15%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <div className="h-8 -mt-4 bg-gradient-to-b from-accent/15 to-transparent" />
                </motion.div>

                {/* Face outline SVG */}
                <motion.svg
                  viewBox="0 0 200 260"
                  className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[55%] h-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.98, 1, 0.98] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Face oval */}
                  <ellipse
                    cx="100" cy="120" rx="72" ry="95"
                    fill="none" stroke="rgba(201,169,110,0.3)" strokeWidth="1.2"
                    strokeDasharray="6 4"
                  />
                  {/* Glasses bridge line */}
                  <motion.path
                    d="M62 105 Q100 95 138 105"
                    fill="none" stroke="rgba(201,169,110,0.5)" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Left lens outline */}
                  <motion.rect
                    x="42" y="92" width="48" height="32" rx="6"
                    fill="none" stroke="rgba(201,169,110,0.4)" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
                  />
                  {/* Right lens outline */}
                  <motion.rect
                    x="110" y="92" width="48" height="32" rx="6"
                    fill="none" stroke="rgba(201,169,110,0.4)" strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.3 }}
                  />
                </motion.svg>

                {/* Facial landmark dots */}
                {[
                  { x: "35%", y: "36%", delay: 0 },    // left eye
                  { x: "65%", y: "36%", delay: 0.15 },  // right eye
                  { x: "50%", y: "48%", delay: 0.3 },   // nose bridge
                  { x: "50%", y: "55%", delay: 0.45 },  // nose tip
                  { x: "40%", y: "64%", delay: 0.6 },   // left mouth
                  { x: "60%", y: "64%", delay: 0.75 },  // right mouth
                  { x: "28%", y: "50%", delay: 0.9 },   // left cheek
                  { x: "72%", y: "50%", delay: 1.05 },  // right cheek
                  { x: "32%", y: "28%", delay: 1.2 },   // left brow
                  { x: "68%", y: "28%", delay: 1.35 },  // right brow
                  { x: "50%", y: "72%", delay: 1.5 },   // chin
                ].map((dot, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-accent"
                    style={{ left: dot.x, top: dot.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1.2, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: dot.delay,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Pulse ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-accent/40"
                      animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: dot.delay + 0.5,
                      }}
                    />
                  </motion.div>
                ))}

                {/* Measurement lines between eyes */}
                <motion.div
                  className="absolute top-[36%] left-[36%] right-[36%] h-[1px] bg-accent/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 0.5, 0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] text-accent/60 tracking-widest whitespace-nowrap">
                    IPD: 63mm
                  </span>
                </motion.div>

                {/* Side measurement (temple width) */}
                <motion.div
                  className="absolute top-[42%] left-[25%] right-[25%] h-[1px] border-t border-dashed border-accent/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.4, 0.4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-accent/50 tracking-widest whitespace-nowrap">
                    FRAME: 138mm
                  </span>
                </motion.div>
              </div>

              {/* Tech overlay corners — animated */}
              {[
                "top-3 left-3 border-l-2 border-t-2",
                "top-3 right-3 border-r-2 border-t-2",
                "bottom-12 left-3 border-l-2 border-b-2",
                "bottom-12 right-3 border-r-2 border-b-2",
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-6 h-6 ${pos} border-accent/60`}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}

              {/* Bottom info bar — enhanced */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-lg px-5 py-3">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[10px] text-white/60 tracking-widest">FACE DETECTED</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-accent/70 tracking-widest">98% MATCH</span>
                    <span className="text-[10px] text-accent tracking-widest font-medium">AI POWERED</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>

            {/* Decorative ring */}
            <motion.div
              className="absolute -inset-4 border border-accent/10 rounded-2xl -z-10"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest bg-accent/10 text-accent border border-accent/20 mb-6">
              COMING SOON
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Try Before
              <br />
              You <span className="text-gradient">Buy</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Our AI-powered Virtual Try-On lets you see exactly how every frame
              looks on your face. No guesswork, no returns — just your
              perfect pair, guaranteed.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  icon: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z",
                  title: "Real-Time Face Mapping",
                  desc: "Advanced AI detects your face shape and features instantly",
                },
                {
                  icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
                  title: "360-Degree Preview",
                  desc: "See frames from every angle before making your decision",
                },
                {
                  icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z",
                  title: "Smart Recommendations",
                  desc: "AI suggests frames that complement your unique features",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/10">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-[15px]">{feature.title}</h4>
                    <p className="text-white/40 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group px-8 py-4 bg-accent/10 border border-accent/30 text-accent font-semibold hover:bg-accent hover:text-primary transition-all duration-300 tracking-wider text-sm uppercase">
              Get Notified When It Launches
              <svg
                className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
