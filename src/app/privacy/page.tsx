import { motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";

export default function PrivacyPage() {
  return (
    <section className="relative py-20 min-h-screen bg-[var(--bg-color)] transition-colors duration-300 text-[var(--text-color)] overflow-hidden">
      {/* Glowing Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--highlight-color)]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--highlight-color)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <PageHeader
        title="Privacy Policy"
        subtitle="Learn how BFS handles your personal information securely"
      />

      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-12 relative z-10">

        {/* Intro Section */}
        <div className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow">
          <p className="text-lg leading-relaxed text-[var(--subheading-color)] pl-4">
            At <strong className="text-[var(--highlight-color)]">Bombay Facility Services (BFS)</strong>, we value your
            privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your
            data when you use our services or website.
          </p>
        </div>

        {/* Section 1 */}
        <div className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold mb-4 pl-4 border-l-4" style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}>
            Information We Collect
          </h3>
          <ul className="list-none pl-4 space-y-3">
            {[
              "Personal details such as name, email, and phone number.",
              "Service preferences and inquiries submitted via forms.",
              "Usage data on our website to improve user experience."
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-lg leading-relaxed text-[var(--subheading-color)]">
                <span className="text-[var(--highlight-color)] mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold mb-4 pl-4 border-l-4" style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}>
            How We Use Your Data
          </h3>
          <ul className="list-none pl-4 space-y-3">
            {[
              "To respond to your inquiries and provide services.",
              "To send updates, quotes, or notifications relevant to BFS.",
              "To improve website functionality and services."
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-lg leading-relaxed text-[var(--subheading-color)]">
                <span className="text-[var(--highlight-color)] mt-1">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 */}
        <div className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold mb-4 pl-4 border-l-4" style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}>
            Data Security
          </h3>
          <p className="text-lg leading-relaxed text-[var(--subheading-color)] pl-4">
            We implement reasonable technical and administrative measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-[var(--card-bg-color)] p-8 sm:p-10 rounded-3xl border border-[var(--card-border-color)] shadow-sm hover:shadow-md transition-shadow mb-10">
          <h3 className="text-2xl font-bold mb-4 pl-4 border-l-4" style={{ color: "var(--heading-color)", borderColor: "var(--highlight-color)" }}>
            Contact Us
          </h3>
          <p className="text-lg leading-relaxed text-[var(--subheading-color)] pl-4">
            For any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:himanshuyadav7852@gmail.com" className="text-[var(--highlight-color)] hover:underline font-medium transition-colors">
              himanshuyadav7852@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+917499506824" className="text-[var(--highlight-color)] hover:underline font-medium transition-colors">
              +91 7499506824
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
