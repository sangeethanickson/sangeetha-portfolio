import { useEffect, useRef } from 'react';

// Lerp helper — blends current toward target by factor each frame.
const lerp = (a, b, t) => a + (b - a) * t;

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    // Use viewport center as starting position so glow doesn't
    // flash from (0,0) to cursor on first move.
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId;
    let dirty = false;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dirty = true;
    };

    // Single RAF loop — lerp toward target and paint only when dirty.
    // This completely decouples cursor tracking from scroll/repaint.
    const tick = () => {
      if (dirty) {
        const newX = lerp(currentX, targetX, 0.12);
        const newY = lerp(currentY, targetY, 0.12);

        // Only write to DOM when moved more than 0.2px (avoids sub-pixel thrash).
        if (Math.abs(newX - currentX) > 0.2 || Math.abs(newY - currentY) > 0.2) {
          currentX = newX;
          currentY = newY;
          // Repaint is entirely on the spotlight's own compositor layer.
          el.style.background = `radial-gradient(
            600px circle at ${currentX}px ${currentY}px,
            rgba(139, 92, 246, 0.11),
            transparent 40%
          )`;
        } else {
          // Settled — stop looping until next mousemove.
          dirty = false;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden />;
}
