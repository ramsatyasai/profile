'use client';

import { ScrollReveal } from "@/components/scroll-reveal";
import { Card3D } from "@/components/ui/card-3d";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Quote, TrendingUp, Clock, DollarSign, Star } from "lucide-react";

const TESTIMONIALS = [
	{
		name: 'Sarah Chen',
		role: 'CTO, AeroStack Global',
		content: "Working with Dhritv was a game-changer for our data pipeline. They didn't just write code; they optimized our entire business logic. We've seen a 70% increase in processing speed and a significant drop in operational costs.",
		color: 'text-neon-blue',
		initials: 'SC',
		gradient: 'from-neon-blue/20 to-transparent'
	},
	{
		name: 'Mark Thompson',
		role: 'Founder, FinFlow Systems',
		content: "The level of technical depth the Dhritv team brings is unparalleled. They built our trading automation system from scratch, and the result exceeded all our performance benchmarks. Truly elite engineers.",
		color: 'text-neon-purple',
		initials: 'MT',
		gradient: 'from-neon-purple/20 to-transparent'
	},
	{
		name: 'James Dudley',
		role: 'CEO, HealthSync',
		content: "Dhritv delivered our MVP three weeks ahead of schedule without compromising on quality. Their communication is sharp and their execution is flawless. Best agency we've ever partnered with.",
		color: 'text-neon-green',
		initials: 'JD',
		gradient: 'from-neon-green/20 to-transparent'
	}
];

export function TestimonialsContent() {
	return (
		<div className="relative pb-20">
			{/* ═══ PAGE HEADER ═══ */}
			<header className="relative pt-24 pb-16 overflow-hidden border-b border-white/5 bg-void/30">
				<div className="bg-grid absolute inset-0 z-0 opacity-20" />
				<div className="orb orb-1 left-[-10%] top-[-10%] bg-neon-blue/20" />
				
				<div className="container mx-auto px-6 relative z-10 text-center">
					<ScrollReveal>
						<p className="section-label justify-center mb-4">Success Stories</p>
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display">
							Voice of <span className="gradient-text bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Partners.</span>
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground max-w-[580px] mx-auto leading-relaxed">
							Don't just take our word for it. Here's how we've helped our partners achieve measurable, high-impact results.
						</p>
					</ScrollReveal>
				</div>
			</header>

			{/* ═══ TESTIMONIALS GRID ═══ */}
			<section className="py-24">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{TESTIMONIALS.map((t, i) => (
							<ScrollReveal key={i} delay={i * 0.1} className="h-full">
								<Card3D className="p-10 h-full flex flex-col group relative overflow-hidden">
									<div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-700", t.gradient)} />
									<Quote className={cn("mb-8 w-10 h-10 opacity-30", t.color)} />
									<p className="text-muted-foreground text-lg leading-relaxed mb-10 flex-grow italic">
										"{t.content}"
									</p>
									<div className="flex items-center gap-4 relative z-10">
										<div className={cn("w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold font-display shadow-xl", 
											t.color.replace('text-', 'border-').replace('text-', 'bg-').replace('/20', '/10'))}>
											{t.initials}
										</div>
										<div>
											<h4 className="font-bold font-display text-white">{t.name}</h4>
											<p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{t.role}</p>
										</div>
									</div>
								</Card3D>
							</ScrollReveal>
						))}
					</div>
				</div>
			</section>

			{/* ═══ RESULTS BANNER ═══ */}
			<section className="py-20 bg-surface/50 border-y border-white/5 relative overflow-hidden">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
						<ScrollReveal direction="up" delay={0.1}>
							<div className="space-y-3 p-8 rounded-3xl hover:bg-white/[0.02] transition-colors">
								<TrendingUp className="w-8 h-8 mx-auto text-neon-blue mb-4" />
								<h2 className="text-5xl font-black font-display bg-gradient-to-b from-white to-neon-blue bg-clip-text text-transparent">250%</h2>
								<p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] font-display">Avg. Conversion Increase</p>
							</div>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.2}>
							<div className="space-y-3 p-8 rounded-3xl hover:bg-white/[0.02] transition-colors">
								<Clock className="w-8 h-8 mx-auto text-neon-purple mb-4" />
								<h2 className="text-5xl font-black font-display bg-gradient-to-b from-white to-neon-purple bg-clip-text text-transparent">10k+</h2>
								<p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] font-display">Hours Saved via Automation</p>
							</div>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={0.3}>
							<div className="space-y-3 p-8 rounded-3xl hover:bg-white/[0.02] transition-colors">
								<DollarSign className="w-8 h-8 mx-auto text-neon-green mb-4" />
								<h2 className="text-5xl font-black font-display bg-gradient-to-b from-white to-neon-green bg-clip-text text-transparent">$2M+</h2>
								<p className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] font-display">Revenue Generated</p>
							</div>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* ═══ FINAL CTA ═══ */}
			<section className="py-24">
				<div className="container mx-auto px-6">
					<ScrollReveal>
						<div className="relative text-center max-w-4xl mx-auto">
							<div className="absolute inset-0 -z-10 bg-neon-blue/10 blur-[100px] rounded-full opacity-40" />
							<h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
								Ready to be our next <br />
								<span className="gradient-text bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">success story?</span>
							</h2>
							<Link href="/contact" className="btn-primary px-12 py-5 text-lg shadow-[0_0_50px_rgba(41,121,255,0.3)]">
								Start Your Transformation
							</Link>
						</div>
					</ScrollReveal>
				</div>
			</section>
		</div>
	);
}
