import { Metadata } from "next";
import { TestimonialsContent } from "@/components/testimonials-content";

export const metadata: Metadata = {
  title: "Success Stories & Testimonials | Dhritv",
  description: "Read how Dhritv has helped founders and businesses achieve measurable, high-impact results through elite engineering.",
};

export default function Testimonials() {
  return <TestimonialsContent />;
}
