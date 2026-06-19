"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { sendContactEmail } from "@/app/actions";

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

export default function Contact() {
  const [isPending, startTransition] = React.useTransition();
  const [status, setStatus] = React.useState<{ type: "idle" | "success" | "error", message: string }>({ type: "idle", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: "error", message: result.error || "Something went wrong." });
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's build something <span className="text-accent">impactful</span>{" "}
            together.
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm currently looking for new international remote opportunities.{" "}
            <br className="hidden md:block" />
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-8">Connect with me</h3>

            <div className="space-y-6">
              <a
                href="mailto:hamdibilal36@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">
                  hamdibilal36@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/bilal-prog"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <GithubIcon size={20} />
                </div>
                <span className="text-lg font-medium">
                  github.com/bilal-prog
                </span>
              </a>

              <a
                href="https://ma.linkedin.com/in/bilal-hamdi-844b5220b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors">
                  <LinkedinIcon size={20} />
                </div>
                <span className="text-lg font-medium">LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-2xl bg-card border border-card-border shadow-xl">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground/80"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-background border border-card-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                  disabled={isPending}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground/80"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background border border-card-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
                  disabled={isPending}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="bg-background border border-card-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  disabled={isPending}
                />
              </div>
              
              {status.message && (
                <div className={`p-3 rounded-lg text-sm ${status.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="mt-4 w-full bg-accent hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                {isPending ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
