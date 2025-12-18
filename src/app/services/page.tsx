"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/lib/servicesData";
import ServiceCard from "@/components/ServiceCard";
import PageHeader from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <section
      className="py-20 transition-colors duration-300"
      style={{
        // background: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <PageHeader
        title="Our Services"
        subtitle="Professional manpower solutions for security and facility management."
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15, // delay between each card animation
            },
          },
        }}
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
