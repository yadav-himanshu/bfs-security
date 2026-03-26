"use client";
import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import GalleryCard from "@/components/cards/GalleryCard";
import { galleryData } from "@/lib/galleryData";
import GalleryModal from "@/components/modals/GalleryModal";

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);
  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));

  return (
    <section className="relative py-20 min-h-screen bg-[var(--bg-color)] transition-colors duration-300 text-[var(--text-color)] overflow-hidden">
      {/* Glowing Background Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--highlight-color)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <PageHeader
        title="Gallery"
        subtitle="Our team in action- delivering trust, discipline, and safety."
      />

      <div className="max-w-7xl mx-auto px-6 mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
        {galleryData.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      <GalleryModal
        isOpen={isOpen}
        images={galleryData}
        currentIndex={currentIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
