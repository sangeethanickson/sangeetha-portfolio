import { useEffect, useRef, useState } from 'react';

export default function useCountUp(target, { duration = 1800, decimals = 0, start = 0 } = {}) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();
            const animate = (now) => {
              const t = Math.min(1, (now - startTime) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Number((start + (target - start) * eased).toFixed(decimals)));
              if (t < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, decimals, start]);

  return [value, ref];
}
