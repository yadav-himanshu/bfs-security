"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 text-center text-[var(--text-color)] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] opacity-30 animate-pulse pointer-events-none"></div>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4 drop-shadow-lg"
        style={{ color: "var(--heading-color)" }}
      >
        Need Reliable Security Services?
      </motion.h2>

      {/* Animated Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-8 text-lg"
        style={{ color: "var(--subheading-color)" }}
      >
        Hire trained professionals today and ensure complete peace of mind with
        BFS.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Link
          href="/contact"
          className="px-8 py-3 rounded-md font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-110 inline-block"
          style={{
            backgroundColor: "var(--highlight-color)",
            color: "var(--input-text)",
          }}
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
