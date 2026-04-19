import Hero from "../components/Hero";
import JourneySection from "../components/JourneySection";
import SystemSection from "../components/SystemSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsSection from "../components/NewsSection";
import GalleryPreview from "../components/GalleryPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <JourneySection />
      <SystemSection />
      <TestimonialsSection />
      <NewsSection />
      <GalleryPreview />
    </>
  );
}
