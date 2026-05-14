import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, Rocket } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { fadeUp, stagger, VIEWPORT } from '../../animations/variants';
import { aboutStats } from '../../constants/achievements';
import { profile } from '../../constants/profile';

const pillars = [
  {
    icon: Layers,
    title: 'Frontend Architecture',
    text: 'Modular component systems, design tokens, accessible UI, and performant rendering at scale.',
  },
  {
    icon: Cpu,
    title: 'Scalable APIs',
    text: 'REST + real-time backends with multi-tenant isolation, RBAC, and observability built-in.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    text: 'Code-splitting, memoization, image and bundle budgets — measurable wins, not vibes.',
  },
  {
    icon: Code2,
    title: 'Cross-Platform',
    text: 'Web, iOS (Swift), Android (Kotlin), and hybrid stacks — one product, every surface.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title={<>Engineer-led craft, <span className="text-gradient-accent">product-grade outcomes</span></>}
          description={profile.summary}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {aboutStats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="card card-hover text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-accent">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-muted">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {pillars.map((p) => (
            <motion.div key={p.title} variants={fadeUp} className="card card-hover">
              <div className="h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center text-white shadow-glow">
                <p.icon size={18} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
