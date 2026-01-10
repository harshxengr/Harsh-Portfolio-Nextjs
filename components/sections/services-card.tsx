"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
	{
		id: "01",
		title: "Frontend Architecture",
		description:
			"Building responsive, accessible, and performant user interfaces using modern React patterns and state management strategies.",
	},
	{
		id: "02",
		title: "Backend Systems",
		description:
			"Designing robust APIs and microservices. Focusing on scalability, database optimization, and secure authentication flows.",
	},
	{
		id: "03",
		title: "Cloud Infrastructure",
		description:
			"Orchestrating containerized deployments via Docker and Kubernetes. Implementing CICD pipelines for automated delivery.",
	},
	{
		id: "04",
		title: "Technical Strategy",
		description:
			"Translating business requirements into technical roadmaps. Selecting the right tools and patterns for long-term success.",
	},
];

const ServicesCards = () => {
	return (
		<section
			id="services"
			className="w-full py-24 px-6 md:px-12 lg:px-24 border-b border-border bg-background"
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
				>
					<div>
						<h2 className="text-sm font-mono font-medium text-muted-foreground tracking-widest uppercase mb-4">
							Capabilities
						</h2>
						<h3 className="text-3xl md:text-5xl font-bold text-foreground tracking-tighter">
							Strategic Engineering
						</h3>
					</div>
					<p className="max-w-md text-muted-foreground text-lg leading-relaxed">
						delivering value through technical excellence and architectural
						foresight.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group p-6 border border-border hover:border-foreground/20 bg-card transition-colors flex flex-col justify-between min-h-[280px]"
						>
							<div>
								<span className="text-xs font-mono text-muted-foreground mb-6 block">
									{service.id}
								</span>
								<h4 className="text-xl font-bold text-foreground mb-4 group-hover:underline decoration-1 underline-offset-4">
									{service.title}
								</h4>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{service.description}
								</p>
							</div>
							<div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
								<ArrowUpRight className="w-5 h-5 text-foreground" />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesCards;
