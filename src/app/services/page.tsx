"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Card3D } from "@/components/ui/card-3d";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Check, Settings, Laptop, Cpu, Code2, ArrowRight } from "lucide-react";

/* ─── Accent tokens ────────────────────────────────────────────────────────── */
type AccentKey = "blue" | "purple" | "cyan" | "green";

const A: Record<
  AccentKey,
  {
    label: string;
    icon: string;
    cardBg: string;
    cardBorder: string;
    glow: string;
    stat: string;
    badge: string;
    check: string;
  }
> = {
  blue: {
    label: "text-neon-blue",
    icon: "text-neon-blue",
    cardBg: "bg-neon-blue/5",
    cardBorder: "border-neon-blue/20",
    glow: "shadow-[0_0_60px_rgba(41,121,255,0.12)]",
    stat: "text-neon-blue",
    badge: "bg-neon-blue/10   text-neon-blue   border border-neon-blue/20",
    check: "bg-neon-blue/10   border-neon-blue/30   text-neon-blue",
  },
  purple: {
    label: "text-neon-purple",
    icon: "text-neon-purple",
    cardBg: "bg-neon-purple/5",
    cardBorder: "border-neon-purple/20",
    glow: "shadow-[0_0_60px_rgba(124,58,237,0.12)]",
    stat: "text-neon-purple",
    badge: "bg-neon-purple/10 text-neon-purple border border-neon-purple/20",
    check: "bg-neon-purple/10 border-neon-purple/30 text-neon-purple",
  },
  cyan: {
    label: "text-neon-cyan",
    icon: "text-neon-cyan",
    cardBg: "bg-neon-cyan/5",
    cardBorder: "border-neon-cyan/20",
    glow: "shadow-[0_0_60px_rgba(0,229,255,0.12)]",
    stat: "text-neon-cyan",
    badge: "bg-neon-cyan/10   text-neon-cyan   border border-neon-cyan/20",
    check: "bg-neon-cyan/10   border-neon-cyan/30   text-neon-cyan",
  },
  green: {
    label: "text-neon-green",
    icon: "text-neon-green",
    cardBg: "bg-neon-green/5",
    cardBorder: "border-neon-green/20",
    glow: "shadow-[0_0_60px_rgba(0,255,163,0.10)]",
    stat: "text-neon-green",
    badge: "bg-neon-green/10  text-neon-green  border border-neon-green/20",
    check: "bg-neon-green/10  border-neon-green/30  text-neon-green",
  },
};

