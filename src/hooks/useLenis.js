import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

// Exponential ease-out — the same curve Apple/Linear use.
// Feels fast at the start, then decelerates with natural inertia.
const exponentialEase = (t) => 1 - Math.pow(2, -10 * t);

// Singleton so HMR reloads don't stack instances.
let _lenis = null;

export function getLenis() {
  return _lenis;
}

export default function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Destroy any stale instance from HMR
    if (_lenis) {
      _lenis.destroy();
      _lenis = null;
    }

    _lenis = new Lenis({
      // lerp: direct interpolation factor per frame — lower = silkier, higher = snappier.
      // 0.1 is the sweet spot for a floating, weightless feel without slug.
      lerp: 0.1,

      // smoothWheel true = intercept native wheel and interpolate it.
      smoothWheel: true,

      // wheelMultiplier: scroll distance per wheel tick.
      // Slightly less than default (1.0) keeps it from feeling jumpy on high-DPI mice.
      wheelMultiplier: 0.9,

      // No lerp on touch — native iOS/Android momentum is already perfect.
      smoothTouch: false,
      touchMultiplier: 1.5,

      // syncTouch: sync touch-based scroll to Lenis RAF for consistent feel.
      syncTouch: false,

      // easing is used for programmatic scrollTo() calls (e.g. nav links).
      // Not applied to wheel/touch (lerp handles that).
      easing: exponentialEase,

      // Prevent scroll beyond edges (matches native feel).
      overscroll: true,
    });

    // Expose on window for GSAP/external sync if needed.
    window.__lenis = _lenis;

    // Single high-fidelity RAF loop.
    // Using the DOMHighResTimeStamp from RAF ensures frame-accurate timing,
    // which prevents the accumulated-error jitter you get from Date.now().
    let rafId;
    const raf = (time) => {
      _lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Anchor-link interception — let Lenis animate to the target.
    const handleAnchor = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      if (id && id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          // 72px offset for the fixed navbar height.
          _lenis.scrollTo(el, {
            offset: -72,
            duration: 1.4,
            easing: exponentialEase,
          });
        }
      }
    };
    document.addEventListener('click', handleAnchor);

    return () => {
      document.removeEventListener('click', handleAnchor);
      cancelAnimationFrame(rafId);
      if (_lenis) {
        _lenis.destroy();
        _lenis = null;
        window.__lenis = null;
      }
    };
  }, []);
}
