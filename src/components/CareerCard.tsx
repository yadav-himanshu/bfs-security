"use client";

import { Job } from "@/lib/jobsData";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  job: Job;
}

export default function CareerCard({ job }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl h-full p-6 border flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-[0_0_15px_var(--highlight-color)]"
      style={{
        background: "var(--card-bg-color)",
        color: "var(--text-color)",
        borderColor: "var(--card-border-color)",
      }}
    >
      {/* Title */}
      <h3
        className="text-xl font-semibold mb-1 transition-colors duration-300"
        style={{ color: "var(--highlight-color)" }}
      >
        {job.title}
      </h3>

      {/* Location */}
      <p
        className="text-sm mb-3 transition-colors duration-300"
        style={{ color: "var(--subheading-color)" }}
      >
        {job.location}
      </p>

      {/* Description */}
      <p
        className="text-base leading-relaxed transition-colors duration-300"
        style={{ color: "var(--text-color)" }}
      >
        {job.description}
      </p>

      {/* Requirements */}
      <ul
        className="list-disc pl-5 mt-4 space-y-1 transition-colors duration-300"
        style={{ color: "var(--subheading-color)" }}
      >
        {job.requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
      </ul>

      {/* Apply Button */}
      <Link
        href={`/careers/apply?position=${encodeURIComponent(job.title)}`}
        className="mt-5 inline-block max-w-[150px] text-center font-semibold px-5 py-2 rounded-lg transition-all hover:scale-[1.03] duration-300"
        style={{
          backgroundColor: "var(--highlight-color)",
          color: "var(--input-text)",
        }}
        // onMouseEnter={(e) =>
        //   (e.currentTarget.style.backgroundColor = "var(--highlight-hover)")
        // }
        // onMouseLeave={(e) =>
        //   (e.currentTarget.style.backgroundColor = "var(--highlight-color)")
        // }
      >
        Apply Now
      </Link>
    </motion.div>
  );
}
