"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavbarScroll } from "@/hooks/use-navbar-scroll";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const isScrolled = useNavbarScroll();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-villa flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          className={cn(
            "font-serif text-xl md:text-2xl transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
        >
          Villa Alissa
          <span className="text-villa-gold">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-villa-gold",
                isScrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-full bg-villa-gold px-5 py-2 text-sm font-medium text-white transition-all hover:bg-villa-gold-dark hover:shadow-lg"
          >
            Reserve Now
          </a>
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="container-villa py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-foreground text-base font-medium py-2 hover:text-villa-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#reserve"
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-villa-gold px-5 py-3 text-sm font-medium text-white mt-2"
              >
                Reserve Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
