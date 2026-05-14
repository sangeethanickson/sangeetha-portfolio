import { motion } from 'framer-motion';
import { fadeUp, stagger, VIEWPORT } from '../../animations/variants';

// Single parent stagger drives all children — one IntersectionObserver
// instead of three separate ones per header instance.
export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          <span className="h-1 w-6 rounded-full bg-gradient-accent" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 variants={fadeUp} className="section-title mt-3">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-4 text-ink-muted leading-relaxed">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
