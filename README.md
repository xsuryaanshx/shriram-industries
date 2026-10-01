# AMI Website Factory

> **The Enterprise-Grade Digital Production Engine for Ami Group (Indore, India)**  
> High-performance, animation-rich, themeable static web applications built for rapid client onboarding, exceptional aesthetics, and zero-maintenance static hosting.

---

## 1. Executive Summary

**AMI Website Factory** is Ami Group’s internal web architecture platform designed to streamline the rapid delivery of luxury, boutique, and high-conversion client websites. Rather than building bespoke monolithic sites from scratch for every engagement, the Factory delivers:

- **30-Minute Client Spin-Up**: Fully swap brand identity, palette, copy, imagery, and navigation via a single strongly-typed configuration file (`src/config/site.ts`).
- **Editorial & Architectural Visual Quality**: Built-in luxury typography scales, dark/light editorial color palettes, refined spacing systems, and CSS variable themes.
- **Dual Animation Engine**: Declarative scroll-triggered transitions with **Framer Motion** paired with high-performance timeline/parallax sequences via **GSAP & ScrollTrigger**.
- **Atmospheric 3D Integration**: Hardware-accelerated Three.js canvas backgrounds with automatic WebGL detection and reduced-motion fallback.
- **Zero-Cost Static Hosting**: Optimized for **GitHub Pages** with GitHub Actions continuous deployment, SPA client-side routing, and modern asset bundling.

The inaugural reference implementation is **Atelier 27** — a luxury interior architecture and spatial design studio demo.

---

## 2. System Architecture & Design Principles

```
                    ┌───────────────────────────────┐
                    │    Client Config Provider     │
                    │   (src/config/site.ts)        │
                    └───────────────┬───────────────┘
                                    │
          ┌─────────────────────────┼─────────────────────────┐
          ▼                         ▼                         ▼
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│  Design Tokens   │      │ Component Suite  │      │ Motion & 3D Web  │
│ (src/styles/)    │      │ (src/components/)│      │ (src/animations) │
│ - CSS Variables  │      │ - Navigation     │      │ - Framer Motion  │
│ - Typography     │      │ - Cinematic Hero │      │ - GSAP Parallax  │
│ - Data Themes    │      │ - Portfolio Grid │      │ - Three.js/R3F   │
└─────────┬────────┘      └─────────┬────────┘      └─────────┬────────┘
          │                         │                         │
          └─────────────────────────┼─────────────────────────┘
                                    ▼
                    ┌───────────────────────────────┐
                    │     Vite + React 19 Build     │
                    │   (Tree-shaken, Chunks, SPA)  │
                    └───────────────┬───────────────┘
                                    ▼
                    ┌───────────────────────────────┐
                    │   GitHub Pages / CDN Deploy   │
                    │   (Zero server maintenance)   │
                    └───────────────────────────────┘
```

### Core Architecture Tenets
1. **Config-Driven Singularity**: Brand content never mixes with presentation code. All client-specific data (contact, copy, socials, navigation, projects) lives in typed configuration objects.
2. **Graceful Degradation & Inclusivity**:
   - `prefers-reduced-motion: reduce` unconditionally turns off heavy animations and counters across Framer Motion and GSAP.
   - WebGL capability checks gracefully bypass 3D canvases on low-power devices.
   - Screen-reader accessible semantic HTML with keyboard skip links and ARIA landmarks.
3. **Chunk Splitting & Instant LCP**:
   - Homepage is eager-loaded for instant Largest Contentful Paint.
   - Three.js, GSAP, and sub-pages (About, Projects, Services, Contact) are split into lazy-loaded chunks.

---

## 3. Technology Stack & Justifications

