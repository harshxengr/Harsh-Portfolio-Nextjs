"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { techStackData } from "@/assets/assets";

const TechStack = () => {
	return (
		<section
			id="skills"
			className="w-full py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h2 className="text-sm font-mono font-medium text-muted-foreground tracking-widest uppercase mb-4">
						Technical Expertise
					</h2>
					<h3 className="text-3xl md:text-5xl font-bold text-foreground tracking-tighter">
						The Engineering Ecosystem
					</h3>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{techStackData.map((category, index) => (
						<motion.div
							key={category.techType}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="flex flex-col gap-6"
						>
							<div className="pb-4 border-b border-border">
								<h4 className="text-lg font-semibold text-foreground">
									{category.techType}
								</h4>
							</div>
							<ul className="grid grid-cols-1 gap-3">
								{category.techData.map((tech) => (
									<li
										key={tech.imgName}
										className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
									>
										<div className="relative w-5 h-5 opacity-60 group-hover:opacity-100 grayscale transition-all">
											<Image
												src={tech.imgLink}
												alt={tech.imgName}
												fill
												className="object-contain"
											/>
										</div>
										<span className="text-base tracking-tight">
											{tech.imgName}
										</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechStack;
