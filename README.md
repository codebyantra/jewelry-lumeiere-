# Lumière — Luxury Jewelry E-Commerce (Frontend)

A premium, dark-themed jewelry e-commerce frontend built with React 19,
JavaScript/JSX only, and external CSS (no Tailwind/Bootstrap/UI kits).

## Stack
- React 19 + React Router 6
- Framer Motion (page transitions, reveals, counters)
- GSAP + ScrollTrigger (cinematic pinned Hero sequence)
- Lenis (smooth scrolling, synced to ScrollTrigger)
- Swiper (Best Sellers + Testimonials sliders)
- react-icons (Feather icon set)
- Vite

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   one folder per component, each with a .jsx + .css
  pages/        Home, Shop, Collections, Product, Wishlist, Cart, About
  context/      CartContext — cart + wishlist state (React context)
  data/         mock product/category/testimonial data
  hooks/        useLenis — smooth-scroll setup
  styles/       page-level CSS (Shop, Product, Cart, Wishlist, Collections, About)
  index.css     design tokens (colors, type scale, the facet-corner signature motif)
```

## Design notes

- **Palette**: `#0F0F10 / #141414 / #1A1A1A` (dark base) + `#C9A14A` gold,
  `#F6E7C1` champagne, `#FFFFFF`.
- **Type**: Cormorant Garamond (display) + Plus Jakarta Sans (UI/body).
- **Signature motif**: a "gem-facet corner" — cards, buttons, and image
  frames have one diagonally clipped corner traced in a thin gold line
  (`.facet` / `.facet-frame` in `index.css`), standing in for a generic
  rounded card and tying back to a cut-gemstone silhouette.
- **Hero**: `components/Hero/Hero.jsx` pins the viewport with
  `ScrollTrigger` and scrubs a single timeline through three stages —
  scattered gem charms assembling into a necklace, the necklace settling
  onto a model, then ring/bracelet/earrings flying off her into
  product-showcase cards. All images are temporary Unsplash placeholders —
  swap the URLs in `src/data/products.js` and `Hero.jsx` for real product
  photography before shipping.
- Reduced-motion users automatically get near-instant transitions
  (see the `prefers-reduced-motion` block in `index.css`).

## Swapping in real product photography

Product/category imagery lives in `src/data/products.js`. The Hero's
necklace/model imagery is inline in `src/components/Hero/Hero.jsx` — search
for the `images.unsplash.com` URLs and replace with your own assets (drop
files in `src/assets/images/` and import them, or point at your CDN).
"# jewelry-lumeiere-" 
