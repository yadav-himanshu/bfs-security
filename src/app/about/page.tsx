"use client";

import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import SG from "../../../public/img/services/security-guards.png";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="py-20 bg-[var(--bg-color)] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-[var(--highlight-color)]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-3/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <PageHeader title="About Us" subtitle="Who We Are" />

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg-color)] border border-[var(--card-border-color)] text-sm font-semibold text-[var(--test-color)] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--highlight-color)]"></span>
            Since 2010
          </div>
          <h2
            className="heading font-extrabold mb-6 !leading-tight text-4xl sm:text-5xl"
          >
            Trusted Manpower & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">Security Services</span>
          </h2>

          <p className="body-text text-lg leading-relaxed mb-6 text-[var(--subheading-color)]">
            <strong>Bombay Facility Services (BFS)</strong> is a Mumbai-based
            organization dedicated to delivering reliable, disciplined, and
            professional manpower solutions. We take pride in our highly trained
            staff who serve across residential complexes, corporate offices,
            industries, and events.
          </p>

          <p className="body-text text-lg leading-relaxed text-[var(--subheading-color)]">
            Established with the vision of promoting safety and efficiency, BFS
            has become a trusted name in the field of security and facility
            management. Our team includes certified guards, caretakers,
            bouncers, bodyguards, lift operators, and drivers each trained to
            maintain professionalism, punctuality, and vigilance.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10 p-6 bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-2xl shadow-sm">
            <div>
              <h4 className="text-3xl font-bold text-[var(--heading-color)] mb-1">500+</h4>
              <p className="text-sm font-medium text-[var(--subheading-color)]">Trained Professionals</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[var(--heading-color)] mb-1">50+</h4>
              <p className="text-sm font-medium text-[var(--subheading-color)]">Corporate Clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--highlight-color)]/20 to-transparent rounded-[2rem] blur-xl opacity-50"></div>
          <Image
            src={SG}
            alt="BFS Security Team"
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl object-cover w-full h-[500px] border border-[var(--card-border-color)] relative z-10"
          />
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading inline-block relative">
              Our Mission & Vision
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[var(--highlight-color)] rounded-full opacity-50"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Our Mission",
                desc: "To provide safe, disciplined, and dependable manpower solutions that protect people, property, and businesses ensuring peace of mind through professionalism and integrity."
              },
              {
                title: "Our Vision",
                desc: "To be recognized as the most trusted and efficient facility service provider in India setting benchmarks for quality, discipline, and customer satisfaction."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-10 rounded-3xl shadow-lg hover:shadow-xl hover:shadow-[var(--highlight-color)]/5 transition-all duration-500 bg-[var(--card-bg-color)] border border-[var(--card-border-color)] hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--highlight-color)]/10 rounded-full blur-2xl group-hover:bg-[var(--highlight-color)]/20 transition-colors duration-500"></div>
                <h3 className="text-3xl font-bold mb-4 text-[var(--heading-color)] group-hover:text-[var(--highlight-color)] transition-colors">
                  {item.title}
                </h3>
                <p className="body-text text-lg leading-relaxed text-[var(--text-color)] relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading inline-block relative">
            Our Core Values
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Integrity",
              desc: "We act with honesty, transparency, and respect in every engagement.",
            },
            {
              title: "Commitment",
              desc: "We are fully dedicated to providing timely, reliable, and quality service.",
            },
            {
              title: "Discipline",
              desc: "Our staff are trained to maintain punctuality, neatness, and professional conduct.",
            },
            {
              title: "Client Focus",
              desc: "Your satisfaction and safety are our top priorities always.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl shadow-sm hover:shadow-md hover:shadow-[var(--highlight-color)]/10 transition-all duration-300 bg-[var(--card-bg-color)] border border-[var(--card-border-color)] text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--highlight-color)]/10 flex items-center justify-center mb-6 text-[var(--highlight-color)] font-bold text-2xl group-hover:scale-110 group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-all duration-300">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--heading-color)]">
                {item.title}
              </h3>
              <p className="body-text text-sm text-[var(--subheading-color)] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
