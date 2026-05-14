import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { achievements } from '../../constants/achievements';
import useCountUp from '../../hooks/useCountUp';
import { fadeUp, stagger, VIEWPORT } from '../../animations/variants';

function Counter({ value, decimals = 0, suffix = '' }) {
  const [count, ref] = useCountUp(value, { decimals, duration: 1800 });
  return (
    <span
      ref={ref}
      className="font-display font-extrabold text-gradient-accent leading-none"
      style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
    >
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString()}
      <span className="text-accent-cyan">{suffix}</span>
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Impact"
          title={<>Numbers that <span className="text-gradient-accent">tell the story</span></>}
          description="Selected metrics from production systems I've shipped and maintained."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {achievements.map((a) => (
            <motion.div
              key={a.label}
              variants={fadeUp}
              className="card card-hover text-center flex flex-col items-center justify-center min-h-[9rem]"
            >
              <Counter value={a.value} decimals={a.decimals || 0} suffix={a.suffix || ''} />
              <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-ink-muted leading-snug max-w-[8rem] mx-auto">
                {a.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
