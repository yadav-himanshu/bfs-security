"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";

export default function TermsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 min-h-screen bg-[var(--bg-color)] transition-colors duration-300 text-[var(--text-color)] overflow-hidden">
      {/* Glowing Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--highlight-color)]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--highlight-color)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <PageHeader
        title="Terms & Conditions"
        subtitle="Please review the following terms before using Bombay Facility Services’ platform or solutions."
      />

      <motion.div
        className="max-w-4xl mx-auto px-6 mt-16 space-y-12 relative z-10"
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Section 1 */}
        <motion.div variants={fadeUp} className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow">
          <h3
            className="text-2xl font-bold mb-4 pl-4 border-l-4"
            style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}
          >
            Acceptance of Terms
          </h3>
          <p className="text-lg leading-relaxed text-[var(--subheading-color)] pl-4">
            By accessing or using{" "}
            <strong style={{ color: "var(--highlight-color)" }}>
              Bombay Facility Services (BFS)
            </strong>
            ’s website or services, you agree to comply with and be bound by
            these Terms & Conditions. If you do not agree, please refrain from
            using our services.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div variants={fadeUp} className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow">
          <h3
            className="text-2xl font-bold mb-4 pl-4 border-l-4"
            style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}
          >
            Services
          </h3>
          <p className="text-lg leading-relaxed text-[var(--subheading-color)] pl-4">
            BFS provides trained professionals for security, facility
            management, drivers, housekeeping, and related manpower services.
            All services are subject to availability, suitability, and BFS’s
            internal approval process.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div variants={fadeUp} className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow">
          <h3
            className="text-2xl font-bold mb-4 pl-4 border-l-4"
            style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}
          >
            User Responsibilities
          </h3>
          <ul className="list-none pl-4 space-y-3">
            {[
              "Provide accurate, up-to-date information while availing any BFS service.",
              "Comply with applicable laws and regulations during service use.",
              "Treat BFS staff and company property with respect and care."
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-lg leading-relaxed text-[var(--subheading-color)]">
                <span className="text-[var(--highlight-color)] mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Section 4 */}
        <motion.div variants={fadeUp} className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow">
          <h3
            className="text-2xl font-bold mb-4 pl-4 border-l-4"
            style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}
          >
            Limitation of Liability
          </h3>
          <p className="text-lg leading-relaxed text-[var(--subheading-color)] pl-4">
            BFS shall not be liable for any indirect, incidental, special, or
            consequential damages resulting from the use or inability to use our
            services or website. Our maximum liability shall be limited to the
            amount paid for the service in question.
          </p>
        </motion.div>

        {/* Section 5 */}
        <motion.div variants={fadeUp} className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow mb-10">
          <h3
            className="text-2xl font-bold mb-4 pl-4 border-l-4"
            style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}
          >
            Contact
          </h3>
          <p className="text-lg leading-relaxed text-[var(--subheading-color)] pl-4">
            For queries or concerns related to these Terms & Conditions, contact
            us at{" "}
            <a href="mailto:himanshuyadav7852@gmail.com" className="text-[var(--highlight-color)] hover:underline font-medium transition-colors">
              himanshuyadav7852@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+917499506824" className="text-[var(--highlight-color)] hover:underline font-medium transition-colors">
              +91 7499506824
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
