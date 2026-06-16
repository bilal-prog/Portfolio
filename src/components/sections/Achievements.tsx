"use client";

import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "60+", label: "REST APIs Built" },
  { value: "Thousands", label: "End Users Served" }
];

export default function Achievements() {
  return (
    <section className="py-20 border-y border-white/5 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card/30 border border-card-border hover:bg-card/50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {item.value}
              </div>
              <div className="text-sm md:text-base font-medium text-accent uppercase tracking-wide">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
