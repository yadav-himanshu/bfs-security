// app/page.tsx
import Hero from "@/components/landing-page-sections/Hero";
import About from "@/components/landing-page-sections/About";
import ServicesOverview from "@/components/landing-page-sections/ServiceOverview";
import CTA from "@/components/landing-page-sections/CTA";

export default function Home() {
  return (
    <main className="transition-colors duration-500">
      <Hero />
      <About />
      <ServicesOverview />
      <CTA />
    </main>
  );
}
