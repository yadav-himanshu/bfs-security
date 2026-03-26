"use client";
import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
  Car,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Security Guards",
    desc: "Trained guards for commercial and residential security.",
    slug: "security-guards",
    icon: (
      <ShieldCheck className="w-12 h-12 text-[var(--highlight-color)] group-hover:scale-110 transition-transform duration-300" />
    ),
  },
  {
    title: "Bouncers & Bodyguards",
    desc: "Reliable professionals for events and personal protection.",
    slug: "bouncers",
    icon: (
      <UserCheck className="w-12 h-12 text-[var(--highlight-color)] group-hover:scale-110 transition-transform duration-300" />
    ),
  },
  {
    title: "Care Takers",
    desc: "Compassionate caretakers for home and facility needs.",
    slug: "care-takers",
    icon: (
      <Heart className="w-12 h-12 text-[var(--highlight-color)] group-hover:scale-110 transition-transform duration-300" />
    ),
  },
  {
    title: "Liftman & Lady Guards",
    desc: "Disciplined and well-trained manpower for corporates.",
    slug: "lift-man",
    icon: (
      <Users className="w-12 h-12 text-[var(--highlight-color)] group-hover:scale-110 transition-transform duration-300" />
    ),
  },
  {
    title: "Drivers",
    desc: "Skilled and verified drivers for business or personal use.",
    slug: "drivers",
    icon: (
      <Car className="w-12 h-12 text-[var(--highlight-color)] group-hover:scale-110 transition-transform duration-300" />
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-[var(--bg-color)]">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="heading inline-block relative">
            Our Premium Services
            <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-[var(--highlight-color)] rounded-full opacity-50"></div>
          </h2>
          <p className="body-text max-w-2xl mx-auto mt-6">
            Discover our comprehensive range of specialized security and facility management solutions tailored for your peace of mind.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((srv, index) => (
            <motion.div
              key={srv.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <Link
                href={`/services/${srv.slug}`}
                className="group flex flex-col h-full bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-2xl p-8 hover:shadow-xl hover:shadow-[var(--highlight-color)]/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--highlight-color)]/5 rounded-full blur-3xl group-hover:bg-[var(--highlight-color)]/20 transition-all duration-500"></div>

                <div className="w-20 h-20 mx-auto rounded-2xl bg-[var(--card-bg-color)] shadow-sm border border-[var(--card-border-color)] flex items-center justify-center mb-6 group-hover:border-[var(--highlight-color)]/50 transition-colors duration-300 relative z-10">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--heading-color)] group-hover:text-[var(--highlight-color)] transition-colors duration-300 relative z-10">
                  {srv.title}
                </h3>
                <p className="text-[var(--text-color)] leading-relaxed flex-grow relative z-10">
                  {srv.desc}
                </p>
                <div className="mt-6 flex items-center justify-center text-sm font-semibold text-[var(--highlight-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="h-full"
          >
            <Link
              href="/services"
              className="group flex flex-col items-center justify-center h-full bg-gradient-to-br from-[var(--highlight-color)]/10 to-transparent border border-[var(--highlight-color)]/30 rounded-2xl p-8 hover:bg-[var(--highlight-color)]/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-[var(--highlight-color)] text-[var(--button-text)] group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--heading-color)]">
                Explore All
              </h3>
              <p className="text-[var(--text-color)] mt-2">View our complete catalog</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
