"use client";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";
import bfsLogo from "../../../public/bfslogo.png";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-10 bg-[var(--card-bg-color)] text-[var(--text-color)] border-t border-[var(--card-border-color)]">
      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-[var(--highlight-color)] to-transparent opacity-30 blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-xl shadow-sm">
              <Image
                src={bfsLogo}
                alt="BFS Logo"
                width={55}
                height={55}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--heading-color)] leading-tight">
              Bombay<br /> Facility Services
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-[var(--subheading-color)] max-w-sm">
            Providing professional manpower and elite security services across Mumbai with
            excellence, discipline, and trust.
          </p>

          <div className="flex space-x-4 pt-2">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--input-bg)] text-[var(--text-color)] hover:bg-[var(--highlight-color)] hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6 text-[var(--heading-color)]">
            Explore
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Careers", link: "/careers" },
              { name: "Contact", link: "/contact" },
              { name: "Request a Quote", link: "/quote" },
              { name: "Gallery", link: "/gallery" },
              { name: "Privacy Policy", link: "/privacy" },
              { name: "Terms & Conditions", link: "/terms" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="inline-block text-[var(--subheading-color)] hover:text-[var(--highlight-color)] hover:translate-x-2 transition-all duration-300 font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6 text-[var(--heading-color)]">
            Our Services
          </h3>
          <ul className="space-y-3">
            {servicesData.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-block text-[var(--subheading-color)] hover:text-[var(--highlight-color)] hover:translate-x-2 transition-all duration-300 font-medium"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-bold mb-6 text-[var(--heading-color)]">
            Reach Out
          </h3>

          <div className="flex items-center space-x-4 group">
            <div className="p-3 rounded-xl bg-[var(--input-bg)] group-hover:bg-[var(--highlight-color)] transition-colors duration-300">
              <FaPhoneAlt className="text-[var(--highlight-color)] group-hover:text-black transition-colors duration-300" />
            </div>
            <a
              href="tel:+917499506824"
              className="text-[var(--subheading-color)] group-hover:text-[var(--highlight-color)] transition-colors duration-300 font-medium"
            >
              +91 7499506824
            </a>
          </div>

          <div className="flex items-center space-x-4 group">
            <div className="p-3 rounded-xl bg-[var(--input-bg)] group-hover:bg-[var(--highlight-color)] transition-colors duration-300">
              <FaEnvelope className="text-[var(--highlight-color)] group-hover:text-black transition-colors duration-300" />
            </div>
            <a
              href="mailto:himanshuyadav7852@gmail.com"
              className="text-[var(--subheading-color)] group-hover:text-[var(--highlight-color)] transition-colors duration-300 font-medium break-all"
            >
              himanshuyadav7852@gmail.com
            </a>
          </div>

          <div className="flex items-start space-x-4 group">
            <div className="p-3 rounded-xl bg-[var(--input-bg)] group-hover:bg-[var(--highlight-color)] transition-colors duration-300 shrink-0">
              <FaMapMarkerAlt className="text-[var(--highlight-color)] group-hover:text-black transition-colors duration-300" />
            </div>
            <a
              href="https://maps.google.com/?q=Jai+Ambe+Soc.+MG+Cross+Road+No+3,+Kandivali+West,+Mumbai"
              target="_blank"
              className="text-[var(--subheading-color)] group-hover:text-[var(--highlight-color)] transition-colors duration-300 font-medium leading-relaxed"
            >
              Jai Ambe Soc. MG Cross Road No 3,
              <br />Kandivali West, Mumbai
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-[var(--card-border-color)] pt-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 text-sm text-[var(--subheading-color)]">
        <p className="hover:text-[var(--highlight-color)] transition-colors duration-300 mb-4 md:mb-0">
          © {new Date().getFullYear()} Bombay Facility Services. All rights reserved.
        </p>
        <p>
          Built with 💛 in Mumbai
        </p>
      </div>
    </footer>
  );
}
