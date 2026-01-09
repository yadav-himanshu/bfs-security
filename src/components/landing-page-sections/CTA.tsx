"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-12 md:py-24 px-8 text-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] opacity-30 animate-pulse pointer-events-none"></div>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="heading mb-4 drop-shadow-lg"
      >
        Need Reliable Security Services?
      </motion.h2>

      {/* Animated Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="body-text max-w-2xl mx-auto mb-8"
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
          className="button shadow-lg hover:shadow-2xl hover:brightness-110 inline-block"
        >
          Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
