import { Product, LensOption } from "./types";

const defaultLensOptions: LensOption[] = [
  { id: "frame-only", label: "Frame Only", priceAdd: 0 },
  { id: "single-vision", label: "Single Vision / Unifocal", priceAdd: 500 },
  { id: "progressive", label: "Progressive / Bifocal", priceAdd: 2500 },
  { id: "anti-blue", label: "Zero Power with Anti-Blue Lens", priceAdd: 800 },
];

const sunglassLensOptions: LensOption[] = [
  { id: "frame-only", label: "Frame Only (No Lenses)", priceAdd: 0 },
  { id: "polarized", label: "Polarized UV Protection", priceAdd: 0 },
];

export const products: Product[] = [
  // ─── EYEGLASSES ────────────────────────────────────────────────
  {
    slug: "john-jacobs-rich-acetate-jj-e10232",
    name: "Rich Acetate Francisco",
    brand: "John Jacobs",
    model: "JJ E10232-C6",
    description:
      "Premium Italian acetate square frame with a sophisticated two-tone finish. The Francisco blends classic style with modern proportions for a refined everyday look.",
    price: 3700,
    originalPrice: 4700,
    category: "eyeglasses",
    subcategory: "male",
    gender: "Male",
    tag: "Best Seller",
    colors: [
      {
        name: "Dark Gray",
        hex: "#4a4a4a",
        bubbleImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/4f9ad0ce-00ee-442f-a600-cd3a5d7522c6_bubble.png",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-brown-full-rim-square-john-jacobs-rich-acetate-jj-e10232-c6-eyeglasses-francisco__dsc2011_4_10_25.jpg",
            alt: "John Jacobs Rich Acetate front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-brown-full-rim-square-john-jacobs-rich-acetate-jj-e10232-c6-eyeglasses-francisco__dsc2010_4_10_25.jpg",
            alt: "John Jacobs Rich Acetate angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-brown-full-rim-square-john-jacobs-rich-acetate-jj-e10232-c6-eyeglasses-francisco_144598_1_16_08_2025.png",
            alt: "John Jacobs Rich Acetate on model front",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-brown-full-rim-square-john-jacobs-rich-acetate-jj-e10232-c6-eyeglasses-francisco_144598_2_16_08_2025.png",
            alt: "John Jacobs Rich Acetate on model side",
          },
        ],
      },
      {
        name: "Blue Black",
        hex: "#1a2744",
        bubbleImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/94237662-7ed5-44ee-a947-687a0ce93584_bubble.png",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-brown-full-rim-square-john-jacobs-rich-acetate-jj-e10232-c6-eyeglasses-francisco__dsc2011_4_10_25.jpg",
            alt: "John Jacobs Rich Acetate Blue Black front",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-brown-full-rim-square-john-jacobs-rich-acetate-jj-e10232-c6-eyeglasses-francisco__dsc2010_4_10_25.jpg",
            alt: "John Jacobs Rich Acetate Blue Black angle",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-brown-full-rim-square-john-jacobs-rich-acetate-jj-e10232-c6-eyeglasses-francisco_144598_1_16_08_2025.png",
            alt: "John Jacobs Rich Acetate Blue Black on model",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-brown-full-rim-square-john-jacobs-rich-acetate-jj-e10232-c6-eyeglasses-francisco_144598_2_16_08_2025.png",
            alt: "John Jacobs Rich Acetate Blue Black side",
          },
        ],
      },
    ],
    specs: {
      material: "Italian Acetate",
      shape: "Square",
      type: "Full Rim",
      dimensions: "54-18-145",
      weight: "26 gm",
      lensWidth: "54 mm",
      bridgeWidth: "18 mm",
      templeLength: "145 mm",
    },
    sizes: ["M", "L"],
    lensOptions: defaultLensOptions,
  },
  {
    slug: "vincent-chase-half-rim-cat-eye",
    name: "Elegant Cat Eye",
    brand: "Vincent Chase",
    model: "VC E17576-C1",
    description:
      "A delicate half-rim cat eye frame in polished gold stainless steel. Lightweight and feminine, perfect for adding a touch of sophistication to any look.",
    price: 1700,
    originalPrice: 2300,
    category: "eyeglasses",
    subcategory: "female",
    gender: "Female",
    tag: "Trending",
    colors: [
      {
        name: "Gold",
        hex: "#d4a853",
        bubbleImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/223332_bubble.png",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-half-rim-cat-eye-vincent-chase-lenskart-half-rim-vc-e17576-eyeglasses_dsc6673_30_12_2024.jpg",
            alt: "Vincent Chase Cat Eye front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-half-rim-cat-eye-vincent-chase-lenskart-half-rim-vc-e17576-eyeglasses_dsc6672_30_12_2024.jpg",
            alt: "Vincent Chase Cat Eye angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-half-rim-cat-eye-vincent-chase-lenskart-half-rim-vc-e17576-eyeglasses_dsc6675_30_12_2024.jpg",
            alt: "Vincent Chase Cat Eye side view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-half-rim-cat-eye-vincent-chase-lenskart-half-rim-vc-e17576-eyeglasses_dsc6676_30_12_2024.jpg",
            alt: "Vincent Chase Cat Eye temple detail",
          },
        ],
      },
    ],
    specs: {
      material: "Stainless Steel",
      shape: "Cat Eye",
      type: "Half Rim",
      dimensions: "50-20-135",
      weight: "21 gm",
      lensWidth: "50 mm",
      bridgeWidth: "20 mm",
      templeLength: "135 mm",
    },
    sizes: ["S"],
    lensOptions: defaultLensOptions,
  },
  {
    slug: "lenskart-junior-pink-rectangle",
    name: "Owlers Kids Rectangle",
    brand: "Lenskart Junior",
    model: "LKJ E10056CE-C3",
    description:
      "Flexible and lightweight TR90 frame designed for kids aged 5-8. The pink transparent colorway is fun yet durable enough for everyday adventures.",
    price: 550,
    originalPrice: 1200,
    category: "eyeglasses",
    subcategory: "kids",
    gender: "Kids",
    tag: "Popular",
    colors: [
      {
        name: "Pink Transparent",
        hex: "#f0a0b0",
        bubbleImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/145582_bubble.png",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-pink-transparent-full-rim-rectangle-kid--5-8-yrs--lenskart-junior-owlers-lkj-e10064-c2_lenskart-junior-lkj-e10056ce-c3-eyeglasses_img288_24march23_24march23.jpg.jpeg",
            alt: "Lenskart Junior Pink front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-pink-transparent-full-rim-rectangle-kid--5-8-yrs--lenskart-junior-owlers-lkj-e10064-c2_lenskart-junior-lkj-e10056ce-c3-eyeglasses_img188_24march23_24march23.jpg.jpeg",
            alt: "Lenskart Junior Pink angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-junior-lkj-e10056ce-c3-eyeglasses_g_0071_1.jpg",
            alt: "Lenskart Junior Pink side view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//model/l/i/kids-glasses:-pink-transparent-full-rim-rectangle-kid-(5-8-yrs)-lenskart-junior-owlers-lkj-e10064-c2-_14_june_kids_shoot_5-8yrs85888_145582_22june.jpg",
            alt: "Lenskart Junior Pink on model",
          },
        ],
      },
      {
        name: "Navy Blue",
        hex: "#1a2e5a",
        bubbleImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/145584_bubble.png",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-pink-transparent-full-rim-rectangle-kid--5-8-yrs--lenskart-junior-owlers-lkj-e10064-c2_lenskart-junior-lkj-e10056ce-c3-eyeglasses_img288_24march23_24march23.jpg.jpeg",
            alt: "Lenskart Junior Navy Blue front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-pink-transparent-full-rim-rectangle-kid--5-8-yrs--lenskart-junior-owlers-lkj-e10064-c2_lenskart-junior-lkj-e10056ce-c3-eyeglasses_img188_24march23_24march23.jpg.jpeg",
            alt: "Lenskart Junior Navy Blue angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-junior-lkj-e10056ce-c3-eyeglasses_g_0071_1.jpg",
            alt: "Lenskart Junior Navy Blue side view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//model/l/i/kids-glasses:-pink-transparent-full-rim-rectangle-kid-(5-8-yrs)-lenskart-junior-owlers-lkj-e10064-c2-_14_june_kids_shoot_5-8yrs85888_145582_22june.jpg",
            alt: "Lenskart Junior Navy Blue on model",
          },
        ],
      },
    ],
    specs: {
      material: "TR90 (Flexible)",
      shape: "Rectangle",
      type: "Full Rim",
      dimensions: "46-16-130",
      weight: "12 gm",
      lensWidth: "46 mm",
      bridgeWidth: "16 mm",
      templeLength: "130 mm",
    },
    sizes: ["Kids (5-8 yrs)"],
    lensOptions: defaultLensOptions,
  },
  {
    slug: "lenskart-air-fusion-square",
    name: "AIR Fusion Classic Square",
    brand: "Lenskart Air",
    model: "LA E13069-C1",
    description:
      "Ultra-lightweight TR90 and stainless steel fusion frame. The Air Fusion combines comfort with a clean, minimal aesthetic — a true everyday essential.",
    price: 1700,
    originalPrice: 2300,
    category: "eyeglasses",
    subcategory: "unisex",
    gender: "Unisex",
    tag: "Best Seller",
    colors: [
      {
        name: "Black",
        hex: "#1a1a1a",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_g_7876_2_27july23_14_1_2026.jpg",
            alt: "Lenskart Air Fusion front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_g_7875_1_27july23_14_1_2026.jpg",
            alt: "Lenskart Air Fusion angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_137974_1_21_01_2026.png",
            alt: "Lenskart Air Fusion on model front",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_137974_2_21_01_2026.png",
            alt: "Lenskart Air Fusion on model side",
          },
        ],
      },
    ],
    specs: {
      material: "TR90 & Stainless Steel",
      shape: "Square",
      type: "Full Rim",
      dimensions: "53-16-142",
      weight: "16 gm",
      lensWidth: "53 mm",
      bridgeWidth: "16 mm",
      templeLength: "142 mm",
    },
    sizes: ["M"],
    lensOptions: defaultLensOptions,
  },

  // ─── SUNGLASSES ────────────────────────────────────────────────
  {
    slug: "john-jacobs-tints-portishead",
    name: "JJ Tints Portishead",
    brand: "John Jacobs",
    model: "JJ S12961-C1",
    description:
      "A gunmetal grey gradient square sunglasses with 100% UV400 protection. The Portishead delivers a bold, structured silhouette with polycarbonate lenses.",
    price: 4800,
    originalPrice: 6000,
    category: "sunglasses",
    subcategory: "male",
    gender: "Male",
    tag: "Premium",
    colors: [
      {
        name: "Gunmetal Grey",
        hex: "#5a5a5a",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/Gunmetal-Grey-Gradient-Full-Rim-Square-John-Jacobs-JJ-Tints-JJ-S12961-C1-Sunglasses_john-jacobs-jj-s12961-c1-sunglasses_118_02_2022.jpg",
            alt: "JJ Tints Portishead front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/Gunmetal-Grey-Gradient-Full-Rim-Square-John-Jacobs-JJ-Tints-JJ-S12961-C1-Sunglasses_john-jacobs-jj-s12961-c1-sunglasses_sunglasses_g_3498_218_02_2022.jpg",
            alt: "JJ Tints Portishead angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-gunmetal-grey-full-rim-square-john-jacobs-jj-tints-jj-s12961--c1-sunglasses-portishead_137153_1_20feb25.png",
            alt: "JJ Tints Portishead on model front",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-gunmetal-grey-full-rim-square-john-jacobs-jj-tints-jj-s12961--c1-sunglasses-portishead_137153_2_20feb25.png",
            alt: "JJ Tints Portishead on model side",
          },
        ],
      },
    ],
    specs: {
      material: "Stainless Steel",
      shape: "Square",
      type: "Full Rim",
      dimensions: "55-17-142",
      weight: "27 gm",
      lensWidth: "55 mm",
      bridgeWidth: "17 mm",
      templeLength: "142 mm",
    },
    sizes: ["L"],
    lensOptions: sunglassLensOptions,
  },
  {
    slug: "john-jacobs-tints-cat-eye-rose-gold",
    name: "JJ Tints Rose Gold Cat Eye",
    brand: "John Jacobs",
    model: "JJ S70156-C1",
    description:
      "A feminine cat eye silhouette in rose gold with brown gradient polarized nylon lenses. Elegant UV400 protection for the style-conscious.",
    price: 3600,
    originalPrice: 4800,
    category: "sunglasses",
    subcategory: "female",
    gender: "Female",
    tag: "New",
    colors: [
      {
        name: "Rose Gold",
        hex: "#b76e79",
        bubbleImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/c9a6ceae-6cf1-4a7d-a980-8847a151d1f7_bubble.png",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/brown-gradient-rose-gold-full-rim-cat-eye-john-jacobs-jj-tints-jj-s70156-sunglasses__dsc9505_13_08_2025.jpg",
            alt: "JJ Rose Gold Cat Eye front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/brown-gradient-rose-gold-full-rim-cat-eye-john-jacobs-jj-tints-jj-s70156-sunglasses__dsc9501_13_08_2025.jpg",
            alt: "JJ Rose Gold Cat Eye angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/brown-gradient-rose-gold-full-rim-cat-eye-john-jacobs-jj-tints-jj-s70156-sunglasses_233681_1_11_08_2025.png",
            alt: "JJ Rose Gold Cat Eye on model front",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//j/i/brown-gradient-rose-gold-full-rim-cat-eye-john-jacobs-jj-tints-jj-s70156-sunglasses_233681_2_11_08_2025.png",
            alt: "JJ Rose Gold Cat Eye on model side",
          },
        ],
      },
    ],
    specs: {
      material: "Stainless Steel",
      shape: "Cat Eye",
      type: "Full Rim",
      dimensions: "56-17-140",
      weight: "20 gm",
      lensWidth: "56 mm",
      bridgeWidth: "17 mm",
      templeLength: "140 mm",
    },
    sizes: ["L"],
    lensOptions: sunglassLensOptions,
  },
  {
    slug: "hooper-memphis-kids-sunglasses",
    name: "Memphis Kids Sunglasses",
    brand: "Hooper",
    model: "HP S16087-C1",
    description:
      "Fun and durable TR90 sunglasses for kids aged 8-12. Blue grey gradient lenses with full UV400 protection — built for adventures.",
    price: 720,
    originalPrice: 1200,
    category: "sunglasses",
    subcategory: "kids",
    gender: "Kids",
    tag: "Popular",
    colors: [
      {
        name: "Yellow Transparent",
        hex: "#f5d442",
        bubbleImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/211015_bubble.png",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/hooper-hp-s16087-c1-sunglasses_img_1192_image_pla_26_oct23.jpg",
            alt: "Hooper Memphis front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/hooper-hp-s16087-c1-sunglasses_img_1191_26_oct23.jpg",
            alt: "Hooper Memphis angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//h/i/yellow-transparent-multicolour-grey-gradient-full-rim-rectangle-8-12-yrs-hooper-memphis-hooper-hp-s16087-c1-sunglasses_8-12_hp_sun_pid_211015_2262_00388_09may24.jpg",
            alt: "Hooper Memphis side view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//model/h/i/yellow-transparent-multicolour-grey-gradient-full-rim-round-5-8-yrs-hooper-memphis-hooper-hp-e16087-c1-sunglasses_2_nov_kids_shoot350607_211015_11_nov23.jpg",
            alt: "Hooper Memphis on model",
          },
        ],
      },
    ],
    specs: {
      material: "TR90",
      shape: "Rectangle",
      type: "Full Rim",
      dimensions: "46-19-130",
      weight: "22 gm",
      lensWidth: "46 mm",
      bridgeWidth: "19 mm",
      templeLength: "130 mm",
    },
    sizes: ["Kids (8-12 yrs)"],
    lensOptions: sunglassLensOptions,
  },
  {
    slug: "vincent-chase-met-effect-round",
    name: "MET Effect Polarized Round",
    brand: "Vincent Chase",
    model: "VC S15398-C2",
    description:
      "Classic round polarized sunglasses in silver stainless steel. The Met Effect offers a timeless shape with premium polarized lenses for superior clarity.",
    price: 1450,
    originalPrice: 2400,
    category: "sunglasses",
    subcategory: "unisex",
    gender: "Unisex",
    tag: "Trending",
    colors: [
      {
        name: "Silver",
        hex: "#c0c0c0",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-grey-full-rim-round-vincent-chase-polarized-met-effect-vc-s15398-c2-sunglasses_g_0999_02_02_23.jpg",
            alt: "Vincent Chase Met Effect front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-grey-full-rim-round-vincent-chase-polarized-met-effect-vc-s15398-c2-sunglasses_g_0998_02_02_23.jpg",
            alt: "Vincent Chase Met Effect angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-grey-full-rim-round-vincent-chase-polarized-met-effect-vc-s15398-c2-sunglasses_206745_29_1_2026.png",
            alt: "Vincent Chase Met Effect on model front",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-grey-full-rim-round-vincent-chase-polarized-met-effect-vc-s15398-c2-sunglasses_206745_1_3feb25.png",
            alt: "Vincent Chase Met Effect on model side",
          },
        ],
      },
    ],
    specs: {
      material: "Stainless Steel",
      shape: "Round",
      type: "Full Rim",
      dimensions: "50-22-143",
      weight: "20 gm",
      lensWidth: "50 mm",
      bridgeWidth: "22 mm",
      templeLength: "143 mm",
    },
    sizes: ["M"],
    lensOptions: sunglassLensOptions,
  },

  // ─── SPORT EYEWEAR ────────────────────────────────────────────
  {
    slug: "vincent-chase-night-riding-biking",
    name: "Drive Night Riding Glasses",
    brand: "Vincent Chase",
    model: "VC S16954-C1",
    description:
      "High-contrast amber lenses designed for night riding and low-light cycling. The wrap-around rectangle frame provides full coverage with UV400 protection.",
    price: 1200,
    originalPrice: 1800,
    category: "sport-eyewear",
    subcategory: "biking",
    gender: "Unisex",
    tag: "Sport",
    colors: [
      {
        name: "Amber Black",
        hex: "#d4a017",
        bubbleImage:
          "https://ds-static.lenskart.com/product_color_bubble_images/6b15e1ec-6af9-40dd-a9ac-92f240e55f93_bubble.png",
        images: [
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/yellow-black-full-rim-rectangle--square-vincent-chase-night-riding-glasses-vc-s16954-c1-sunglasses_img_2309_18_09-2025.jpg",
            alt: "Night Riding Glasses front view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/yellow-black-full-rim-rectangle--square-vincent-chase-night-riding-glasses-vc-s16954-c1-sunglasses_img_2308_18_09-2025.jpg",
            alt: "Night Riding Glasses angle view",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/amber-black-full-rim-rectangle-vincent-chase-lenskart-drive-vc-s16954-sunglasses_217141_1_19_02_2026.png",
            alt: "Night Riding Glasses on model front",
          },
          {
            url: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//v/i/amber-black-full-rim-rectangle-vincent-chase-lenskart-drive-vc-s16954-sunglasses_217141_2_19_02_2026.png",
            alt: "Night Riding Glasses on model side",
          },
        ],
      },
    ],
    specs: {
      material: "Polycarbonate",
      shape: "Rectangle (Wrap)",
      type: "Full Rim",
      dimensions: "61-16-129",
      weight: "26 gm",
      lensWidth: "61 mm",
      bridgeWidth: "16 mm",
      templeLength: "129 mm",
    },
    sizes: ["L"],
    lensOptions: sunglassLensOptions,
  },
  {
    slug: "rayban-aviator-rb3025",
    name: "Aviator Classic RB3025",
    brand: "Ray-Ban",
    model: "RB3025 W3277",
    description:
      "The iconic Ray-Ban Aviator in dark ruthenium silver with grey mirror lenses. Originally designed for US aviators, this timeless style offers SPF3 sun protection — perfect for mountaineering and high-altitude conditions.",
    price: 24200,
    originalPrice: 34600,
    category: "sport-eyewear",
    subcategory: "mountaineering",
    gender: "Unisex",
    tag: "Premium",
    colors: [
      {
        name: "Silver Mirror",
        hex: "#a8a8a8",
        images: [
          {
            url: "https://cdn.prosystem.com.bd/content/Migration/originals/eee5debd-e368-43e0-8b1c-114db0cb6bad.png",
            alt: "Ray-Ban Aviator front view",
          },
          {
            url: "https://cdn.prosystem.com.bd/content/Migration/originals/577fd606-9b77-4d22-9261-4c0d815b6c43.jpg",
            alt: "Ray-Ban Aviator perspective view",
          },
          {
            url: "https://cdn.prosystem.com.bd/content/Migration/originals/e7b1bfeb-c421-42db-a8f6-6724ec1a76b8.png",
            alt: "Ray-Ban Aviator side view",
          },
          {
            url: "https://cdn.prosystem.com.bd/content/Migration/originals/0e0845c2-3f31-4931-82be-8fcd0ba9af6b.png",
            alt: "Ray-Ban Aviator folded view",
          },
        ],
      },
    ],
    specs: {
      material: "Metal",
      shape: "Aviator",
      type: "Full Rim",
      dimensions: "58-14-140",
      weight: "25 gm",
      lensWidth: "58 mm",
      bridgeWidth: "14 mm",
      templeLength: "140 mm",
    },
    sizes: ["M"],
    lensOptions: sunglassLensOptions,
  },
  {
    slug: "dukpion-mixed-color-magnetic",
    name: "Mixed Color Magnetic Sunglasses",
    brand: "Dukpion",
    model: "DKS06461",
    description:
      "Versatile magnetic clip-on sunglasses with interchangeable lenses — ideal for swimming and watersport activities. High-quality fiber and metal frame with polycarbonate lenses.",
    price: 2000,
    originalPrice: 4000,
    category: "sport-eyewear",
    subcategory: "swimming",
    gender: "Unisex",
    tag: "Sport",
    colors: [
      {
        name: "Mixed Color",
        hex: "#3a6ea5",
        images: [
          {
            url: "https://dukpion.com.bd/wp-content/uploads/2025/06/DKS06461-53-18-131-3999TK-2.jpg",
            alt: "Dukpion Magnetic Sunglasses front view",
          },
          {
            url: "https://dukpion.com.bd/wp-content/uploads/2025/06/DKS06461-53-18-131-3999TK-5.jpg",
            alt: "Dukpion Magnetic Sunglasses angle view",
          },
          {
            url: "https://dukpion.com.bd/wp-content/uploads/2025/06/DKS06461-53-18-131-3999TK-6.jpg",
            alt: "Dukpion Magnetic Sunglasses side view",
          },
          {
            url: "https://dukpion.com.bd/wp-content/uploads/2025/06/DKS06461-53-18-131-3999TK-7.jpg",
            alt: "Dukpion Magnetic Sunglasses detail view",
          },
        ],
      },
    ],
    specs: {
      material: "Fiber & Metal",
      shape: "Rectangle",
      type: "Full Rim",
      dimensions: "53-18-131",
      weight: "24 gm",
      lensWidth: "53 mm",
      bridgeWidth: "18 mm",
      templeLength: "131 mm",
    },
    sizes: ["M"],
    lensOptions: sunglassLensOptions,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsBySubcategory(
  category: string,
  subcategory: string
): Product[] {
  return products.filter(
    (p) => p.category === category && p.subcategory === subcategory
  );
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getSimilarProducts(
  product: Product,
  limit: number = 4
): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, limit);
}
