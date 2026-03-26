"use client";
import PageHeader from "@/components/layout/PageHeader";
import CareerCard from "@/components/cards/CareerCard";
import { jobsData } from "@/lib/jobsData";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <section className="py-20 bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-500 text-[var(--text-color)]">
      {/* Background Enhancements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--highlight-color)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <PageHeader
        title="Careers at BFS"
        subtitle="Join our professional manpower team for security and facility services"
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 !leading-tight text-[var(--heading-color)]"
        >
          Current <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">Openings</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg leading-relaxed text-[var(--subheading-color)] max-w-2xl mx-auto mb-16"
        >
          We are always looking for dedicated individuals to join our growing team. Explore our current job opportunities and build your career with Mumbai's most trusted facility services.
        </motion.p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {jobsData.map((job) => (
          <motion.div
            key={job.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <CareerCard job={job} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
