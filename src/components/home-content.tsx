"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Card3D } from "@/components/ui/card-3d";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Zap,
  Globe,
  Cpu,
  MessageCircle,
} from "lucide-react";

export function HomeContent() {
  return (
    <div className="relative">
      {/* ═══ HERO ═══ */}
      <header className="hero-section relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="bg-grid absolute inset-0 z-0 opacity-40" />

        {/* Background Orbs */}
        <div className="orb orb-1 left-[-10%] top-[-10%] bg-neon-blue" />
        <div className="orb orb-2 right-[-10%] bottom-[-10%] bg-neon-purple" />
        <div className="orb orb-3 right-[5%] top-[40%] bg-neon-cyan opacity-10" />

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
            {/* LEFT: Copy */}
            <div className="md:self-start">
              <ScrollReveal direction="right">
                <div className="hero-content">
                  <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-neon-cyan text-[12px] font-bold tracking-widest uppercase mb-8 font-display">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                    Leading Automation Agency 2025
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                    Transforming Ideas
                    <br />
                    into{" "}
                    <span className="gradient-text bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue bg-clip-text text-transparent">
                      Autonomous Reality.
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-[560px] leading-relaxed">
                    We build high-performance software, AI-driven automations,
                    and conversion-first websites that empower modern founders
                    to scale faster.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="btn-primary px-8 py-4">
                      Start Your Project
                    </Link>
                    <Link
                      href="/portfolio"
                      className="btn-secondary px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl font-display font-semibold hover:bg-white/10 transition-all"
                    >
                      View Showcase
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT: 3D Floating Scene - CONSTRAINED SIZE */}
            <div className="md:self-start">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="relative group max-w-[440px] md:ml-auto mx-auto md:mx-0 md:mt-10">
                  {/* Floating metric badges - SHRUNK */}
                  <div className="absolute -top-4 -left-6 z-20 bg-void/90 border border-neon-blue/30 backdrop-blur-xl p-2.5 rounded-xl flex items-center gap-2.5 shadow-2xl animate-float">
                    <div className="w-6 h-6 rounded-lg bg-neon-blue flex items-center justify-center">
                      <Zap size={12} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[9px] text-muted-foreground leading-none">
                        Delivery Rate
                      </div>
                      <div className="text-neon-green font-bold text-xs">
                        99.8%
                      </div>
                    </div>
                  </div>

                  <Card3D className="overflow-hidden rounded-2xl border-neon-blue/20">
                    <div className="relative aspect-square">
                      <Image
                        src="/assets/hero.png"
                        alt="Dhritv Elite Software & Automation Agency"
                        fill
                        sizes="(max-width: 768px) 100vw, 440px"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent pointer-events-none" />
                    </div>
                  </Card3D>

                  <div className="absolute -bottom-2 -right-4 z-20 bg-void/90 border border-neon-blue/30 backdrop-blur-xl p-2.5 rounded-xl flex items-center gap-2.5 shadow-2xl animate-float-delayed">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center">
                      <Cpu size={12} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[9px] text-muted-foreground leading-none">
                        AI Projects
                      </div>
                      <div className="text-neon-cyan font-bold text-xs">
                        50+ Built
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ TRUST BAR ═══ */}
      <section className="py-10 border-y border-white/5 relative bg-void/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="section-label whitespace-nowrap">Trusted By</p>
            <div className="flex flex-wrap justify-center items-center gap-10 text-muted-foreground">
              {["ALGOTRADE SYNC"].map((logo) => (
                <span
                  key={logo}
                  className="text-[10px] font-black tracking-[0.2em] font-display hover:text-white transition-colors opacity-40 hover:opacity-100 uppercase cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <ScrollReveal>
              <p className="section-label justify-center mb-4">What We Do</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                Our{" "}
                <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Core Expertise
                </span>
              </h2>
              <p className="text-muted-foreground max-w-[480px] mx-auto leading-relaxed text-sm">
                Propelling businesses with state-of-the-art software solutions
                built for the next decade.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <ScrollReveal delay={0.1}>
              <Link href="/services" className="block h-full">
                <Card3D className="h-full p-8">
                  <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-6 text-neon-blue">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 font-display">
                    Business Automation
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Eliminate repetitive tasks with intelligent Python &
                    low-code automation pipelines that run 24/7.
                  </p>
                  <div className="flex items-center gap-2 text-neon-blue text-[10px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Card3D>
              </Link>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal delay={0.2}>
              <Link href="/services" className="block h-full">
                <Card3D className="h-full p-8 border-neon-purple/20">
                  <div className="w-10 h-10 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center mb-6 text-neon-purple">
                    <Globe size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 font-display">
                    SEO Web Platforms
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Blazing fast, SEO-optimized websites engineered to convert
                    visitors into measurable revenue.
                  </p>
                  <div className="flex items-center gap-2 text-neon-purple text-[10px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Card3D>
              </Link>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal delay={0.3}>
              <Link href="/services" className="block h-full">
                <Card3D className="h-full p-8 border-neon-cyan/20">
                  <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mb-6 text-neon-cyan">
                    <Cpu size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 font-display">
                    AI / ML Integration
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Embedding LLM agents and ML models directly into your
                    products and workflows for competitive edge.
                  </p>
                  <div className="flex items-center gap-2 text-neon-cyan text-[10px] font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Card3D>
              </Link>
            </ScrollReveal>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-secondary px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-xs font-semibold"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO PREVIEW ═══ */}
      <section className="py-24 bg-surface/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-12">
            <p className="section-label mb-4">Our Work</p>
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              Latest{" "}
              <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Case Studies
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <Card3D className="p-0 overflow-hidden border-neon-blue/10 max-w-2xl">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/assets/advconnect.png"
                    alt="AdvConnect Legal Firm SaaS Platform Showcase"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 672px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-8">
                  <span className="text-[9px] font-bold text-neon-blue uppercase tracking-[0.15em] font-display">
                    SaaS Platform
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2 font-display">
                    AdvConnect
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                    Enterprise portfolio solution for legal professionals with
                    real-time collaboration.
                  </p>
                  <Link
                    href="/portfolio"
                    className="btn-secondary px-5 py-2.5 text-[10px]"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <Card3D className="p-0 overflow-hidden border-neon-purple/10 max-w-2xl">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/assets/trading.png"
                    alt="AlgoTrade Sync High-Frequency Trading Automation"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 672px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-8">
                  <span className="text-[9px] font-bold text-neon-purple uppercase tracking-[0.15em] font-display">
                    Automation
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2 font-display">
                    AlgoTrade Sync
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                    High-frequency trading bots with real-time analytics
                    dashboard and AI signals.
                  </p>
                  <Link
                    href="/portfolio"
                    className="btn-secondary px-5 py-2.5 text-[10px]"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-16 lg:gap-20 items-center">
            <ScrollReveal direction="right">
              <div>
                <p className="section-label mb-6">Why Dhritv</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 font-display leading-tight">
                  Forward-Thinking
                  <br />
                  <span className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue bg-clip-text text-transparent">
                    Founders Choose Us.
                  </span>
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: "Pixel-Perfect Execution",
                      desc: "We don't settle for 'good enough.' Every interaction is deliberate and intentional.",
                      iconColor: "text-neon-blue",
                      bgColor: "bg-neon-blue/10",
                    },
                    {
                      title: "Scalable Architecture",
                      desc: "Built with your next 10x in mind. Systems that grow as your business grows.",
                      iconColor: "text-neon-purple",
                      bgColor: "bg-neon-purple/10",
                    },
                    {
                      title: "Result-Oriented",
                      desc: "Every line of code is written to drive measurable ROI, not vanity metrics.",
                      iconColor: "text-neon-green",
                      bgColor: "bg-neon-green/10",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10",
                          item.bgColor,
                          item.iconColor,
                        )}
                      >
                        <Check size={16} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold mb-1 font-display">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              direction="left"
              className="flex flex-col items-center"
            >
              <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                {/* Spinning Stat Ring */}
                <div className="absolute inset-0 rounded-full border border-white/5" />
                <div className="absolute inset-[8px] rounded-full border border-neon-blue/20" />
                <div className="absolute inset-[24px] rounded-full border-dashed border-neon-blue/30 animate-spin-slow" />
                <div className="absolute inset-0 rounded-full bg-neon-blue/5 blur-2xl" />

                <div className="text-center z-10">
                  <div className="text-6xl font-bold font-display bg-gradient-to-b from-white to-neon-blue bg-clip-text text-transparent">
                    99%
                  </div>
                  <div className="text-[10px] font-black tracking-widest text-muted-foreground mt-1 uppercase font-display">
                    Satisfaction
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full mt-10">
                <Card3D className="p-5 text-center">
                  <div className="text-3xl font-bold font-display bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    10
                  </div>
                  <div className="text-[9px] text-muted-foreground mt-1 uppercase font-bold tracking-widest font-display">
                    Projects
                  </div>
                </Card3D>
                <Card3D className="p-5 text-center border-neon-green/20">
                  <div className="text-3xl font-bold font-display bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                    1yr
                  </div>
                  <div className="text-[9px] text-muted-foreground mt-1 uppercase font-bold tracking-widest font-display">
                    Track Record
                  </div>
                </Card3D>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 bg-surface/40 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label justify-center mb-4">Social Proof</p>
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              What Our{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <Card3D className="p-8 h-full">
                <div className="text-4xl font-serif text-neon-blue leading-none opacity-40 mb-6">
                  "
                </div>
                <p className="italic text-muted-foreground text-sm leading-relaxed mb-8">
                  Great service and I love the high-conversion website.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center font-bold font-display text-white italic text-[11px]">
                    CS
                  </div>
                  <div>
                    <p className="font-bold font-display text-sm">
                      Chandra Sekhar
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                      Advocate
                    </p>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card3D className="p-8 h-full border-neon-purple/20">
                <div className="text-4xl font-serif text-neon-purple leading-none opacity-40 mb-6">
                  "
                </div>
                <p className="italic text-muted-foreground text-sm leading-relaxed mb-8">
                  Service was good and I love the high-performing algo trading
                  automation.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon-purple flex items-center justify-center font-bold font-display text-white italic text-[11px]">
                    P
                  </div>
                  <div>
                    <p className="font-bold font-display text-sm">prasad</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                      Algotrade
                    </p>
                  </div>
                </div>
              </Card3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="relative p-12 md:p-16 text-center rounded-[2.5rem] overflow-hidden border border-neon-blue/20 bg-void/50 group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />

              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display leading-tight">
                Ready to Scale
                <br />
                <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                  Your Vision?
                </span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-[480px] mx-auto mb-10 leading-relaxed">
                Stop wasting time on manual tasks. Build the future with Dhritv
                today.
              </p>

              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-3.5 text-xs font-bold"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="https://wa.me/919032381330"
                  className="btn-secondary px-8 py-3.5 bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl font-display font-semibold hover:bg-white/10 flex items-center gap-3 text-xs"
                >
                  <MessageCircle size={16} className="text-neon-green" />
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
