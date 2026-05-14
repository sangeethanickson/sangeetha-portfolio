import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../../constants/profile';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] mt-20">
      <div className="container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <a href="#home" className="inline-flex items-center gap-2.5">
            <span className="h-9 w-9 rounded-xl bg-gradient-accent flex items-center justify-center font-display font-extrabold text-white">
              SN
            </span>
            <span className="font-display text-lg font-semibold">{profile.name}</span>
          </a>
          <p className="mt-4 text-sm text-ink-muted max-w-sm">
            Full Stack Developer crafting scalable enterprise applications across compliance-tech,
            workforce, fintech, and AI-powered platforms.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Github size={14} /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <Mail size={14} /> {profile.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <h4 className="text-sm font-semibold mb-4">Back to top</h4>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-white/[0.06] transition"
          >
            Top of page <ArrowUp size={14} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React · Vite · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
