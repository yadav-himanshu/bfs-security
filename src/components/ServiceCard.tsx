"use client";

import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/servicesData";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <div
      className="rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_var(--highlight-color)]/20 transition-all duration-300 group"
      style={{
        backgroundColor: "var(--card-bg-color)",
        border: "1px solid var(--card-border-color)",
      }}
    >
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-semibold mb-2 transition-colors"
          style={{ color: "var(--highlight-color)" }}
        >
          {service.title}
        </h3>

        <p
          className="text-sm mb-4 transition-colors"
          style={{ color: "var(--text-color)" }}
        >
          {service.shortDesc}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="font-medium transition-colors duration-300"
          style={{ color: "var(--accent-color)" }}
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
