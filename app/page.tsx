import BentoSection from "@/components/BentoSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <BentoSection />
      <div className="h-px bg-white/5 mx-4 sm:mx-6 md:mx-10 lg:mx-14" />
      <ProjectsSection />
      <footer className="px-4 sm:px-6 md:px-10 lg:px-14 py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-white/20 font-mono">
          © {new Date().getFullYear()} Gowtham Sai Bhuvanam
        </span>
        <span className="text-[11px] text-white/15 font-mono">
          Built with Next.js · Deployed on Vercel
        </span>
      </footer>
    </main>
  );
}
