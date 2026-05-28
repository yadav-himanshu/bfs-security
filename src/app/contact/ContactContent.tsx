"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, ChevronDown, Shield, Clock, Users, Zap } from "lucide-react";

const faqs = [
  {
    q: "What are BFS's guard verification protocols?",
    a: "Every guard undergoes mandatory police verification, background checks, physical fitness assessments, and a minimum 30-day situational training program before deployment. We maintain active records with local law enforcement for full compliance.",
  },
  {
    q: "How quickly can guards be dispatched to a new site?",
    a: "For standard deployments, BFS can mobilize a verified guard team within 24–48 hours. For large-scale or corporate event security, we recommend a 3–5 day lead time to ensure optimal staff selection and site briefing.",
  },
  {
    q: "Do you offer customised security packages for events?",
    a: "Absolutely. We design bespoke security blueprints tailored to the exact nature of your event — from single-officer residential watch to multi-team bouncer and bodyguard deployments for large corporate and VIP gatherings.",
  },
  {
    q: "What areas in Mumbai do you currently serve?",
    a: "BFS operates across Greater Mumbai including Kandivali, Andheri, Borivali, Malad, Thane, Navi Mumbai, and all surrounding commercial and residential zones. Contact us to confirm coverage for your specific location.",
  },
  {
    q: "Can I request a facility management trial before signing a contract?",
    a: "Yes. We offer a structured pilot engagement period for new corporate clients. This allows you to assess our officer quality, response time, and professionalism before committing to a long-term service agreement.",
  },
];

const contactItems = [
  {
    icon: MapPin,
    title: "Our Headquarters",
    detail: "Jai Ambe Soc. MG Cross Road No 3, Kandivali West, Mumbai 400067",
    sub: "Open Mon – Sat, 9am – 7pm",
  },
  {
    icon: Phone,
    title: "Duty Officer Line",
    detail: "+91 9819758831",
    sub: "Available 24 hours",
    href: "tel:+919819758831",
  },
  {
    icon: Mail,
    title: "Operational Email",
    detail: "info.bombayfacilityservice@gmail.com",
    sub: "We respond within 4 hours",
    href: "mailto:info.bombayfacilityservice@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Direct",
    detail: "+91 9819758831",
    sub: "Instant quote & inquiries",
    href: "https://wa.me/919819758831",
  },
];

export default function ContactContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[var(--bg-color)] relative overflow-hidden text-[var(--text-color)] transition-colors duration-500">
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--highlight-color)]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/4 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <PageHeader
        title="Get in Touch"
        subtitle="Reach our duty officers for inquiries, custom quotes, and rapid guard deployment"
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 relative z-10">
        {/* Two column hero layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider mb-4">
                <Shield className="w-3 h-3" />
                <span>Always Available</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold !leading-tight text-[var(--heading-color)] mb-4">
                Contact BFS Command <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">
                  Directly
                </span>
              </h2>
              <p className="text-[var(--subheading-color)] leading-relaxed font-medium">
                Fill out the form or use the details below. Our team is always ready to provide reliable manpower solutions, fast quotes, and professional support.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item, idx) => {
                const IconComponent = item.icon;
                const content = (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex flex-col gap-3 p-5 rounded-2xl bg-[var(--card-bg-color)] border border-[var(--card-border-color)] hover:shadow-lg hover:shadow-[var(--highlight-glow)] hover:-translate-y-1 hover:border-[var(--highlight-color)]/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] flex items-center justify-center group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--highlight-color)] mb-0.5">{item.title}</p>
                      <p className="text-sm font-bold text-[var(--heading-color)] leading-snug break-all">{item.detail}</p>
                      <p className="text-[11px] text-[var(--text-color)] font-medium mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={idx}>{content}</div>
                );
              })}
            </div>

            {/* Quick stats strip */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: Clock, text: "24/7 Officer Availability" },
                { icon: Users, text: "500+ Verified Guards" },
                { icon: Zap, text: "48hr Rapid Deployment" },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[var(--subheading-color)]">
                    <Icon className="w-4 h-4 text-[var(--highlight-color)]" />
                    {stat.text}
                  </div>
                );
              })}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-[var(--card-border-color)] shadow-lg group"
            >
              <div className="absolute inset-0 ring-1 ring-[var(--highlight-color)]/0 group-hover:ring-[var(--highlight-color)]/20 rounded-2xl transition-all duration-500 z-10 pointer-events-none"></div>
              <div className="absolute -inset-1 bg-[var(--highlight-color)]/10 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8816042018276!2d72.84876027517641!3d19.22123018705754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7efc2b77d7d%3A0xa71f5edab5c8f5d1!2sJai%20Ambe%20Society%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1696859200000!5m2!1sen!2sin"
                title="Google Maps BFS Location"
                className="w-full h-52 border-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out relative z-0"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right — Premium Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[var(--card-bg-color)] p-8 sm:p-10 border border-[var(--card-border-color)] rounded-3xl shadow-xl shadow-black/5 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[var(--highlight-color)]/15 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none"></div>

              <div className="mb-8 relative z-10">
                <h3 className="text-2xl font-extrabold text-[var(--heading-color)] mb-1">Send Us a Message</h3>
                <p className="text-sm text-[var(--text-color)] font-medium">We typically respond within 4 business hours.</p>
              </div>
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Accordion Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider mb-3">
              <MessageCircle className="w-3 h-3" />
              <span>Common Questions</span>
            </div>
            <h2 className="heading mb-2">Frequently Asked Questions</h2>
            <p className="text-sm text-[var(--text-color)] font-medium">Answers to the most common inquiries about BFS services and operations.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--card-border-color)] bg-[var(--card-bg-color)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
                >
                  <span className="text-sm sm:text-[15px] font-bold text-[var(--heading-color)] group-hover:text-[var(--highlight-color)] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-[var(--highlight-color)]/10 flex items-center justify-center text-[var(--highlight-color)]"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-6 pb-5 text-sm text-[var(--text-color)] leading-relaxed font-medium border-t border-[var(--card-border-color)] pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
