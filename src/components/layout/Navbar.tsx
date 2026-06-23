"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter hover:text-accent transition-colors">
          BH<span className="text-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="relative group">
            <button
              className="px-4 py-2 rounded-full border border-accent/50 text-accent text-sm font-medium hover:bg-accent hover:text-white transition-all"
            >
              Resume
            </button>
            <div className="absolute top-full right-0 mt-2 w-40 bg-background/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a
                href="/CV_Bilal_Hamdi_English.pdf"
                target="_blank"
                className="block px-4 py-3 hover:bg-white/10 transition-colors text-sm font-medium text-foreground"
              >
                English Version
              </a>
              <a
                href="/CV_Bilal_Hamdi_French.pdf"
                target="_blank"
                className="block px-4 py-3 hover:bg-white/10 transition-colors border-t border-white/5 text-sm font-medium text-foreground"
              >
                French Version
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <span className="text-sm font-medium text-muted-foreground px-2">Download Resume</span>
            <a
              href="/CV_Bilal_Hamdi_English.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-center rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              English Version
            </a>
            <a
              href="/CV_Bilal_Hamdi_French.pdf"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-center rounded-lg border border-accent/50 text-accent font-medium hover:bg-accent/10 transition-colors"
            >
              French Version
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
