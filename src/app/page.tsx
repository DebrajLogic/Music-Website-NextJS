import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <TestimonialSection />
    </main>
  );
}
