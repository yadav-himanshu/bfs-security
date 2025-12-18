"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section
      className="relative h-[40vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        background: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Subtle overlay for contrast */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3),transparent_80%)] pointer-events-none"></div> */}

      <div className="relative z-10">
        {subtitle && (
          <p
            className="uppercase tracking-widest text-sm mb-2"
            style={{ color: "var(--highlight-color)" }}
          >
            {subtitle}
          </p>
        )}
        <h1
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
          style={{ color: "var(--heading-color)" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
