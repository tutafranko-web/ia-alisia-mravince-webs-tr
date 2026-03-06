"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Landmark,
  Plane,
  Waves,
  TreePine,
  type LucideIcon,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { VILLA, DISTANCES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  Plane,
  Waves,
  TreePine,
};

export function LocationSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="location" className="section-padding bg-background">
      <div ref={ref} className="container-villa">
        <SectionHeader
          overline="Location"
          title="Perfectly Located"
          subtitle="Close to everything, yet a world away"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden h-80 md:h-96 border border-border"
          >
            <iframe
              src={`https://maps.google.com/maps?q=${VILLA.coordinates.lat},${VILLA.coordinates.lng}&z=13&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Villa Alissa location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-1">
              {DISTANCES.map((item, i) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <motion.div
                    key={item.place}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-center justify-between py-4 border-b border-border last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-villa-gold/10 flex items-center justify-center">
                        {IconComponent ? (
                          <IconComponent className="w-4 h-4 text-villa-gold" />
                        ) : (
                          <MapPin className="w-4 h-4 text-villa-gold" />
                        )}
                      </div>
                      <span className="text-foreground font-medium">
                        {item.place}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-foreground">
                        {item.distance}
                      </span>
                      <span className="text-muted-foreground text-sm ml-2">
                        {item.time}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 flex items-start gap-2 text-muted-foreground">
              <Plane className="w-4 h-4 mt-0.5 text-villa-gold shrink-0" />
              <p className="text-sm">
                Airport shuttle service available upon request. The villa
                provides free private parking for up to 4 vehicles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
