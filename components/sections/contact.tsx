import Link from "next/link";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, Copy, Check, ArrowUpRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Contact = () => {
	const [copied, setCopied] = useState(false);
	const [time, setTime] = useState("");

	useEffect(() => {
		const updateTime = () => {
			const now = new Date();
			setTime(now.toLocaleTimeString("en-US", {
				hour: "2-digit",
				minute: "2-digit",
				hour12: true,
				timeZone: "Asia/Kolkata"
			}));
		};
		updateTime();
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	}, []);
	const email = "singhharshsaini7@gmail.com";

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const socialLinks = [
		{
			title: "GitHub",
			username: "@harshxengr",
			icon: <Github className="h-6 w-6" />,
			href: "https://github.com/harshxengr",
			color: "hover:border-zinc-700 hover:bg-zinc-950/30",
		},
		{
			title: "Twitter",
			username: "@harshxengr",
			icon: <Twitter className="h-6 w-6" />,
			href: "https://x.com/harshxengr",
			color: "hover:border-blue-500/50 hover:bg-blue-950/30",
		},
		{
			title: "LinkedIn",
			username: "Harsh Saini",
			icon: <Linkedin className="h-6 w-6" />,
			href: "https://www.linkedin.com/in/harshxengr/",
			color: "hover:border-blue-700/50 hover:bg-blue-900/30",
		},
	];

	return (
		<section id="contact" className="relative w-full py-24 px-6 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 max-w-5xl mx-auto">
				{/* Header */}
				<div className="flex flex-col items-center text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
					>
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
						</span>
						Available for opportunities
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-4xl md:text-6xl font-bold text-foreground tracking-tight"
					>
						Let's work <span className="text-zinc-500">together.</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="mt-4 text-zinc-400 max-w-lg text-lg"
					>
						Have a project in mind? Let's turn your ideas into reality.
					</motion.p>
				</div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
					{/* Email Card - Large */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-card/50 border border-border/50 p-8 transition-all duration-500 hover:border-border hover:bg-card/80"
					>
						<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

						<div className="relative z-10 flex flex-col justify-between h-full gap-8">
							<div className="flex items-start justify-between">
								<div className="p-3 rounded-2xl bg-muted/50 text-foreground group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors duration-300">
									<Mail className="h-6 w-6" />
								</div>
								<button
									onClick={handleCopyEmail}
									className="group/btn flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-all active:scale-95"
								>
									<span className="text-sm font-medium">{copied ? "Copied!" : "Copy Email"}</span>
									{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
								</button>
							</div>

							<div>
								<h3 className="text-muted-foreground font-medium mb-1">Drop me a line</h3>
								<a href={`mailto:${email}`} className="text-xl sm:text-2xl font-semibold text-card-foreground tracking-tight hover:text-blue-400 transition-colors break-all">
									{email}
								</a>
							</div>
						</div>
					</motion.div>

					{/* Social Cards */}
					{socialLinks.map((link, index) => (
						<motion.div
							key={link.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 + index * 0.1 }}
						>
							<Link
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(
									"group relative flex flex-col justify-between h-full p-6 rounded-3xl bg-card/50 border border-border/50 transition-all duration-300 hover:bg-card/80",
									link.color
								)}
							>
								<div className="flex items-start justify-between mb-8">
									<div className="p-3 rounded-2xl bg-muted/50 text-muted-foreground group-hover:bg-muted group-hover:text-foreground transition-colors">
										{link.icon}
									</div>
									<ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
								</div>
								<div>
									<h3 className="text-card-foreground font-medium">{link.title}</h3>
									<p className="text-muted-foreground text-sm">{link.username}</p>
								</div>
							</Link>
						</motion.div>
					))}

					{/* Location/Time Card */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.7 }}
						className="relative group overflow-hidden rounded-3xl bg-card/50 border border-border/50 p-6 transition-all duration-500 hover:border-border hover:bg-card/80"
					>
						<div className="flex flex-col justify-between h-full gap-8">
							<div className="flex items-start justify-between">
								<div className="p-3 rounded-2xl bg-muted/50 text-muted-foreground group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
									<MapPin className="h-6 w-6" />
								</div>
								<div className="flex items-center gap-2">
									<span className="relative flex h-2 w-2">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
										<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
									</span>
								</div>
							</div>
							<div>
								<h3 className="text-card-foreground font-medium">New Delhi, India</h3>
								<p className="text-2xl font-semibold text-muted-foreground tabular-nums tracking-tight">
									{time}
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
