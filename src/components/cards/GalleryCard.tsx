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
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-500 cursor-pointer backdrop-blur-sm"
      style={{
        // backgroundColor: "var(--card-bg-color)",
        border: "1px solid var(--card-border-color)",
      }}
    >
      <div className="relative w-full h-64 overflow-hidden rounded-2xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out rounded-2xl"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
          <p
            className="body-text font-semibold mb-4 text-center px-3"
            style={{
              color: "var(--highlight-color)",
            }}
          >
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}
