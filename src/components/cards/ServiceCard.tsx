"use client";

import Link from "next/link";
import Image from "next/image";
import { Service } from "@/lib/data/servicesData";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative h-full flex flex-col justify-between bg-[var(--card-bg-color)] border border-[var(--card-border-color)] hover:border-[var(--highlight-color)]/30 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--highlight-color)]/10 hover:-translate-y-2 block text-left"
    >
      {/* Background Soft Glow Aura */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--highlight-color)]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div>
        {/* Image Section */}
        <div className="relative w-full h-60 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Elegant overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg-color)] via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-[var(--heading-color)] group-hover:text-[var(--highlight-color)] transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-[13px] sm:text-sm leading-relaxed text-[var(--subheading-color)] mb-6">
            {service.shortDesc}
          </p>
        </div>
      </div>

      {/* Button link section */}
      <div className="px-8 pb-8 mt-auto">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full justify-between group-hover:bg-[var(--highlight-color)] group-hover:text-[var(--button-text)] group-hover:border-[var(--highlight-color)] transition-all duration-300"
        >
          <span>Explore Service Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </Link>
  );
}
