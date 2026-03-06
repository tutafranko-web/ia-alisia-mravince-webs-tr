"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { VILLA, PHOTOS } from "@/lib/constants";

export function BookingSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="booking" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS[1].src}
          alt="Villa Alissa terrace"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-villa-navy/75" />
      </div>

      <div ref={ref} className="container-villa relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-villa-gold text-sm uppercase tracking-[0.2em] mb-4">
            Book Your Stay
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Escape to Villa Alissa
          </h2>
          <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto">
            Experience the magic of Dalmatian living. Book directly on Airbnb
            for instant confirmation and secure payment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href={VILLA.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-villa-gold px-8 py-4 text-base font-medium text-white transition-all hover:bg-villa-gold-light hover:shadow-lg hover:shadow-villa-gold/30 hover:scale-105"
            >
              Book on Airbnb
            </a>
            <a
              href={VILLA.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              <MessageCircle className="w-4 h-4" />
              Ask a Question
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-villa-gold text-villa-gold" />
              <span className="text-sm">{VILLA.rating}/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">{VILLA.reviewCount} Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Instant Booking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
