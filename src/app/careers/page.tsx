"use client";
import PageHeader from "@/components/PageHeader";
import CareerCard from "@/components/CareerCard";
import { jobsData } from "@/lib/jobsData";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <section
      className="py-20 transition-colors duration-500 text-[var(--text-color)]">
      <PageHeader
        title="Careers at BFS"
        subtitle="Join our professional manpower team for security and facility services"
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {jobsData.map((job) => (
          <motion.div
            key={job.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
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
