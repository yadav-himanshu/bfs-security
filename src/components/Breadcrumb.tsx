"use client";

import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  paths: { name: string; href?: string }[];
}

export default function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm mb-8 font-medium tracking-wide transition-colors duration-300"
      style={{ color: "var(--subheading-color)" }}
    >
      <ol className="flex items-center flex-wrap gap-1">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center group">
            {/* Home Icon for first item */}
            {index === 0 ? (
              <Link
                href={path.href || "/"}
                className="flex items-center gap-1 transition-colors duration-300"
                style={{ color: "var(--text-color)" }}
              >
                <Home
                  className="w-4 h-4 transition-transform duration-300"
                  style={{
                    color: "var(--subheading-color)",
                  }}
                />
                <span className="group-hover:text-[var(--highlight-color)] transition-colors duration-300">
                  {path.name}
                </span>
              </Link>
            ) : path.href ? (
              <Link
                href={path.href}
                className="transition-colors duration-300 group-hover:drop-shadow-[0_0_6px_var(--highlight-color)]"
                style={{
                  color: "var(--subheading-color)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--highlight-color)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--subheading-color)")
                }
              >
                {path.name}
              </Link>
            ) : (
              <span
                className="transition-colors duration-300"
                style={{ color: "var(--text-color)" }}
              >
                {path.name}
              </span>
            )}

            {/* Arrow icon except last */}
            {index < paths.length - 1 && (
              <ChevronRight
                className="w-4 h-4 mx-2 transition-colors duration-300"
                style={{ color: "var(--subheading-color)" }}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
