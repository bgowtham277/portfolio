"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "GitaVox Inc.",
    role: "Co-Founder & AI Engineer",
    period: "Mar 2026 — Present",
    location: "Tampa, FL",
    color: "#34d399",
    tag: "Founding",
    bullets: [
      "Co-founded AI-powered voice, text agent, and web solutions company serving B2B clients across Healthcare, Legal, Insurance, and Financial Services.",
      "Directed full-stack go-to-market strategy, product direction, B2B outreach, and customer discovery.",
      "Built LLM-powered voice agents with Twilio SIP trunking achieving sub-300ms response latency.",
      "Designed client-facing websites using React, TypeScript, and Vercel.",
    ],
  },
  {
    company: "Intuit",
    role: "AI Engineer",
    period: "Jan 2025 — Feb 2026",
    location: "USA",
    color: "#38bdf8",
    tag: "Full-time",
    bullets: [
      "Architected and scaled GenOS platform to support 100+ production models and 20M+ monthly inferences at 250ms p95 latency and 99.9% availability.",
      "Implemented hybrid search, model routing, and guardrails — improved accuracy to 94%, reduced hallucinations by 42%, cut token costs by 28%.",
      "Built Intuit Assist AI agents using multi-agent orchestration to automate 60–70% of manual QuickBooks workflows for 15M+ users.",
      "Delivered executive dashboards (Tableau, Power BI) enabling senior leadership to track AI model performance and operational KPIs in real time.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Data Scientist",
    period: "May 2020 — Aug 2023",
    location: "India",
    color: "#a855f7",
    tag: "Full-time",
    bullets: [
      "Led end-to-end development of ML/AI models (Random Forest, XGBoost, CNN, NLP) for credit risk and fraud detection — achieving 97% fraud detection accuracy.",
      "Fine-tuned transformer models and built a multilingual customer-support chatbot handling 1,200+ daily queries, reducing response time by 40%.",
      "Campaign optimization initiative drove a 12% lift in conversion and was adopted as a company-wide standard.",
    ],
  },
];

const education = [
  {
    degree: "MS in Artificial Intelligence & Business Analytics",
    school: "University of South Florida",
    period: "Aug 2023 — May 2025",
    location: "Tampa, FL",
    color: "#f59e0b",
  },
  {
    degree: "BE in Computer Science & Engineering",
    school: "AP IIIT Srikakulam",
    period: "2016 — 2020",
    location: "India",
    color: "#818cf8",
  },
];

function TimelineItem({ exp, index, inView }: { exp: typeof experiences[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-6 w-3.5 h-3.5 rounded-full border-2 border-current"
        style={{ color: exp.color, background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
      />

      {/* Card */}
      <div className="glass border border-white/5 rounded-2xl p-6 card-hover">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-white font-bold text-lg">{exp.company}</h3>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-mono"
                style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
              >
                {exp.tag}
              </span>
            </div>
            <p className="font-medium" style={{ color: exp.color }}>
              {exp.role}
            </p>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-sm font-mono">{exp.period}</p>
            <p className="text-white/30 text-xs">{exp.location}</p>
          </div>
        </div>

        <ul className="space-y-2.5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-white/50 text-sm leading-relaxed">
              <span style={{ color: exp.color }} className="mt-1.5 flex-shrink-0 text-xs">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#34d399]/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#34d399] font-mono text-sm tracking-widest uppercase mb-3">03 — Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] md:left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-[#38bdf8]/30 via-[#a855f7]/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-white/40 font-mono text-sm tracking-widest uppercase mb-8 text-center">Education & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div key={edu.degree} className="glass border border-white/5 rounded-2xl p-5 card-hover">
                <div
                  className="text-xs font-mono px-2 py-1 rounded-full inline-block mb-3"
                  style={{ background: `${edu.color}10`, color: edu.color }}
                >
                  {edu.period}
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{edu.degree}</h4>
                <p className="text-white/40 text-xs">{edu.school} · {edu.location}</p>
              </div>
            ))}
            {/* Cert */}
            <div className="glass border border-white/5 rounded-2xl p-5 card-hover md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-lg">
                  🏆
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">SnowPro Associate Certified</h4>
                  <p className="text-white/40 text-xs">Snowflake · Data Cloud Certification</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
