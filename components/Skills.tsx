"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    category: "Generative AI & LLMs",
    color: "#38bdf8",
    skills: ["Large Language Models", "RAG", "Prompt Engineering", "NLP", "Transformer Architectures", "Sentiment Analysis"],
  },
  {
    category: "ML & Deep Learning",
    color: "#a855f7",
    skills: ["PyTorch", "TensorFlow", "Keras", "XGBoost", "Random Forests", "CNN", "SVM", "Bayesian Methods"],
  },
  {
    category: "Cloud & MLOps",
    color: "#34d399",
    skills: ["AWS SageMaker", "GCP Vertex AI", "Azure ML", "Docker", "Kubernetes", "MLflow", "CI/CD"],
  },
  {
    category: "Data & Analytics",
    color: "#f59e0b",
    skills: ["Snowflake", "Databricks", "BigQuery", "PySpark", "Kafka", "Airflow", "Tableau", "Power BI"],
  },
  {
    category: "Languages & APIs",
    color: "#f43f5e",
    skills: ["Python", "SQL", "TypeScript", "R", "FastAPI", "Flask", "Streamlit", "React"],
  },
  {
    category: "AI Orchestration",
    color: "#818cf8",
    skills: ["LangGraph", "Multi-Agent Systems", "GPT / Claude / Gemini", "Pinecone", "ChromaDB", "LangChain"],
  },
];

const coreTools = [
  "Python", "PyTorch", "LangGraph", "AWS", "Docker", "Snowflake", "Kubernetes", "FastAPI",
  "TensorFlow", "PySpark", "MLflow", "Tableau", "React", "TypeScript", "Airflow", "GCP",
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative bg-[#0a0f1a]" ref={ref}>
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#a855f7] font-mono text-sm tracking-widest uppercase mb-3">02 — Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Full-spectrum AI engineering — from research to production at scale.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * gi, duration: 0.5 }}
              className="glass border border-white/5 rounded-2xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: group.color, boxShadow: `0 0 8px ${group.color}` }}
                />
                <h3 className="text-white font-semibold text-sm" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-mono text-white/60 border transition-all duration-200 hover:text-white"
                    style={{
                      borderColor: `${group.color}20`,
                      background: `${group.color}08`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="overflow-hidden relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0f1a] to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...coreTools, ...coreTools, ...coreTools].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 glass border border-white/5 rounded-full text-sm text-white/40 font-mono flex-shrink-0"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
