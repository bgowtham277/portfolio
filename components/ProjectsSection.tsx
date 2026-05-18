"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    name: "AI-Powered ATS Resume Matcher",
    description:
      "Evaluates resume alignment with job descriptions, identifies missing keywords, and provides ATS-style match scoring using Google Gemini and NLP.",
    tags: ["Google Gemini", "NLP", "Python", "Streamlit", "Resume Parsing"],
    color: "#38bdf8",
    github: "https://github.com/bgowtham277/application-tracking-system",
    live: null,
  },
  {
    name: "Call Center AI Assistant",
    description:
      "AI-powered call center assistant using speech recognition and language models to automate responses and enhance customer support workflows.",
    tags: ["Speech Recognition", "LLM", "NLP", "Python", "Conversational AI"],
    color: "#a855f7",
    github: "https://github.com/bgowtham277/call-center-ai-assistant",
    live: null,
  },
  {
    name: "Flight Delay Prediction ML",
    description:
      "End-to-end ML pipeline predicting flight departure delays (≥15 min) using flight & weather data. Full feature engineering, SHAP explainability, and XGBoost.",
    tags: ["XGBoost", "SHAP", "Scikit-learn", "Feature Engineering", "Jupyter"],
    color: "#34d399",
    github: "https://github.com/bgowtham277/flight-delay-prediction-ml",
    live: null,
  },
  {
    name: "Customer Churn & Survival Analysis",
    description:
      "Survival analysis + ML pipeline to estimate time-to-churn and identify high-risk customers for proactive retention strategies.",
    tags: ["Survival Analysis", "Churn Prediction", "Scikit-learn", "Python", "Analytics"],
    color: "#f59e0b",
    github: "https://github.com/bgowtham277/customer_survival_analysis-and-chrun_prediction",
    live: null,
  },
  {
    name: "SQL Data Warehouse",
    description:
      "Modern data warehouse built with SQL Server — full ETL pipeline, dimensional data modeling, and analytics layer for business reporting.",
    tags: ["SQL Server", "ETL", "Data Modeling", "T-SQL", "Analytics"],
    color: "#f43f5e",
    github: "https://github.com/bgowtham277/sql-data-warehouse",
    live: null,
  },
  {
    name: "Term Deposit Campaign Optimizer",
    description:
      "Data-driven approach to prioritize targeting for a bank telemarketing program — improved efficiency and conversion rates using ML classification.",
    tags: ["Classification", "ML", "Jupyter", "Pandas", "Campaign Analytics"],
    color: "#818cf8",
    github: "https://github.com/bgowtham277/term-deposit-campaign",
    live: null,
  },
];

export default function ProjectsSection() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-14 py-12 md:py-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="text-white/30" style={{ width: 14, height: 14, strokeWidth: 1.5 }} />
        <span className="uppercase tracking-[0.22em] text-[11px] text-white/50 font-medium">Open Source Work</span>
        <div className="flex-1 h-px bg-white/5" />
        <a
          href="https://github.com/bgowtham277"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[12px] text-white/30 hover:text-white/60 transition-colors"
        >
          <GithubIcon size={12} />
          github.com/bgowtham277
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl bg-black border border-white/[0.06] p-5 flex flex-col gap-4 group hover:border-white/[0.12] transition-colors"
          >
            {/* Top accent */}
            <div
              className="w-8 h-[2px] rounded-full"
              style={{ background: p.color }}
            />

            <div className="flex-1">
              <h3 className="text-[14px] font-medium text-white/90 mb-2 leading-snug">{p.name}</h3>
              <p className="text-[12.5px] leading-[1.6] text-white/40">{p.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {p.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/30 border border-white/[0.06]"
                >
                  {t}
                </span>
              ))}
              {p.tags.length > 3 && (
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-white/20 border border-white/[0.06]">
                  +{p.tags.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-white/[0.05]">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-white/30 hover:text-white/70 transition-colors"
              >
                <GithubIcon size={12} />
                Source
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] text-white/30 hover:text-white/70 transition-colors ml-auto"
                >
                  <ExternalLink style={{ width: 11, height: 11, strokeWidth: 1.5 }} />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
