"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, AlertCircle, Calendar, Users, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { VILLA, PHOTOS } from "@/lib/constants";
import { GradientWaves } from "@/components/ui/gradient-waves";

interface FormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "6",
  message: "",
};

export function ReservationSection() {
  const { ref, isInView } = useScrollAnimation();
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    if (form.checkOut && form.checkIn && form.checkOut <= form.checkIn) {
      setStatus("error");
      setErrorMsg("Check-out date must be after check-in date.");
      return;
    }

    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reserve" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={PHOTOS[1].src}
          alt="Villa Alissa terrace"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-villa-navy/80" />
      </div>

      <GradientWaves className="opacity-40" />

      <div ref={ref} className="container-villa relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-villa-gold text-sm uppercase tracking-[0.2em] mb-4">
            Reserve Your Stay
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Book Villa Alissa
          </h2>
          <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
            Fill in your details below and we will confirm your reservation
            personally within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {status === "success" ? (
            <div className="text-center py-16">
              <CheckCircle2 className="w-16 h-16 text-villa-gold mx-auto mb-6" />
              <h3 className="font-serif text-3xl text-white mb-3">
                Reservation Request Sent
              </h3>
              <p className="text-white/70 text-lg">
                Thank you! We will review your request and get back to you
                within 24 hours at <span className="text-white">{form.email || "your email"}</span>.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-villa-gold px-6 py-2.5 text-sm font-medium text-villa-gold transition-all hover:bg-villa-gold hover:text-white"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white/80 text-sm mb-1.5">
                    Full Name <span className="text-villa-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-villa-gold focus:ring-1 focus:ring-villa-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 text-sm mb-1.5">
                    Email <span className="text-villa-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-villa-gold focus:ring-1 focus:ring-villa-gold transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-white/80 text-sm mb-1.5">
                  Phone Number <span className="text-white/40">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+385 ..."
                  className="w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-villa-gold focus:ring-1 focus:ring-villa-gold transition-colors"
                />
              </div>

              {/* Dates & Guests */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-white/80 text-sm mb-1.5">
                    <Calendar className="w-3.5 h-3.5 inline mr-1" />
                    Check-in <span className="text-villa-gold">*</span>
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    required
                    min={today}
                    value={form.checkIn}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-villa-gold focus:ring-1 focus:ring-villa-gold transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-white/80 text-sm mb-1.5">
                    <Calendar className="w-3.5 h-3.5 inline mr-1" />
                    Check-out <span className="text-villa-gold">*</span>
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    required
                    min={form.checkIn || today}
                    value={form.checkOut}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-villa-gold focus:ring-1 focus:ring-villa-gold transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-white/80 text-sm mb-1.5">
                    <Users className="w-3.5 h-3.5 inline mr-1" />
                    Guests <span className="text-villa-gold">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-villa-gold focus:ring-1 focus:ring-villa-gold transition-colors [color-scheme:dark]"
                  >
                    <option value="1" className="bg-villa-navy">1 Guest</option>
                    <option value="2" className="bg-villa-navy">2 Guests</option>
                    <option value="3" className="bg-villa-navy">3 Guests</option>
                    <option value="4" className="bg-villa-navy">4 Guests</option>
                    <option value="5" className="bg-villa-navy">5 Guests</option>
                    <option value="6" className="bg-villa-navy">6 Guests</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm mb-1.5">
                  Special Requests <span className="text-white/40">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Airport shuttle, late check-in, dietary needs..."
                  className="w-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-villa-gold focus:ring-1 focus:ring-villa-gold transition-colors resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-villa-gold px-8 py-4 text-base font-medium text-white transition-all hover:bg-villa-gold-dark hover:shadow-lg hover:shadow-villa-gold/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Request Reservation
                  </>
                )}
              </button>

              <p className="text-center text-white/40 text-xs">
                {VILLA.capacity} guests max &middot; {VILLA.bedrooms} bedrooms &middot; {VILLA.bathrooms} bathrooms &middot; {VILLA.rating}/5 rating
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
