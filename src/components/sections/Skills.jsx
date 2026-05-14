import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { fadeUp, stagger, staggerFast, VIEWPORT } from '../../animations/variants';
import { skillCategories, marqueeStack } from '../../constants/skills';

// SkillBar no longer has its own whileInView observer.
// It receives animation state from the parent card's stagger context.
function SkillBar({ name, level }) {
  return (
    <motion.li variants={fadeUp} className="group">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-ink-muted text-xs">{level}%</span>
      </div>
      <div className="mt-1.5 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          variants={{
            hidden: { width: 0 },
            visible: {
              width: `${level}%`,
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="h-full bg-gradient-accent"
        />
      </div>
    </motion.li>
  );
}

function SkillCard({ cat }) {
  return (
    <motion.div
      variants={fadeUp}
      className="card card-hover"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
        <span className={`h-2 w-10 rounded-full bg-gradient-to-r ${cat.accent}`} />
      </div>
      {/* Inner stagger for bars — inherits visible/hidden from parent grid */}
      <motion.ul
        variants={staggerFast}
        className="mt-5 space-y-3.5"
      >
        {cat.items.map((item) => (
          <SkillBar key={item.name} {...item} />
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title={<>A <span className="text-gradient-accent">full-stack</span> toolkit, sharpened on real products</>}
          description="From frontend architecture to backend APIs, mobile apps, and cloud infrastructure — these are the tools I reach for daily."
        />

        {/* Single observer at the grid level — no per-card or per-bar observers */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map((cat) => (
            <SkillCard key={cat.id} cat={cat} />
          ))}
        </motion.div>

        {/* Marquee — GPU-promoted track, no JS animation */}
        <div className="mt-14 marquee-mask overflow-hidden">
          <div className="marquee-track flex gap-3 animate-marquee min-w-[200%]">
            {[...marqueeStack, ...marqueeStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="chip whitespace-nowrap text-sm py-1.5 px-4"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
