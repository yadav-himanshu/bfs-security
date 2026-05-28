import type { Metadata } from "next";
import QuoteContent from "./QuoteContent";

export const metadata: Metadata = {
  title: "Request a Security Quote",
  description:
    "Get a custom quote for security guards, bouncers, bodyguards, caretakers, and facility management services across Mumbai. Fast, verified, and cost-effective.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Request a Free Security Quote | BFS",
    description:
      "Get tailored, cost-effective security and facility management solutions for your premises, event, or corporate office.",
    url: "/quote",
  },
};

export default function QuotePage() {
  return <QuoteContent />;
}
