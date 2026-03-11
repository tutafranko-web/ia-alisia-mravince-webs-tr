"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLightbox } from "@/hooks/use-lightbox";
import { PHOTOS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";

const gridSpans = [
  // Group 1 (0–7): main exterior + outdoor
  "col-span-2 row-span-2", "", "", "", "", "col-span-2", "", "",
  // Group 2 (8–15): more outdoor
  "", "", "col-span-2", "", "", "", "", "",
  // Group 3 (16–23): view + living room
  "col-span-2 row-span-2", "", "", "", "", "col-span-2", "", "",
  // Group 4 (24–31): bedrooms
  "", "", "col-span-2", "", "", "", "", "",
  // Group 5 (32–40): bathrooms + kitchen + associated
  "col-span-2 row-span-2", "", "", "", "", "col-span-2", "", "", "",
];

export function GallerySection() {
  const { activeIndex, open, close, prev, next, isOpen } = useLightbox(
    PHOTOS.length
  );

  return (
    <section id="gallery" className="section-padding bg-villa-stone-light">
      <div className="container-villa">
        <SectionHeader
          overline="Gallery"
          title="A Visual Journey"
          subtitle="Discover the authentic charm and beauty of Villa Alissa"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
              onClick={() => open(i)}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${gridSpans[i]}`}
              aria-label={`View ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={
                  gridSpans[i]
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />
              <div className="absolute inset-0 bg-villa-navy/0 group-hover:bg-villa-navy/15 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white z-10"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 p-2 text-white/70 hover:text-white z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 p-2 text-white/70 hover:text-white z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PHOTOS[activeIndex].src}
                alt={PHOTOS[activeIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
              <p className="absolute bottom-0 left-0 right-0 text-center text-white/70 text-sm py-4 bg-gradient-to-t from-black/50 to-transparent">
                {PHOTOS[activeIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
