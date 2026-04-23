import { Metadata } from "next";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Us | Dhritv",
  description: "Learn about Dhritv, an elite engineering collective obsessed with efficiency, automation, and digital growth.",
};

export default function About() {
  return <AboutContent />;
}
