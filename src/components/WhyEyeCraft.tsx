"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
    title: "Premium Quality",
    desc: "Every frame undergoes 30+ quality checks. We source only the finest acetate, titanium, and stainless steel.",
  },
  {
    icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25m-2.25 0h-2.25m4.5 0a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v8.25m4.5-4.5h6.75",
    title: "Free Shipping",
    desc: "Enjoy complimentary delivery on all orders. Your perfect pair arrives at your doorstep, hassle-free.",
  },
  {
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
    title: "Easy Returns",
    desc: "Not the perfect fit? Return within 14 days for a full refund. No questions asked, no hassle.",
  },
  {
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    title: "Eye Exam Support",
    desc: "Book an eye exam with our certified partners. Get accurate prescriptions for perfect lenses.",
  },
];

export default function WhyEyeCraft() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1651199922386-60da638de82b?w=1920&q=80&fit=crop"
          alt="Premium eyewear detail"
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-surface/90" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent" />
            <p className="text-accent text-xs tracking-[0.3em] uppercase">
              Why Choose Us
            </p>
            <div className="w-8 h-[1px] bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            The EyeCraft <span className="text-gradient">Promise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center p-8 rounded-xl bg-primary/60 border border-white/5 hover:border-accent/20 transition-all duration-500 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-5 border border-accent/10"
              >
                <svg
                  className="w-7 h-7 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </motion.div>
              <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-accent transition-colors">
                {f.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
