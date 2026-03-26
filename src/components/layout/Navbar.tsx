"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import bfsLogo from "../../../public/bfslogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  const secondaryLinks = [
    { name: "Gallery", href: "/gallery" },
    { name: "Quote", href: "/quote" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-[var(--card-border-color)] bg-[var(--bg-color)] transition-all duration-300 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12">
            <Image
              src={bfsLogo}
              alt="BFS Logo"
              fill
              className="object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.4)] group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <span className="text-xl font-bold transition-colors duration-300 text-[var(--highlight-color)]">
            BFS <span className="text-[var(--heading-color)]">Security</span>
          </span>
        </Link>

        {/* Desktop Main Links */}
        <div className="hidden md:flex items-center space-x-8">
          {mainLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group font-medium text-[var(--text-color)] transition-colors duration-300 hover:text-[var(--highlight-color)] py-1"
            >
              {item.name}
              {/* Animated Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--highlight-color)] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="p-2 rounded-lg ml-4 transition-colors duration-300 text-[var(--text-color)] hover:text-[var(--highlight-color)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile / Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 w-full px-6 py-6 space-y-4 backdrop-blur-xl bg-[var(--card-bg-color)]/95 border-b border-[var(--card-border-color)] shadow-xl transition-all duration-300">
          {/* Desktop (Secondary Links) */}
          <div className="hidden md:block space-y-3">
            {secondaryLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block font-medium transition-colors duration-300 text-[var(--text-color)] hover:text-[var(--highlight-color)] pl-2 border-l-2 border-transparent hover:border-[var(--highlight-color)]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile (All Links) */}
          <div className="md:hidden space-y-4">
            {[...mainLinks, ...secondaryLinks].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg font-medium transition-colors duration-300 text-[var(--text-color)] hover:text-[var(--highlight-color)] pl-3 border-l-4 border-transparent hover:border-[var(--highlight-color)]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
