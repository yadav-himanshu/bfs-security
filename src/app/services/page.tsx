import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Security & Facility Services",
  description:
    "Explore BFS security services: trained guards, bouncers, bodyguards, lady guards, caretakers, lift operators, and drivers across Mumbai.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Security & Facility Services | BFS Mumbai",
    description:
      "Enterprise-grade security and facility management solutions for Mumbai's residential, corporate, and event sectors.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
