"use client";

import Link from "next/link";
import logo from "../../public/bfslogo.png";
import { motion, Variants, Easing } from "framer-motion";

export default function Hero() {
  const easeInOut: Easing = [0.42, 0, 0.58, 1];
  const easeOut: Easing = [0, 0, 0.58, 1];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  const buttonHover = {
    scale: 1.05,
    y: -3,
    transition: { duration: 0.3, ease: easeOut },
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center text-[var(--text-color)] items-center text-center px-6 relative overflow-hidden">
      {/* 🔹 Watermark / Shadow Logo */}
      <div
        className="
                absolute inset-0 flex items-center justify-center 
                opacity-10 pointer-events-none 
                bg-no-repeat bg-center 
                bg-[length:60%] sm:bg-[length:40%]
              "
        style={{
          backgroundImage: `url(${logo.src})`, // ✅ your PNG logo path
          filter: "blur(1px)", // soft watermark effect
        }}
      ></div>

      {/* 🔹 Optional Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)] opacity-20 pointer-events-none"></div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 w-full"
      >
        <motion.h1
          variants={item}
          className="heading text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide"
          style={{ color: "var(--highlight-color)" }}
        >
          Bombay Facility Services
        </motion.h1>

        <motion.p
          variants={item}
          className="body-text max-w-2xl mx-auto mb-10 leading-relaxed text-base sm:text-lg md:text-xl"
        >
          Mumbai’s trusted manpower & security service. Professional, reliable,
          and dedicated to your safety —{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--highlight-color)" }}
          >
            guards, bouncers, caretakers, and drivers.
          </span>
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-300 inline-block"
              style={{
                backgroundColor: "var(--highlight-color)",
                color: "var(--input-text)",
              }}
            >
              Get a Quote
            </Link>
          </motion.div>

          <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="w-full sm:w-auto px-6 py-3 rounded-md font-semibold border inline-block transition-all duration-300"
              style={{
                borderColor: "var(--highlight-color)",
                color: "var(--highlight-color)",
              }}
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
