"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Shield } from "lucide-react";
import { servicesData } from "@/lib/data/servicesData";

export default function ServicesOverview() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 px-6 bg-[var(--bg-color)] relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-[var(--highlight-color)]/3 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header & Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--highlight-color)]/10 border border-[var(--highlight-color)]/25 text-[10px] font-bold text-[var(--highlight-color)] uppercase tracking-wider mb-3">
              <Shield className="w-3 h-3" />
              <span>Elite Manpower Brochure</span>
            </div>

            <h2 className="heading mb-3">
              Professional Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">Solutions</span>
            </h2>

            <p className="body-text">
              Explore our core services, featuring highly disciplined, police-verified 
              guards, caretakers, drivers, and VIP bouncers.
            </p>
          </div>

          {/* Sized-down Brochure Arrow Controls */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-[var(--card-border-color)] bg-[var(--card-bg-color)] hover:border-[var(--highlight-color)] text-[var(--text-color)] hover:text-[var(--highlight-color)] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm active:scale-90"
              aria-label="Scroll services left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-[var(--card-border-color)] bg-[var(--card-bg-color)] hover:border-[var(--highlight-color)] text-[var(--text-color)] hover:text-[var(--highlight-color)] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm active:scale-90"
              aria-label="Scroll services right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Service Slider (Brochure layout) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[370px] aspect-[4/5] rounded-xl overflow-hidden snap-start relative group shadow-md border border-[var(--card-border-color)] bg-slate-900 shrink-0 cursor-pointer"
            >
              <Link href={`/services/${service.slug}`} className="block w-full h-full relative">
                {/* Background Image Zooming on Hover */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-w-768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-85"
                />

                {/* Background Gradient Dark Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-opacity duration-300" />

                {/* Card Contents */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-left z-10">
                  {/* Expanding details on card hover */}
                  <div className="space-y-2">
                    {/* Category Title */}
                    <h3 className="text-[17px] font-extrabold text-white group-hover:text-[var(--highlight-color)] transition-colors duration-300 flex items-center gap-1.5 leading-none">
                      {service.title}
                    </h3>

                    {/* Refined Description */}
                    <p className="text-[12px] sm:text-[13px] text-slate-300 leading-relaxed max-h-0 opacity-0 overflow-hidden group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      {service.shortDesc}
                    </p>

                    {/* Request / Link Prompt */}
                    <div className="pt-1">
                      <span
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--highlight-color)] uppercase tracking-wider group/link py-1"
                      >
                        Explore Service Details 
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glowing Corner Shield Indicator */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[var(--highlight-color)] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Shield className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
