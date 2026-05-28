"use client";

import { useState, useEffect, useCallback } from "react";
import { slidesData } from "@/lib/data/slidesData";

export function useHeroCarousel(autoplayInterval = 5000) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slidesData.length;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slidesCount - 1 ? 0 : prev + 1));
  }, [slidesCount]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slidesCount - 1 : prev - 1));
  }, [slidesCount]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slidesCount) {
      setCurrentSlide(index);
    }
  }, [slidesCount]);

  // Autoplay progression timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoplayInterval);
    return () => clearInterval(timer);
  }, [handleNext, autoplayInterval]);

  return {
    currentSlide,
    slides: slidesData,
    handleNext,
    handlePrev,
    goToSlide,
  };
}
