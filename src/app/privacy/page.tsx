import PageHeader from "@/components/PageHeader";

export default function PrivacyPage() {
  return (
    <section className="py-12 sm:py-16 min-h-screen transition-colors duration-300 text-[var(--text-color)]">
      <PageHeader
        title="Privacy Policy"
        subtitle="Learn how BFS handles your personal information securely"
      />

      <div className="max-w-5xl mx-auto p-4 sm:px-6 lg:px-8 space-y-6 body-text">
        <p>
          At <strong>Bombay Facility Services (BFS)</strong>, we value your
          privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your
          data when you use our services or website.
        </p>

        <h3 className="subheading mt-8">Information We Collect</h3>
        <ul className="list-disc pl-5 sm:pl-8 space-y-2">
          <li>Personal details such as name, email, and phone number.</li>
          <li>Service preferences and inquiries submitted via forms.</li>
          <li>Usage data on our website to improve user experience.</li>
        </ul>

        <h3 className="subheading mt-8">How We Use Your Data</h3>
        <ul className="list-disc pl-5 sm:pl-8 space-y-2">
          <li>To respond to your inquiries and provide services.</li>
          <li>To send updates, quotes, or notifications relevant to BFS.</li>
          <li>To improve website functionality and services.</li>
        </ul>

        <h3 className="subheading mt-8">Data Security</h3>
        <p>
          We implement reasonable technical and administrative measures to
          protect your personal information from unauthorized access,
          disclosure, alteration, or destruction.
        </p>

        <h3 className="subheading mt-8">Contact Us</h3>
        <p>
          For any questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:himanshuyadav7852@gmail.com"
            className="link"
          >
            himanshuyadav7852@gmail.com
          </a>{" "}
          or call{" "}
          <a
            href="tel:+917499506824"
            className="link"
          >
            +91 7499506824
          </a>
          .
        </p>
      </div>
    </section>
  );
}
