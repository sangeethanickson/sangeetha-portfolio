import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { navLinks, profile } from '../../constants/profile';
import { cn } from '../../utils/cn';

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    // RAF-throttled scroll handler — prevents React setState on every pixel scroll.
    // Batch scroll reads to once per frame, then only setState when crossing threshold.
    let lastScrolled = false;
    let rafId;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const next = window.scrollY > 12;
        if (next !== lastScrolled) {
          lastScrolled = next;
          setScrolled(next);
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="container">
        <nav
          className={cn(
            'flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-300',
            scrolled ? 'glass-strong shadow-soft' : 'bg-transparent'
          )}
        >
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="relative h-9 w-9 rounded-xl bg-gradient-accent flex items-center justify-center font-display font-extrabold text-white shadow-glow">
              SN
              <span className="absolute -inset-px rounded-xl ring-1 ring-white/10" />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold">{profile.shortName}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                Full Stack Dev
              </span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={cn(
                    'relative px-3 py-2 rounded-full transition-colors',
                    active === link.id ? 'text-white' : 'text-ink-muted hover:text-white'
                  )}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.08]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-ink-muted hairline bg-white/[0.02] hover:text-white hover:bg-white/[0.06] transition"
            >
              <Command size={14} />
              <span>Quick nav</span>
              <kbd className="ml-1 rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] tracking-wider">⌘K</kbd>
            </button>
            <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-4 text-xs">
              Hire me
            </a>
            <button
              type="button"
              className="lg:hidden p-2 rounded-full hairline bg-white/[0.02]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden container mt-3"
          >
            <ul className="glass-strong rounded-2xl p-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-sm transition',
                      active === link.id
                        ? 'bg-white/[0.06] text-white'
                        : 'text-ink-muted hover:text-white hover:bg-white/[0.04]'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
