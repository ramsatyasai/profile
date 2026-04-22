"use client";

import React, { useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card3D } from "@/components/ui/card-3d";
import { cn } from "@/lib/utils";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Phone,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const details = formData.get("details") as string;

    // ────────────────────────────────────────────────────────────────────────
    // CONFIG: Replace this with your actual WhatsApp number (include country code)
    // ────────────────────────────────────────────────────────────────────────
    const WHATSAPP_NUMBER = "919032381330";

    const message = `New Project Inquiry: Nexus Solutions
Client Name: ${name}
Work Email: ${email}
Service: ${service || "Not specified"}
Project Details:
${details}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      setStatus("success");
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <div className="relative pb-20">
      {/* ═══ HEADER ═══ */}
      <header className="relative pt-24 pb-16 overflow-hidden border-b border-white/5 bg-void/30">
        <div className="bg-grid absolute inset-0 z-0 opacity-20" />
        <div className="orb orb-1 left-[-10%] top-[-10%] bg-neon-blue/20" />
        <div className="orb orb-2 right-[-10%] bottom-[-10%] bg-neon-purple/20" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <p className="section-label justify-center mb-4">Get In Touch</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display">
              Let&apos;s{" "}
              <span className="gradient-text bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Connect.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[560px] mx-auto leading-relaxed">
              Have a project in mind? We&apos;re ready to help you scale. Fill
              out the form or reach out directly.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* ═══ CONTACT CONTENT ═══ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form Column */}
            <ScrollReveal direction="right">
              <Card3D className="p-8 md:p-12 h-full">
                <h3 className="text-2xl font-bold mb-8 font-display">
                  Send a Message
                </h3>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in duration-500">
                    <CheckCircle2 className="w-16 h-16 text-neon-green mb-6" />
                    <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-neon-blue text-sm font-bold uppercase tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className={cn(
                      "space-y-6",
                      status === "submitting" &&
                        "opacity-50 pointer-events-none",
                    )}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          required
                          className="w-full bg-void border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                          Work Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="john@company.com"
                          required
                          className="w-full bg-void border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                        Interested Service
                      </label>
                      <input
                        type="text"
                        name="service"
                        placeholder="e.g. Automation, AI Integration"
                        className="w-full bg-void border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                        Project Details
                      </label>
                      <textarea
                        rows={5}
                        name="details"
                        placeholder="Tell us about your goals and timeline..."
                        required
                        className="w-full bg-void border border-white/10 rounded-xl px-5 py-4 text-sm focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full py-4 flex items-center justify-center gap-2 group"
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                      <Send
                        size={18}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </form>
                )}
              </Card3D>
            </ScrollReveal>

            {/* Info Column */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="flex flex-col gap-6">
                <a
                  href="https://wa.me/919032381330"
                  className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-neon-green/30 transition-all flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center text-neon-green shadow-[0_0_20px_rgba(34,197,94,0.1)] group-hover:scale-110 transition-transform">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1 font-display">
                      WhatsApp
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Chat with us instantly for quick questions
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon-green" />
                </a>

                <a
                  href="mailto:hello@nexussolutions.com"
                  className="group p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-neon-blue/30 transition-all flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue shadow-[0_0_20px_rgba(41,121,255,0.1)] group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1 font-display">Email</p>
                    <p className="text-sm text-muted-foreground">
                      hello@nexussolutions.com
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-neon-blue" />
                </a>

                <div className="p-10 rounded-[2rem] bg-surface/50 border border-white/5 flex flex-col gap-8">
                  <h4 className="text-lg font-bold font-display">
                    What happens next?
                  </h4>
                  <div className="space-y-6">
                    {[
                      {
                        num: 1,
                        text: "We review your request within 24 hours.",
                      },
                      {
                        num: 2,
                        text: "We schedule a free 30-min discovery call.",
                      },
                      {
                        num: 3,
                        text: "We scope the project and get building.",
                      },
                    ].map((step) => (
                      <div key={step.num} className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0">
                          {step.num}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed pt-1.5">
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
