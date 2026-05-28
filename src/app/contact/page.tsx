import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact BFS",
  description:
    "Contact Bombay Facility Services for security guard deployment, facility management quotes, and rapid manpower solutions across Mumbai.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact BFS — Duty Officers Available 24/7",
    description:
      "Reach our duty officers for inquiries, custom quotes, and rapid guard deployment in Mumbai.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
