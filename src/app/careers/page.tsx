import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Security Jobs in Mumbai",
  description:
    "Join Bombay Facility Services — Mumbai's premier security and facility management company. Apply for security guard, driver, and lady guard positions.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at BFS | Security Jobs in Mumbai",
    description:
      "Step into a rewarding career with Bombay Facility Services. Police-verified, disciplined, and professional manpower force.",
    url: "/careers",
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
