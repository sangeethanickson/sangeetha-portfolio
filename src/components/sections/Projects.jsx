import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { projects } from '../../constants/projects';
import { fadeUp, staggerFast, VIEWPORT } from '../../animations/variants';

function ProjectMockup({ image, accent, title }) {
  return (
    <div className={`relative h-44 md:h-52 rounded-xl overflow-hidden bg-gradient-to-br ${accent}`}>
      {image ? (
        <>
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
          {/* Subtle gradient overlay so text remains readable */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(11,15,25,0.72) 0%, rgba(11,15,25,0.18) 50%, transparent 100%)',
            }}
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.18), transparent 45%)',
            }}
          />
        </>
      )}
      <div className="absolute inset-0 flex items-end p-4">
        <div className="glass rounded-lg px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/90">
          {title.split('—')[0].trim()}
        </div>
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/60" />
        <span className="h-2 w-2 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

function ProjectCard({ p, index }) {
  return (
    <motion.article
      variants={fadeUp}
      className="card card-hover group flex flex-col"
    >
      <ProjectMockup image={p.image} accent={p.accent} title={p.title} />

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">{p.domain}</span>
          <h3 className="mt-1 font-display text-xl font-semibold leading-snug">{p.title}</h3>
          <div className="mt-1 text-xs text-gradient-accent font-medium">{p.tagline}</div>
        </div>
        {p.featured && (
          <span className="chip text-[10px] !py-0.5">
            <Sparkles size={10} /> Featured
          </span>
        )}
      </div>

      <p className="mt-4 text-sm text-ink-muted leading-relaxed">{p.description}</p>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        {p.stats.map((s) => (
          <div key={s.label} className="rounded-lg glass px-3 py-2 text-center">
            <div className="text-sm font-semibold">{s.value}</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-ink-muted mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <ul className="mt-5 space-y-1.5">
        {p.highlights.slice(0, 4).map((h) => (
          <li key={h} className="text-sm text-ink-muted flex gap-2">
            <span className="mt-2 h-1 w-1 rounded-full bg-accent-cyan flex-shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span key={t} className="chip text-[10px] !py-0.5">{t}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-white transition"
          aria-label="View case study"
        >
          <ArrowUpRight size={14} /> Case study
        </button>
        <span className="h-3 w-px bg-white/10" />
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-white transition"
          aria-label="View on GitHub"
        >
          <Github size={14} /> Source
        </button>
        <span className="ml-auto text-[10px] text-ink-dim">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Products built with <span className="text-gradient-accent">enterprise rigor</span></>}
          description="Six representative projects across compliance, fintech, workforce, AI, social, and capital markets — each shipped to real users."
        />

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
