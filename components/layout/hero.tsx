"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
	return (
		<section
			id="home"
			className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-background border-b border-border"
		>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4px_4px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

			<div className="relative z-10 max-w-5xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<h2 className="text-sm md:text-base font-mono font-medium text-muted-foreground mb-6 tracking-widest uppercase">
						Full Stack Engineer
					</h2>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground mb-8 text-balance"
				>
					Harsh Saini
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
					className="text-xl md:text-3xl text-muted-foreground max-w-3xl leading-snug mb-12"
				>
					Designing and engineering scalable, enterprise-grade digital systems
					with over a year of implied expertise. Focused on performance,
					reliability, and architectural elegance.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
					className="flex flex-col sm:flex-row gap-5"
				>
					<Button
						asChild
						size="lg"
						className="rounded-none border-b-2 border-primary bg-transparent text-primary hover:bg-primary/5 px-0 h-auto py-2 text-lg font-medium transition-all"
					>
						<Link href="#projects" className="flex items-center gap-2">
							View Case Studies <ArrowRight className="size-5" />
						</Link>
					</Button>

				</motion.div>
			</div>

			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
				className="absolute bottom-0 left-0 h-[1px] bg-primary origin-left w-24 md:w-48 ml-6 md:ml-12 lg:ml-24"
			/>
		</section>
	);
};

export default Hero;
