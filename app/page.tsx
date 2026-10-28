import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PAGE_QUERY } from "@/sanity/queries/home-page";
import { HeroSection } from "./components/hero-section";
import { PortfolioSection } from "./components/portfolio-section";
import { ServicesSection } from "./components/services-section";
import { TestimonialsSection } from "./components/testimonials-section";

export default async function Home() {
  const { data } = await sanityFetch({ query: HOME_PAGE_QUERY });

  return (
    <>
      <HeroSection images={data?.hero?.images} />
      <PortfolioSection
        title={data?.portfolio?.title}
        text={data?.portfolio?.text}
        images={data?.portfolio?.images}
      />
      <TestimonialsSection testimonials={data?.testimonials?.testimonials} />
      <ServicesSection
        title={data?.services?.title}
        services={data?.services?.services}
      />
    </>
  );
}
