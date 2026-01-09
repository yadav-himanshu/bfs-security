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
    <footer className="relative overflow-hidden pt-16 pb-8 text-[var(--text-color)] border-t border-[var(--text-color)]/20">
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2">
            <Image
              src={bfsLogo}
              alt="BFS Logo"
              width={55}
              height={55}
              className="rounded-md"
            />
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--heading-color)" }}
            >
              Bombay Facility Services
            </h2>
          </div>

          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{ color: "var(--subheading-color)" }}
          >
            Providing professional manpower services across Mumbai with
            excellence, discipline, and trust.
          </p>

          {/* ✅ Social Media Icons (exact original size, hover kept) */}
          <div className="flex space-x-3 pt-3">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className="transition-colors duration-300"
                style={{ color: "var(--text-color)" }}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--input-bg)] hover:bg-[var(--highlight-color)] hover:text-black transition-colors duration-300 text-sm">
                  {social.icon}
                </div>
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
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--heading-color)" }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Services", link: "/services" },
              { name: "Careers", link: "/careers" },
              { name: "Contact", link: "/contact" },
              { name: "Quote", link: "/quote" },
              { name: "Gallery", link: "/gallery" },
              { name: "Privacy Policy", link: "/privacy" },
              { name: "Terms & Conditions", link: "/terms" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="transition-colors duration-300 text-[var(--text-color)] hover:text-[var(--highlight-color)]"
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
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--heading-color)" }}
          >
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {servicesData.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors duration-300 text-[var(--text-color)] hover:text-[var(--highlight-color)]"
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
          className="space-y-3"
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: "var(--heading-color)" }}
          >
            Get in Touch
          </h3>

          {/* 📞 Phone (Reference) */}
          <div className="flex items-center space-x-3 group transition-all duration-300">
            <div className="p-2 rounded-full transition-all duration-300 bg-[var(--input-bg)] group-hover:bg-[var(--highlight-color)]">
              <FaPhoneAlt className="text-[var(--highlight-color)] group-hover:text-[var(--input-text)] transition-all duration-300" />
            </div>
            <a
              href="tel:+917499506824"
              className="text-sm text-[var(--text-color)] transition-colors duration-300 group-hover:text-[var(--highlight-color)]"
            >
              +91 7499506824
            </a>
          </div>

          {/* 📧 Email */}
          <div className="flex items-center space-x-3 group transition-all duration-300">
            <div className="p-2 rounded-full transition-all duration-300 bg-[var(--input-bg)] group-hover:bg-[var(--highlight-color)]">
              <FaEnvelope className="text-[var(--highlight-color)] group-hover:text-[var(--input-text)] transition-all duration-300" />
            </div>
            <a
              href="mailto:himanshuyadav7852@gmail.com"
              className="text-sm text-[var(--text-color)] transition-colors duration-300 group-hover:text-[var(--highlight-color)]"
            >
              himanshuyadav7852@gmail.com
            </a>
          </div>

          {/* 📍 Address */}
          <div className="flex items-start space-x-3 group transition-all duration-300">
            <div className="p-2 rounded-full transition-all duration-300 bg-[var(--input-bg)] group-hover:bg-[var(--highlight-color)]">
              <FaMapMarkerAlt className="text-[var(--highlight-color)] group-hover:text-[var(--input-text)] mt-1 transition-all duration-300" />
            </div>
            <a
              href="https://maps.google.com/?q=Jai+Ambe+Soc.+MG+Cross+Road+No+3,+Kandivali+West,+Mumbai"
              target="_blank"
              className="text-sm leading-snug text-[var(--text-color)] transition-colors duration-300 group-hover:text-[var(--highlight-color)]"
            >
              Jai Ambe Soc. MG Cross Road No 3, Kandivali West, Mumbai
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 border-t pt-6 text-center text-sm transition-colors duration-300"
        style={{
          borderColor: "var(--card-border-color)",
          color: "var(--subheading-color)",
        }}
      >
        <span className="hover:text-[var(--highlight-color)] transition-colors duration-300">
          © {new Date().getFullYear()} Bombay Facility Services. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
