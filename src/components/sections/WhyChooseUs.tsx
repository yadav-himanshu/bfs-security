"use client";

import { motion } from "framer-motion";
import { Clock, UserCheck, ShieldCheck, ThumbsUp, Shield } from "lucide-react";
import { advantagesData } from "@/lib/data/advantagesData";

// Icon resolution map for pure data portability
const iconMap = {
  clock: Clock,
  usercheck: UserCheck,
  shieldcheck: ShieldCheck,
  thumbsup: ThumbsUp,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-slate-50/50 dark:bg-slate-950/20 relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider mb-3">
            <Shield className="w-3 h-3" />
            <span>BFS Advantages</span>
          </div>

          <h2 className="heading mb-3">
            Vigilance You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">Depend Upon</span>
          </h2>

          <p className="body-text max-w-xl">
            We enforce strict protocols and continuous officer drills to deliver premier, 
            reliable safety management solutions across Mumbai.
          </p>
        </div>

        {/* Feature Cards Grid (Compact & Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantagesData.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconId];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="relative flex flex-col p-6 rounded-xl glass-panel group overflow-hidden bg-[var(--card-bg-color)] hover:shadow-lg hover:shadow-[var(--highlight-glow)] hover:-translate-y-1 hover:border-[var(--highlight-color)]/20 duration-300 transition-all border border-[var(--card-border-color)]"
              >
                {/* Gold Top Accent Line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--highlight-color)] to-amber-500 transition-all duration-500 group-hover:w-full"></div>

                {/* Icon Container */}
                <div className="w-11 h-11 rounded-lg bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex items-center justify-center mb-4 group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-all duration-500 shadow-sm border border-[var(--highlight-color)]/10">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold mb-2 text-[var(--heading-color)] group-hover:text-[var(--highlight-color)] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[var(--text-color)] leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
