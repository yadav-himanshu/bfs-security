"use client";

import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-20 bg-[var(--bg-color)] relative overflow-hidden text-[var(--text-color)]">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--highlight-color)]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <PageHeader
        title="Contact Us"
        subtitle="Reach out to BFS for inquiries, quotes, or support"
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-16 relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col h-full"
        >
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg-color)] border border-[var(--card-border-color)] text-sm font-semibold text-[var(--test-color)] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--highlight-color)]"></span>
              Always Available
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 !leading-tight text-[var(--heading-color)]">
              Get in Touch
            </h2>

            <p className="text-lg leading-relaxed text-[var(--subheading-color)]">
              Fill out the form or reach us directly using the details below. Our
              team is always ready to provide reliable manpower solutions and
              support.
            </p>
          </div>

          <div className="space-y-6 flex-grow">
            {[
              {
                icon: MapPin,
                title: "Our Office",
                details: "Jai Ambe Soc. MG Cross Road No 3, Kandivali West, Mumbai 400067"
              },
              {
                icon: Phone,
                title: "Call Us",
                details: "+91 9819758831"
              },
              {
                icon: Mail,
                title: "Email Us",
                details: "info.bombayfacilityservice@gmail.com"
              }
            ].map((info, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-[var(--card-bg-color)] border border-[var(--card-border-color)] hover:shadow-md transition-shadow group">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] rounded-full flex items-center justify-center group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-colors duration-300">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[var(--heading-color)] font-bold text-lg mb-1">{info.title}</h4>
                  <p className="text-[var(--subheading-color)]">{info.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="mt-10 relative group h-64 rounded-2xl overflow-hidden border border-[var(--card-border-color)] shadow-sm group-hover:shadow-[0_0_20px_var(--highlight-color)]/20 transition-all duration-500 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8816042018276!2d72.84876027517641!3d19.22123018705754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7efc2b77d7d%3A0xa71f5edab5c8f5d1!2sJai%20Ambe%20Society%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1696859200000!5m2!1sen!2sin"
              title="Google Maps BFS Location"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[var(--card-bg-color)] p-8 sm:p-10 border border-[var(--card-border-color)] rounded-3xl shadow-xl shadow-black/5 relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--highlight-color)]/20 rounded-full blur-2xl"></div>
            <h3 className="text-3xl font-bold mb-8 text-[var(--heading-color)] border-b border-[var(--card-border-color)] pb-4">
              Send us a message
            </h3>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
