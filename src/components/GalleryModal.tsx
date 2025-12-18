"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Props {
  isOpen: boolean;
  images: { image: string | StaticImageData; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  if (!isOpen) return null;
  const current = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-200 hover:text-yellow-400 transition"
          >
            <X size={32} />
          </button>

          {/* Image Navigation */}
          <button
            onClick={onPrev}
            className="absolute left-4 md:left-10 text-gray-300 hover:text-yellow-400 transition"
          >
            <ChevronLeft size={40} />
          </button>

          <motion.div
            key={typeof current.image === "string" ? current.image : current.image.src}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-contain"
            />
          </motion.div>

          <button
            onClick={onNext}
            className="absolute right-4 md:right-10 text-gray-300 hover:text-yellow-400 transition"
          >
            <ChevronRight size={40} />
          </button>

          {/* Title */}
          <div className="absolute bottom-6 text-center w-full text-gray-200 text-lg font-semibold">
            {current.title}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
