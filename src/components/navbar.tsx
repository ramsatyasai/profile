'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
	{ name: 'Home', href: '/' },
	{ name: 'Services', href: '/services' },
	{ name: 'Portfolio', href: '/portfolio' },
	{ name: 'About', href: '/about' },
];

export function Navbar() {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const pathname = usePathname();

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 40);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				'fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center transition-all duration-300 border-b border-white/5 backdrop-blur-xl',
				isScrolled ? 'bg-void/90 border-neon-blue/20' : 'bg-transparent',
			)}
		>
			<div className="container mx-auto px-6 flex justify-between items-center">
				<Link href="/" className="text-xl font-display font-bold tracking-widest bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
					Dhritv
				</Link>

				{/* Desktop Links */}
				<ul className="hidden md:flex items-center gap-8">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={cn(
									'text-xs font-medium tracking-wider transition-colors relative py-1',
									pathname === link.href ? 'text-white after:w-full' : 'text-muted-foreground hover:text-white after:w-0',
									'after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-neon-cyan after:transition-all after:duration-300 hover:after:w-full',
								)}
							>
								{link.name}
							</Link>
						</li>
					))}
					<li>
						<Link
							href="/contact"
							className="btn-primary px-4 py-2 text-[11px] rounded-lg"
						>
							Book a Call
						</Link>
					</li>
				</ul>

				{/* Mobile Toggle */}
				<button
					className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="absolute top-[64px] left-0 right-0 bg-void/95 border-b border-white/5 p-4 md:hidden flex flex-col gap-2 animate-in slide-in-from-top duration-300 shadow-2xl">
					{NAV_LINKS.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								'text-base font-medium p-3 rounded-xl transition-all',
								pathname === link.href ? 'text-neon-cyan bg-white/5 shadow-inner' : 'text-muted-foreground hover:bg-white/[0.02]',
							)}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							{link.name}
						</Link>
					))}
					<Link
						href="/contact"
						className="btn-primary w-full mt-2 py-3 rounded-xl text-center text-sm font-bold"
						onClick={() => setIsMobileMenuOpen(false)}
					>
						Book a Call
					</Link>
				</div>
			)}
		</nav>
	);
}
