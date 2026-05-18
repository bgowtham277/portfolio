import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gowtham Sai Bhuvanam — AI Engineer",
  description:
    "AI Engineer & Co-Founder with 4+ years building LLM-powered tools, ML systems, and executive dashboards. Open to AI/ML Engineer roles.",
  keywords: ["AI Engineer", "Machine Learning", "LLM", "NLP", "Data Scientist", "Tampa FL"],
  openGraph: {
    title: "Gowtham Sai Bhuvanam — AI Engineer",
    description: "Building high-impact AI at the intersection of strategy and execution.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
