"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Card3D } from "@/components/ui/card-3d";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Layers,
  Clock,
  Zap,
  Cpu,
  Globe,
  Database,
  Server,
  Star,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative pb-20">
      {/* ═══ PAGE HEADER ═══ */}
      <header className="relative pt-24 pb-16 overflow-hidden border-b border-white/5 bg-void/30">
        <div className="bg-grid absolute inset-0 z-0 opacity-20" />
        <div className="orb orb-1 left-[-10%] top-[-10%] bg-neon-blue/20" />
        <div className="orb orb-2 right-[-10%] bottom-[-10%] bg-neon-purple/20" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <p className="section-label justify-center mb-4">Who We Are</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display">
              Built for{" "}
              <span className="gradient-text bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Scale.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[580px] mx-auto leading-relaxed">
              Nexus is a collective of engineers and designers obsessed with
              efficiency, automation, and measurable growth.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* ═══ OUR STORY ═══ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 blur-3xl opacity-20" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] max-w-md mx-auto">
                  <Image
                    src="/assets/vision.png"
                    alt="Nexus Vision"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <div>
                <p className="section-label mb-4">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display leading-tight">
                  Elite Engineering for
                  <br />
                  <span className="text-white">Modern Founders.</span>
                </h2>
                <p className="text-muted-foreground text-[16px] leading-relaxed mb-6">
                  Founded in 2025, Nexus was born from a simple observation:
                  most agencies prioritize delivery speed over ROI. We decided
                  to flip that script.
                </p>
                <p className="text-muted-foreground text-[16px] leading-relaxed mb-10">
                  Our mission is to give startups and small businesses the same
                  automation and technical excellence usually reserved for
                  Fortune 500 companies.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-4 text-neon-blue">
                      <Layers size={18} />
                    </div>
                    <h4 className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-2 font-display">
                      Our Mission
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Bridge the gap between complex problems and autonomous
                      solutions.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center mb-4 text-neon-purple">
                      <Clock size={18} />
                    </div>
                    <h4 className="text-xs font-bold text-neon-purple uppercase tracking-widest mb-2 font-display">
                      Our Vision
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      A world where every founder has the tools to scale without
                      friction.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="py-24 bg-surface/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label justify-center mb-4">Technology</p>
            <h2 className="text-4xl font-bold mb-4 font-display">
              Our <span className="hl">Power Stack</span>
            </h2>
            <p className="text-muted-foreground">
              We only use technologies that are proven, scalable, and fast.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend",
                color: "text-neon-blue",
                icon: <Globe size={14} />,
                tags: [
                  "React",
                  "Next.js",
                  "Typescript",
                  "Tailwind",
                  "Three.js",
                ],
              },
              {
                title: "Backend",
                color: "text-neon-purple",
                icon: <Zap size={14} />,
                tags: ["Node.js", "Python", "Go", "FastAPI", "PostgreSQL"],
              },
              {
                title: "AI & ML",
                color: "text-neon-cyan",
                icon: <Cpu size={14} />,
                tags: ["LLMs", "GPT-4", "LangChain", "TensorFlow", "PyTorch"],
              },
              {
                title: "Infrastructure",
                color: "text-neon-green",
                icon: <Server size={14} />,
                tags: ["AWS", "Docker", "Vercel", "Terraform", "CI/CD"],
              },
            ].map((stack, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-surface to-void border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <h4
                    className={cn(
                      "text-[13px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2 font-display",
                      stack.color,
                    )}
                  >
                    {stack.icon} {stack.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-muted-foreground hover:text-white hover:border-white/20 transition-all cursor-default font-display font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="section-label justify-center mb-4">
              What We Stand For
            </p>
            <h2 className="text-4xl font-bold font-display">
              Core <span className="hl">Values</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence First",
                icon: <Star size={20} />,
                color: "text-neon-blue",
                desc: 'We hold ourselves to the highest standard. "Good enough" is never acceptable — only exceptional work leaves our shop.',
              },
              {
                title: "Client Partnership",
                icon: <Users size={20} />,
                color: "text-neon-purple",
                desc: "We treat your business like our own. Open communication, transparent timelines, and shared ownership of outcomes.",
              },
              {
                title: "Speed & Precision",
                icon: <ShieldCheck size={20} />,
                color: "text-neon-cyan",
                desc: "Fast doesn't mean reckless. We move quickly without cutting corners — agile delivery with architectural integrity.",
              },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-10 rounded-[2rem] bg-gradient-to-br from-surface to-abyss border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1.5 duration-500 shadow-2xl">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-8 border border-white/10 bg-white/5",
                      value.color,
                    )}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-4 font-display">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
