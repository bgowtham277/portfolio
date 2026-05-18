"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    title: "GenOS — LLM Platform",
    company: "Intuit",
    description:
      "Architected and scaled Intuit's internal LLM serving platform supporting 100+ production models with 20M+ monthly inferences, hybrid search, model routing, and safety guardrails.",
    tags: ["LLM", "Multi-model Routing", "RAG", "AWS", "Python", "Guardrails"],
    metrics: ["100+ models", "20M+ inferences/mo", "250ms p95", "99.9% uptime"],
    color: "#38bdf8",
    gradient: "from-[#38bdf8]/10 to-[#818cf8]/10",
    link: null,
    github: null,
  },
  {
    title: "Intuit Assist — AI Agents",
    company: "Intuit",
    description:
      "Multi-agent orchestration system using LangGraph that automates 60–70% of manual QuickBooks accounting workflows, increasing task-completion rates by 22% across 15M+ users.",
    tags: ["LangGraph", "Multi-Agent", "QuickBooks", "Automation", "NLP", "Python"],
    metrics: ["60–70% automation", "+22% completion", "15M+ users", "-40% time-to-insight"],
    color: "#a855f7",
    gradient: "from-[#a855f7]/10 to-[#38bdf8]/10",
    link: null,
    github: null,
  },
  {
    title: "GitaVox Voice Agent",
    company: "GitaVox Inc.",
    description:
      "LLM-powered voice agent platform with Twilio SIP trunking, achieving sub-300ms response latency. Deployed for B2B clients in Healthcare, Legal, and Financial Services.",
    tags: ["Twilio", "LLM", "Voice AI", "FastAPI", "React", "TypeScript", "Vercel"],
    metrics: ["<300ms latency", "B2B clients", "Healthcare + Legal", "Full-stack"],
    color: "#34d399",
    gradient: "from-[#34d399]/10 to-[#a855f7]/10",
    link: null,
    github: null,
  },
  {
    title: "Fraud Detection ML System",
    company: "TCS",
    description:
      "End-to-end ML pipeline for credit risk and fraud detection using ensemble methods (Random Forest, XGBoost, CNN + NLP), achieving 97% detection accuracy at enterprise scale.",
    tags: ["XGBoost", "Random Forest", "CNN", "NLP", "Python", "PySpark", "MLflow"],
    metrics: ["97% accuracy", "Enterprise scale", "Real-time scoring", "Credit risk"],
    color: "#f59e0b",
    gradient: "from-[#f59e0b]/10 to-[#f43f5e]/10",
    link: null,
    github: null,
  },
  {
    title: "Multilingual Support Chatbot",
    company: "TCS",
    description:
      "Fine-tuned transformer model with FastAPI + Streamlit frontend handling 1,200+ daily queries across multiple languages, reducing average response time by 40%.",
    tags: ["Transformers", "FastAPI", "Streamlit", "NLP", "Python", "Fine-tuning"],
    metrics: ["1,200+ daily queries", "-40% response time", "Multilingual", "Fine-tuned"],
    color: "#f43f5e",
    gradient: "from-[#f43f5e]/10 to-[#f59e0b]/10",
    link: null,
    github: null,
  },
  {
    title: "Executive AI Dashboards",
    company: "Intuit",
    description:
      "Real-time BI dashboards enabling senior leadership to track AI model performance, product health, and operational KPIs. Reduced time-to-insight by 40% across key decision workflows.",
    tags: ["Tableau", "Power BI", "Python", "Snowflake", "Data Viz", "Analytics"],
    metrics: ["-40% time-to-insight", "C-suite users", "Real-time KPIs", "+18% trust score"],
    color: "#818cf8",
    gradient: "from-[#818cf8]/10 to-[#34d399]/10",
    link: null,
    github: null,
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="section-padding relative bg-[#0a0f1a]" ref={ref}>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase mb-3">04 — Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Systems I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Production AI systems impacting millions of users — from LLM platforms to fraud detection.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              className={`glass border border-white/5 rounded-2xl overflow-hidden card-hover flex flex-col`}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Company badge */}
                <div
                  className="text-xs font-mono px-2.5 py-1 rounded-full inline-flex self-start mb-4"
                  style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}
                >
                  {project.company}
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{project.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {project.metrics.map((m) => (
                    <div
                      key={m}
                      className="text-center py-1.5 px-2 rounded-lg text-xs font-mono"
                      style={{ background: `${project.color}08`, color: project.color }}
                    >
                      {m}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-xs text-white/40 border border-white/5 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-xs text-white/20 border border-white/5 font-mono">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
                    >
                      <GithubIcon size={14} /> Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-white/20">
                      <GithubIcon size={14} /> Proprietary
                    </span>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors ml-auto"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/gowthamsaib277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 rounded-full text-white/60 hover:text-white hover:border-[#38bdf8]/40 transition-all duration-300 text-sm"
          >
            <GithubIcon size={16} />
            View all repos on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
