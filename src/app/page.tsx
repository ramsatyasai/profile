import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Dhritv | Elite Software & Automation Agency",
  description: "Transforming ideas into autonomous reality. High-performance software and AI-driven automations for modern founders.",
};

export default function Home() {
  return <HomeContent />;
}
