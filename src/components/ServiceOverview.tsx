"use client";
import Link from "next/link";
import { ShieldCheck, UserCheck, Car, Heart, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Security Guards",
    desc: "Trained guards for commercial and residential security.",
    slug: "security-guards",
    icon: <ShieldCheck className="w-10 h-10" style={{ color: "var(--highlight-color)" }} />,
  },
  {
    title: "Bouncers & Bodyguards",
    desc: "Reliable professionals for events and personal protection.",
    slug: "bouncers",
    icon: <UserCheck className="w-10 h-10" style={{ color: "var(--highlight-color)" }} />,
  },
  {
    title: "Care Takers",
    desc: "Compassionate caretakers for home and facility needs.",
    slug: "care-takers",
    icon: <Heart className="w-10 h-10" style={{ color: "var(--highlight-color)" }} />,
  },
  {
    title: "Liftman & Lady Guards",
    desc: "Disciplined and well-trained manpower for corporates.",
    slug: "lift-man",
    icon: <Users className="w-10 h-10" style={{ color: "var(--highlight-color)" }} />,
  },
  {
    title: "Drivers",
    desc: "Skilled and verified drivers for business or personal use.",
    slug: "drivers",
    icon: <Car className="w-10 h-10" style={{ color: "var(--highlight-color)" }} />,
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="heading text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
          style={{ color: "var(--highlight-color)" }}
        >
          Our Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((srv, index) => (
            <motion.div
              key={srv.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15, // wave-like stagger
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Link
                href={`/services/${srv.slug}`}
                className="min-h-[250px] group bg-[var(--card-bg-color)] border border-[var(--card-border-color)] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_25px_var(--highlight-color)] hover:-translate-y-2 transition-all duration-300 text-center flex flex-col justify-center"
              >
                <div className="flex justify-center mb-5">{srv.icon}</div>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ color: "var(--highlight-color)" }}
                >
                  {srv.title}
                </h3>
                <p
                  className="body-text text-base leading-relaxed"
                  style={{ color: "var(--text-color)" }}
                >
                  {srv.desc}
                </p>
              </Link>
            </motion.div>
          ))}

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Link
              href="/services"
              className="min-h-[250px] flex flex-col items-center justify-center bg-[var(--card-bg-color)] border border-[var(--card-border-color)] p-8 rounded-2xl shadow-lg hover:shadow-[0_0_25px_var(--highlight-color)] hover:-translate-y-2 transition-all duration-300"
            >
              <ArrowRight
                className="w-12 h-12 mb-3"
                style={{ color: "var(--highlight-color)" }}
              />
              <h3
                className="text-2xl font-semibold"
                style={{ color: "var(--highlight-color)" }}
              >
                View All
              </h3>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Soft background glow */}
      <div
        className="absolute inset-0 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--highlight-color) 10%, transparent 70%)",
          opacity: 0.1,
        }}
      ></div>
    </section>
  );
}
