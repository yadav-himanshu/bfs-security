import PageHeader from "@/components/PageHeader";
import QuoteForm from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <section
      className="py-20 overflow-hidden text-[var(--text-color)] transition-colors duration-300"
    >
      <PageHeader
        title="Request a Quote"
        subtitle="Get a tailored manpower service quote from BFS — professional, reliable, and efficient."
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-16 items-start">
        {/* Info Section */}
        <div className="space-y-8">
          <h2
            className="subheading drop-shadow-[0_0_6px_var(--highlight-color)]"
            style={{ color: "var(--highlight-color)" }}
          >
            Quick Quote Request
          </h2>

          <p className="body-text">
            Provide your basic details and the service you need. Our team will
            connect with you shortly with a customized plan and pricing.
          </p>

          <ul className="space-y-3 body-text">
            <li className="flex items-center gap-2 transition-colors duration-300 hover:opacity-80">
              <span style={{ color: "var(--highlight-color)" }}>✅</span>{" "}
              Security Guards, Bouncers, Bodyguards, and more
            </li>
            <li className="flex items-center gap-2 transition-colors duration-300 hover:opacity-80">
              <span style={{ color: "var(--highlight-color)" }}>✅</span>{" "}
              Professional, verified, and trained manpower
            </li>
            <li className="flex items-center gap-2 transition-colors duration-300 hover:opacity-80">
              <span style={{ color: "var(--highlight-color)" }}>✅</span> Fast
              response & personalized quotes
            </li>
            <li className="flex items-center gap-2 transition-colors duration-300 hover:opacity-80">
              <span style={{ color: "var(--highlight-color)" }}>✅</span>{" "}
              Flexible service duration & transparent pricing
            </li>
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
