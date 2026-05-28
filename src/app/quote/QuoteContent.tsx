"use client";

import PageHeader from "@/components/layout/PageHeader";
import QuoteForm from "@/components/forms/QuoteForm";
import { Shield, Clock, Coins, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function QuoteContent() {
  const features = [
    {
      icon: Shield,
      title: "Elite Protection Forces",
      desc: "Every BFS operative undergoes strict vetting, police-verification, and emergency situational drills.",
    },
    {
      icon: Clock,
      title: "Rapid Deployment & Setup",
      desc: "Quick boarding processes and seamless scheduling across corporate, event, or residential sectors.",
    },
    {
      icon: Coins,
      title: "Cost-Effective Scheduling",
      desc: "Flexible, transparent pricing without hidden fees. Custom packages tailored to your budget constraints.",
    },
    {
      icon: Sparkles,
      title: "24/7 Duty Commanders",
      desc: "On-call facility inspectors and operations control rooms actively supervising all guards 24/7.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-500 relative">
      {/* Background Decorative Radial Blobs */}
      <div className="absolute top-20 -left-1/4 w-[600px] h-[600px] bg-[var(--highlight-color)]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-20 -right-1/4 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[150px] pointer-events-none"></div>

      <PageHeader
        title="Request a Quote"
        subtitle="Secure premium manpower, elite guards, and facility logistics solutions tailored to your operational needs."
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">

        {/* Info & Features Section */}
        <motion.div
          className="lg:col-span-7 space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/20 text-xs font-bold uppercase tracking-wider text-[var(--highlight-color)] w-fit"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>BFS Premium Security &amp; Facility</span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold !leading-tight text-[var(--heading-color)]">
              Tailored Protection &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">
                Manpower Logistics
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-[var(--subheading-color)] max-w-2xl">
              Fill out our simple request form. An operations officer will review your requirements and provide a customised dispatch roadmap and transparent pricing schedule.
            </p>
          </motion.div>

          {/* Premium Card Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6 pt-2"
            variants={containerVariants}
          >
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-[var(--card-bg-color)] border border-[var(--card-border-color)] shadow-sm hover:shadow-md hover:border-[var(--highlight-color)]/25 transition-all duration-300 flex flex-col items-start gap-4 text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex items-center justify-center group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-colors duration-300 shrink-0">
                  <feat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[var(--heading-color)] mb-2 group-hover:text-[var(--highlight-color)] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-[var(--text-color)]">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Quote Form Section */}
        <motion.div
          className="lg:col-span-5 w-full relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--highlight-color)]/20 to-transparent rounded-[2.5rem] blur-xl opacity-40 pointer-events-none"></div>

          <div className="relative z-10 w-full">
            <QuoteForm />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
