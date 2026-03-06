"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { VILLA, PHOTOS } from "@/lib/constants";

export function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={PHOTOS[0].src}
          alt={PHOTOS[0].alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-villa-navy/30 via-villa-navy/20 to-villa-navy/70" />

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
          href={VILLA.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-villa-gold px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-villa-gold-dark hover:shadow-lg hover:shadow-villa-gold/30 hover:scale-105"
        >
          Book Your Stay
        </motion.a>
      </div>

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
