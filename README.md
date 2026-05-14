# Sangeetha N — Portfolio

A premium, modern, dark-aesthetic portfolio for **Sangeetha N**, Full Stack Developer.
Built with React 18, Vite, Tailwind CSS, Framer Motion, Lenis smooth scroll, and Lucide icons.

---

## ✨ Features

- **Premium dark UI** with glassmorphism, animated gradients, and subtle particles
- **Hero** with animated typewriter, floating tech chips, gradient ring portrait, status badge
- **About** with animated stat cards and engineering pillars
- **Skills** with categorized animated progress bars + dynamic tech marquee
- **Experience** timeline with alternating entries
- **Projects** showcase — 6 enterprise-grade case studies (Marine Emissions, Maid to Sparkle, CrediDesk, AI Chicken Farm, Stock Advisors, THA Network)
- **Achievements** with scroll-triggered animated counters
- **Contact** with copy-email, social links, resume download, and message form
- **Command palette** (⌘K / Ctrl+K)
- **Scroll progress bar**, cursor glow spotlight, animated route transitions
- **Lenis** buttery smooth scrolling with anchor-link interception
- **Magnetic buttons**, staggered reveals, reduced-motion support
- **SEO**: meta tags, Open Graph, Twitter card, JSON-LD Person schema
- **Performance**: code-splitting (`react`, `motion`, `icons` chunks), lazy reveal animations
- **Accessibility**: keyboard-friendly, focus-visible rings, semantic landmarks

---

## 🧱 Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** with custom design tokens
- **Framer Motion** for staggered, scroll-triggered, page-transition animations
- **Lenis** for smooth scrolling
- **React Router** for routing + animated transitions
- **react-helmet-async** for SEO
- **Lucide React** for icons

---

## 📁 Folder structure

```
src/
├── animations/        # Reusable Framer Motion variants
├── components/
│   ├── common/        # Loader, Particles, ScrollProgress, CursorGlow, CommandPalette, ...
│   ├── layout/        # Navbar, Footer
│   └── sections/      # Hero, About, Skills, Experience, Projects, Achievements, Contact
├── constants/         # profile, skills, experience, projects, achievements
├── hooks/             # useLenis, useTypewriter, useCountUp, useMagnetic
├── pages/             # Home, NotFound
├── styles/            # global.css (Tailwind layers + tokens)
├── utils/             # cn, helpers
├── App.jsx            # Routes + transitions + global layout
└── main.jsx           # Entry, BrowserRouter, HelmetProvider
```

---

## 🚀 Local development

```bash
# 1. Install
npm install

# 2. Dev server (http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Preview production build
npm run preview
```

Node 18+ recommended.

---

## 🖼 Replacing the portrait & resume

The Hero section ships with a tasteful gradient SVG placeholder. To use a real photo:

1. Drop your photo at `public/profile.jpg` (square crop, ≥800×800).
2. In `src/components/sections/Hero.jsx`, replace `<PortraitPlaceholder />` with:
   ```jsx
   <img
     src="/profile.jpg"
     alt="Sangeetha N"
     loading="lazy"
     className="h-full w-full object-cover"
   />
   ```

To enable the resume download, drop your file at `public/Sangeetha-N-Resume.pdf`. The path
is referenced by `profile.resumeUrl` in `src/constants/profile.js` — change it there if
you prefer a different filename.

---

## 🌐 Deployment

This is a static SPA — deploy to any host:

- **Vercel / Netlify**: import the repo, framework “Vite”, build `npm run build`, output `dist`
- **GitHub Pages**: build, publish `dist/` (set base if not deploying to root)
- **Cloudflare Pages**: build command `npm run build`, output `dist`

For SPA routing, ensure your host falls back to `/index.html` for unknown routes.

---

## 🎨 Customization

- **Colors / gradients**: `tailwind.config.js` (`colors`, `backgroundImage`)
- **Typography**: change Google Fonts link in `index.html` and `fontFamily` tokens
- **Sections content**: edit constants under `src/constants/*`
- **Animation behavior**: tweak variants in `src/animations/variants.js`

---

## 🧠 Notes

- The `@tailwind` / `@apply` warnings shown by some IDEs in `global.css` are linter false-positives —
  they are processed correctly by PostCSS during build.
- `prefers-reduced-motion` is honored across Lenis, magnetic buttons, and CSS animations.

---

© Sangeetha N. Built with care.
