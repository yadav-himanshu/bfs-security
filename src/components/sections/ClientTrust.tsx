"use client";

import { motion } from "framer-motion";
import { Building2, Home, Building, ShieldCheck, Briefcase } from "lucide-react";
import { sectorsData } from "@/lib/data/sectorsData";

// Icon resolution mapping for clean static data separation
const iconMap = {
  building2: Building2,
  home: Home,
  building: Building,
  briefcase: Briefcase,
};

export default function ClientTrust() {
  return (
    <section className="relative py-16 px-6 bg-[var(--obsidian-dark)] text-white border-y border-white/5 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[var(--highlight-color)]/8 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl flex flex-col items-center mb-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3 h-3" />
            <span>Sectors We Protect</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight leading-tight text-white">
            Trusted Across <span className="text-[var(--highlight-color)]">Mumbai</span>
          </h2>
          
          <p className="text-[13px] sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            From commercial towers to premium residential townships, BFS enforces elite 
            guarding and manpower solutions tailored for absolute safety.
          </p>
        </motion.div>

        {/* Compact Sector Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {sectorsData.map((client, idx) => {
            const IconComponent = iconMap[client.iconId];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                className="flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--highlight-color)] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer shadow-md"
              >
                {/* Circular Glowing Icon Box (Compact) */}
                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center mb-3 text-[var(--highlight-color)] border border-white/10 group-hover:bg-[var(--highlight-color)] group-hover:text-black group-hover:border-[var(--highlight-color)] transition-all duration-500">
                  <IconComponent className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" />
                </div>
                
                <h3 className="font-bold text-[13px] sm:text-sm text-white group-hover:text-[var(--highlight-color)] transition-colors duration-300 tracking-tight">
                  {client.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
