"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function About() {
  const points = [
    "Police-Verified Guard Force",
    "Tailored Property Protocols",
    "10+ Years Punctual Dispatch",
    "Elite VIP Bouncer Squads",
  ];

  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden bg-[var(--bg-color)]">
      {/* Background soft lighting */}
      <div className="absolute top-1/3 -left-[10%] w-[300px] h-[300px] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Compact Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="absolute -inset-3 bg-gradient-to-tr from-[var(--highlight-color)]/10 to-transparent rounded-[2rem] blur-lg opacity-50 pointer-events-none"></div>
            
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-xl border border-[var(--card-border-color)] group bg-slate-900">
              <Image
                src="/img/AboutPage.png"
                alt="Bombay Facility Services Team"
                fill
                sizes="(max-w-768px) 100vw, 420px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 z-20">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--highlight-color)]" />
                  <span>On-Duty Vigilance</span>
                </div>
              </div>
            </div>

            {/* Overlapping Quick Stat Badge (Compact) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-4 -right-2 p-3.5 rounded-xl glass-panel shadow-xl flex items-center gap-2.5 border border-[var(--card-border-color)] max-w-[180px] z-30"
            >
              <div className="w-9 h-9 rounded-lg bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-[var(--heading-color)]">100% Trust</p>
                <p className="text-[9px] font-bold text-[var(--text-color)] uppercase tracking-wider">Client Retention</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Editorial Copy (Scale back text sizes) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-4 text-left"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider w-fit">
              <Shield className="w-3 h-3" />
              <span>Who We Are</span>
            </div>

            {/* Title (Scaled back size) */}
            <h2 className="heading text-xl sm:text-2xl md:text-3xl font-extrabold mb-1">
              Bombay&apos;s Premier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">
                Security & Facility Force
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="body-text">
              <strong>Bombay Facility Services (BFS)</strong> is a specialized security and manpower organization. 
              We equip commercial enterprises, VIP estates, residential townships, and major events across Mumbai 
              with highly disciplined, police-verified security guards, caretakers, bodyguards, and elite bouncers.
            </p>

            {/* Paragraph 2 */}
            <p className="body-text">
              Founded on the pillars of absolute integrity, punctuality, and vigilance, we enforce safety 24/7. 
              Our personnel undergo strict situational drills to manage emergencies seamlessly, guaranteeing complete peace of mind.
            </p>

            {/* Value checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {points.map((pt, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--heading-color)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--highlight-color)] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-3 flex items-center gap-5">
              <Button
                href="/about"
                variant="primary"
                size="sm"
                className="shadow-md"
              >
                Our Complete Story
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                size="sm"
                className="font-bold gap-1 group"
              >
                Inquire With Officer 
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
