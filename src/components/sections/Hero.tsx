"use client";

import Link from "next/link";
import logo from "../../../public/bfslogo.png";
import { motion, Variants, Easing } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  const easeInOut: Easing = [0.42, 0, 0.58, 1];
  const easeOut: Easing = [0, 0, 0.58, 1];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeInOut },
    },
  };

  const buttonHover = {
    scale: 1.05,
    y: -3,
    transition: { duration: 0.3, ease: easeOut },
  };

  return (
    <section className="min-h-[90vh] pt-[80px] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gradient-to-b from-black/5 to-transparent dark:from-black/40 dark:to-transparent">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--highlight-color)]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Watermark / Shadow Logo */}
      <div
        className="
                absolute inset-0 flex items-center justify-center 
                opacity-[0.03] dark:opacity-[0.05] pointer-events-none 
                bg-no-repeat bg-center 
                bg-[length:80%] sm:bg-[length:50%]
              "
        style={{
          backgroundImage: `url(${logo.src})`,
          filter: "blur(2px)",
        }}
      ></div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={item} className="mb-6 flex items-center gap-2 bg-[var(--card-bg-color)] border border-[var(--card-border-color)] px-4 py-2 rounded-full shadow-sm">
          <ShieldCheck className="w-5 h-5 text-[var(--highlight-color)]" />
          <span className="text-sm font-semibold text-[var(--text-color)]">Registered & Verified Security Agency</span>
        </motion.div>

        <motion.h1 variants={item} className="heading mb-6 tracking-tight text-5xl sm:text-6xl md:text-7xl !leading-tight">
          Bombay Facility <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--heading-color)] to-[var(--highlight-color)]">
            Services
          </span>
        </motion.h1>

        <motion.p variants={item} className="body-text max-w-2xl mx-auto mb-10 text-lg sm:text-xl text-[var(--subheading-color)]">
          Mumbai’s trusted manpower & security service. Professional, reliable,
          and dedicated to your safety with elite{" "}
          <span className="font-semibold text-[var(--highlight-color)]">
            guards, bouncers, caretakers, and drivers.
          </span>
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mt-4"
        >
          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
            <Link
              href="/quote"
              className="button w-full sm:w-auto shadow-lg shadow-[var(--highlight-color)]/20 flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="button w-full bg-[var(--card-bg-color)] text-[var(--heading-color)] sm:w-auto border border-[var(--card-border-color)] hover:bg-[var(--card-border-color)] inline-block px-8 py-4 text-lg flex items-center justify-center gap-2"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="mt-16 flex items-center gap-8 text-[var(--subheading-color)] text-sm font-medium opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[var(--heading-color)]">10+</span>
            <span>Years Experience</span>
          </div>
          <div className="h-10 w-px bg-[var(--card-border-color)]"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[var(--heading-color)]">500+</span>
            <span>Trained Guards</span>
          </div>
          <div className="h-10 w-px bg-[var(--card-border-color)]"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[var(--heading-color)]">24/7</span>
            <span>Support Available</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
