"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target as Node)) {
        setIsResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Animated Gradient / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm mb-6"
          >
            Available for remote opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-accent">Bilal Hamdi</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-foreground/80 mb-6">
            Senior React Native Developer <br className="hidden md:block" /> &
            Full-Stack JavaScript Engineer
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I build scalable mobile and web products with a strong focus on user
            experience, performance, and maintainable architecture. Over the
            past four years, I have worked on enterprise-scale applications,
            e-commerce ecosystems, booking platforms, and real-time systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-accent text-white font-semibold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
            >
              View Projects <ArrowRight size={20} />
            </a>
            
            <div className="relative w-full sm:w-auto" ref={resumeRef}>
              <button
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/10 bg-white/5 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <Download size={20} /> Download Resume <ChevronDown size={16} className={`transition-transform duration-200 ${isResumeOpen ? "rotate-180" : ""}`} />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-full sm:w-48 bg-background/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-20 transition-all duration-200 ${
                  isResumeOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <a
                  href="/CV_Bilal_Hamdi_English.pdf"
                  target="_blank"
                  onClick={() => setIsResumeOpen(false)}
                  className="block px-4 py-3 hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  English Version
                </a>
                <a
                  href="/CV_Bilal_Hamdi_French.pdf"
                  target="_blank"
                  onClick={() => setIsResumeOpen(false)}
                  className="block px-4 py-3 hover:bg-white/10 transition-colors border-t border-white/5 text-sm font-medium"
                >
                  French Version
                </a>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-lg text-foreground/80 font-semibold flex items-center justify-center hover:text-accent transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href="https://github.com/bilal-prog"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <GithubIcon size={28} />
            </a>
            <a
              href="https://ma.linkedin.com/in/bilal-hamdi-844b5220b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <LinkedinIcon size={28} />
            </a>
            <a
              href="mailto:hamdibilal36@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
