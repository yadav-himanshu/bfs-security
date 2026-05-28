import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About BFS",
  description:
    "Learn about Bombay Facility Services — Mumbai's trusted security and facility management company since 2010. Police-verified guards, bouncers, and elite manpower.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bombay Facility Services",
    description:
      "Learn about Bombay Facility Services — Mumbai's trusted security and facility management company since 2010.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
