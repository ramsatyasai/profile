"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Card3D } from "@/components/ui/card-3d";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Rocket,
  Search,
  Terminal,
} from "lucide-react";

const PROJECTS = [
  {
    id: "advconnect",
    category: "Legal Tech / SaaS",
    title: "AdvConnect — Legal Firm OS",
    desc: "Advocates were drowning in fragmented tools, missed deadlines, and manual case tracking. We built a unified legal operating system — unifying case portfolios, billing, client portals, and docket alerts into one seamless platform.",
    image: "/assets/advconnect_detail.png",
    tech: ["React.js", "Node.js", "PostgreSQL", "AWS Lambda", "Stripe"],
    metrics: [
      { label: "Admin time saved", val: "40%", color: "text-neon-blue" },
      { label: "Missed deadlines", val: "0", color: "text-neon-green" },
      { label: "Cases managed", val: "50+", color: "text-neon-purple" },
      { label: "Satisfaction", val: "95%", color: "text-amber-400" },
    ],
    featured: true,
  },
  {
    id: "trading",
    category: "FinTech / Algo-Trading",
    title: "AlgoTrade Sync",
    desc: "Manual execution of multi-leg strategies caused slippage and human error. We engineered a low-latency bot engine with AI-driven sentiment signals and full backtesting infrastructure.",
    image: "/assets/trading.png",
    tech: ["Python", "TensorFlow", "Redis", "WebSockets"],
    metrics: [
      { label: "Slippage", val: "0.05%", color: "text-neon-cyan" },
      { label: "ROI vs Bench", val: "2.4x", color: "text-neon-green" },
      { label: "Status", val: "24/7", color: "text-neon-blue" },
    ],
  },
  {
    id: "saas",
    category: "SaaS / Enterprise",
    title: "Custom SaaS Platform",
    desc: "End-to-end SaaS with multi-tenant support, subscription billing, role-based access, and analytics dashboard — built to scale from day one.",
    image: "/assets/custom_software.png",
    tech: ["Next.js", "Prisma", "Stripe", "Vercel"],
    cta: true,
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative pb-20">
      {/* ═══ PAGE HEADER ═══ */}
      <header className="relative pt-24 pb-16 overflow-hidden border-b border-white/5 bg-void/30">
        <div className="bg-grid absolute inset-0 z-0 opacity-20" />
        <div className="orb orb-1 left-[-10%] top-[-10%] bg-neon-blue/20" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <p className="section-label justify-center mb-4">Case Studies</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-display">
              Work That{" "}
              <span className="gradient-text bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Speaks.
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-[520px] mx-auto leading-relaxed">
              Real problems. Measurable outcomes. Projects we&apos;re proud to
              have built.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* ═══ PORTFOLIO GRID ═══ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {PROJECTS.map((project, i) => (
              <ScrollReveal
                key={project.id}
                delay={i * 0.1}
                className={cn(project.featured && "md:col-span-2")}
              >
                <Card3D className="p-0 overflow-hidden flex flex-col group h-full border-white/5">
                  <div
                    className={cn(
                      "relative aspect-video overflow-hidden",
                      project.featured ? "md:aspect-[21/9]" : "aspect-video",
                    )}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-90" />

                    {/* Tech Tags Overlay */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md bg-void/80 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-widest text-neon-blue"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 lg:p-10 flex-grow">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                      <div className="max-w-[720px]">
                        <span className="text-[10px] font-bold text-neon-blue uppercase tracking-[0.2em] mb-2 block font-display">
                          {project.category}
                        </span>
                        <h3
                          className={cn(
                            "font-bold mb-3 font-display",
                            project.featured
                              ? "text-2xl md:text-3xl"
                              : "text-xl",
                          )}
                        >
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {project.desc}
                        </p>
                        {project.cta && (
                          <Link
                            href="/contact"
                            className="btn-secondary px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 text-xs font-semibold w-fit"
                          >
                            Discuss a Similar Project <ArrowRight size={14} />
                          </Link>
                        )}
                      </div>

                      {!project.cta && project.tech && !project.featured && (
                        <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                          {project.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md bg-surface border border-white/5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {project.metrics && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/5 bg-void/40">
                      {project.metrics.map((m, mi) => (
                        <div
                          key={mi}
                          className="p-4 text-center border-r border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-colors"
                        >
                          <div
                            className={cn(
                              "text-xl font-bold mb-0.5 font-display",
                              m.color,
                            )}
                          >
                            {m.val}
                          </div>
                          <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-24 bg-surface/30 border-y border-white/5 relative text-sm">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label justify-center mb-4">How We Build</p>
            <h2 className="text-3xl font-bold font-display">
              Our <span className="hl">Proven Process</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {[
              {
                num: "01",
                title: "Discovery",
                icon: <Search size={22} />,
                desc: "Deep-dive into your problem space, goals, users, and constraints. No assumptions, only understanding.",
              },
              {
                num: "02",
                title: "Architecture",
                icon: <Code2 size={22} />,
                desc: "Design the technical blueprint. Stack choices, data models, API contracts, and scalability.",
              },
              {
                num: "03",
                title: "Execution",
                icon: <Terminal size={22} />,
                desc: "Sprint-based development with weekly demos. You see progress every step of the way.",
              },
              {
                num: "04",
                title: "Launch & Scale",
                icon: <Rocket size={22} />,
                desc: "Deploy, monitor, iterate. We don't disappear post-launch — we grow with you as you scale.",
              },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                <div className="p-8 bg-void flex flex-col h-full hover:bg-surface transition-colors group">
                  <div className="text-4xl font-bold font-display bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-5 opacity-40 group-hover:opacity-100 transition-opacity">
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-2 font-display">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-surface to-void border border-neon-blue/20 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neon-blue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display relative z-10">
                Your Project Could{" "}
                <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
                  Be Next.
                </span>
              </h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-[480px] mx-auto relative z-10">
                Join the founders who chose Dhritv for their most critical
                software operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-3.5 text-xs"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary bg-white/5 border border-white/10 rounded-xl px-8 py-3.5 text-xs font-semibold hover:bg-white/10 transition-all font-display"
                >
                  See Our Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
