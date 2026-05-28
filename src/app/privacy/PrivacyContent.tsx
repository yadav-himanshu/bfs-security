"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import { Lock, Database, ShieldCheck, Eye, Mail, ArrowRight } from "lucide-react";

const sections = [
  {
    id: "intro",
    icon: Lock,
    title: "Our Commitment to Privacy",
    content: (
      <>
        <p>
          At <strong className="text-[var(--highlight-color)]">Bombay Facility Services (BFS)</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you engage with our services or website.
        </p>
        <p>
          By using our website or submitting any inquiry, quote request, or job application, you acknowledge and agree to the terms described in this Privacy Policy. We encourage you to read this document carefully.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    icon: Database,
    title: "Information We Collect",
    content: (
      <>
        <p>We collect only the information necessary to provide reliable manpower and security services. This may include:</p>
        <ul>
          {[
            "Full name, email address, and phone number submitted via contact or inquiry forms.",
            "Job application details including resume, cover letter, and position preference.",
            "Service-related details such as preferred guard type, deployment location, and event dates.",
            "General usage data (non-identifiable) collected via cookies to improve site performance.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-[var(--text-color)] leading-relaxed">
              <ArrowRight className="w-4 h-4 text-[var(--highlight-color)] mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "usage",
    icon: Eye,
    title: "How We Use Your Data",
    content: (
      <>
        <p>Your information is used exclusively to serve and support you. Specifically, we use your data to:</p>
        <ul>
          {[
            "Respond to inquiries and provide timely, accurate service quotes.",
            "Process and review job applications submitted through our Careers portal.",
            "Send operational notifications, confirmations, or service updates.",
            "Improve our website's functionality, accessibility, and user experience.",
            "Comply with applicable laws and internal operational compliance standards.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-[var(--text-color)] leading-relaxed">
              <ArrowRight className="w-4 h-4 text-[var(--highlight-color)] mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Data Security",
    content: (
      <>
        <p>
          BFS implements reasonable administrative and technical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Data submitted through our secure forms is transmitted over encrypted channels and stored with strict access controls.
        </p>
        <p>
          While we employ best-practice security measures, no method of data transmission or electronic storage is entirely foolproof. We continuously review and strengthen our protection systems to minimise any risk.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Regarding Privacy",
    content: (
      <>
        <p>
          For any questions, concerns, or requests related to this Privacy Policy or the handling of your personal data, please reach out to us directly:
        </p>
        <div className="mt-4 space-y-2">
          <a
            href="mailto:info.bombayfacilityservice@gmail.com"
            className="flex items-center gap-2 text-[var(--highlight-color)] hover:underline font-semibold text-sm"
          >
            <Mail className="w-4 h-4" />
            info.bombayfacilityservice@gmail.com
          </a>
          <a
            href="tel:+919819758831"
            className="flex items-center gap-2 text-[var(--highlight-color)] hover:underline font-semibold text-sm"
          >
            <ArrowRight className="w-4 h-4" />
            +91 9819758831
          </a>
        </div>
      </>
    ),
  },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative py-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] overflow-hidden transition-colors duration-500">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--highlight-color)]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/4 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <PageHeader
        title="Privacy Policy"
        subtitle="How BFS collects, uses, and protects your personal information"
      />

      <div className="max-w-6xl mx-auto px-6 mt-16 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">

          {/* Sticky Sidebar Nav */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-1 p-4 rounded-2xl bg-[var(--card-bg-color)] border border-[var(--card-border-color)] shadow-sm">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--highlight-color)] px-2 pb-2 border-b border-[var(--card-border-color)] mb-2">
                Document Sections
              </p>
              {sections.map(({ id, title, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all duration-200 ${
                    activeSection === id
                      ? "bg-[var(--highlight-color)]/15 text-[var(--highlight-color)] border border-[var(--highlight-color)]/25"
                      : "text-[var(--text-color)] hover:bg-[var(--highlight-color)]/5 hover:text-[var(--heading-color)]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="leading-tight">{title}</span>
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-[var(--card-border-color)]">
                <p className="text-[10px] text-[var(--text-color)] px-2">
                  Last updated: May 2025
                </p>
              </div>
            </div>
          </aside>

          {/* Main Document Content */}
          <main className="lg:col-span-9">
            <div className="space-y-8">
              {sections.map(({ id, icon: Icon, title, content }, idx) => (
                <motion.div
                  key={id}
                  id={id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  {/* Section header bar */}
                  <div className="flex items-center gap-3 px-7 py-5 border-b border-[var(--card-border-color)] bg-[var(--highlight-color)]/3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--highlight-color)]/10 flex items-center justify-center text-[var(--highlight-color)] shrink-0 group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[var(--heading-color)]">
                      {title}
                    </h3>
                  </div>

                  {/* Section body */}
                  <div className="px-7 py-6 space-y-4 text-sm leading-relaxed font-medium text-[var(--text-color)] [&_ul]:space-y-3 [&_p]:text-[var(--text-color)] [&_strong]:text-[var(--heading-color)]">
                    {content}
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