/* ─── Data ──────────────────────────────────────────────────────────────────── */
const SVCS = [
  {
    num: "01",
    cat: "Efficiency",
    accent: "blue" as AccentKey,
    Icon: Settings,
    iconFirst: false,
    image: null as string | null,
    title: "Business Task Automation",
    desc: "Stop wasting your team's potential on repetitive data entry and manual workflows. We create seamless bridge systems that handle the heavy lifting — 24/7.",
    features: [
      "Custom API Integrations & Webhooks",
      "CRM & Data Syncing Workflows",
      "Email & Document Automation",
    ],
    stats: [
      { v: "40%", l: "Time Saved" },
      { v: "24/7", l: "Uptime" },
      { v: "0", l: "Errors" },
    ],
    badges: ["Python", "n8n", "Zapier", "REST APIs"],
    cta: "Automate My Business",
    ctaBg: "linear-gradient(135deg,#2979FF,#7C3AED)",
    ctaColor: "text-white",
  },
  {
    num: "02",
    cat: "Growth",
    accent: "purple" as AccentKey,
    Icon: Laptop,
    iconFirst: true,
    image: null as string | null,
    title: "High Conversion SEO Websites",
    desc: "Your website is your 24/7 salesperson. We build blazingly fast, psychologically optimized platforms that rank high and turn clicks into revenue.",
    features: [
      "Static & Dynamic Web Applications",
      "Core Web Vitals Optimization",
      "Conversion Rate Optimization (CRO)",
    ],
    stats: [
      { v: "150%", l: "Conv. Lift" },
      { v: "1.2s", l: "Load Time" },
      { v: "A+", l: "CWV Score" },
    ],
    badges: ["Next.js", "React", "SEO", "CRO"],
    cta: "Build My Sales Machine",
    ctaBg: "linear-gradient(135deg,#7C3AED,#2979FF)",
    ctaColor: "text-white",
  },
  {
    num: "03",
    cat: "Intelligence",
    accent: "cyan" as AccentKey,
    Icon: Cpu,
    iconFirst: false,
    image: null as string | null,
    title: "AI & Machine Learning",
    desc: "Move beyond chatbots. We integrate custom LLM agents, predictive models, and intelligent pipelines directly into your existing infrastructure.",
    features: [
      "LLM Fine-tuning & Agentic Workflows",
      "Custom ML Models & Sentiment Analysis",
      "Predictive Analytics Systems",
    ],
    stats: [
      { v: "2.4x", l: "ROI Boost" },
      { v: "99%", l: "Accuracy" },
      { v: "<50ms", l: "Latency" },
    ],
    badges: ["GPT-4o", "LangChain", "TensorFlow", "RAG"],
    cta: "Infuse AI Today",
    ctaBg: "linear-gradient(135deg,#00E5FF,#2979FF)",
    ctaColor: "text-white",
  },
  {
    num: "04",
    cat: "Innovation",
    accent: "green" as AccentKey,
    Icon: Code2,
    iconFirst: true,
    image: "/assets/custom_software.png" as string | null,
    title: "Custom Software Architecture",
    desc: "Have a unique problem? We build unique solutions. From specialized CRM dashboards to high-frequency trading platforms, we own the full cycle.",
    features: [
      "Scalable SaaS Infrastructure",
      "High-Performance Trading Systems",
      "Enterprise Resource Planning (ERP)",
    ],
    stats: [
      { v: "5", l: "Shipped" },
      { v: "50k+", l: "Users" },
      { v: "99.9%", l: "Uptime" },
    ],
    badges: ["Node.js", "PostgreSQL", "AWS", "Docker"],
    cta: "Start Building Now",
    ctaBg: "linear-gradient(135deg,#00FFA3,#00E5FF)",
    ctaColor: "text-void",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative pb-20">
      {/* HEADER */}
      <header className="relative pt-24 pb-16 overflow-hidden border-b border-white/5 bg-void/30">
        <div className="bg-grid absolute inset-0 z-0 opacity-20" />
        <div className="orb orb-1 left-[-10%] top-[-10%] bg-neon-blue/20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <p className="section-label justify-center mb-4">What We Offer</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 font-display">
              Our{" "}
              <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                Capabilities
              </span>
            </h1>
            <p className="text-sm text-muted-foreground max-w-[520px] mx-auto leading-relaxed">
              We build the engine of your business growth — from internal
              efficiency to customer-facing excellence.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* SERVICES */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {SVCS.map((svc, i) => {
            const a = A[svc.accent];
            const { Icon } = svc;

            /* ── Text column (same JSX regardless of order) ── */
            const Text = (
              <ScrollReveal
                direction={svc.iconFirst ? "left" : "right"}
                className="flex flex-col gap-5 justify-center"
              >
                <span
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-[0.2em] font-display",
                    a.label,
                  )}
                >
                  {svc.num} / {svc.cat}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-display leading-tight">
                  {svc.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {svc.desc}
                </p>
                <ul className="space-y-2.5">
                  {svc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span
                        className={cn(
                          "w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 border",
                          a.check,
                        )}
                      >
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  {svc.stats.map((s, si) => (
                    <div
                      key={si}
                      className="px-4 py-3 rounded-xl bg-void/60 border border-white/5 text-center min-w-[68px]"
                    >
                      <div
                        className={cn(
                          "text-base font-bold font-display",
                          a.stat,
                        )}
                      >
                        {s.v}
                      </div>
                      <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold mt-0.5">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {svc.badges.map((b) => (
                    <span
                      key={b}
                      className={cn(
                        "px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                        a.badge,
                      )}
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center gap-2 text-xs font-bold w-fit px-6 py-3 rounded-xl hover:opacity-90 transition-opacity",
                    svc.ctaColor,
                  )}
                  style={{ background: svc.ctaBg }}
                >
                  {svc.cta} <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            );

            /* ── Icon square (fixed 280×280, never stretches) ── */
            const IconCard = (
              <ScrollReveal
                direction={svc.iconFirst ? "right" : "left"}
                delay={0.1}
                className="flex items-center justify-center"
              >
                {/* Hard-coded pixel size wrapper prevents any flex stretching */}
                <div
                  className="relative"
                  style={{
                    width: "280px",
                    height: "280px",
                    minWidth: "280px",
                    minHeight: "280px",
                  }}
                >
                  <Card3D
                    className={cn(
                      "w-full h-full border overflow-hidden flex items-center justify-center",
                      a.cardBg,
                      a.cardBorder,
                      a.glow,
                    )}
                  >
                    {svc.image ? (
                      <>
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          sizes="280px"
                          className="object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon
                            size={120}
                            strokeWidth={0.5}
                            className={a.icon}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon
                          size={140}
                          strokeWidth={0.5}
                          className={cn(a.icon, "opacity-85")}
                        />
                      </div>
                    )}
                  </Card3D>
                </div>
              </ScrollReveal>
            );

            return (
              <div key={svc.num}>
                {/* Explicit DOM order — no CSS order tricks */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                  {svc.iconFirst ? (
                    <>
                      {IconCard}
                      {Text}
                    </>
                  ) : (
                    <>
                      {Text}
                      {IconCard}
                    </>
                  )}
                </div>

                {i < SVCS.length - 1 && (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-16" />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
