// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesOverview from "@/components/ServiceOverview";
import CTA from "@/components/CTA";

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
