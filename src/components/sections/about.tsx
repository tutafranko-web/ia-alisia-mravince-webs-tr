"use client";

import { motion } from "framer-motion";
import { Users, BedDouble, Bath, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { VILLA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { GradientWaves } from "@/components/ui/gradient-waves";

const stats = [
  { icon: Users, value: VILLA.capacity, label: "Guests" },
  { icon: BedDouble, value: VILLA.bedrooms, label: "Bedrooms" },
  { icon: Bath, value: VILLA.bathrooms, label: "Bathrooms" },
  { icon: Star, value: VILLA.rating, label: "Rating", isGold: true },
];

export function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="relative section-padding bg-background overflow-hidden">
      <GradientWaves />
      <div ref={ref} className="container-villa relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-villa-gold mb-4">
              The Villa
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Where Stone Meets Sky
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              {VILLA.longDescription}
            </p>
            <p className="mt-4 text-villa-earth italic">
              {VILLA.plotSize} surrounded by ancient stone walls &middot; {VILLA.distanceSplit} from Split
            </p>
            <a
              href="#reserve"
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-villa-gold px-6 py-2.5 text-sm font-medium text-villa-gold-dark transition-all hover:bg-villa-gold hover:text-white"
            >
              Reserve Your Stay
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <Card className="text-center p-6 border-border hover:border-villa-gold/50 transition-colors">
                  <CardContent className="p-0 flex flex-col items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        stat.isGold
                          ? "bg-villa-gold/15"
                          : "bg-villa-stone-light"
                      }`}
                    >
                      <stat.icon
                        className={`w-5 h-5 ${
                          stat.isGold
                            ? "text-villa-gold fill-villa-gold"
                            : "text-villa-earth"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-2xl font-serif font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
