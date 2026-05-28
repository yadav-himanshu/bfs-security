"use client";

import PageHeader from "@/components/layout/PageHeader";
import CareerCard from "@/components/cards/CareerCard";
import { jobsData } from "@/lib/data/jobsData";
import { ShieldCheck, Heart, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CareersContent() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Police-Verified Force",
      desc: "Work with highly disciplined, respected professionals in environments prioritizing officer safety.",
    },
    {
      icon: Heart,
      title: "Premium Salary & Security",
      desc: "Competitive compensation, timely payouts, standard medical coverage, and insurance protection.",
    },
    {
      icon: Award,
      title: "Professional Training Academy",
      desc: "Free tactical situational drills, fitness conditioning, and leadership coaching for fast career growth.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-500 text-[var(--text-color)]">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-[var(--highlight-color)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[130px] pointer-events-none"></div>

      <PageHeader
        title="Careers at BFS"
        subtitle="Step into a rewarding, highly disciplined career. Join Bombay's premier manpower and safeguarding forces."
      />

      {/* Why Join BFS Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 relative z-10">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Build Your Career at BFS?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading-color)]">
            Bombay&apos;s Most Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">
              Employment Standard
            </span>
          </h2>
          <p className="text-[15px] sm:text-base leading-relaxed text-[var(--subheading-color)] max-w-xl mx-auto">
            We value our personnel above all. BFS equips every team member with certifications, top-tier equipment, and stable, long-term employment.
          </p>
        </motion.div>

        {/* Perks Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[var(--card-bg-color)] border border-[var(--card-border-color)] shadow-sm hover:shadow-md hover:border-[var(--highlight-color)]/25 transition-all duration-300 text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex items-center justify-center mb-6 group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-all duration-300">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[var(--heading-color)] mb-3 group-hover:text-[var(--highlight-color)] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[var(--text-color)]">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Current Openings Header */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold mb-6 text-[var(--heading-color)]"
        >
          Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">Openings</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base leading-relaxed text-[var(--subheading-color)] max-w-2xl mx-auto mb-16"
        >
          Explore active vacancies and kickstart your onboarding. Select a position below to fill out your details and upload your CV immediately.
        </motion.p>
      </div>

      {/* Career Openings Cards Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {jobsData.map((job) => (
          <motion.div
            key={job.id}
            variants={itemVariants}
          >
            <CareerCard job={job} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
