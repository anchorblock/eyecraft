# EyeCraft UX Update Plan

## Phase 1: Hero Section — DONE
- Single looping video background with cinematic overlays
- Left-aligned content with stats bar and trust strip
- Mobile responsiveness fix (spacing, font sizes, trust strip)

## Phase 2: Browse by Category Restructure — DONE
- Full-width stacked vertical cards with parallax (Warby Parker style)
- 3 categories: Eyeglasses, Sunglasses, Sport Eyewear
- Subcategory tags (Kids/Male/Female/Unisex for glasses, Biking/Mountaineering/Swimming for sport)
- Browse by frame shape section with SVG icons
- Images sourced from Unsplash (product-only, no female models)

## Phase 3: Product & Commerce Flow — IN PROGRESS

### 3.1 Product Data Layer (demo/static)
- TypeScript types: Product, CartItem, LensOption
- 11 demo products (1 per subcategory) with images from Lenskart/Dukpion/Opsis
- Prices in BDT (Bangladeshi Taka)
- React Context for cart state management

### 3.2 Product Listing Page (`/products/[category]/[subcategory]`)
- Grid layout with pagination structure (1 product per subcategory for now)
- Product cards with hover image angle cycling (3-4 angles)
- Wishlist heart icon (top-right, outline → filled toggle)
- Ready for more products later

### 3.3 Product Detail Page (`/products/[slug]`)
- Image gallery: 3-4 angle thumbnails with main image, auto-rotate
- Color swatch switching: in-page state swap (not URL change), swap image set + color name
- 4 lens options as radio chips with dynamic price update:
  1. Frame Only
  2. Single Vision / Unifocal
  3. Progressive / Bifocal
  4. Zero Power with Anti-Blue Lens
- Frame specs table (material, dimensions, weight, shape)
- Size selector
- Add to Cart button
- WhatsApp order button (pre-filled message with product + lens selection)
- Similar products carousel

### 3.4 Cart
- Slide-out drawer cart (opens on add-to-cart)
- Full cart page (`/cart`) with prescription details, promo code field
- WhatsApp order option

### 3.5 Landing Page Updates
- Tab filters on ProductShowcase (Bestsellers / New Arrivals / Trending / On Sale)
- Wishlist hearts on product cards
- Link product cards to PDP routes
- Hover angle cycling on landing page product cards

### Image Sources
- **Lenskart** (static5.lenskart.com): Best for multi-angle product images + color variant bubble images
- **Dukpion** (dukpion.com.bd): BDT pricing reference, WhatsApp order pattern
- **Opsis** (opsis.com.bd / cdn.prosystem.com.bd): Brand variety (RayBan, Oakley, etc.)

### Design Decisions
- No quick-add on product cards (eyewear needs configuration → click through to PDP)
- 4 lens options only, no dropdowns/sub-tiers (research: 4-7 options is sweet spot)
- Color switching via in-page state (not separate URLs like Lenskart)
- Both drawer cart + full cart page

## Phase 4: Checkout Flow UI/UX
- 3-step guest checkout flow
- bKash / COD payment options
- WhatsApp order integration

## Phase 5: Virtual Try-On Planning
- MVP with TensorFlow.js face detection
- Camera feed with frame overlay

## Phase 6: Mobile UX & Navigation
- Bottom tab bar navigation
- Sticky header with scroll behavior
- Touch-friendly interactions throughout

---

## Constraints
- No female model images anywhere on the site
- Product catalog shows glasses only (no people wearing them)
- Reduce model images overall — focus on the product
- Demo data only — no backend/database for now
- Images from Unsplash for hero/categories, from Lenskart/Dukpion/Opsis for product pages
