"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projectsData } from "@/assets/assets";

const Projects = () => {
	return (
		<section
			id="projects"
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
						Selected Work
					</h2>
					<h3 className="text-3xl md:text-5xl font-bold text-foreground tracking-tighter">
						Case Studies
					</h3>
				</motion.div>

				<div className="grid grid-cols-1 gap-0 border-t border-border">
					{projectsData.map((project, index) => (
						<motion.article
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-border hover:bg-muted/30 transition-colors px-4 -mx-4"
						>
							<div className="lg:col-span-3">
								<h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
									{project.title}
								</h4>
								<div className="flex gap-4 mt-4">
									<Link
										href={project.githubLink}
										target="_blank"
										className="text-muted-foreground hover:text-foreground transition-colors"
										aria-label="GitHub Repository"
									>
										<Github className="w-5 h-5" />
									</Link>
									{project.liveLink && (
										<Link
											href={project.liveLink}
											target="_blank"
											className="text-muted-foreground hover:text-foreground transition-colors"
											aria-label="Live Project"
										>
											<ArrowUpRight className="w-5 h-5" />
										</Link>
									)}
								</div>
							</div>

							<div className="lg:col-span-6">
								<p className="text-lg text-muted-foreground leading-relaxed">
									{project.description}
								</p>
							</div>

							<div className="lg:col-span-3">
								<div className="flex flex-wrap gap-2 justify-start lg:justify-end">
									{project.techUsed.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-xs font-medium border border-border rounded-full text-muted-foreground bg-background"
										>
											{typeof tech === "string" ? tech : "Tech"}
										</span>
									))}
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
