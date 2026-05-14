// ─────────────────────────────────────────────────────────────────
// MOTION SYSTEM — cinematic, premium easing aligned with Apple/Linear.
// Key principle: fast lift-off, long tail deceleration.
// ─────────────────────────────────────────────────────────────────

// The canonical "premium" cubic-bezier used by Vercel, Linear, Apple.
// Snappy start → silky long tail.
export const EASE_OUT_EXPO  = [0.16, 1, 0.3, 1];
// Slightly softer version for text/content reveals.
export const EASE_OUT_QUART = [0.25, 1, 0.5, 1];
// Used for micro-interactions: fast in, slight overshoot feel.
export const EASE_OUT_BACK  = [0.34, 1.56, 0.64, 1];

// ─── Core reveal variants ───────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: EASE_OUT_EXPO,
      delay: i * 0.055,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: EASE_OUT_QUART },
  },
};

// Parent orchestrator — drives child stagger with tighter spacing.
// Lower staggerChildren = snappier group feel without feeling rushed.
export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.04,
    },
  },
};

// Tighter stagger for dense grids (Projects, Skills cards).
export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_OUT_EXPO },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

// ─── Page / route transitions ────────────────────────────────────
// Pure opacity — no y offset to prevent layout jumps.
// The enter fade is faster than exit so it feels snappy not sluggish.
export const pageTransition = {
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  exit:       { opacity: 0 },
  transition: { duration: 0.25, ease: EASE_OUT_QUART },
};

// ─── Viewport defaults ───────────────────────────────────────────
// A single canonical viewport config — avoids hundreds of different
// margin values that each create a separate IntersectionObserver.
export const VIEWPORT = { once: true, margin: '-80px 0px' };
