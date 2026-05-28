"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-[var(--card-border-color)] animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-xl transition-all duration-300 bg-slate-100 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:text-[var(--highlight-color)] dark:hover:text-[var(--highlight-color)] border border-[var(--card-border-color)] flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 active:scale-95"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-500 animate-spin-slow" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
      )}
    </button>
  );
}
