"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";

export default function TermsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-20 min-h-screen transition-colors duration-300 text-[var(--text-color)]">
      {/* Glowing Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(250, 204, 21, 0.1), transparent 70%)",
        }}
      ></div>

      <PageHeader
        title="Terms & Conditions"
        subtitle="Please review the following terms before using Bombay Facility Services’ platform or solutions."
      />

      <motion.div
        className="max-w-5xl mx-auto px-6 mt-12 space-y-8 body-text relative z-10"
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Section 1 */}
        <motion.div variants={fadeUp}>
          <h3
            className="subheading mb-2"
            style={{ color: "var(--highlight-color)" }}
          >
            Acceptance of Terms
          </h3>
          <p>
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
        <motion.div variants={fadeUp}>
          <h3
            className="subheading mb-2"
            style={{ color: "var(--highlight-color)" }}
          >
            Services
          </h3>
          <p>
            BFS provides trained professionals for security, facility
            management, drivers, housekeeping, and related manpower services.
            All services are subject to availability, suitability, and BFS’s
            internal approval process.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div variants={fadeUp}>
          <h3
            className="subheading mb-2"
            style={{ color: "var(--highlight-color)" }}
          >
            User Responsibilities
          </h3>
          <ul className="list-disc pl-5 sm:pl-8 space-y-2">
            <li>
              Provide accurate, up-to-date information while availing any BFS
              service.
            </li>
            <li>
              Comply with applicable laws and regulations during service use.
            </li>
            <li>Treat BFS staff and company property with respect and care.</li>
          </ul>
        </motion.div>

        {/* Section 4 */}
        <motion.div variants={fadeUp}>
          <h3
            className="subheading mb-2"
            style={{ color: "var(--highlight-color)" }}
          >
            Limitation of Liability
          </h3>
          <p>
            BFS shall not be liable for any indirect, incidental, special, or
            consequential damages resulting from the use or inability to use our
            services or website. Our maximum liability shall be limited to the
            amount paid for the service in question.
          </p>
        </motion.div>

        {/* Section 5 */}
        <motion.div variants={fadeUp}>
          <h3
            className="subheading mb-2"
            style={{ color: "var(--highlight-color)" }}
          >
            Contact
          </h3>
          <p>
            For queries or concerns related to these Terms & Conditions, contact
            us at{" "}
            <a href="mailto:himanshuyadav7852@gmail.com" className="link">
              himanshuyadav7852@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+917499506824" className="link">
              +91 7499506824
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
