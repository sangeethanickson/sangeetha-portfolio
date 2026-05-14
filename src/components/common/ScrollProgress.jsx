import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  // Higher stiffness + lower mass = tighter tracking with no perceivable lag.
  // Previous values (120/24) made it feel "behind" the real scroll position.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.2,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-accent will-change-transform"
      aria-hidden
    />
  );
}
