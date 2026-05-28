"use client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="py-12 px-6 overflow-hidden flex justify-center items-center bg-[var(--bg-color)]">
      <div className="text-center max-w-3xl">
        {subtitle && (
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[var(--highlight-color)] mb-3">{subtitle}</p>
        )}
        <h1 className="heading drop-shadow-lg">{title}</h1>
      </div>
    </header>
  );
}
