"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { name: "Eyeglasses", href: "/#categories" },
  { name: "Sunglasses", href: "/#categories" },
  { name: "Collections", href: "/#collections" },
  { name: "Virtual Try-On", href: "/#try-on" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openDrawer } = useCart();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      // Auto-hide on scroll down, show on scroll up (mobile only, and not when menu is open)
      if (!mobileOpen) {
        if (currentY > lastScrollY.current && currentY > 100) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled || mobileOpen
            ? "bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <svg
              width="40"
              height="24"
              viewBox="0 0 40 24"
              fill="none"
              className="text-accent group-hover:scale-110 transition-transform duration-300"
            >
              <circle cx="10" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="30" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M19 12 C19 9, 21 9, 21 12" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            <span className="text-2xl font-heading font-bold tracking-wider">
              Eye<span className="text-accent">Craft</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-white/70 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Search">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="p-2 text-white/70 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Wishlist">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button onClick={openDrawer} className="p-2 text-white/70 hover:text-white transition-colors relative min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Cart">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-accent rounded-full text-[10px] font-bold flex items-center justify-center text-primary">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1 relative z-50">
            <button onClick={openDrawer} className="p-2 text-white/70 hover:text-white transition-colors relative min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Cart">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-accent rounded-full text-[10px] font-bold flex items-center justify-center text-primary">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white/70 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Premium Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-primary/98 backdrop-blur-2xl" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-8">
              <nav className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-4 text-3xl font-heading font-bold text-white/80 hover:text-accent transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="h-px bg-white/10 my-8 origin-left"
              />

              {/* Secondary Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="space-y-4"
              >
                <a href="#" className="block text-sm text-white/40 hover:text-white/70 transition-colors min-h-[44px] flex items-center">
                  Search
                </a>
                <a href="#" className="block text-sm text-white/40 hover:text-white/70 transition-colors min-h-[44px] flex items-center">
                  Wishlist
                </a>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openDrawer();
                  }}
                  className="block text-sm text-white/40 hover:text-white/70 transition-colors min-h-[44px] flex items-center gap-2"
                >
                  Cart
                  {totalItems > 0 && (
                    <span className="w-5 h-5 bg-accent rounded-full text-[10px] font-bold flex items-center justify-center text-primary">
                      {totalItems}
                    </span>
                  )}
                </button>
              </motion.div>

              {/* Bottom tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 text-xs text-white/20 tracking-widest uppercase"
              >
                Premium Eyewear for Every Vision
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
