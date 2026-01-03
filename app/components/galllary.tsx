"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  { src: "/p1.jpg", alt: "Gym Workout" },
  { src: "/p2.jpg", alt: "Weight Training" },
  { src: "/p3.jpg", alt: "Cardio Area" },
  { src: "/p4.jpg", alt: "Yoga Session" },
  { src: "/p5.jpg", alt: "Personal Training" },
  { src: "/p6.jpg", alt: "Zumba Class" },
  { src: "/p1.jpg", alt: "Cross Training" },
  { src: "/p2.jpg", alt: "Modern Equipment" },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* SECTION */}
      <section className="w-full px-4 sm:px-8 lg:px-16 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Gym Gallery
        </h2>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img)}
              className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] xl:h-[400px]
                         rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       (max-width: 1280px) 33vw,
                       25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-6xl h-[70vh]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
