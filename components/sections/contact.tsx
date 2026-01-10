"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const Contact = () => {
	const [copied, setCopied] = useState(false);
	const email = "singhharshsaini7@gmail.com";

	const handleCopy = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section
			id="contact"
			className="w-full py-24 px-6 md:px-12 lg:px-24 bg-background"
		>
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-sm font-mono font-medium text-muted-foreground tracking-widest uppercase mb-4">
						Contact
					</h2>
					<h3 className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter mb-8 max-w-lg">
						Let&apos;s build something together.
					</h3>
					<p className="text-xl text-muted-foreground leading-relaxed max-w-md">
						Currently available for full stack engineering & devops roles.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="flex flex-col justify-between"
				>
					<div className="space-y-8">
						<div>
							<h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
								Email
							</h4>
							<div className="flex items-center gap-4 group cursor-pointer" onClick={handleCopy}>
								<span className="text-2xl md:text-3xl font-medium text-foreground hover:underline decoration-1 underline-offset-4">
									{email}
								</span>
								<button
									className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground"
									aria-label="Copy Email"
								>
									{copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
								</button>
							</div>
						</div>

						<div>
							<h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
								Socials
							</h4>
							<div className="flex gap-6">
								{[
									{ name: "GitHub", href: "https://github.com/harshxengr" },
									{ name: "LinkedIn", href: "https://www.linkedin.com/in/harshxengr/" },
									{ name: "Twitter", href: "https://x.com/harshxengr" },
								].map((social) => (
									<Link
										key={social.name}
										href={social.href}
										target="_blank"
										className="text-lg text-foreground hover:text-muted-foreground transition-colors flex items-center gap-1"
									>
										{social.name}
										<ArrowUpRight className="w-4 h-4" />
									</Link>
								))}
							</div>
						</div>
					</div>

					<div className="mt-16 pt-8 border-t border-border">
						<p className="text-sm text-muted-foreground">
							© {new Date().getFullYear()} Harsh Saini. Engineering & Automation.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
