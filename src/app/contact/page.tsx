import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-20 overflow-hidden transition-colors duration-500 text-[var(--text-color)]">
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to BFS for inquiries, quotes, or support"
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="">
          <h2
            className="text-3xl font-semibold drop-shadow-[0_0_6px_var(--highlight-color)]"
            style={{ color: "var(--highlight-color)" }}
          >
            Get in Touch
          </h2>

          <p
            className="leading-relaxed"
            style={{ color: "var(--subheading-color)" }}
          >
            Fill out the form or reach us directly using the details below. Our
            team is always ready to provide reliable manpower solutions and
            support.
          </p>

          <div className="space-y-4">
            <p className="transition-colors duration-300 hover:opacity-90">
              <strong style={{ color: "var(--highlight-color)" }}>
                Address:
              </strong>{" "}
              Jai Ambe Soc. MG Cross Road No 3, Kandivali West, Mumbai
            </p>
            <p className="transition-colors duration-300 hover:opacity-90">
              <strong style={{ color: "var(--highlight-color)" }}>
                Phone:
              </strong>{" "}
              +91 7499506824
            </p>
            <p className="transition-colors duration-300 hover:opacity-90">
              <strong style={{ color: "var(--highlight-color)" }}>
                Email:
              </strong>{" "}
              himanshuyadav7852@gmail.com
            </p>
          </div>

          {/* Map */}
          <div className="mt-8 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8816042018276!2d72.84876027517641!3d19.22123018705754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7efc2b77d7d%3A0xa71f5edab5c8f5d1!2sJai%20Ambe%20Society%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1696859200000!5m2!1sen!2sin"
              width="100%"
              height="260"
              className="rounded-xl border-0 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              style={{
                boxShadow: "0 0 20px rgba(0,0,0,0.2)",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
