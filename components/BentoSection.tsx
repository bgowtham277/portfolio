"use client";

import Image from "next/image";
import {
  ArrowUpRight, Sparkles,
  Code2, Database, Cloud, Server, Terminal, Globe,
  Zap, BarChart2, Activity, Cpu, Network, Layers,
  Box, Wand2, BrainCircuit, Workflow, GitBranch, Brain,
  Mail, Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

/* ─── Section label ─────────────────────────────── */
function SectionLabel({ text, align = "center" }: { text: string; align?: "center" | "start" }) {
  return (
    <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : "justify-start"}`}>
      <Sparkles className="text-white/50" style={{ width: 12, height: 12, strokeWidth: 1.5 }} />
      <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-medium">{text}</span>
      <Sparkles className="text-white/50" style={{ width: 12, height: 12, strokeWidth: 1.5 }} />
    </div>
  );
}

/* ─── Marquee row ────────────────────────────────── */
const row1Icons = [Code2, BrainCircuit, Database, Cloud, Cpu, Network, Server, Terminal];
const row2Icons = [Layers, Box, Wand2, Workflow, GitBranch, Globe, Zap, BarChart2];
const row1Labels = ["Python", "LLM/AI", "Snowflake", "AWS", "PyTorch", "LangGraph", "FastAPI", "CLI"];
const row2Labels = ["Docker", "K8s", "MLflow", "Airflow", "Git", "GCP", "Spark", "Tableau"];

type LucideIcon = React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;

function MarqueeRow({
  icons, labels, direction,
}: {
  icons: LucideIcon[];
  labels: string[];
  direction: "left" | "right";
}) {
  const items = [...icons, ...icons];
  const lbls = [...labels, ...labels];
  return (
    <div
      className="overflow-hidden"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div
        className={`flex gap-3 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "max-content" }}
      >
        {items.map((Icon, i) => (
          <div
            key={i}
            className="liquid-glass rounded-xl flex flex-col items-center justify-center gap-1 flex-shrink-0"
            style={{ width: 60, height: 60 }}
          >
            <Icon size={22} strokeWidth={1.5} className="text-white/70" />
            <span className="text-white/30 text-[8px] font-medium leading-none">{lbls[i % labels.length]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────── */
export default function BentoSection() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 lg:min-h-screen flex flex-col">

      {/* ── Header ── */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-5 md:mb-6">
        <div className="max-w-3xl flex items-start gap-4">
          {/* Avatar */}
          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Image
              src="/avatar.jpg"
              alt="Gowtham Sai Bhuvanam"
              width={64}
              height={64}
              className="w-full h-full object-cover"
              onError={() => {}}
            />
          </div>
          <div>
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] font-normal leading-[1.15] tracking-tight text-white mb-3">
            Hi, I&apos;m Gowtham Sai Bhuvanam!
          </h1>
          <p className="text-sm md:text-[15px] leading-[1.6] text-white/60 max-w-3xl">
            A Tampa-based AI Engineer & Co-Founder building LLM platforms, multi-agent systems, and decision-support
            tools that ship to millions. With 4+ years of craft at TCS, Intuit, and GitaVox, I turn hard AI problems
            into measurable outcomes — fast.
          </p>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-start gap-3">
          <a
            href="mailto:gowthamsaib277@gmail.com"
            className="liquid-glass rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white whitespace-nowrap hover:bg-white/5 transition-colors"
          >
            Open to Opportunities
          </a>
          <a
            href="/resume.pdf"
            download
            className="liquid-glass rounded-full px-5 py-2.5 sm:py-3 text-sm font-medium text-white/60 whitespace-nowrap hover:bg-white/5 transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1">

        {/* ── Col 1: Background ── */}
        <div className="rounded-2xl bg-black overflow-hidden relative flex flex-col justify-between p-5 md:p-6 min-h-[320px] lg:min-h-0 bg-mesh-1">
          {/* Orbs */}
          <div className="orb w-48 h-48 bg-blue-500 top-[-20px] left-[-20px]" style={{ animationDelay: "0s" }} />
          <div className="orb w-40 h-40 bg-purple-600 bottom-0 right-0" style={{ animationDelay: "4s" }} />

          <div className="relative z-10">
            <SectionLabel text="Background" />
          </div>

          <div className="relative z-10 space-y-3 mt-auto">
            {[
              { period: "2026–Now", role: "Co-Founder & AI Engineer", place: "GitaVox Inc." },
              { period: "2025–2026", role: "AI Engineer", place: "Intuit" },
              { period: "2020–2023", role: "Data Scientist", place: "TCS" },
            ].map((item, i) => (
              <div
                key={i}
                className="grid gap-x-3 items-center text-[12px] sm:text-[13px]"
                style={{ gridTemplateColumns: "auto auto 1fr auto" }}
              >
                <span className="text-white/40 font-mono whitespace-nowrap">{item.period}</span>
                <Sparkles className="text-white/30" style={{ width: 10, height: 10, strokeWidth: 1.5 }} />
                <span className="text-white/80 truncate">{item.role}</span>
                <span className="text-white/40 text-right truncate">{item.place}</span>
              </div>
            ))}
            <div className="pt-2 mt-2 border-t border-white/8">
              <div className="grid gap-x-3 items-center text-[11px]" style={{ gridTemplateColumns: "auto auto 1fr" }}>
                <span className="text-white/30 font-mono">2023–2025</span>
                <Sparkles className="text-white/20" style={{ width: 9, height: 9, strokeWidth: 1.5 }} />
                <span className="text-white/40">MS AI & Business Analytics · USF</span>
              </div>
              <div className="grid gap-x-3 items-center text-[11px] mt-1.5" style={{ gridTemplateColumns: "auto auto 1fr" }}>
                <span className="text-white/30 font-mono">Cert.</span>
                <Sparkles className="text-white/20" style={{ width: 9, height: 9, strokeWidth: 1.5 }} />
                <span className="text-white/40">SnowPro Associate · Snowflake</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Col 2 (stacked) ── */}
        <div className="flex flex-col gap-4 md:gap-5">

          {/* Top: Key Achievement card */}
          <div className="rounded-2xl bg-[#192a2a] p-5 md:p-6 noise-overlay relative flex flex-col gap-4 flex-1">
            <SectionLabel text="Key Achievement" align="start" />
            <p className="text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85 relative z-10">
              &ldquo;Architected GenOS to serve <strong>100+ production models</strong> and{" "}
              <strong>20M+ monthly inferences</strong> at 250ms p95 latency — then cut hallucinations
              by 42% and token costs by 28% for Intuit&apos;s regulated financial AI.&rdquo;
            </p>
            <div className="relative z-10">
              <p className="text-[12px] font-semibold text-white/70">Gowtham Sai Bhuvanam</p>
              <p className="text-[11px] text-white/40">AI Engineer — Intuit, 2025</p>
            </div>
          </div>

          {/* Bottom: 20M+ stat */}
          <div className="rounded-2xl bg-black overflow-hidden relative flex flex-col items-center justify-center p-6 min-h-[200px] bg-mesh-2">
            <div className="orb w-56 h-56 bg-cyan-500 top-[-40px] left-[-40px]" style={{ animationDelay: "2s" }} />
            <div className="orb w-40 h-40 bg-indigo-600 bottom-[-20px] right-[-20px]" style={{ animationDelay: "6s" }} />
            <span className="relative z-10 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light tracking-tight drop-shadow-2xl text-white">
              20M<span className="text-white/60">+</span>
            </span>
            <span className="relative z-10 text-white/85 text-sm mt-2 font-medium">Monthly model inferences</span>
          </div>
        </div>

        {/* ── Col 3 (stacked) ── */}
        <div className="flex flex-col gap-4 md:gap-5">

          {/* Top: Tech Stack marquee */}
          <div className="rounded-2xl bg-black overflow-hidden relative flex flex-col justify-between p-5 md:p-6 min-h-[240px] flex-1 bg-mesh-3">
            <div className="orb w-44 h-44 bg-violet-600 top-0 right-0" style={{ animationDelay: "1s" }} />
            <SectionLabel text="Daily Tech Stack" />
            <div className="relative z-10 flex flex-col gap-3 mt-auto">
              <MarqueeRow icons={row1Icons} labels={row1Labels} direction="left" />
              <MarqueeRow icons={row2Icons} labels={row2Labels} direction="right" />
            </div>
          </div>

          {/* Bottom: Reach Me */}
          <div className="rounded-2xl bg-[#192a2a] p-5 md:p-6 noise-overlay relative">
            <div className="flex items-start justify-between mb-4">
              <SectionLabel text="Reach Me" align="start" />
              <div className="flex gap-2">
                <a
                  href="https://github.com/bgowtham277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bgowtham277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
                >
                  <LinkedinIcon size={14} />
                </a>
                <a
                  href="mailto:gowthamsaib277@gmail.com"
                  className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <ArrowUpRight style={{ width: 16, height: 16, strokeWidth: 1.5 }} />
                </a>
              </div>
            </div>
            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center gap-2.5 text-[13px] text-white/70">
                <Mail style={{ width: 14, height: 14, strokeWidth: 1.5 }} className="text-white/40" />
                <a href="mailto:gowthamsaib277@gmail.com" className="hover:text-white transition-colors">
                  gowthamsaib277@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/70">
                <Phone style={{ width: 14, height: 14, strokeWidth: 1.5 }} className="text-white/40" />
                <a href="tel:+16562149504" className="hover:text-white transition-colors">
                  +1 (656) 214-9504
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[13px] text-white/70">
                <Brain style={{ width: 14, height: 14, strokeWidth: 1.5 }} className="text-white/40" />
                <span>Tampa, FL · Open to remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
