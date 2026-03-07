"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { VILLA, HERO_SLIDES } from "@/lib/constants";

export function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Slideshow background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[currentIndex].src}
              alt={HERO_SLIDES[currentIndex].alt}
              fill
              className="object-cover animate-ken-burns"
              priority={currentIndex === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-villa-navy/40 via-villa-navy/20 to-villa-navy/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-villa-gold text-sm md:text-base uppercase tracking-[0.25em] font-medium mb-6"
        >
          Mravince &middot; Split &middot; Croatia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none"
        >
          {VILLA.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/80 text-lg md:text-xl mt-4 font-light"
        >
          {VILLA.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-2 mt-6 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2"
        >
          <Star className="w-4 h-4 fill-villa-gold text-villa-gold" />
          <span className="text-white text-sm font-medium">
            {VILLA.rating} &middot; {VILLA.reviewCount} reviews
          </span>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          href="#reserve"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-villa-gold px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-villa-gold-dark hover:shadow-lg hover:shadow-villa-gold/30 hover:scale-105"
        >
          Reserve Your Stay
        </motion.a>
      </div>

      {/* Slide indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2"
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-8 bg-villa-gold"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
