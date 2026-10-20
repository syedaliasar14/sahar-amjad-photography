import { HeroSection } from "./components/hero-section";
import { PortfolioSection } from "./components/portfolio-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ServicesSection />
    </>
  );
}
