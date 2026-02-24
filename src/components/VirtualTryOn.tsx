"use client";

import { motion } from "framer-motion";

function FaceScanAnimation() {
  const landmarkDots = [
    { x: 88, y: 80, delay: 0 },     // left brow outer
    { x: 108, y: 74, delay: 0.1 },   // left brow mid
    { x: 130, y: 72, delay: 0.15 },  // left brow inner
    { x: 170, y: 72, delay: 0.2 },   // right brow inner
    { x: 192, y: 74, delay: 0.25 },  // right brow mid
    { x: 212, y: 80, delay: 0.3 },   // right brow outer
    { x: 100, y: 100, delay: 0.4 },  // left eye outer
    { x: 120, y: 96, delay: 0.45 },  // left eye center
    { x: 140, y: 100, delay: 0.5 },  // left eye inner
    { x: 160, y: 100, delay: 0.55 }, // right eye inner
    { x: 180, y: 96, delay: 0.6 },   // right eye center
    { x: 200, y: 100, delay: 0.65 }, // right eye outer
    { x: 150, y: 115, delay: 0.75 }, // nose bridge
    { x: 150, y: 140, delay: 0.85 }, // nose tip
    { x: 138, y: 145, delay: 0.9 },  // left nostril
    { x: 162, y: 145, delay: 0.95 }, // right nostril
    { x: 125, y: 168, delay: 1.1 },  // left mouth
    { x: 150, y: 172, delay: 1.15 }, // mouth center
    { x: 175, y: 168, delay: 1.2 },  // right mouth
    { x: 150, y: 182, delay: 1.3 },  // lower lip
    { x: 150, y: 210, delay: 1.4 },  // chin
    { x: 80, y: 130, delay: 1.0 },   // left jaw
    { x: 220, y: 130, delay: 1.05 }, // right jaw
  ];

  return (
    <div className="relative w-full aspect-[4/5] max-w-lg mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-surface via-primary to-surface border border-white/[0.06]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Radial glow behind face */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08),transparent_65%)]" />

      {/* Main SVG canvas */}
      <svg viewBox="0 0 300 380" className="absolute inset-0 w-full h-full">
        {/* Face oval outline - dashed, pulsing */}
        <motion.ellipse
          cx="150" cy="145" rx="78" ry="100"
          fill="none"
          stroke="rgba(201,169,110,0.2)"
          strokeWidth="1"
          strokeDasharray="8 5"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner face contour */}
        <motion.ellipse
          cx="150" cy="145" rx="65" ry="85"
          fill="none"
          stroke="rgba(201,169,110,0.1)"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Horizontal scanning beam */}
        <motion.line
          x1="50" x2="250"
          stroke="rgba(201,169,110,0.5)"
          strokeWidth="1"
          animate={{ y1: [50, 260, 50], y2: [50, 260, 50] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Beam glow */}
        <motion.rect
          x="50" width="200" height="30"
          fill="url(#scanGlow)"
          animate={{ y: [40, 250, 40] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gradient defs */}
        <defs>
          <linearGradient id="scanGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(201,169,110,0.08)" />
            <stop offset="100%" stopColor="rgba(201,169,110,0)" />
          </linearGradient>
          <linearGradient id="glassGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(201,169,110,0.15)" />
            <stop offset="50%" stopColor="rgba(201,169,110,0.05)" />
            <stop offset="100%" stopColor="rgba(201,169,110,0.15)" />
          </linearGradient>
        </defs>

        {/* Eye region boxes */}
        <motion.rect
          x="88" y="85" width="55" height="30" rx="5"
          fill="none" stroke="rgba(201,169,110,0.15)" strokeWidth="0.8"
          strokeDasharray="3 3"
          animate={{ opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.rect
          x="157" y="85" width="55" height="30" rx="5"
          fill="none" stroke="rgba(201,169,110,0.15)" strokeWidth="0.8"
          strokeDasharray="3 3"
          animate={{ opacity: [0, 0.4, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

        {/* ===== GLASSES ANIMATION ===== */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: [0, 0, 1, 1, 1, 0], y: [-20, -20, 0, 0, 0, 0] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.4, 0.7, 0.85, 1] }}
        >
          {/* Left lens */}
          <rect
            x="85" y="86" width="58" height="32" rx="8"
            fill="url(#glassGradient)" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5"
          />
          {/* Right lens */}
          <rect
            x="157" y="86" width="58" height="32" rx="8"
            fill="url(#glassGradient)" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5"
          />
          {/* Bridge */}
          <path
            d="M143 100 Q150 94 157 100"
            fill="none" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5"
          />
          {/* Left temple */}
          <line
            x1="85" y1="96" x2="65" y2="93"
            stroke="rgba(201,169,110,0.4)" strokeWidth="1.2"
          />
          {/* Right temple */}
          <line
            x1="215" y1="96" x2="235" y2="93"
            stroke="rgba(201,169,110,0.4)" strokeWidth="1.2"
          />
          {/* Lens shine */}
          <motion.line
            x1="95" y1="92" x2="105" y2="112"
            stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.line
            x1="167" y1="92" x2="177" y2="112"
            stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.g>

        {/* IPD measurement line */}
        <motion.g
          animate={{ opacity: [0, 0, 0.6, 0.6, 0] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.15, 0.25, 0.6, 0.7] }}
        >
          <line
            x1="120" y1="100" x2="180" y2="100"
            stroke="rgba(201,169,110,0.4)" strokeWidth="0.8"
            strokeDasharray="2 2"
          />
          <circle cx="120" cy="100" r="2" fill="rgba(201,169,110,0.5)" />
          <circle cx="180" cy="100" r="2" fill="rgba(201,169,110,0.5)" />
          <text
            x="150" y="94" textAnchor="middle"
            fill="rgba(201,169,110,0.5)" fontSize="7" fontFamily="monospace"
            letterSpacing="1"
          >
            IPD 63mm
          </text>
        </motion.g>

        {/* Frame width measurement */}
        <motion.g
          animate={{ opacity: [0, 0, 0.5, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5, times: [0, 0.2, 0.3, 0.65, 0.75] }}
        >
          <line
            x1="80" y1="125" x2="220" y2="125"
            stroke="rgba(201,169,110,0.25)" strokeWidth="0.6"
            strokeDasharray="3 3"
          />
          <line x1="80" y1="121" x2="80" y2="129" stroke="rgba(201,169,110,0.3)" strokeWidth="0.6" />
          <line x1="220" y1="121" x2="220" y2="129" stroke="rgba(201,169,110,0.3)" strokeWidth="0.6" />
          <text
            x="150" y="135" textAnchor="middle"
            fill="rgba(201,169,110,0.4)" fontSize="6.5" fontFamily="monospace"
            letterSpacing="1"
          >
            FRAME 138mm
          </text>
        </motion.g>

        {/* Landmark dots */}
        {landmarkDots.map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x} cy={dot.y} r="2"
            fill="rgba(201,169,110,0.7)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Connecting lines between landmarks (face mesh effect) */}
        <motion.g
          animate={{ opacity: [0, 0.15, 0.15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
        >
          {/* Brow line */}
          <polyline
            points="88,80 108,74 130,72 170,72 192,74 212,80"
            fill="none" stroke="rgba(201,169,110,0.3)" strokeWidth="0.5"
          />
          {/* Left eye */}
          <polyline
            points="100,100 120,96 140,100"
            fill="none" stroke="rgba(201,169,110,0.25)" strokeWidth="0.5"
          />
          {/* Right eye */}
          <polyline
            points="160,100 180,96 200,100"
            fill="none" stroke="rgba(201,169,110,0.25)" strokeWidth="0.5"
          />
          {/* Nose */}
          <polyline
            points="150,115 150,140 138,145"
            fill="none" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5"
          />
          <polyline
            points="150,140 162,145"
            fill="none" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5"
          />
          {/* Mouth */}
          <polyline
            points="125,168 150,172 175,168"
            fill="none" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5"
          />
          {/* Jaw outline */}
          <polyline
            points="88,80 80,130 100,180 150,210 200,180 220,130 212,80"
            fill="none" stroke="rgba(201,169,110,0.12)" strokeWidth="0.5"
          />
        </motion.g>
      </svg>

      {/* Corner brackets - animated */}
      {[
        "top-4 left-4 border-l-2 border-t-2",
        "top-4 right-4 border-r-2 border-t-2",
        "bottom-14 left-4 border-l-2 border-b-2",
        "bottom-14 right-4 border-r-2 border-b-2",
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-6 h-6 ${pos} border-accent/50`}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      {/* Bottom HUD bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-xl px-5 py-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[10px] text-white/50 tracking-[0.15em] font-mono">
              SCANNING FACE
            </span>
          </div>
          <div className="flex items-center gap-3">
            <motion.span
              className="text-[10px] text-accent/60 tracking-[0.15em] font-mono"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ANALYZING
            </motion.span>
            <span className="text-[10px] text-accent tracking-[0.15em] font-mono font-medium">
              AI MATCH
            </span>
          </div>
        </div>
        <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}

export default function VirtualTryOn() {
  return (
    <section id="try-on" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/50 to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual — Pure animation, no image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <FaceScanAnimation />

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
