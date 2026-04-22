'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface ScrollRevealProps {
	children: React.ReactNode;
	className?: string;
	direction?: 'up' | 'down' | 'left' | 'right';
	delay?: number;
}

export function ScrollReveal({
	children,
	className,
	direction = 'up',
	delay = 0,
}: ScrollRevealProps) {
	const variants: Variants = {
		hidden: {
			opacity: 0,
			y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
			x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut" as any,
				delay: delay,
			},
		},
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.1 }}
			variants={variants}
			className={className}
		>
			{children}
		</motion.div>
	);
}
