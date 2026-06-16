"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: [
      "React Native", "React.js", "Next.js", "TypeScript",
      "JavaScript", "Redux Toolkit", "React Query", "Expo", "Tailwind CSS"
    ]
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js", "Express.js", "MongoDB", "Mongoose",
      "REST APIs", "JWT Authentication", "Socket.IO"
    ]
  },
  {
    title: "Cloud & Integrations",
    skills: [
      "Stripe", "Cloudinary", "Firebase", "OneSignal",
      "Redis", "BullMQ"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git", "GitHub", "Postman", "Swagger/OpenAPI",
      "Docker", "VS Code", "Android Studio", "Xcode"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my expertise spanning full-stack development, mobile architecture, and modern cloud integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-card-border hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background rounded-md text-sm font-medium border border-card-border text-foreground/80 hover:text-accent hover:border-accent/50 cursor-default transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
