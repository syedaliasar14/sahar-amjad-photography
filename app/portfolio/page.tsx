import type { Metadata } from "next";
import { CtaSection } from "./components/cta-section";
import { PortfolioBrowser } from "./components/portfolio-browser";

export const metadata: Metadata = { title: "Portfolio | Sahar Amjad Photography" };

export default function PortfolioPage() {
  return (
    <>
      <PortfolioBrowser />
      <CtaSection />
    </>
  );
}
