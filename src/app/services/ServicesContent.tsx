"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/lib/data/servicesData";
import ServiceCard from "@/components/cards/ServiceCard";
import PageHeader from "@/components/layout/PageHeader";

export default function ServicesContent() {
  return (
    <section className="py-20 min-h-screen bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-500">
      {/* Background radial glowing effects */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-[var(--highlight-color)]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[var(--highlight-color)]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10">
        <PageHeader
          title="Our Services"
          subtitle="Enterprise-grade security and premium facility management solutions designed for Mumbai's elite estates."
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full"
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
