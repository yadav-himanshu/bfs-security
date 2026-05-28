import type { Metadata } from "next";
import { servicesData } from "@/lib/data/servicesData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumb from "@/components/utilities/Breadcrumb";
import { ArrowRight, CheckCircle2, ShieldAlert, ShieldCheck, Flame, Compass, Award } from "lucide-react";

type ServicePageParams = { slug: string };
type ServicePageProps = { params: Promise<ServicePageParams> };

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | BFS",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.title} | BFS`,
    description: service.shortDesc,
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Page({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) notFound();

  // Premium Features checklist suitable for any security or facility service
  const features = [
    { title: "Police-Verified Guard Credentials", desc: "Rigorous background vetting for elite security profiles." },
    { title: "Advanced Tactical Drill Mastery", desc: "Rigid physical and cognitive emergency response readiness." },
    { title: "Continuous 24/7 Operations Command", desc: "Real-time support and active backup units always available." },
    { title: "Tailored Site Risk Auditing", desc: "Custom operational strategies designed for your specific premises." }
  ];

  // Professional Standard Operating Procedure (SOP) Timeline items
  const sopSteps = [
    { step: "01", name: "Premises Security Audit", desc: "Our specialists audit your location to identify tactical vulnerabilities.", icon: Compass },
    { step: "02", name: "Custom Manning Selection", desc: "We handpick guards and operators trained for your specific sector.", icon: ShieldCheck },
    { step: "03", name: "Emergency Briefings & Drills", desc: "Deployment drills are run to ensure zero-delay panic management.", icon: Flame },
    { step: "04", name: "Continuous Live Checks", desc: "Area managers execute physical spot audits day and night 24/7.", icon: Award }
  ];

  return (
    <section className="py-20 min-h-screen bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-500 text-[var(--text-color)]">
      {/* Dynamic Gold Backdrop Glow Auras */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[var(--highlight-color)]/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[var(--highlight-color)]/3 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <PageHeader
          title={service.title}
          subtitle="Detailed overview of our professional manpower services."
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 relative z-10">
        <Breadcrumb
          paths={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title },
          ]}
        />

        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 mt-16 items-start">
          
          {/* Left Column: Image, Verified badge & Checklist Card */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--card-border-color)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent z-10"></div>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--highlight-color)] shrink-0" />
                  Verified Professionals
                </div>
              </div>
            </div>

            {/* Premium Features Checklist Card */}
            <div className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--highlight-color)]/5 rounded-full blur-2xl pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-6 text-[var(--heading-color)] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--highlight-color)] shrink-0" />
                BFS Quality Standards
              </h3>
              
              <div className="flex flex-col gap-5">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--highlight-color)]/10 flex items-center justify-center mt-0.5 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--highlight-color)]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--heading-color)] leading-snug">{feat.title}</h4>
                      <p className="text-xs text-[var(--subheading-color)] mt-0.5">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Service Description & SOP Timeline Card */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-[var(--card-bg-color)] p-8 sm:p-12 rounded-[2rem] border border-[var(--card-border-color)] shadow-xl relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--highlight-color)]/5 rounded-full blur-3xl pointer-events-none"></div>

              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-[var(--heading-color)]">
                Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">Overview</span>
              </h2>

              <p className="leading-relaxed text-sm sm:text-base text-[var(--text-color)] mb-8">
                {service.fullDesc}
              </p>

              {/* Bold Quote-style Callout */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--highlight-color)]/5 border-l-4 border-[var(--highlight-color)] mb-10">
                <p className="text-[var(--subheading-color)] text-xs sm:text-sm leading-relaxed font-semibold">
                  At <strong className="text-[var(--highlight-color)]">Bombay Facility Services (BFS)</strong>, every single guard, bouncer, caretaker, and driver undergoes strict police verification and situational training. We guarantee complete vigilance and peace of mind 24/7.
                </p>
              </div>

              {/* Redesigned SOP Deployment Timeline */}
              <div className="mb-10">
                <h3 className="text-lg sm:text-xl font-bold mb-6 text-[var(--heading-color)] flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-[var(--highlight-color)] shrink-0" />
                  SOP Manning Deployment Flow
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {sopSteps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="bg-[var(--card-bg-color)]/50 border border-[var(--card-border-color)] hover:border-[var(--highlight-color)]/30 hover:-translate-y-1 p-6 rounded-2xl relative group transition-all duration-300 hover:shadow-lg hover:shadow-[var(--highlight-color)]/5">
                        <div className="absolute top-4 right-4 text-xs font-black text-[var(--highlight-color)]/20 group-hover:text-[var(--highlight-color)]/40 transition-colors">
                          {step.step}
                        </div>
                        
                        <div className="w-10 h-10 rounded-xl bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 flex items-center justify-center mb-4 group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] transition-all duration-500 text-[var(--highlight-color)]">
                          <Icon className="w-5 h-5 shrink-0" />
                        </div>
                        
                        <h4 className="text-sm sm:text-base font-bold text-[var(--heading-color)] mb-1">
                          {step.name}
                        </h4>
                        
                        <p className="text-xs text-[var(--subheading-color)] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actions Grid */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-[var(--card-border-color)] pt-8">
                <Button
                  href="/quote"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-md"
                >
                  Request a Free Quote <ArrowRight className="w-5 h-5 shrink-0" />
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Speak to Area Officer
                </Button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
