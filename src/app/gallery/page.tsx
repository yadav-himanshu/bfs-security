"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import GalleryCard from "@/components/GalleryCard";
import { galleryData } from "@/lib/galleryData";
import GalleryModal from "@/components/GalleryModal";

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
    <section className="py-12 sm:py-16 min-h-screen transition-colors duration-300 text-[var(--text-color)]">
      <PageHeader
        title="Gallery"
        subtitle="Our team in action — delivering trust, discipline, and safety."
      />

      <div className="max-w-7xl mx-auto px-6 mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
