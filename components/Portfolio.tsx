"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

/* ─── tiny helpers ─────────────────────────────── */
const C = "border border-white/[0.07] rounded-2xl";          // base card
const dim = "text-white/30 text-[11px] uppercase tracking-widest font-medium"; // dim label

/* ─── Tech ticker ─────────────────────────────── */
const TOOLS = [
  "Python", "PyTorch", "TensorFlow", "LangGraph", "AWS", "Docker",
  "Kubernetes", "Snowflake", "FastAPI", "GCP", "MLflow", "Spark",
  "Airflow", "Tableau", "React", "TypeScript",
];

function Ticker() {
  const items = [...TOOLS, ...TOOLS];
  return (
    <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <div className="marquee flex gap-6 whitespace-nowrap" style={{ width: "max-content" }}>
        {items.map((t, i) => (
          <span key={i} className="text-white/25 text-[13px] font-medium tracking-wide flex-shrink-0">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Projects ─────────────────────────────────── */
const PROJECTS = [
  {
    name: "ATS Resume Matcher",
    type: "Generative AI · NLP",
    tags: ["Gemini", "Python", "Streamlit"],
    href: "https://github.com/bgowtham277/application-tracking-system",
  },
  {
    name: "Call Center AI Agent",
    type: "Conversational AI · Speech",
    tags: ["LLM", "NLP", "Python"],
    href: "https://github.com/bgowtham277/call-center-ai-assistant",
  },
  {
    name: "Flight Delay Prediction",
    type: "ML Pipeline · XGBoost",
    tags: ["XGBoost", "SHAP", "Pandas"],
    href: "https://github.com/bgowtham277/flight-delay-prediction-ml",
  },
  {
    name: "Customer Churn Model",
    type: "Survival Analysis · ML",
    tags: ["Scikit-learn", "Analytics"],
    href: "https://github.com/bgowtham277/customer_survival_analysis-and-chrun_prediction",
  },
  {
    name: "SQL Data Warehouse",
    type: "Data Engineering · ETL",
    tags: ["SQL Server", "T-SQL", "ETL"],
    href: "https://github.com/bgowtham277/sql-data-warehouse",
  },
  {
    name: "Term Deposit Optimizer",
    type: "Campaign ML · Analytics",
    tags: ["Classification", "Pandas"],
    href: "https://github.com/bgowtham277/term-deposit-campaign",
  },
];

/* ─── Main ─────────────────────────────────────── */
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 max-w-[1400px] mx-auto">

      {/* ── NAV ───────────────────────────────── */}
      <nav className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <span className="text-[13px] font-semibold tracking-tight">Gowtham Sai Bhuvanam</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-[13px] text-white/40">AI Engineer</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-white/40 hidden sm:block">Available</span>
          </div>
          <a
            href="mailto:gowthamsaib277@gmail.com"
            className="text-[12px] bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* ── BENTO GRID ────────────────────────── */}
      <div className="grid grid-cols-12 grid-rows-[auto] gap-3 md:gap-4 mb-3 md:mb-4">

        {/* Photo card — tall left */}
        <div className={`col-span-12 sm:col-span-6 lg:col-span-3 row-span-2 ${C} bg-[#0d0d0d] relative overflow-hidden flex flex-col justify-end min-h-[340px] lg:min-h-[420px]`}>
          {/* Gradient bg fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#0d0d0d] to-[#1a1a2e]" />
          {/* Initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[80px] font-extralight text-white/[0.06] select-none tracking-tight">GSB</span>
          </div>
          {/* Photo — overlays initials when present */}
          <div className="absolute inset-0">
            <Image
              src="/avatar.jpg"
              alt=""
              fill
              className="object-cover object-top"
              style={{ opacity: 0.85 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 p-5">
            <p className="text-[15px] font-semibold text-white/90 leading-tight">Gowtham Sai</p>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={10} className="text-white/30" strokeWidth={1.5} />
              <span className="text-[11px] text-white/30">Tampa, FL</span>
            </div>
          </div>
        </div>

        {/* Role card */}
        <div className={`col-span-12 sm:col-span-6 lg:col-span-6 ${C} bg-[#0a0a0a] p-5 md:p-7 flex flex-col justify-between min-h-[160px]`}>
          <p className={dim}>Role</p>
          <div>
            <h1 className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-extralight tracking-tight leading-none text-white">
              AI Engineer
            </h1>
            <p className="text-white/20 text-[12px] mt-2.5 tracking-widest uppercase font-medium">Strategy & Execution</p>
          </div>
        </div>

        {/* 20M stat */}
        <div className={`col-span-6 lg:col-span-3 ${C} bg-[#0a0a0a] p-5 flex flex-col justify-between min-h-[150px]`}>
          <p className={dim}>Inferences / mo</p>
          <span className="text-[52px] sm:text-[60px] font-extralight tracking-tight leading-none">20M<span className="text-white/20">+</span></span>
        </div>

        {/* Companies */}
        <div className={`col-span-12 sm:col-span-6 lg:col-span-6 ${C} bg-[#0a0a0a] p-5 md:p-6 flex flex-col justify-between min-h-[150px]`}>
          <p className={dim}>Experience</p>
          <div className="flex flex-col gap-2.5 mt-3">
            {[
              { co: "GitaVox Inc.", period: "2026 →" },
              { co: "Intuit", period: "2025–26" },
              { co: "TCS", period: "2020–23" },
            ].map((e) => (
              <div key={e.co} className="flex items-center justify-between gap-4">
                <span className="text-[14px] font-medium text-white/75">{e.co}</span>
                <span className="text-[11px] text-white/20 font-mono flex-shrink-0">{e.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4+ years stat */}
        <div className={`col-span-6 lg:col-span-3 ${C} bg-[#0a0a0a] p-5 flex flex-col justify-between min-h-[150px]`}>
          <p className={dim}>Years of craft</p>
          <span className="text-[52px] sm:text-[60px] font-extralight tracking-tight leading-none">4<span className="text-white/20">+</span></span>
        </div>

        {/* Tech ticker — wide */}
        <div className={`col-span-12 lg:col-span-9 ${C} bg-[#0a0a0a] px-5 py-5 flex flex-col justify-center gap-3`}>
          <p className={dim}>Tech stack</p>
          <Ticker />
        </div>

        {/* Contact */}
        <div className={`col-span-12 lg:col-span-3 ${C} bg-[#0a0a0a] p-5 flex flex-col justify-between`}>
          <p className={dim}>Contact</p>
          <div className="flex flex-col gap-2.5 mt-3">
            <a href="mailto:gowthamsaib277@gmail.com" className="flex items-center gap-2 text-[12px] text-white/50 hover:text-white transition-colors group">
              <Mail size={13} strokeWidth={1.5} />
              <span className="truncate">gowthamsaib277@gmail.com</span>
            </a>
            <a href="tel:+16562149504" className="flex items-center gap-2 text-[12px] text-white/50 hover:text-white transition-colors">
              <Phone size={13} strokeWidth={1.5} />
              +1 (656) 214-9504
            </a>
          </div>
          <div className="flex gap-2 mt-4">
            <a href="https://github.com/bgowtham277" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
              <GithubIcon size={13} />
            </a>
            <a href="https://www.linkedin.com/in/bgowtham277/" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
              <LinkedinIcon size={13} />
            </a>
            <a href="/resume.pdf" download
              className="ml-auto w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors">
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>

      </div>

      {/* ── PROJECTS ──────────────────────────── */}
      <div className="mt-8 mb-3">
        <div className="flex items-center justify-between mb-4">
          <span className={dim}>Projects</span>
          <a href="https://github.com/bgowtham277" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] text-white/25 hover:text-white/60 transition-colors">
            <GithubIcon size={11} />
            <span>bgowtham277</span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${C} bg-[#0a0a0a] p-4 flex flex-col gap-3 group hover:border-white/15 transition-all`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[13px] font-medium text-white/85 group-hover:text-white transition-colors leading-snug">{p.name}</p>
                  <p className="text-[11px] text-white/25 mt-0.5">{p.type}</p>
                </div>
                <ArrowUpRight size={14} strokeWidth={1.5} className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0 mt-0.5" />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] text-white/25 border border-white/[0.06] rounded-md px-2 py-0.5 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────── */}
      <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
        <span className="text-[10px] text-white/15 font-mono">© 2026 Gowtham Sai Bhuvanam</span>
        <span className="text-[10px] text-white/15 font-mono">Next.js · Vercel</span>
      </div>

    </div>
  );
}
