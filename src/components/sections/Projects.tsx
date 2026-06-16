"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const PROJECTS = [
  {
    title: "Appointly",
    description: "A production-grade appointment booking platform backend designed for businesses to manage services, appointments, reviews, notifications, and subscriptions.",
    features: [
      "JWT Authentication", "Appointment Scheduling", "Availability Calculation", 
      "Stripe Subscription Billing", "Real-Time Notifications", "Push Notifications", 
      "Email Reminders", "Cloudinary File Management", "Review System", 
      "Audit Logs", "OpenAPI Documentation"
    ],
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "Socket.IO", "Stripe", "Cloudinary", "OneSignal", "Swagger"],
    github: "#",
    link: "#",
    hasImage: false
  },
  {
    title: "E-Shop",
    description: "A mobile e-commerce application built for a modern audio retail business.",
    features: [
      "Product Catalog", "Cart & Wishlist", "Multi-language Support", 
      "Responsive UI", "Promotions & Discounts"
    ],
    tech: ["React Native", "Firebase", "JavaScript"],
    github: "https://github.com/bilal-prog/e_shop",
    link: "#",
    hasImage: false
  },
  {
    title: "Enterprise Commerce Ecosystem",
    description: "A showcase project describing my experience building large-scale commerce ecosystems consisting of Customer Applications, Delivery Applications, and Admin Dashboards.",
    features: [
      "Cross-platform Mobile Apps", "Real-time Delivery Tracking", "Comprehensive Dashboards", 
      "Analytics & Reporting", "Multi-vendor Architecture"
    ],
    tech: ["React Native", "React.js", "Next.js", "Node.js"],
    github: "#",
    link: "#",
    hasImage: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            A selection of production-grade platforms, apps, and ecosystems I have architected and developed.
          </p>
          <div className="inline-block px-4 py-2 mt-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 font-medium text-sm">
            Note: The majority of my enterprise work is under strict NDAs and confidentiality agreements, so exact project details and source code cannot be shared publicly.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl bg-card border border-card-border overflow-hidden hover:border-accent/50 transition-all hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-3 text-muted-foreground">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                        <GithubIcon size={22} />
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/90 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4 list-disc marker:text-accent/50">
                    {project.features.slice(0, 5).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                    {project.features.length > 5 && (
                      <li>And more...</li>
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-card-border">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
