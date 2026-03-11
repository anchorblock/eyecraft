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

## Phase 3: Product & Commerce Flow — DONE

### 3.1 Product Data Layer (demo/static) — DONE
- TypeScript types: Product, CartItem, LensOption
- 11 demo products (1 per subcategory) with images from Lenskart/Dukpion/Opsis
- Prices in BDT (Bangladeshi Taka)
- React Context for cart state management

### 3.2 Product Listing Page (`/products/[category]/[subcategory]`) — DONE
- Grid layout with sidebar filters and pagination structure
- Product cards with wishlist heart icon
- Ready for more products later

### 3.3 Product Detail Page (`/product/[slug]`) — DONE
- Image gallery with crossfade animation (AnimatePresence)
- Auto-rotate images every 4 seconds
- Color swatch switching: in-page state swap
- 4 lens options as radio chips with dynamic price update:
  1. Frame Only
  2. Single Vision / Unifocal
  3. Progressive / Bifocal
  4. Zero Power with Anti-Blue Lens
- Frame specs table, size selector
- Add to Cart + WhatsApp order button
- Similar products carousel

### 3.4 Cart — DONE
- Slide-out drawer cart (opens on add-to-cart)
- Full cart page (`/cart`) with promo code (EYECRAFT10), order summary
- WhatsApp order option
- Proceed to Checkout linked to `/checkout`

### 3.5 Navbar — DONE
- Cart icon shows real item count, opens drawer
- Logo links to home
- Nav links work from any page (use `/#` prefix)

## Phase 4: Checkout Flow UI/UX — DONE

### 4.1 Checkout Page (`/checkout`) — DONE
- Single-page guest checkout (no account required)
- 3-section form: Contact Info, Delivery Address, Payment Method
- Contact: Full name, phone, email (optional)
- Address: Street, city dropdown (8 divisions), area, delivery zone
- Delivery zones: Inside Dhaka (৳70) / Outside Dhaka (৳120)
- Payment methods: COD (default), bKash, Nagad, Credit/Debit Card
- Order summary sidebar with item thumbnails
- Order confirmation page with order ID
- Trust signals: 100% Secure Checkout badge

### Design Decisions
- Dark theme kept as brand differentiator (all competitors use light mode)
- Dark = premium/luxury positioning (Tom Ford, Gentle Monster aesthetic)
- No dark/light toggle — no competitor does it, dilutes brand identity
- Checkout uses dark theme consistently (trust signals added for reassurance)
- No quick-add on product cards (eyewear needs configuration)
- 4 lens options only (research: 4-7 options is sweet spot)
- Color switching via in-page state (not separate URLs)
- Both drawer cart + full cart page

## Phase 5: Virtual Try-On — DEFERRED
- Simple "upload photo + overlay glasses" approach (not TensorFlow.js)
- Will implement later as a simpler MVP

## Phase 6: Mobile UX & Navigation — DONE

### 6.1 Mobile Responsiveness Audit & Fixes — DONE
- Audited all pages at Samsung S25 dimensions (360x780) using Playwright
- **Cart page**: Fixed promo code Apply button overflow, tighter padding/spacing, smaller quantity controls, compact item image
- **PDP**: Price section flex-wrap for discount badge, smaller lens option text, tighter padding
- **Checkout**: Responsive padding on all form sections (p-4 mobile, p-6 desktop)
- **Navbar**: Added cart icon with badge to mobile header (alongside hamburger)
- **Footer**: 2-column grid for link sections on mobile

### 6.2 Mobile Navigation Enhancement — DONE
- Research: Bottom tab bars are app-only pattern (Warby Parker, Lenskart apps); all premium eyewear mobile websites use sticky header + hamburger (Tom Ford, Gentle Monster, Ray-Ban, Oakley)
- **Smart sticky header**: Auto-hides on scroll down, reappears on scroll up (like Gentle Monster)
- **Premium full-screen mobile menu**: Large Playfair Display typography, staggered animations, body scroll lock, secondary links (Search, Wishlist, Cart), bottom tagline
- **Floating WhatsApp button**: Appears after scrolling past hero, green circle with tooltip on first appearance, links to WhatsApp order chat
- **44px minimum touch targets**: All interactive elements meet accessibility minimum

### 6.3 Touch-Friendly Interactions — DONE (covered by 6.1 + 6.2)

---

## Constraints
- No female model images anywhere on the site
- Product catalog shows glasses only (no people wearing them)
- Reduce model images overall — focus on the product
- Demo data only — no backend/database for now
- Images from Unsplash for hero/categories, from Lenskart/Dukpion/Opsis for product pages

## Image Sources
- **Lenskart** (static5.lenskart.com): Multi-angle product images + color variant bubble images
- **Dukpion** (dukpion.com.bd): BDT pricing reference, WhatsApp order pattern
- **Opsis** (opsis.com.bd / cdn.prosystem.com.bd): Brand variety (RayBan, Oakley, etc.)
