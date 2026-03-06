"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Bath,
  ChefHat,
  Tv,
  Car,
  UtensilsCrossed,
  Baby,
  Leaf,
  Plane,
  Flower2,
  Mountain,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AMENITIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";

const iconMap: Record<string, LucideIcon> = {
  Wifi,
  Bath,
  ChefHat,
  Tv,
  Car,
  UtensilsCrossed,
  Baby,
  Leaf,
  Plane,
  Flower2,
  Mountain,
  Users,
};

export function AmenitiesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="amenities" className="section-padding bg-background">
      <div ref={ref} className="container-villa">
        <SectionHeader
          overline="Amenities"
          title="Everything You Need"
          subtitle="Carefully curated amenities for a comfortable and memorable stay"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {AMENITIES.map((amenity, i) => {
            const IconComponent = iconMap[amenity.icon];
            return (
              <motion.div
                key={amenity.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-villa-gold/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-villa-gold/10 flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-villa-gold" />
                  )}
                </div>
                <p className="text-sm font-medium text-center text-foreground">
                  {amenity.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