| Technology | Role | Justification |
|------------|------|---------------|
| **React 19** | Component Core | Modern concurrent rendering, enhanced ref handling, and seamless component lifecycle. |
| **Vite 8** | Build Tool & Bundler | Instant cold starts, lightning-fast HMR, Rollup production chunking, and modern ESM support. |
| **TypeScript 6** | Type Safety | Strict typing prevents runtime crashes across client configs and schema definitions. |
| **Tailwind CSS v4** | Utility Styling | Lightning-fast `@tailwindcss/vite` integration; utility-first classes layered over CSS variables. |
| **Framer Motion 13** | Declarative Animation | Viewport triggers, layout transitions, exit/enter presence, and spring physics. |
| **GSAP 3 + ScrollTrigger** | Orchestrated Motion | Micro-precise timeline scrubs, parallax scroll effects, and performance-tuned batch triggers. |
| **Three.js & R3F** | Creative 3D Canvas | Ambient particle fields, interactive spatial backgrounds, and declarative Three.js scenes. |
| **React Router 7** | Client-Side Routing | Full SPA routing configured with base path support for GitHub Pages repositories. |
| **Oxlint** | High-Speed Linting | Rust-based linter ensuring clean hooks, state management, and strict code hygiene. |

---

## 4. Quick Start Guide

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Start local development server (with HMR)
npm run dev

# 3. Open browser at http://localhost:5173
```

### Production Build & Preview
```bash
# 1. Run typechecks and production bundle build
npm run build

# 2. Preview the production build locally
npm run preview

# 3. Run high-speed linter
npm run lint
```

---

## 5. Project Structure Tour

```
Website_Suite/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg               # Minimalist studio brand mark
│   ├── robots.txt                # Search engine crawler directives
│   └── images/
│       └── projects/             # High-res client photography & assets
├── src/
│   ├── animations/
│   │   ├── gsap/
│   │   │   └── utils.ts          # GSAP ScrollTrigger & parallax utilities
│   │   └── motion/
│   │       └── variants.ts       # Reusable Framer Motion variants & easing curves
│   ├── components/
│   │   ├── cta/
│   │   │   └── CTASection.tsx    # Conversion callout banner
│   │   ├── footer/
│   │   │   └── ContactFooter.tsx # Architectural footer with social and legal
│   │   ├── heroes/
│   │   │   └── CinematicHero.tsx # Fullscreen hero with atmospheric typography
│   │   ├── navigation/
│   │   │   └── TransparentNavbar.tsx # Scroll-reactive header with mobile menu
│   │   ├── portfolio/
│   │   │   └── ProjectCard.tsx   # Editorial masonry cards with hover reveal
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx  # Brand philosophy & credentials narrative
│   │   │   ├── ProcessSection.tsx # 4-step chronological design method
│   │   │   ├── ServicesSection.tsx # Architectural capabilities & specialties
│   │   │   └── StatsSection.tsx  # Animated metric counters with viewport trigger
│   │   ├── testimonials/
│   │   │   └── TestimonialsSection.tsx # Client reviews & architectural press quotes
│   │   └── ui/
│   │       ├── MotionDiv.tsx     # Viewport-aware Framer Motion wrappers
│   │       └── SEO.tsx           # Document title, description, OG, and JSON-LD
│   ├── config/
│   │   ├── site.ts               # Master active site configuration switch
│   │   └── types.ts              # Type definitions for projects, services, config
│   ├── data/
│   │   └── atelier27.ts          # Atelier 27 demo portfolio dataset
│   ├── hooks/
│   │   └── index.ts              # useReducedMotion, useScrollY, useWebGL, etc.
│   ├── layouts/
│   │   └── RootLayout.tsx        # Shell layout with Navbar, Footer, and SkipLink
│   ├── lib/
│   │   └── utils.ts              # cn (clsx + twMerge), imagePath, helpers
│   ├── pages/
│   │   ├── AboutPage.tsx         # Dedicated studio history & leadership page
│   │   ├── ContactPage.tsx       # Studio inquiry form with validation & address
│   │   ├── HomePage.tsx          # Master landing experience
│   │   ├── ProjectsPage.tsx      # Filterable portfolio showcase
│   │   └── ServicesPage.tsx      # Comprehensive architectural offerings
│   ├── styles/
│   │   └── index.css             # Design tokens, themes, typography, utilities
│   ├── three/
│   │   └── scenes/
│   │       └── ParticleBackground.tsx # R3F ambient particle canvas
│   ├── App.tsx                   # React Router route registry
│   ├── main.tsx                  # Application entry point
│   └── vite-env.d.ts
├── index.html                    # HTML5 shell with Google Fonts & meta tags
├── package.json
├── tsconfig.json
└── vite.config.ts                # Tailwind v4 plugin, path aliases, chunk strategy
```

---

## 6. Customization Guide: Spin Up a New Client Site in 30 Minutes

The entire application was designed from day one to be multi-tenant and modular. To create a new client site:

### Step 1: Define the Theme Tokens in `src/styles/index.css`
Add a new `[data-theme="client-name"]` selector with their brand colors and font variables:
```css
[data-theme="new-client"] {
  --color-background: #0f1416;
  --color-foreground: #f4f6f7;
  --color-accent: #38bdf8;
  --color-accent-subtle: rgba(56, 189, 248, 0.12);
  --color-surface: #182226;
  --color-muted: #8ca3ad;
  --color-border: rgba(255, 255, 255, 0.08);
}
```

### Step 2: Create the Client Data File (`src/data/newClient.ts`)
Duplicate `src/data/atelier27.ts` and fill in the client’s real or demo projects, services, statistics, and testimonials:
```typescript
import type { Project, Service, Stat, Testimonial } from '@/config/types';

