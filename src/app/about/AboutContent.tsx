"use client";

import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import SG from "../../../public/img/services/security-guards.png";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Award,
  HeartHandshake,
  Shield,
  Users,
  Building2,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AboutContent() {
  const milestones = [
    {
      year: "2010",
      title: "Establishment & Foundation",
      desc: "Founded with a clear vision to provide highly disciplined safeguarding and police-verified manpower services across Mumbai.",
      icon: Shield,
    },
    {
      year: "2015",
      title: "100+ Elite Guard Workforce",
      desc: "Trained and deployed our first large-scale verified force, earning the trust of major residential townships.",
      icon: Users,
    },
    {
      year: "2020",
      title: "Corporate Sector Expansion",
      desc: "Partnered with premium commercial hubs, MNC offices, lift logistics, and VIP event operations across Maharashtra.",
      icon: Building2,
    },
    {
      year: "2026",
      title: "Modern Elite Force",
      desc: "Operating as an elite facility protection command equipped with next-gen supervision, executive bodyguards, and tactical bouncers.",
      icon: TrendingUp,
    },
  ];

  const values = [
    {
      title: "Absolute Integrity",
      desc: "We act with honesty, strict transparency, and honor in every client engagement and guard deployment.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Commitment",
      desc: "We are fully dedicated to providing timely, 100% reliable, and premium security dispatch at any hour.",
      icon: Clock,
    },
    {
      title: "Academy Discipline",
      desc: "Our personnel undergo strict training to maintain neat presentation, extreme punctuality, and professional etiquette.",
      icon: Award,
    },
    {
      title: "Ultimate Client Focus",
      desc: "Your safety, satisfaction, and operational seamlessness are our top priorities, backed by active officer supervision.",
      icon: HeartHandshake,
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  } as const;

  return (
    <div className="py-20 bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-500">
      {/* Background Orbs & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-[var(--highlight-color)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-3/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <PageHeader
        title="About Our Agency"
        subtitle="Uncompromising vigilance, tactical training, and elite manpower systems protecting Mumbai since 2010"
      />

      {/* Company Overview (Staggered layout) */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-xs font-bold text-[var(--highlight-color)] uppercase tracking-wider mb-6 w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Protecting Since 2010</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 !leading-tight text-[var(--heading-color)]">
            Bombay&apos;s Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">
              Manpower &amp; Security Force
            </span>
          </h2>

          <div className="space-y-5 text-base text-[var(--subheading-color)] leading-relaxed font-medium">
            <p>
              <strong>Bombay Facility Services (BFS)</strong> is a premier security and professional facility organization dedicated to delivering top-tier, highly disciplined safeguarding solutions across the commercial and residential hubs of Mumbai.
            </p>
            <p>
              We take pride in our rigid training and police-verified vetting standards. Every guard, bouncer, lift operator, caretaker, and driver under our command undergoes extensive active duty drills to ensure complete punctuality, neatness, and situational adaptability.
            </p>
            <p>
              Whether safeguarding industrial plants, corporate complexes, private estates, or multi-national events, the BFS banner represents absolute protection, reliability, and peace of mind.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 mt-10 p-6 rounded-2xl glass-panel shadow-sm border border-[var(--card-border-color)]">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-[var(--highlight-color)] mb-1">500+</p>
              <p className="text-xs sm:text-sm font-bold text-[var(--heading-color)] uppercase tracking-wide">Trained Guard Officers</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-[var(--highlight-color)] mb-1">50+</p>
              <p className="text-xs sm:text-sm font-bold text-[var(--heading-color)] uppercase tracking-wide">Premium Corporate Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Right Collage Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--highlight-color)]/20 to-transparent rounded-[2.5rem] blur-xl opacity-40 pointer-events-none"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--card-border-color)] bg-slate-900 group aspect-[4/5] max-w-[450px] mx-auto">
            <Image
              src={SG}
              alt="BFS Security Team"
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-left z-20">
              <span className="text-[10px] tracking-widest font-black uppercase text-[var(--highlight-color)] bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md mb-2 inline-block">BFS Operational Standard</span>
              <h4 className="text-white text-lg font-bold">Uncompromising Vetting, Unparalleled Peace of Mind.</h4>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Interactive Milestones Timeline */}
      <section className="py-20 relative z-10 bg-slate-50/50 dark:bg-slate-950/20 border-y border-[var(--card-border-color)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-xl mx-auto"
          >
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider mb-3">
              <span>Historical Milestones</span>
            </div>
            <h2 className="heading mb-3">Our Journey</h2>
            <p className="text-sm text-[var(--text-color)] font-medium">Tracking our growth and development into Mumbai&apos;s leading protective services partner.</p>
          </motion.div>

          {/* Vertical Timeline Tree */}
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-[var(--highlight-color)]/10 via-[var(--highlight-color)]/40 to-[var(--highlight-color)]/10 pointer-events-none"></div>

            <div className="space-y-12">
              {milestones.map((item, idx) => {
                const IconComponent = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--card-bg-color)] border-2 border-[var(--highlight-color)] flex items-center justify-center text-[var(--highlight-color)] z-20 shadow-md">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className={`ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-2xl glass-panel p-6 sm:p-8 border border-[var(--card-border-color)] bg-[var(--card-bg-color)] text-left shadow-sm hover:shadow-md transition-shadow relative ${
                        isEven ? "md:mr-auto" : "md:ml-auto"
                      }`}
                    >
                      <span className="text-xs font-black text-[var(--highlight-color)] uppercase tracking-wider mb-2 block">{item.year}</span>
                      <h4 className="text-[17px] font-bold text-[var(--heading-color)] mb-2">{item.title}</h4>
                      <p className="text-[13px] text-[var(--text-color)] leading-relaxed font-medium">{item.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Our Mission",
                tag: "Vigilant Guarding",
                desc: "To deliver dependable, highly disciplined security and manpower systems that actively safeguard people, corporate assets, and property. We maintain strict compliance, punctual dispatch, and total integrity in every operation.",
              },
              {
                title: "Our Vision",
                tag: "Standard Benchmarks",
                desc: "To be recognized as the gold standard of premium protective services and facility logistics in India. We aim to continually pioneer next-gen officer training, strict vetting, and custom client security blueprints.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-lg transition-all duration-500 bg-[var(--card-bg-color)] border border-[var(--card-border-color)] hover:-translate-y-1.5 group relative overflow-hidden text-left"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--highlight-color)]/10 rounded-full blur-2xl group-hover:bg-[var(--highlight-color)]/20 transition-colors duration-500"></div>

                <span className="text-[10px] tracking-wider font-extrabold uppercase text-[var(--highlight-color)] mb-3 block">{item.tag}</span>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-[var(--heading-color)] group-hover:text-[var(--highlight-color)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-color)] font-medium relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10 border-t border-[var(--card-border-color)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-xl mx-auto"
        >
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider mb-3">
            <span>Corporate Philosophy</span>
          </div>
          <h2 className="heading">Our Core Values</h2>
          <p className="text-sm text-[var(--text-color)] font-medium">The pillars of professionalism and security that form the operational backbone of BFS.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="p-8 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-[var(--highlight-glow)] transition-all duration-300 bg-[var(--card-bg-color)] border border-[var(--card-border-color)] hover:border-[var(--highlight-color)]/30 text-center group flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--highlight-color)]/10 flex items-center justify-center mb-6 text-[var(--highlight-color)] group-hover:scale-110 group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-all duration-300 border border-[var(--highlight-color)]/10">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-[17px] font-bold mb-3 text-[var(--heading-color)]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[var(--subheading-color)] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Direct Link */}
      <section className="max-w-6xl mx-auto px-6 pt-16 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 sm:p-12 rounded-3xl glass-panel bg-[var(--card-bg-color)] border border-[var(--card-border-color)] relative overflow-hidden flex flex-col items-center justify-center shadow-lg"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--highlight-color)]/5 rounded-full blur-[80px] pointer-events-none"></div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--heading-color)] mb-4">
            Need Premium Manpower Solutions?
          </h3>
          <p className="text-sm sm:text-base text-[var(--subheading-color)] mb-8 max-w-xl font-medium">
            Contact our duty officers today to construct a customized safeguarding plan tailored for your residential estate, corporate center, or special event.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/quote" variant="primary">
              Get Dispatch Quote
            </Button>
            <Button href="/contact" variant="outline" className="gap-2">
              Speak to Officer <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
