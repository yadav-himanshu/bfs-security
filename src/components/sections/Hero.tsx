"use client";

import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  const { currentSlide, slides, handleNext, handlePrev, goToSlide } = useHeroCarousel();

  const slideVariants: Variants = {
    initial: { opacity: 0, scale: 1.02 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.85 } },
  };

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-[64px]">
      {/* Background visual slides */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].subtitle}
              fill
              sizes="100vw"
              priority
              className="object-cover opacity-60"
            />
            {/* Deep Dark-Gold Horizontal Overlay Layer for Flawless Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 md:to-transparent z-10" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 pt-10 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">

          {/* Left Column Content overlay */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={textContainerVariants}
                initial="hidden"
                animate="show"
                className="space-y-4 max-w-2xl"
              >
                {/* Active Trust Badge */}
                <motion.div
                  variants={textItemVariants}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[var(--highlight-color)] shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-[var(--highlight-color)]" />
                  <span>{slides[currentSlide].badge}</span>
                </motion.div>

                {/* Subtitle Accent Line */}
                <motion.h4
                  variants={textItemVariants}
                  className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/95"
                >
                  {slides[currentSlide].title}
                </motion.h4>

                {/* Compact elegant title */}
                <motion.h1
                  variants={textItemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
                >
                  {slides[currentSlide].subtitle}
                </motion.h1>

                {/* Crisp description */}
                <motion.p
                  variants={textItemVariants}
                  className="text-[13px] sm:text-sm md:text-[14.5px] leading-relaxed text-slate-300"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Slide Point Highlights */}
                <motion.div
                  variants={textItemVariants}
                  className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 pt-2.5"
                >
                  {slides[currentSlide].points.map((pt) => (
                    <div key={pt} className="flex items-center gap-1.5 text-[12px] sm:text-xs font-semibold text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-[var(--highlight-color)]/20 border border-[var(--highlight-color)]/30 flex items-center justify-center text-[var(--highlight-color)] shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Action CTA Buttons */}
                <motion.div
                  variants={textItemVariants}
                  className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto"
                >
                  <Button
                    href="/quote"
                    variant="primary"
                    className="group"
                  >
                    Request Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>

                  <Button
                    href="/services"
                    variant="secondary"
                  >
                    Inquire Services
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Side manual chevron indicators */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-lg border border-white/10 hover:border-white/40 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer transition-all active:scale-90"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-lg border border-white/10 hover:border-white/40 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer transition-all active:scale-90"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel bottom indicators with progression lines */}
      <div className="absolute bottom-6 left-6 right-6 z-35 flex justify-center items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`carousel-dot ${currentSlide === idx ? "active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
