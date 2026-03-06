"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  TreePine,
  Sprout,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { VILLA, EXPERIENCE_FEATURES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/section-header";

const iconMap: Record<string, LucideIcon> = {
  Mountain,
  TreePine,
  Sprout,
  Eye,
};

export function ExperienceSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="section-padding bg-villa-stone-light">
      <div ref={ref} className="container-villa">
        <SectionHeader
          overline="Experience"
          title="The Villa Alissa Experience"
          subtitle="What makes our villa truly special"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {EXPERIENCE_FEATURES.map((feature, i) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20, y: 10 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-5 p-6 md:p-8 rounded-2xl bg-background border border-border"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-villa-gold/10 flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="w-5 h-5 text-villa-gold" />
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-villa-navy text-center"
        >
          <p className="text-villa-gold text-sm uppercase tracking-[0.2em] mb-3">
            Ready for an Authentic Dalmatian Experience?
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
            Book Your Stay at Villa Alissa
          </h3>
          <a
            href={VILLA.airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-villa-gold px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-villa-gold-light hover:shadow-lg hover:shadow-villa-gold/30"
          >
            Book Villa Alissa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