export const newClientProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Skyline Penthouse',
    category: 'Residential',
    year: '2026',
    location: 'Mumbai, India',
    description: 'High-altitude luxury spatial renovation.',
    image: '/images/projects/skyline.jpg',
    featured: true,
  },
  // ...
];
```

### Step 3: Configure `src/config/site.ts`
Export the new configuration in `src/config/site.ts`:
```typescript
export const newClientConfig: SiteConfig = {
  businessName: 'Apex Architecture',
  tagline: 'Modernity Elevated',
  description: 'Contemporary architectural design studio.',
  theme: 'new-client',
  contact: {
    email: 'contact@apex.in',
    phone: '+91 (731) 555-0199',
    address: 'Indore, MP, India',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
  },
  // ...
};

// Toggle the active site export:
export const siteConfig = newClientConfig;
```

### Step 4: Update Theme Attribute in `src/main.tsx`
Ensure `document.documentElement.setAttribute('data-theme', siteConfig.theme)` is set (which is already automated based on `siteConfig.theme`).

---

## 7. Animation System Documentation

### Framer Motion (`src/animations/motion/variants.ts`)
Contains purpose-built, pre-calibrated motion variants:
- `fadeIn`: Subtle element appearance (`opacity: 0` to `1`).
- `fadeUp`: Luxury editorial entrance (`y: 30px` to `0`).
- `staggerContainer` & `staggerItem`: Staggered lists, grids, and cards.
- `imageReveal`: Architectural curtain reveal via `clip-path: inset()`.
- `lineExpand`: Precision divider line growth.

#### Viewport-Aware Motion Wrapper
Wrap any JSX element in `<MotionDiv variants={fadeUp}>` or `<AnimatedSection>` for automatic trigger when 20% into view.

### GSAP & ScrollTrigger (`src/animations/gsap/utils.ts`)
- `gsapParallax(target, trigger, speed)`: High-performance background image parallax.
- `gsapTextReveal(target, trigger)`: Split character/word staggered reveal.
- `gsapCounter(target, endValue, duration)`: Scrubbable numeric count-up.
- `killAllScrollTriggers()`: Clean memory teardown when unmounting components.

---

## 8. 3D Canvas Guidelines (Three.js / React Three Fiber)

1. **Hardware Detection**: `useWebGL()` hook confirms GPU canvas support before attempting to mount the WebGL context.
2. **Deterministic Particle Distribution**: In `ParticleBackground.tsx`, particle coordinates are generated via a pure pseudo-random algorithm, preventing hydration mismatches and unwanted rerender recalculations.
3. **Performance Budgeting**:
   - `dpr={[1, 1.5]}` prevents 3x/4x retina displays from crushing mobile GPUs.
   - `antialias: false` for background particle passes to save memory.
   - `depthWrite: false` and `transparent: true` for zero z-buffer thrashing.
4. **Graceful Fallback**: If WebGL is unavailable or motion is reduced, a CSS radial gradient background is rendered seamlessly.

---

## 9. Deployment Guide (GitHub Pages & Custom Domains)

### GitHub Pages Setup
1. Push this repository to GitHub.
2. Navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow triggers on push to `main` and automatically:
   - Sets `VITE_BASE_PATH` to your repository subpath.
   - Runs `npm ci` and `npm run build`.
   - Copies `dist/index.html` to `dist/404.html` (for direct SPA URL refreshes).
   - Deploys the static assets to GitHub Pages CDN.

### Custom Domain Configuration
1. In repository **Settings > Pages > Custom domain**, enter your domain (e.g., `atelier27.amigroup.in`).
2. Add a `CNAME` record in your DNS provider pointing to `<username>.github.io`.
3. Set `VITE_BASE_PATH=""` in GitHub Actions repository variables.

---

## 10. Accessibility & SEO Checklist

- [x] **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`, and `<article>` tags.
- [x] **Skip Navigation**: Accessible keyboard skip link (`#main-content`) visible on focus.
- [x] **Heading Hierarchy**: Strict `h1` -> `h2` -> `h3` hierarchy across all pages.
- [x] **Contrast Compliance**: WCAG AA contrast ratio (> 4.5:1) for all text against dark surfaces.
- [x] **Dynamic SEO Component (`src/components/ui/SEO.tsx`)**:
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`).
  - Twitter Card meta tags.
  - Canonical URL links.
  - JSON-LD structured schema (`LocalBusiness` / `ArchitectureStudio`).
- [x] **ARIA States**: `aria-expanded`, `aria-label`, and `role="status"` applied on dynamic controls.

---

## 11. Performance Optimization Checklist

- [x] **Manual Rollup Chunks**: Splitting `vendor`, `three`, `motion`, and `gsap` bundles.
- [x] **Lazy Route Splitting**: `React.lazy()` and `Suspense` for secondary pages (About, Projects, Services, Contact).
- [x] **Zero Layout Shifts**: Image containers have explicit aspect ratios (`aspect-[4/3]`, `aspect-[16/10]`).
- [x] **CSS Purging**: Tailwind v4 engine compiles only actively referenced utilities (~35KB uncompressed CSS).
- [x] **Preconnected Web Fonts**: `preconnect` tags for Google Fonts in `index.html`.

---

## 12. Maintenance & Troubleshooting

| Issue | Cause | Resolution |
|-------|-------|------------|
| **404 on page reload on GitHub Pages** | Server looking for physical file matching SPA route | Ensure `cp dist/index.html dist/404.html` is in the CI workflow, and `<BrowserRouter basename={import.meta.env.BASE_URL}>` is configured in `App.tsx`. |
| **Blank canvas / WebGL error** | Device does not support WebGL or hardware acceleration disabled | Handled automatically via `useWebGL()` fallback to CSS gradient. |
| **Assets fail to load (404 on images/CSS)** | Incorrect base URL path on sub-directory hosting | Configure `VITE_BASE_PATH: /your-repo/` in Vite config or environment variables. Use `imagePath()` utility for project media. |
| **Animations stutter on mobile** | High particle counts or simultaneous transforms | Reduce particle count in `<ParticleBackground count={60} />` and ensure mobile viewport utilizes Framer Motion `will-change: transform`. |

---

*Built with precision for Ami Group.*
