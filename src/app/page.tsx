import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { GallerySection } from "@/components/sections/gallery";
import { AmenitiesSection } from "@/components/sections/amenities";
import { ExperienceSection } from "@/components/sections/experience";
import { LocationSection } from "@/components/sections/location";
import { ReviewsSection } from "@/components/sections/reviews";
import { ReservationSection } from "@/components/sections/reservation";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <AmenitiesSection />
      <ExperienceSection />
      <LocationSection />
      <ReviewsSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}
