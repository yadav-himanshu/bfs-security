import PageHeader from "@/components/layout/PageHeader";
import QuoteForm from "@/components/forms/QuoteForm";
import { CheckCircle2 } from "lucide-react";

export default function QuotePage() {
  return (
    <section className="py-20 overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300 relative">
      {/* Background Glow */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-[var(--highlight-color)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <PageHeader
        title="Request a Quote"
        subtitle="Get a tailored manpower service quote from BFS - professional, reliable, and efficient."
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Info Section */}
        <div className="space-y-8">
          <h2
            className="text-4xl font-extrabold"
            style={{ color: "var(--heading-color)" }}
          >
            Quick <span style={{ color: "var(--highlight-color)" }}>Quote Request</span>
          </h2>

          <p className="text-lg leading-relaxed text-[var(--subheading-color)] max-w-lg">
            Provide your basic details and the service you need. Our team will
            connect with you shortly with a customized plan and transparent pricing.
          </p>

          <ul className="space-y-4">
            {[
              "Security Guards, Bouncers, Bodyguards, and more",
              "Professional, verified, and trained manpower",
              "Fast response & personalized quotes",
              "Flexible service duration & transparent pricing"
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
                <div className="mt-1 p-1 rounded-full bg-[var(--highlight-color)]/10">
                  <CheckCircle2 className="w-5 h-5 text-[var(--highlight-color)]" />
                </div>
                <span className="text-lg text-[var(--text-color)] font-medium leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote Form */}
        <div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
