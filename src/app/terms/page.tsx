import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the Terms & Conditions for using Bombay Facility Services' platform, including user responsibilities and liability limitations.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <TermsContent />;
}
