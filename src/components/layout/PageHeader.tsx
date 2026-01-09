"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section
      className="p-6 overflow-hidden flex justify-center items-center"
      style={{
        background: "var(--bg-color)",
      }}
    >
      <div className="text-center">
        {subtitle && (
          <p className="caption uppercase tracking-widest mb-2">{subtitle}</p>
        )}
        <h1 className="heading drop-shadow-lg">{title}</h1>
      </div>
    </section>
  );
}
