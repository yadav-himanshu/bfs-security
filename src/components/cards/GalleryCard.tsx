"use client";

import Image from "next/image";
import { GalleryImage } from "@/lib/galleryData";

interface Props {
  item: GalleryImage;
  onClick: () => void;
}

export default function GalleryCard({ item, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl hover:shadow-[var(--highlight-color)]/20 transition-all duration-500 cursor-pointer bg-[var(--card-bg-color)] border border-[var(--card-border-color)] hover:-translate-y-2"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-xl font-bold tracking-wide text-center text-[var(--highlight-color)] drop-shadow-md">
              {item.title}
            </p>
            <div className="w-12 h-1 bg-[var(--highlight-color)] mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
