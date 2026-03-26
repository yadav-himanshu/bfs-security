// app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ClientTrust from "@/components/sections/ClientTrust";
import ServicesOverview from "@/components/sections/ServiceOverview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="transition-colors duration-500">
      <Hero />
      <About />
      <WhyChooseUs />
      <ClientTrust />
      <ServicesOverview />
      <CTA />
    </main>
  );
}
