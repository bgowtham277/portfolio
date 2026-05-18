"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";
import { Mail, MapPin, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "20M+", label: "Monthly Inferences" },
  { value: "97%", label: "Model Accuracy" },
  { value: "15M+", label: "Users Impacted" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      containerRef.current.style.setProperty("--mx", `${x}px`);
      containerRef.current.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particle Background */}
      <ParticleField />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#38bdf8]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#a855f7]/5 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#38bdf8]/20 text-[#38bdf8] text-sm font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
          Available for AI/ML Engineering roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">Gowtham </span>
          <span className="gradient-text">Sai</span>
          <br />
          <span className="text-white">Bhuvanam</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-white/60 font-mono mb-8 h-8"
        >
          <TypeAnimation
            sequence={[
              "AI Engineer & Co-Founder",
              2000,
              "LLM Systems Architect",
              2000,
              "ML Platform Builder",
              2000,
              "Strategy × Execution",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#38bdf8]"
          />
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-white/40 text-sm mb-10"
        >
          <MapPin size={14} />
          Tampa, FL — Open to remote & relocation
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-gradient-to-r from-[#38bdf8] to-[#a855f7] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#38bdf8]/25 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3.5 glass border border-white/10 text-white font-semibold rounded-full hover:border-[#38bdf8]/40 hover:bg-white/5 transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-6 mb-20"
        >
          {[
            { icon: GithubIcon, href: "https://github.com/gowthamsaib277", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/gowthamsaibhuvanam", label: "LinkedIn" },
            { icon: Mail, href: "mailto:gowthamsaib277@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center glass border border-white/10 rounded-full text-white/50 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="glass border border-white/5 rounded-2xl p-4 text-center"
            >
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
