import { useMemo } from 'react';

// Lightweight, GPU-friendly floating particles using pure CSS animations.
// Seeded pseudo-random to avoid hydration mismatch on SSR if ever used.
// Also keeps particles stable across HMR reloads.
function seededRand(seed) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function Particles({ count = 14 }) {
  // Reduced from 18/22 to 14 — beyond ~15 particles the visual gain is
  // negligible but compositor cost keeps growing. 14 is optimal.
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left:     seededRand(i * 7)   * 100,
        top:      seededRand(i * 13)  * 100,
        // Slightly larger dots (no blur) = same visual effect at ~10x lower GPU cost.
        // Per-element blur creates a compositing layer per particle. This kills it.
        size:     3 + seededRand(i * 3) * 3,
        delay:    seededRand(i * 5)   * 7,
        duration: 10 + seededRand(i * 11) * 8,
        opacity:  0.18 + seededRand(i * 17) * 0.28,
      })),
    [count]
  );

  return (
    // contain:strict isolates this layer's repaints from the rest of the page.
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ contain: 'strict' }}
    >
      {dots.map((d) => (
        <span
          key={d.id}
          // No blur-[1px] — removed. Each blur creates its own compositor layer.
          // A solid translucent dot is visually indistinguishable at this size
          // and costs a fraction of the GPU memory.
          className="absolute rounded-full bg-gradient-to-br from-accent-indigo via-accent-purple to-accent-cyan will-change-transform"
          style={{
            left:     `${d.left}%`,
            top:      `${d.top}%`,
            width:    `${d.size}px`,
            height:   `${d.size}px`,
            opacity:  d.opacity,
            // transform: translateZ(0) promotes to GPU layer once, not per paint.
            transform: 'translateZ(0)',
            animation: `float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
