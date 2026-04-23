import { Metadata } from "next";
import { ServicesContent } from "@/components/services-content";

export const metadata: Metadata = {
  title: "Expertise & Services | Dhritv",
  description: "Explore our core expertise: Business Automation, SEO Web Platforms, AI Integration, and Custom Software Architecture.",
};

export default function Services() {
  return <ServicesContent />;
}
