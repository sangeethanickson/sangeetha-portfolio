import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import useTypewriter from '../../hooks/useTypewriter';
import { profile } from '../../constants/profile';
import { fadeUp, stagger, VIEWPORT } from '../../animations/variants';
import Particles from '../common/Particles';
import MagneticButton from '../common/MagneticButton';

const floatingChips = [
  { label: 'React', x: '-22%', y: '-32%', delay: 0 },
  { label: 'Vue.js', x: '110%', y: '-12%', delay: 0.4 },
  { label: 'Node.js', x: '-30%', y: '40%', delay: 0.8 },
  { label: 'Nuxt', x: '108%', y: '52%', delay: 1.1 },
  { label: 'Tailwind', x: '6%', y: '-44%', delay: 1.4 },
  { label: 'MongoDB', x: '92%', y: '88%', delay: 1.7 },
];

export default function Hero() {
  const typed = useTypewriter(profile.roles, { typeSpeed: 60, deleteSpeed: 30, pause: 1600 });

  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.35]" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid-fade" aria-hidden />
      <Particles count={22} />

      <div className="container relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center"
        >
          {/* Left: text */}
          <div>
            <motion.span variants={fadeUp} className="eyebrow">
              <Sparkles size={14} className="text-accent-purple" />
              Available for opportunities
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 font-display font-extrabold tracking-tight text-3xl sm:text-5xl md:text-5xl leading-[1.02]"
            >
              Hi, I’m{' '}
              <span className="text-gradient-accent">Sangeetha N</span>
              <br />
              <span className="text-ink">building enterprise-grade</span>
              <br />
              <span className="text-gradient">software, end-to-end.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-2 text-base md:text-lg">
              <span className="text-ink-muted">I’m a</span>
              <span className="font-mono text-accent-cyan">
                {typed}
                <span className="ml-0.5 inline-block w-[2px] h-[1.05em] align-[-2px] bg-accent-cyan animate-blink" />
              </span>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-ink-muted leading-relaxed">
              3+ years shipping scalable products across compliance-tech, workforce, fintech, and AI
              platforms. React · Vue · Node.js — focused on architecture, performance, and craft.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton as="a" href="#projects" className="btn-primary">
                View Projects
                <ArrowDown size={15} className="rotate-[-45deg]" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={profile.resumeUrl}
                download="Sangeetha-N-Resume.pdf"
                className="btn-ghost"
              >
                <Download size={15} />
                Download Resume
              </MagneticButton>
              <MagneticButton as="a" href="#contact" className="btn-ghost">
                Contact Me
              </MagneticButton>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-5 text-ink-muted">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors duration-200"
              >
                <Github size={19} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors duration-200"
              >
                <Linkedin size={19} />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="hover:text-white transition-colors duration-200"
              >
                <Mail size={19} />
              </a>
              <span className="h-px w-24 bg-white/[0.1]" />
              <span className="text-xs uppercase tracking-[0.22em] text-ink-dim">Based in {profile.location}</span>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto lg:mx-0 lg:justify-self-end"
          >
            <div className="relative h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px]">
              {/* Animated gradient ring */}
              <div
                className="absolute inset-0 rounded-full p-[2px] animate-gradientShift"
                style={{
                  background:
                    'conic-gradient(from 0deg, #6366F1, #8B5CF6, #22D3EE, #6366F1)',
                  backgroundSize: '200% 200%',
                }}
              >
                <div className="h-full w-full rounded-full bg-bg" />
              </div>

              {/* Soft glow */}
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.45), transparent 60%), radial-gradient(circle at 70% 70%, rgba(34,211,238,0.35), transparent 60%)',
                }}
              />

              {/* Portrait — real profile photo */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                  repeatType: 'mirror',
                }}
                className="absolute inset-3 rounded-full overflow-hidden shadow-soft"
              >
                <img
                  src={profile.profileImage}
                  alt="Sangeetha N — Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </motion.div>

              {/* Status badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-pulseRing" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Available for opportunities
              </div>

              {/* Floating tech chips */}
              {floatingChips.map((chip, i) => (
                <motion.span
                  key={chip.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  style={{ left: chip.x, top: chip.y }}
                  className="hidden sm:inline-flex absolute chip backdrop-blur-md"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
                  {chip.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 hidden md:flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-ink-muted hover:text-white transition"
        >
          <span>Scroll</span>
          <span className="h-8 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
        </motion.a>
      </div>
    </section>
  );
}

