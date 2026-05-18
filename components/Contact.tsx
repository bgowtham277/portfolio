"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send — replace with your preferred form API (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "gowthamsaib277@gmail.com", href: "mailto:gowthamsaib277@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 (656) 214-9504", href: "tel:+16562149504" },
    { icon: MapPin, label: "Location", value: "Tampa, FL — Open to remote", href: null },
  ];

  const socials = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/gowthamsaib277" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/in/gowthamsaibhuvanam" },
    { icon: Mail, label: "Email", href: "mailto:gowthamsaib277@gmail.com" },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#38bdf8]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#38bdf8] font-mono text-sm tracking-widest uppercase mb-3">05 — Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Open to AI/ML engineering roles, co-founder opportunities, and interesting problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="space-y-4 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#38bdf8]" />
                  </div>
                  <div>
                    <p className="text-white/30 text-xs font-mono">{label}</p>
                    {href ? (
                      <a href={href} className="text-white/70 hover:text-white transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white/70 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-4">Find me online</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-10 glass border border-[#34d399]/20 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse" />
                <span className="text-[#34d399] font-semibold text-sm">Currently Available</span>
              </div>
              <p className="text-white/40 text-sm">
                Open to AI/ML Engineer, Staff/Senior ML Engineer, and AI Co-founder roles.
                Response time: typically within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {sent ? (
              <div className="glass border border-[#34d399]/30 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle size={48} className="text-[#34d399] mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-white/50">I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass border border-white/5 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/40 text-xs font-mono mb-2 uppercase">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#38bdf8]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-xs font-mono mb-2 uppercase">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#38bdf8]/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-mono mb-2 uppercase">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="AI Engineer opportunity / Collaboration"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#38bdf8]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-mono mb-2 uppercase">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#38bdf8]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-[#38bdf8] to-[#a855f7] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
