"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a passionate <strong className="text-foreground">Senior React Native Developer & Full-Stack Engineer</strong> based in Morocco, ready for international remote opportunities.
              </p>
              <p>
                With a deep focus on mobile development expertise and full-stack engineering, I enjoy bridging the gap between engineering and design. My product mindset drives me to build solutions that not only fulfill technical requirements but also deliver seamless user experiences.
              </p>
              <p>
                I am committed to continuous learning and staying updated with the latest industry trends. My experience architecting complex ecosystems—ranging from scalable backends to high-performance client apps—equips me to tackle challenging business problems effectively.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-card-border">
                <h4 className="font-bold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Temara, Morocco</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-card-border">
                <h4 className="font-bold text-foreground mb-1">Availability</h4>
                <p className="text-muted-foreground text-sm">Open to Remote Work</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[80px]" />
              <div className="relative h-full w-full rounded-2xl border border-white/10 overflow-hidden bg-card flex items-center justify-center p-8">
                {/* Abstract shape representing coding / full-stack */}
                <div className="w-full h-full border border-accent/30 rounded-xl relative overflow-hidden bg-background/50 flex flex-col">
                   <div className="h-8 border-b border-accent/20 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/80" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                     <div className="w-3 h-3 rounded-full bg-green-500/80" />
                   </div>
                   <div className="p-6 font-mono text-sm text-accent/80 flex-1 flex flex-col justify-center">
                     <p>{`const developer = {`}</p>
                     <p className="pl-4">{`name: "Bilal Hamdi",`}</p>
                     <p className="pl-4">{`role: "Senior Full-Stack Engineer",`}</p>
                     <p className="pl-4">{`focus: ["Mobile", "Web", "Scale"],`}</p>
                     <p className="pl-4">{`readyForHire: true`}</p>
                     <p>{`};`}</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
