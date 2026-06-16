import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-white/5 bg-card/30">
        <p className="text-sm">
          © {new Date().getFullYear()} Bilal Hamdi. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
