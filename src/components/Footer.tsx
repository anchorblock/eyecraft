"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Shop: [
    { name: "Eyeglasses", href: "#" },
    { name: "Sunglasses", href: "#" },
    { name: "Contact Lenses", href: "#" },
    { name: "Computer Glasses", href: "#" },
    { name: "Kids Eyewear", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Our Story", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  Support: [
    { name: "Help Center", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

const socials = [
  {
    name: "Facebook",
    icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Instagram",
    icon: "M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z M17.5 6.5h.01",
  },
  {
    name: "Twitter",
    icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
  },
  {
    name: "YouTube",
    icon: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z M10 15l5-3-5-3z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <svg
                width="36"
                height="22"
                viewBox="0 0 40 24"
                fill="none"
                className="text-accent"
              >
                <circle cx="10" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="30" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M19 12 C19 9, 21 9, 21 12" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-xl font-heading font-bold tracking-wider">
                Eye<span className="text-accent">Craft</span>
              </span>
            </motion.a>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Crafting premium eyewear for Bangladesh and beyond. We believe
              everyone deserves to see the world clearly and stylishly.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent/20 flex items-center justify-center text-white/40 hover:text-accent transition-all duration-300"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm tracking-wider uppercase mb-5 text-white/70">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/40 hover:text-accent text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2026 EyeCraft. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/30 hover:text-white/60 text-xs transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
