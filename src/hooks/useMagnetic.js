import { useEffect, useRef } from 'react';

// Physics constants — controls how the magnet feels.
const STIFFNESS = 0.18;   // Spring stiffness: how quickly it moves toward target
const DAMPING   = 0.72;   // Damping ratio: how much it resists overshooting
const REST_THRESHOLD = 0.02; // px — stop loop when this close to rest

export default function useMagnetic(strength = 0.25) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let velX = 0, velY = 0;
    let hovering = false;
    let rafId;
    let running = false;

    const startLoop = () => {
      if (running) return;
      running = true;
      const tick = () => {
        // Spring toward target using velocity-based integration.
        // This is the same algorithm Framer Motion uses internally for springs.
        const dx = targetX - currentX;
        const dy = targetY - currentY;
        velX = velX * DAMPING + dx * STIFFNESS;
        velY = velY * DAMPING + dy * STIFFNESS;
        currentX += velX;
        currentY += velY;

        el.style.transform = `translate(${currentX}px, ${currentY}px)`;

        const settled =
          !hovering &&
          Math.abs(velX) < REST_THRESHOLD &&
          Math.abs(velY) < REST_THRESHOLD &&
          Math.abs(currentX) < REST_THRESHOLD &&
          Math.abs(currentY) < REST_THRESHOLD;

        if (settled) {
          el.style.transform = 'translate(0px,0px)';
          currentX = 0; currentY = 0;
          velX = 0; velY = 0;
          running = false;
          return; // stop RAF loop — resumes only on next interaction
        }
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      targetX = (e.clientX - rect.left - rect.width  / 2) * strength;
      targetY = (e.clientY - rect.top  - rect.height / 2) * strength;
      hovering = true;
      startLoop();
    };

    const onEnter = () => { hovering = true; };

    const onLeave = () => {
      hovering = false;
      targetX = 0;
      targetY = 0;
      startLoop(); // let spring animate back to origin
    };

    el.addEventListener('mousemove', onMove,  { passive: true });
    el.addEventListener('mouseenter', onEnter, { passive: true });
    el.addEventListener('mouseleave', onLeave, { passive: true });

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
      el.style.transform = '';
    };
  }, [strength]);

  return ref;
}
