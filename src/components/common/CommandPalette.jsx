import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, ArrowRight, Github, Linkedin, Mail, Download, Command } from 'lucide-react';
import { navLinks, profile } from '../../constants/profile';

export default function CommandPalette({ open, onOpenChange }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenChange((v) => !v);
      }
      if (e.key === 'Escape') onOpenChange(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onOpenChange]);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  const items = useMemo(
    () => [
      ...navLinks.map((n) => ({ kind: 'nav', label: `Go to ${n.label}`, href: n.href, icon: ArrowRight })),
      { kind: 'link', label: 'Open GitHub', href: profile.socials.github, icon: Github, external: true },
      { kind: 'link', label: 'Open LinkedIn', href: profile.socials.linkedin, icon: Linkedin, external: true },
      { kind: 'link', label: `Email ${profile.email}`, href: profile.socials.email, icon: Mail },
      { kind: 'link', label: 'Download Resume', href: profile.resumeUrl, icon: Download, download: true },
    ],
    []
  );

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  const onSelect = (item) => {
    onOpenChange(false);
    if (item.kind === 'nav') {
      const el = document.querySelector(item.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (item.external) {
      window.open(item.href, '_blank', 'noopener');
    } else if (item.download) {
      const a = document.createElement('a');
      a.href = item.href;
      a.download = '';
      a.click();
    } else {
      window.location.href = item.href;
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-start justify-center pt-[12vh] px-4"
          onClick={() => onOpenChange(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <motion.div
            initial={{ y: -12, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -8, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-xl glass-strong rounded-2xl shadow-soft overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
              <Search size={16} className="text-ink-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a section or action…"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-ink-dim"
              />
              <kbd className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[10px] text-ink-muted">ESC</kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-ink-muted">No results</li>
              )}
              {filtered.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => onSelect(item)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/[0.05] text-left"
                    >
                      <span className="h-7 w-7 rounded-md glass flex items-center justify-center">
                        <Icon size={14} />
                      </span>
                      <span className="flex-1">{item.label}</span>
                      <span className="text-[10px] uppercase tracking-wider text-ink-dim">{item.kind}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="px-4 py-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-ink-muted">
              <span className="inline-flex items-center gap-1.5"><Command size={12} /> Command palette</span>
              <span>↑↓ navigate · ↵ select</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
