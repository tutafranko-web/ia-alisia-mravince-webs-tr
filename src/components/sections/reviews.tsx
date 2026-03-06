"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { VILLA, REVIEWS } from "@/lib/constants";
import { StarRating } from "@/components/ui/star-rating";
import { Card, CardContent } from "@/components/ui/card";

export function ReviewsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="reviews" className="section-padding bg-villa-stone-light">
      <div ref={ref} className="container-villa">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-villa-gold mb-4">
              Reviews
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Guest Reviews
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-5xl md:text-6xl font-serif text-foreground font-bold">
              {VILLA.rating}
            </p>
            <StarRating rating={VILLA.rating} size="md" className="mt-2 justify-center md:justify-end" />
            <p className="text-sm text-muted-foreground mt-2">
              Based on {VILLA.reviewCount} reviews
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <StarRating rating={review.rating} size="sm" />
                  <p className="text-foreground italic leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-villa-gold/15 flex items-center justify-center">
                        <span className="font-serif text-sm font-bold text-villa-gold-dark">
                          {review.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {review.author}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {review.country} &middot; {review.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href={VILLA.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-villa-gold-dark hover:text-villa-gold font-medium transition-colors"
          >
            Read all {VILLA.reviewCount} reviews on Airbnb
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
