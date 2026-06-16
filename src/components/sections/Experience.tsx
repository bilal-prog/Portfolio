"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Senior React Native Developer",
    company: "Multiple Enterprise Clients / Agencies",
    period: "2022 - Present",
    highlights: [
      "Built and maintained 50+ enterprise e-commerce applications.",
      "Developed high-performance customer-facing mobile apps using React Native.",
      "Engineered delivery management applications with real-time tracking.",
      "Developed comprehensive administrative dashboards using React and Next.js.",
      "Optimized application performance, scalability, and state management.",
      "Collaborated with international teams to define and implement product roadmaps.",
      "Delivered production-ready features used daily by thousands of end users.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="text-muted-foreground">
            A track record of building complex and scalable applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-8 items-start">
                <div className="hidden md:block col-span-1 text-right mt-1 text-muted-foreground font-medium">
                  {exp.period}
                </div>

                <div className="md:hidden mb-2 text-accent font-medium text-sm">
                  {exp.period}
                </div>

                <div className="col-span-3 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-10 md:-left-[2.1rem] top-1.5 w-4 h-4 rounded-full bg-accent ring-4 ring-background z-10" />
                  {/* Timeline line */}
                  <div className="absolute -left-8 md:-left-8 top-4 bottom-[-3rem] w-px bg-card-border" />

                  <div className="bg-card border border-card-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="text-lg text-foreground/80 mb-6 flex items-center gap-2">
                      <Briefcase size={18} /> {exp.company}
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-3"
                        >
                          <span className="text-accent mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
