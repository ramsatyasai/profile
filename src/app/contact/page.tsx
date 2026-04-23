import { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Dhritv",
  description: "Ready to scale your vision? Get in touch with Dhritv for high-performance software, AI integrations, and automation solutions.",
};

export default function Contact() {
  return <ContactContent />;
}
