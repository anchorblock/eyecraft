"use client";

import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProductsBySubcategory, getProductsByCategory } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductListingPage() {
  const params = useParams();
  const category = params.category as string;
  const subcategory = params.subcategory as string;
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(0);
  const hoverIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const products = getProductsBySubcategory(category, subcategory);
  const allCategoryProducts = getProductsByCategory(category);

  const categoryLabel = category.replace("-", " ");
  const subcategoryLabel = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);

  // Get unique subcategories for the sidebar
  const subcategories = [...new Set(allCategoryProducts.map((p) => p.subcategory))];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-5 md:px-6 mb-6">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="capitalize">{categoryLabel}</span>
            <span>/</span>
            <span className="text-white/60 capitalize">{subcategoryLabel}</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-heading font-bold capitalize">
              {subcategoryLabel}&apos;s{" "}
              <span className="text-gradient capitalize">{categoryLabel}</span>
            </h1>
            <p className="text-white/40 text-sm mt-2">
              {products.length} {products.length === 1 ? "product" : "products"} found
            </p>
          </motion.div>

          <div className="flex gap-10">
            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:block w-56 flex-shrink-0"
            >
              {/* Subcategory Filter */}
              <div className="mb-8">
                <h3 className="text-xs text-white/50 uppercase tracking-wider mb-4">
                  Category
                </h3>
                <div className="space-y-1">
                  {subcategories.map((sub) => (
                    <Link
                      key={sub}
                      href={`/products/${category}/${sub}`}
                      className={`block px-3 py-2 text-sm rounded-lg transition-all duration-300 capitalize ${
                        sub === subcategory
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : "text-white/50 hover:text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Range Filter (static for now) */}
              <div className="mb-8">
                <h3 className="text-xs text-white/50 uppercase tracking-wider mb-4">
                  Price Range
                </h3>
                <div className="space-y-1">
                  {["Under ৳1,000", "৳1,000 - ৳3,000", "৳3,000 - ৳5,000", "Above ৳5,000"].map(
                    (range) => (
                      <button
                        key={range}
                        className="block w-full text-left px-3 py-2 text-sm text-white/50 hover:text-white/80 hover:bg-white/5 rounded-lg transition-all"
                      >
                        {range}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Frame Shape Filter */}
              <div>
                <h3 className="text-xs text-white/50 uppercase tracking-wider mb-4">
                  Frame Shape
                </h3>
                <div className="space-y-1">
                  {["Square", "Round", "Rectangle", "Cat Eye", "Aviator"].map(
                    (shape) => (
                      <button
                        key={shape}
                        className="block w-full text-left px-3 py-2 text-sm text-white/50 hover:text-white/80 hover:bg-white/5 rounded-lg transition-all"
                      >
                        {shape}
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.aside>

            {/* Product Grid */}
            <div className="flex-1">
              {products.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-white/40 text-lg mb-4">
                    No products found in this category yet.
                  </p>
                  <Link
                    href="/"
                    className="text-accent hover:underline text-sm"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((product, i) => {
                    const isHovered = hoveredProduct === product.slug;
                    const displayImage = isHovered
                      ? product.colors[0].images[hoveredImageIndex % product.colors[0].images.length]
                      : product.colors[0].images[0];
                    return (
                      <motion.div
                        key={product.slug}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <Link
                          href={`/product/${product.slug}`}
                          className="group block"
                          onMouseEnter={() => {
                            setHoveredProduct(product.slug);
                            setHoveredImageIndex(0);
                            hoverIntervalRef.current = setInterval(() => {
                              setHoveredImageIndex((prev) => prev + 1);
                            }, 800);
                          }}
                          onMouseLeave={() => {
                            setHoveredProduct(null);
                            setHoveredImageIndex(0);
                            if (hoverIntervalRef.current) {
                              clearInterval(hoverIntervalRef.current);
                              hoverIntervalRef.current = null;
                            }
                          }}
                        >
                          {/* Image */}
                          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface mb-4">
                            <Image
                              src={displayImage.url}
                              alt={displayImage.alt}
                              fill
                              className="object-cover transition-all duration-500 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Tag */}
                            {product.tag && (
                              <div className="absolute top-3 left-3">
                                <span
                                  className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm ${
                                    product.tag === "Sport"
                                      ? "bg-emerald-500 text-white"
                                      : "bg-accent text-primary"
                                  }`}
                                >
                                  {product.tag}
                                </span>
                              </div>
                            )}

                            {/* Wishlist Heart */}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent/20 hover:border-accent/40"
                            >
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                              </svg>
                            </button>

                            {/* Image dots */}
                            {product.colors[0].images.length > 1 && isHovered && (
                              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {product.colors[0].images.map((_, idx) => (
                                  <div
                                    key={idx}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                      idx === hoveredImageIndex % product.colors[0].images.length
                                        ? "bg-accent"
                                        : "bg-white/40"
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-[11px] text-white/30 tracking-[0.2em] uppercase">
                                {product.brand}
                              </p>
                              {/* Color dots */}
                              {product.colors.length > 1 && (
                                <div className="flex gap-1">
                                  {product.colors.map((color) => (
                                    <div
                                      key={color.name}
                                      className="w-3 h-3 rounded-full border border-white/20"
                                      style={{ backgroundColor: color.hex }}
                                      title={color.name}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                            <h3 className="text-base font-medium mb-2 group-hover:text-accent transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="text-accent font-semibold">
                                ৳{product.price.toLocaleString()}
                              </span>
                              {product.originalPrice && (
                                <span className="text-white/30 text-sm line-through">
                                  ৳{product.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {/* Pagination placeholder */}
              {products.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-2 text-sm bg-accent/10 text-accent border border-accent/20 rounded">
                      1
                    </span>
                    <span className="px-4 py-2 text-sm text-white/30 border border-white/10 rounded cursor-not-allowed">
                      2
                    </span>
                    <span className="px-4 py-2 text-sm text-white/30 border border-white/10 rounded cursor-not-allowed">
                      3
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
