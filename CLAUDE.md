# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev          # Start dev server (Next.js, port 3000)
npm run build        # Production build (uses --webpack flag)
npm run start        # Start production server
npm run lint         # Run ESLint
```

There are no tests in this project.

## Architecture

**Camper VE** is a Venezuelan clothing/accessories e-commerce storefront. It is a fully static Next.js 16 App Router site — no backend, no API routes, no database. All product data lives in TypeScript files.

### Routes

| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Landing page |
| `/catalogo` | `src/app/catalogo/page.tsx` | Full catalog grid |
| `/catalogo#producto-{slug}` | — | Anchor used by "Back" button from product page |
| `/producto/[slug]` | `src/app/producto/[slug]/page.tsx` | Product detail, server component with `generateStaticParams` |
| `/legal` | `src/app/legal/` | Static legal page |

### Data Layer

All product data is in `src/lib/data/categories/` — one file per category (`franelas.ts`, `gorras.ts`, `relojes.ts`, `lentes.ts`, `perfumes.ts`, `common.ts`). They are aggregated in `src/lib/collectionData.ts`, which also exports helper functions (`getProductBySlug`, `getCategoryByProductSlug`, etc.).

The core types are in `src/lib/types.ts`. There are **two product structures**:

- **Classic** (`colors` + `gallery`): One shared gallery, colors each have a single image that maps to an index in that gallery.
- **Variants** (`variants[]`): Each color variant has its own `gallery[]` and `sizes[]`. Used by franelas. When adding a new franela, use this structure.

### State

`CartContext` (`src/context/CartContext.tsx`) is the only global state. It persists the cart to `localStorage` under key `camper_cart`. It wraps the entire app via `src/app/layout.tsx`.

### Styling

Tailwind CSS v4 with PostCSS. Custom brand colors (`brand-gold`, `brand-nylon`, `brand-denim`) and fonts (`--font-poppins`, `--font-caveat`) are defined in `src/app/globals.css`. Use `cn()` from `src/lib/utils.ts` to merge class names.

### Component Pattern

Page components in `src/app/` are Server Components. Interactive components in `src/components/` use `'use client'`. `ProductDetail` owns the selected color/index state and passes handlers down to `ImageGallery` and `ProductInteractions`.
