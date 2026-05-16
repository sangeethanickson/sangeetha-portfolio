import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Mail, Linkedin, Github, Download, Send } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { profile } from '../../constants/profile';
import { fadeUp, stagger, VIEWPORT } from '../../animations/variants';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // noop
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Lightweight client-side fallback: open user's mail client with prefilled body.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setSending(false);
      setSent(true);
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let’s build <span className="text-gradient-accent">something exceptional</span></>}
          description="Have a role, project, or idea in mind? I’d love to hear about it. I usually reply within a day."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-8"
        >
          <motion.div variants={fadeUp} className="card min-w-0">
            <h3 className="font-display text-lg font-semibold">Direct channels</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Reach out wherever's easiest — I check email, LinkedIn, and GitHub regularly.
            </p>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={onCopy}
                className="w-full flex items-center justify-between gap-3 rounded-xl glass px-4 py-3 hover:bg-white/[0.05] transition text-left min-w-0"
              >
                <span className="flex min-w-0 flex-1 items-center gap-3 text-sm">
                  <span className="h-9 w-9 shrink-0 rounded-lg bg-gradient-accent flex items-center justify-center text-white">
                    <Mail size={16} />
                  </span>
                  <span className="font-medium break-words [overflow-wrap:anywhere]">{profile.email}</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-xs text-ink-muted">
                  {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
                </span>
              </button>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between gap-3 rounded-xl glass px-4 py-3 hover:bg-white/[0.05] transition min-w-0"
              >
                <span className="flex min-w-0 flex-1 items-center gap-3 text-sm">
                  <span className="h-9 w-9 shrink-0 rounded-lg glass flex items-center justify-center">
                    <Linkedin size={16} />
                  </span>
                  <span className="font-medium">LinkedIn</span>
                </span>
                <span className="shrink-0 text-xs text-ink-muted whitespace-nowrap sm:whitespace-normal sm:text-end">/in/sangeetha-n</span>
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between gap-3 rounded-xl glass px-4 py-3 hover:bg-white/[0.05] transition min-w-0"
              >
                <span className="flex min-w-0 flex-1 items-center gap-3 text-sm">
                  <span className="h-9 w-9 shrink-0 rounded-lg glass flex items-center justify-center">
                    <Github size={16} />
                  </span>
                  <span className="font-medium">GitHub</span>
                </span>
                <span className="shrink-0 text-xs text-ink-muted whitespace-nowrap sm:whitespace-normal sm:text-end">/sangeethanickson</span>
              </a>

              <a
                href={profile.resumeUrl}
                download
                className="w-full flex items-center justify-between gap-3 rounded-xl bg-gradient-accent px-4 py-3 text-white transition hover:brightness-110 min-w-0"
              >
                <span className="flex min-w-0 flex-1 items-center gap-3 text-sm font-medium">
                  <Download size={16} /> Download Resume
                </span>
                <span className="shrink-0 text-xs opacity-80 whitespace-nowrap">PDF · ~120kb</span>
              </a>
            </div>
          </motion.div>

          <motion.form variants={fadeUp} onSubmit={onSubmit} className="card min-w-0">
            <h3 className="font-display text-lg font-semibold">Send a message</h3>
            <p className="mt-2 text-sm text-ink-muted">Tell me about your project, role, or idea.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <Field label="Name" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            </div>
            <Field
              label="Message"
              name="message"
              textarea
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              required
              className="mt-3"
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-5 btn-primary w-full sm:w-auto"
            >
              {sent ? <><Check size={16} /> Sent — check your mail client</> : sending ? 'Preparing…' : <><Send size={16} /> Send message</>}
            </button>
            <p className="mt-3 text-[11px] text-ink-dim">
              This form opens your email client with the message prefilled — no backend, no tracking.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', textarea, value, onChange, required, className = '' }) {
  const Comp = textarea ? 'textarea' : 'input';
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">{label}</span>
      <Comp
        name={name}
        type={type}
        required={required}
        rows={textarea ? 4 : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 block w-full rounded-xl bg-white/[0.03] hairline px-4 py-3 text-sm placeholder:text-ink-dim outline-none transition focus:border-white/20 focus:bg-white/[0.05]"
        placeholder={label}
      />
    </label>
  );
}
