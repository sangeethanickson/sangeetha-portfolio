import { motion } from 'framer-motion';
import { Briefcase, MapPin, Check } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { experiences } from '../../constants/experience';
import { fadeUp, stagger, VIEWPORT } from '../../animations/variants';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title={<>3+ years of <span className="text-gradient-accent">shipping at scale</span></>}
          description="A timeline of roles, products, and the engineering bets that shaped them."
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
          />

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="space-y-10"
          >
            {experiences.map((exp, idx) => {
              const left = idx % 2 === 0;
              return (
                <motion.li
                  key={exp.id}
                  variants={fadeUp}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-start"
                >
                  {/* Dot */}
                  <span
                    aria-hidden
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-3 h-3 w-3 rounded-full bg-gradient-accent ring-4 ring-bg shadow-glow"
                  />

                  <div className={`pl-12 md:pl-0 ${left ? 'md:order-1 md:text-right' : 'md:order-2'}`}>
                    <div className="card card-hover inline-block w-full">
                      <div className={`flex flex-wrap items-center gap-2 ${left ? 'md:justify-end' : ''}`}>
                        <span className="chip"><Briefcase size={12} /> {exp.type}</span>
                        <span className="chip"><MapPin size={12} /> {exp.location}</span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold">{exp.role}</h3>
                      <div className="text-sm text-gradient-accent font-medium">{exp.company}</div>
                      <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mt-1">{exp.period}</div>
                      <p className="mt-4 text-sm text-ink-muted leading-relaxed">{exp.summary}</p>
                      <ul className={`mt-4 space-y-2 ${left ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((a) => (
                          <li key={a} className={`flex gap-2 text-sm text-ink ${left ? 'md:flex-row-reverse md:text-right' : ''}`}>
                            <Check size={14} className="mt-0.5 text-accent-cyan flex-shrink-0" />
                            <span className="text-ink-muted">{a}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-5 flex flex-wrap gap-2 ${left ? 'md:justify-end' : ''}`}>
                        {exp.tech.map((t) => (
                          <span key={t} className="chip text-[11px]">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`hidden md:block ${left ? 'md:order-2' : 'md:order-1'}`} />
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
