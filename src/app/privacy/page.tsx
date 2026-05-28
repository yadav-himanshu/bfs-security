import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Bombay Facility Services collects, uses, and protects your personal information in compliance with applicable privacy standards.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
