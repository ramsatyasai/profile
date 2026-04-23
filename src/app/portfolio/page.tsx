import { Metadata } from "next";
import { PortfolioContent } from "@/components/portfolio-content";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Dhritv",
  description: "Real problems. Measurable outcomes. Explore our latest projects in Legal Tech, FinTech, and Enterprise SaaS.",
};

export default function Portfolio() {
  return <PortfolioContent />;
}
