"use client";

import { Job } from "@/lib/jobsData";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

interface Props {
  job: Job;
}

export default function CareerCard({ job }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="h-full p-8 flex flex-col justify-between bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-[var(--highlight-color)]/10 group relative overflow-hidden"
    >
      {/* Subtle Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--highlight-color)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-[var(--heading-color)] group-hover:text-[var(--highlight-color)] transition-colors">
            {job.title}
          </h3>
          <div className="p-2 bg-[var(--highlight-color)]/10 text-[var(--highlight-color)] rounded-full">
            <Briefcase className="w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm mb-6 text-[var(--subheading-color)] font-medium">
          <MapPin className="w-4 h-4 text-[var(--highlight-color)]" />
          {job.location}
        </div>

        <p className="text-base leading-relaxed text-[var(--text-color)] mb-6">
          {job.description}
        </p>

        <div className="space-y-3 mb-8">
          <p className="text-sm font-bold tracking-wider text-[var(--heading-color)] uppercase">Requirements</p>
          <ul className="space-y-2">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2 text-[var(--subheading-color)] text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[var(--highlight-color)] shrink-0 mt-0.5" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-6 border-t border-[var(--card-border-color)]">
        <Link
          href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
          className="button w-full shadow-md shadow-[var(--highlight-color)]/20 flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform duration-300"
        >
          Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
