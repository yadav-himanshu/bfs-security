import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import SG from "../../../public/img/SG.png"

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Who We Are" />

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="subheading font-bold mb-4"
            style={{ color: "var(--highlight-color)" }}
          >
            Trusted Manpower & Security Service Provider
          </h2>

          <p className="body-text leading-relaxed">
            <strong>Bombay Facility Services (BFS)</strong> is a Mumbai-based
            organization dedicated to delivering reliable, disciplined, and
            professional manpower solutions. We take pride in our highly trained
            staff who serve across residential complexes, corporate offices,
            industries, and events.
          </p>

          <p className="body-text leading-relaxed mt-4">
            Established with the vision of promoting safety and efficiency, BFS
            has become a trusted name in the field of security and facility
            management. Our team includes certified guards, caretakers,
            bouncers, bodyguards, lift operators, and drivers — each trained to
            maintain professionalism, punctuality, and vigilance.
          </p>
        </div>

        <div className="relative">
          <Image
            src={SG}
            alt="BFS Security Team"
            width={600}
          height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16" style={{ backgroundColor: "var(--card-bg-color)" }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2
            className="heading mb-12"
            style={{ color: "var(--highlight-color)" }}
          >
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div
              className="p-8 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--card-bg-color)",
                border: "1px solid var(--card-border-color)",
              }}
            >
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--highlight-color)" }}
              >
                Our Mission
              </h3>
              <p className="body-text leading-relaxed">
                To provide safe, disciplined, and dependable manpower solutions
                that protect people, property, and businesses — ensuring peace
                of mind through professionalism and integrity.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--card-bg-color)",
                border: "1px solid var(--card-border-color)",
              }}
            >
              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: "var(--highlight-color)" }}
              >
                Our Vision
              </h3>
              <p className="body-text leading-relaxed">
                To be recognized as the most trusted and efficient facility
                service provider in India — setting benchmarks for quality,
                discipline, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2
          className="heading mb-12"
          style={{ color: "var(--highlight-color)" }}
        >
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Integrity",
              desc: "We act with honesty, transparency, and respect in every engagement.",
            },
            {
              title: "Commitment",
              desc: "We are fully dedicated to providing timely, reliable, and quality service.",
            },
            {
              title: "Discipline",
              desc: "Our staff are trained to maintain punctuality, neatness, and professional conduct.",
            },
            {
              title: "Client Focus",
              desc: "Your satisfaction and safety are our top priorities — always.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--card-bg-color)",
                border: "1px solid var(--card-border-color)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "var(--highlight-color)" }}
              >
                {item.title}
              </h3>
              <p className="body-text text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
