"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import bfsLogo from "../../../public/bfslogo.png";
import ThemeToggle from "../ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-[var(--bg-color)]/90 backdrop-blur-md border-b border-[var(--card-border-color)] shadow-md shadow-black/5"
          : "py-3.5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 bg-white dark:bg-slate-900 p-1 rounded-lg border border-[var(--card-border-color)] group-hover:border-[var(--highlight-color)] transition-colors duration-300 shadow-sm">
            <Image
              src={bfsLogo}
              alt="BFS Logo"
              width={36}
              height={36}
              className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-[var(--heading-color)] flex flex-col leading-none">
            <span className="text-[var(--highlight-color)] font-black text-base">BFS</span>
            <span className="text-[8px] tracking-[0.2em] uppercase font-bold text-[var(--subheading-color)] mt-0.5">
              Security
            </span>
          </span>
        </Link>

        {/* Desktop Main Links (Sleeker spacing & font size) */}
        <div className="hidden md:flex items-center space-x-6">
          {mainLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group font-bold text-[var(--text-color)] hover:text-[var(--highlight-color)] transition-colors duration-300 py-1 text-[13px] lg:text-[14px]"
            >
              {item.name}
              <span className="absolute left-1/2 bottom-0 w-0 h-[1.5px] bg-[var(--highlight-color)] transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Right side Actions (Desktop - Tighter buttons) */}
        <div className="hidden md:flex items-center space-x-3.5">
          <ThemeToggle />

          <Button
            href="/quote"
            variant="primary"
            size="sm"
          >
            Get a Quote <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Action Elements & Menu Toggle (Mobile) */}
        <div className="flex md:hidden items-center space-x-3">
          <ThemeToggle />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg border border-[var(--card-border-color)] bg-slate-100/50 dark:bg-slate-800/40 text-[var(--text-color)] hover:text-[var(--highlight-color)] hover:border-[var(--highlight-color)] active:scale-95 transition-all"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay (Cleaned up Terms & Privacy links) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-[56px] left-0 w-full bg-[var(--card-bg-color)]/95 backdrop-blur-md border-b border-[var(--card-border-color)] shadow-xl z-40 overflow-hidden flex flex-col md:hidden"
          >
            <div className="px-6 py-6 space-y-5 flex flex-col">
              {/* Primary Links */}
              <div className="flex flex-col space-y-3.5">
                {mainLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-[15px] font-bold text-[var(--heading-color)] hover:text-[var(--highlight-color)] transition-colors duration-300 pl-2.5 border-l-2 border-transparent hover:border-[var(--highlight-color)]"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Separator */}
              <div className="h-px bg-[var(--card-border-color)] w-full"></div>

              {/* Action Button */}
              <div className="pt-1">
                <Button
                  href="/quote"
                  onClick={() => setMenuOpen(false)}
                  variant="primary"
                  className="w-full text-sm"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
