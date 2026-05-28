"use client";

import { motion } from "framer-motion";
import { ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-[var(--bg-color)] relative overflow-hidden">
      {/* Background Soft Gold Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[var(--highlight-color)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-12 rounded-2xl glass-panel overflow-hidden text-center flex flex-col items-center shadow-xl"
        >
          {/* Subtle Golden Border Glow Line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--highlight-color)] to-transparent opacity-60"></div>

          {/* Icon Badge */}
          <div className="w-10 h-10 rounded-full bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex items-center justify-center mb-5 border border-[var(--highlight-color)]/20 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>

          {/* Elegant Tagline */}
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--highlight-color)] mb-3">
            Secure Your Assets Today
          </span>

          {/* Compact Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--heading-color)] mb-4 max-w-2xl leading-[1.2]">
            Ready to Partner With Mumbai’s <br className="hidden sm:inline" />
            <span className="text-[var(--highlight-color)]">Elite Security & Facility</span> Force?
          </h2>

          {/* Crisp description */}
          <p className="text-[13px] sm:text-sm text-[var(--subheading-color)] max-w-lg mb-8 leading-relaxed font-medium">
            Get a tailored, cost-effective safety deployment audit designed specifically for your 
            premises. Zero obligation, fully verified personnel.
          </p>

          {/* Sized-down Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <Button
              href="/quote"
              variant="primary"
              className="group w-full sm:w-auto"
            >
              Request Free Audit 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>

            <Button
              href="/contact"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[var(--highlight-color)] shrink-0" />
              Speak to Officer
            </Button>
          </div>

          {/* Bulleted trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-8 text-[11px] font-bold text-[var(--subheading-color)]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--highlight-color)]"></span>
              Police-Verified Force
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--highlight-color)]"></span>
              ISO Certified Guarding
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--highlight-color)]"></span>
              No Obligation Site Audit
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
