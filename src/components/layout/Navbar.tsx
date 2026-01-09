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
        <div className="hidden md:flex items-center space-x-6">
          {mainLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium transition-colors duration-300 text-[var(--text-color)] hover:text-[var(--highlight-color)] "
            >
              {item.name}
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
        <div className="px-6 py-4 space-y-3 backdrop-blur-md border-t transition-all duration-300 bg-[var(--card-bg-color)] border-[var(--card-border-color)]">
          {/* Desktop (Secondary Links) */}
          <div className="hidden md:block">
            {secondaryLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block font-medium transition-colors duration-300 text-[var(--text-color)] hover:text-[var(--highlight-color)]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile (All Links) */}
          <div className="md:hidden">
            {[...mainLinks, ...secondaryLinks].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block font-medium transition-colors duration-300 text-[var(--text-color)] hover:text-[var(--highlight-color)]"
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
