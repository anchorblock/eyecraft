"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getSimilarProducts } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { LensOption } from "@/lib/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedLens, setSelectedLens] = useState<LensOption | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedLens(product.lensOptions[0]);
    }
  }, [product]);

  // Auto-rotate images
  useEffect(() => {
    if (!product) return;
    const images = product.colors[selectedColorIndex].images;
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setSelectedImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [product, selectedColorIndex]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Product Not Found</h1>
            <Link href="/" className="text-accent hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const currentColor = product.colors[selectedColorIndex];
  const currentImages = currentColor.images;
  const similarProducts = getSimilarProducts(product);
  const totalPrice = product.price + (selectedLens?.priceAdd || 0);

  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    setSelectedImageIndex(0);
  };

  const handleAddToCart = () => {
    if (!selectedLens) return;
    addItem(product, currentColor.name, selectedSize, selectedLens);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I would like to order: ${product.brand} ${product.name}\nColor: ${currentColor.name}\nSize: ${selectedSize}\nLens: ${selectedLens?.label || "Frame Only"}\nPrice: ৳${totalPrice.toLocaleString()}`
  );

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-5 md:px-6 mb-8">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link
              href={`/products/${product.category}/${product.subcategory}`}
              className="hover:text-accent transition-colors capitalize"
            >
              {product.category.replace("-", " ")}
            </Link>
            <span>/</span>
            <span className="text-white/60 capitalize">{product.subcategory}</span>
          </nav>
        </div>

        {/* Product Content */}
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface mb-4">
                <Image
                  src={currentImages[selectedImageIndex]?.url}
                  alt={currentImages[selectedImageIndex]?.alt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-sm ${
                        product.tag === "Sport"
                          ? "bg-emerald-500 text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {currentImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                      i === selectedImageIndex
                        ? "border-accent"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Brand & Name */}
              <div>
                <p className="text-xs text-accent tracking-[0.3em] uppercase mb-2">
                  {product.brand}
                </p>
                <h1 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                  {product.name}
                </h1>
                <p className="text-white/50 text-sm mt-2">{product.model}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-heading font-bold text-accent">
                  ৳{totalPrice.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-white/30 line-through">
                      ৳{(product.originalPrice + (selectedLens?.priceAdd || 0)).toLocaleString()}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Color Selector */}
              {product.colors.length > 1 && (
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-3">
                    Frame Color: <span className="text-white/80">{currentColor.name}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.colors.map((color, i) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorChange(i)}
                        className={`relative w-12 h-12 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                          i === selectedColorIndex
                            ? "border-accent scale-110"
                            : "border-white/15 hover:border-white/40"
                        }`}
                        title={color.name}
                      >
                        {color.bubbleImage ? (
                          <Image
                            src={color.bubbleImage}
                            alt={color.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        ) : (
                          <div
                            className="w-full h-full"
                            style={{ backgroundColor: color.hex }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">
                  Size
                </p>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 text-xs uppercase tracking-wider border rounded transition-all duration-300 ${
                        selectedSize === size
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-white/15 text-white/60 hover:border-white/30"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lens Options */}
              <div>
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">
                  Select Lens
                </p>
                <div className="space-y-2">
                  {product.lensOptions.map((lens) => (
                    <label
                      key={lens.id}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedLens?.id === lens.id
                          ? "border-accent bg-accent/5"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                            selectedLens?.id === lens.id
                              ? "border-accent"
                              : "border-white/30"
                          }`}
                        >
                          {selectedLens?.id === lens.id && (
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          )}
                        </div>
                        <span className="text-sm">{lens.label}</span>
                      </div>
                      <span className="text-sm text-white/50">
                        {lens.priceAdd === 0
                          ? "Included"
                          : `+৳${lens.priceAdd.toLocaleString()}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                    addedToCart
                      ? "bg-emerald-500 text-white"
                      : "bg-accent text-primary hover:bg-accent-light"
                  }`}
                >
                  {addedToCart ? "Added to Cart!" : "Add to Cart"}
                </button>

                <a
                  href={`https://wa.me/8801872777452?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#20BD5A] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  Order on WhatsApp
                </a>
              </div>

              {/* Frame Specs */}
              <div className="border border-white/10 rounded-xl overflow-hidden">
                <div className="px-5 py-3 bg-white/5 border-b border-white/10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider">
                    Frame Specifications
                  </h3>
                </div>
                <div className="divide-y divide-white/5">
                  {[
                    ["Material", product.specs.material],
                    ["Shape", product.specs.shape],
                    ["Frame Type", product.specs.type],
                    ["Dimensions", product.specs.dimensions + " mm"],
                    ["Lens Width", product.specs.lensWidth],
                    ["Bridge Width", product.specs.bridgeWidth],
                    ["Temple Length", product.specs.templeLength],
                    ["Weight", product.specs.weight],
                    ["Gender", product.gender],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between px-5 py-3">
                      <span className="text-xs text-white/40">{label}</span>
                      <span className="text-xs text-white/80">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24"
            >
              <h2 className="text-2xl font-heading font-bold mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {similarProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/product/${p.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-surface mb-3">
                      <Image
                        src={p.colors[0].images[0].url}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <p className="text-xs text-white/30 tracking-wider uppercase mb-1">
                      {p.brand}
                    </p>
                    <h3 className="text-sm font-medium group-hover:text-accent transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-accent text-sm mt-1">
                      ৳{p.price.toLocaleString()}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
