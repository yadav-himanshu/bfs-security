"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram 
} from "lucide-react";
import { servicesData } from "@/lib/data/servicesData";
import bfsLogo from "../../../public/bfslogo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-8 bg-[var(--footer-bg)] text-slate-400 border-t border-white/5 bg-grid-pattern">
      {/* Premium Top Golden Radial Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[var(--highlight-color)] to-transparent opacity-40"></div>
      
      {/* Background Radial Spotlights */}
      <div className="absolute top-1/4 left-1/10 w-[280px] h-[280px] bg-[var(--highlight-color)]/3 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/10 w-[250px] h-[250px] bg-blue-500/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16">
          
          {/* Column 1: Brand & Identity (lg:col-span-4) */}
          <div className="md:col-span-3 lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 bg-white p-1 rounded-xl shadow-md border border-white/10 group-hover:border-[var(--highlight-color)] transition-colors duration-300">
                <Image
                  src={bfsLogo}
                  alt="BFS Logo"
                  width={44}
                  height={44}
                  className="object-contain p-1 rounded-lg"
                />
              </div>
              <span className="text-base font-bold tracking-tight text-white flex flex-col leading-none">
                <span className="text-[var(--highlight-color)] font-black text-lg">BFS</span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-slate-400 mt-0.5">
                  Bombay Facility
                </span>
              </span>
            </Link>

            <p className="text-[13px] leading-relaxed text-slate-400 max-w-sm">
              Providing professional manpower logistics and elite security services across Mumbai. 
              Enforcing protection, punctuality, and trust through certified safeguarding forces.
            </p>

            {/* Premium Social Media Icons */}
            <div className="flex items-center space-x-2.5 pt-2">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Instagram, href: "https://instagram.com" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-slate-400 hover:bg-[var(--highlight-color)] hover:text-black hover:border-[var(--highlight-color)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Explore Links (lg:col-span-2) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--highlight-color)]"></span>
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Careers", link: "/careers" },
                { name: "Contact", link: "/contact" },
                { name: "Request Quote", link: "/quote" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="group inline-flex items-center text-[13px] text-slate-400 hover:text-[var(--highlight-color)] transition-colors duration-300 font-medium py-0.5"
                  >
                    <span className="w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 text-[var(--highlight-color)] transition-all duration-300 ease-out font-bold">
                      —&nbsp;
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered (lg:col-span-3) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--highlight-color)]"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center text-[13px] text-slate-400 hover:text-[var(--highlight-color)] transition-colors duration-300 font-medium py-0.5"
                  >
                    <span className="w-0 group-hover:w-3 opacity-0 group-hover:opacity-100 text-[var(--highlight-color)] transition-all duration-300 ease-out font-bold">
                      —&nbsp;
                    </span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Reach Out Glass Cards (lg:col-span-3) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--highlight-color)]"></span>
              Reach Out
            </h3>

            {/* Telephone Card */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--highlight-color)]/25 hover:bg-white/10 transition-all duration-300 group shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[var(--highlight-color)] group-hover:bg-[var(--highlight-color)] group-hover:text-black transition-colors duration-300 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Duty Officer</span>
                <a href="tel:+919819758831" className="text-xs font-bold text-slate-200 group-hover:text-[var(--highlight-color)] transition-colors">
                  +91 9819758831
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--highlight-color)]/25 hover:bg-white/10 transition-all duration-300 group shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[var(--highlight-color)] group-hover:bg-[var(--highlight-color)] group-hover:text-black transition-colors duration-300 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Operational Mail</span>
                <a href="mailto:info.bombayfacilityservice@gmail.com" className="text-xs font-bold text-slate-200 group-hover:text-[var(--highlight-color)] transition-colors truncate max-w-[170px]">
                  info.bombayfacilityservice@gmail.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[var(--highlight-color)]/25 hover:bg-white/10 transition-all duration-300 group shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[var(--highlight-color)] group-hover:bg-[var(--highlight-color)] group-hover:text-black transition-colors duration-300 shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Headquarters</span>
                <a 
                  href="https://maps.google.com/?q=Jai+Ambe+Soc.+MG+Cross+Road+No+3,+Kandivali+West,+Mumbai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-slate-300 leading-normal group-hover:text-slate-200"
                >
                  Jai Ambe Soc. MG Cross Road No 3, Kandivali West, Mumbai
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Separator Line */}
        <div className="h-[1px] bg-white/5 w-full"></div>

        {/* Bottom Bar: Copyright and Privacy */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Bombay Facility Services. All rights reserved.</p>
          
          {/* Terms & Privacy Links at Very Bottom */}
          <div className="flex items-center space-x-5">
            <Link href="/privacy" className="hover:text-[var(--highlight-color)] transition-colors duration-300 font-bold">
              Privacy Policy
            </Link>
            <span className="text-slate-700 font-light">•</span>
            <Link href="/terms" className="hover:text-[var(--highlight-color)] transition-colors duration-300 font-bold">
              Terms & Conditions
            </Link>
          </div>

          <p className="flex items-center gap-1.5">
            Need a premium site?{" "}
            <a 
              href="https://axovia-tech.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--highlight-color)] hover:underline font-bold transition-all duration-300"
            >
              Created by Axovia Tech
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
