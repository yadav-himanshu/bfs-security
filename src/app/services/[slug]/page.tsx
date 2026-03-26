// bfs/src/app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { servicesData } from "@/lib/servicesData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumb from "@/components/utilities/Breadcrumb";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

  return (
    <section className="py-20 min-h-screen bg-[var(--bg-color)] relative overflow-hidden transition-colors duration-500 text-[var(--text-color)]">
      {/* Background Enhancements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[var(--highlight-color)]/5 rounded-full blur-[150px] pointer-events-none"></div>

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

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-start">
          <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--card-border-color)] group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              priority
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-sm font-semibold text-white shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[var(--highlight-color)]" />
                Verified Professionals
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full bg-[var(--card-bg-color)] p-8 sm:p-12 rounded-3xl border border-[var(--card-border-color)] shadow-xl shadow-black/5 relative overflow-hidden">
            {/* Decorative Corner Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--highlight-color)]/10 rounded-full blur-3xl pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[var(--heading-color)]">
              Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">Overview</span>
            </h2>

            <p className="leading-relaxed text-lg text-[var(--text-color)] mb-8">
              {service.fullDesc}
            </p>

            <div className="p-6 rounded-2xl bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/20 mb-10">
              <p className="text-[var(--subheading-color)] leading-relaxed font-medium">
                At{" "}
                <strong className="text-[var(--highlight-color)]">
                  Bombay Facility Services (BFS)
                </strong>{" "}
                we ensure every staff member is trained, verified, and dedicated
                to client safety and professionalism. Trust us to deliver excellence.
              </p>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="button w-full sm:w-auto shadow-lg shadow-[var(--highlight-color)]/20 flex items-center justify-center gap-2 px-8 py-4 text-lg"
              >
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="button w-full bg-[var(--card-bg-color)] text-[var(--heading-color)] sm:w-auto border border-[var(--card-border-color)] hover:bg-[var(--card-border-color)] inline-block px-8 py-4 text-lg flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
