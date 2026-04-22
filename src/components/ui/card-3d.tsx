'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Card3DProps {
	children: React.ReactNode;
	className?: string;
}

export function Card3D({ children, className }: Card3DProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const springConfig = { damping: 20, stiffness: 150 };
	const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
	const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);
	const scale = useSpring(isHovered ? 1.02 : 1, springConfig);

	function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height / 2;
		x.set((e.clientX - cx) / (rect.width / 2));
		y.set((e.clientY - cy) / (rect.height / 2));
	}

	function handleMouseLeave() {
		setIsHovered(false);
		x.set(0);
		y.set(0);
	}

	return (
		<motion.div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateX,
				rotateY,
				scale,
				transformStyle: 'preserve-3d',
			}}
			className={cn(
				'card-3d group cursor-pointer',
				'hover:border-neon-blue/40 hover:shadow-[0_24_64px_rgba(0,0,0,0.8),0_0_24px_rgba(41,121,255,0.4)]',
				className,
			)}
		>
			<div className="relative w-full h-full" style={{ transform: 'translateZ(20px)' }}>{children}</div>
			{/* Shine effect handled by CSS via Card3D class but can be enhanced here */}
			<div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
		</motion.div>
	);
}
