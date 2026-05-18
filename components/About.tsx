"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Brain, Rocket, Users, TrendingUp } from "lucide-react";

const traits = [
  {
    icon: Brain,
    title: "AI Systems Architect",
    desc: "From LLM-powered voice agents to multi-agent orchestration platforms — I design systems that scale to millions.",
    color: "#38bdf8",
  },
  {
    icon: Rocket,
    title: "Co-Founder Mindset",
    desc: "Built GitaVox from 0→1, owning product, engineering, and client delivery across Healthcare, Legal & Finance.",
    color: "#a855f7",
  },
  {
    icon: TrendingUp,
    title: "Strategy × Execution",
    desc: "I translate ambiguous business problems into scoped AI initiatives with measurable, board-ready outcomes.",
    color: "#34d399",
  },
  {
    icon: Users,
    title: "Cross-Functional Leader",
    desc: "Partnered with Product, Finance, and Design at Intuit to ship AI features trusted by 15M+ users.",
    color: "#f59e0b",
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Decorative line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#38bdf8] font-mono text-sm tracking-widest uppercase mb-3">01 — About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building AI that{" "}
            <span className="gradient-text">actually ships</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            AI Engineer & Co-Founder with 4+ years building production-grade ML systems, LLM platforms,
            and decision-support tools used by senior leadership at scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-white/60 text-base leading-relaxed">
              <p>
                I&apos;m Gowtham — an AI Engineer who operates at the intersection of{" "}
                <span className="text-white font-medium">deep technical execution</span> and{" "}
                <span className="text-white font-medium">strategic product thinking</span>.
              </p>
              <p>
                At <span className="text-[#38bdf8] font-semibold">Intuit</span>, I architected the GenOS platform
                supporting 100+ production models and 20M+ monthly inferences at 250ms p95 latency — then used
                multi-agent orchestration to automate 60–70% of manual QuickBooks workflows for 15M+ users.
              </p>
              <p>
                I co-founded <span className="text-[#a855f7] font-semibold">GitaVox Inc.</span>, where I personally
                own product, engineering, and client delivery — building LLM voice agents with sub-300ms latency
                for Healthcare, Legal, and Financial Services clients.
              </p>
              <p>
                Before that, 3+ years at <span className="text-[#34d399] font-semibold">Tata Consultancy Services</span>{" "}
                building fraud detection systems achieving 97% accuracy across enterprise clients.
              </p>
            </div>

            {/* Highlight pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Tampa, FL", "Open to Remote", "MS @ USF", "SnowPro Certified"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 glass border border-white/10 rounded-full text-xs text-white/50 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((trait, i) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass border border-white/5 rounded-2xl p-5 card-hover cursor-default"
                  style={{ "--hover-color": trait.color } as React.CSSProperties}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${trait.color}15`, border: `1px solid ${trait.color}30` }}
                  >
                    <Icon size={20} style={{ color: trait.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{trait.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{trait.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
