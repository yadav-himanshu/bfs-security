// bfs/src/app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { servicesData } from "@/lib/servicesData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Breadcrumb from "@/components/Breadcrumb";

/**
 * ✅ Define params as a Promise to match Next.js 15 build expectations.
 * This avoids the build-time "Promise<any>" mismatch.
 */
type ServicePageParams = { slug: string };
type ServicePageProps = { params: Promise<ServicePageParams> };

/* ✅ Metadata generator */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params; // `params` is treated as a Promise
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

/* ✅ Generate all static params for SSG */
export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

/* ✅ Main Page Component */
export default async function Page({ params }: ServicePageProps) {
  const { slug } = await params; // Works at runtime and satisfies type checker
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <section
      className="py-20 min-h-screen transition-colors duration-300"
      style={{
        // background: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <PageHeader
          title={service.title}
          subtitle="Detailed overview of our professional manpower services."
        />

        <Breadcrumb
          paths={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl" />
          </div>

          <div>
            <p
              className="leading-relaxed text-lg transition-colors"
              style={{ color: "var(--text-color)" }}
            >
              {service.fullDesc}
            </p>

            <p
              className="mt-6 transition-colors"
              style={{ color: "var(--subheading-color)" }}
            >
              At{" "}
              <strong style={{ color: "var(--highlight-color)" }}>
                Bombay Facility Services (BFS)
              </strong>{" "}
              we ensure every staff member is trained, verified, and dedicated
              to client safety and professionalism.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="px-6 py-3 rounded-lg font-semibold shadow-md hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundColor: "var(--highlight-color)",
                  color: "#111",
                }}
              >
                Get a Quote
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border hover:-translate-y-1"
                style={{
                  borderColor: "var(--highlight-color)",
                  color: "var(--highlight-color)",
                }}
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
