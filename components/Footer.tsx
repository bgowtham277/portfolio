"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="gradient-text font-bold text-lg">GSB</span>
          <span className="text-white/20 text-sm ml-2 font-mono">// AI Engineer</span>
          <p className="text-white/20 text-xs mt-1">Tampa, FL · gowthamsaib277@gmail.com</p>
        </div>

        <div className="flex items-center gap-6 text-white/20 text-xs font-mono">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-white/60 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: GithubIcon, href: "https://github.com/gowthamsaib277" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/gowthamsaibhuvanam" },
            { icon: Mail, href: "mailto:gowthamsaib277@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass border border-white/5 rounded-lg flex items-center justify-center text-white/30 hover:text-[#38bdf8] hover:border-[#38bdf8]/20 transition-all"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 text-white/15 text-xs font-mono">
        © {new Date().getFullYear()} Gowtham Sai Bhuvanam · Built with Next.js + Framer Motion
      </div>
    </footer>
  );
}
