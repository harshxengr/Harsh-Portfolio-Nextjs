import { Dock, DockIcon, DockItem, DockLabel } from "../motion-primitives/dock";
import Link from "next/link";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const Contact = () => {
	const [copied, setCopied] = useState(false);
	const email = "singhharshsaini7@gmail.com";

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const socialLinks = [
		{
			title: "GitHub",
			icon: <Github />,
			href: "https://github.com/harshxengr",
		},
		{
			title: "Twitter",
			icon: <Twitter />,
			href: "https://x.com/harshxengr",
		},
		{
			title: "LinkedIn",
			icon: <Linkedin />,
			href: "https://www.linkedin.com/in/harshxengr/",
		},
		{
			title: "Mail",
			icon: <Mail />,
			href: "mailto:singhharshsaini7@gmail.com",
		},
	];

	return (
		<div className="w-full text-zinc-100 selection:bg-blue-500/30">
			<div className="fixed inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[140px]" />
			</div>

			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				id="contact"
				className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-24 sm:py-32"
			>
				<div className="text-center">
					<motion.span
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wider uppercase text-blue-400"
					>
						Available for opportunities
					</motion.span>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl"
					>
						Let&apos;s build something{" "}
						<span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
							Together
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed"
					>
						I&apos;m always open to discussing new projects, creative collaborations,
						or opportunities to bring your vision to life.
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3 }}
					className="mt-12 flex flex-col items-center gap-6"
				>
					<div className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 pr-6 transition-all hover:bg-white/8">
						<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
							<Mail size={24} />
						</div>
						<div className="flex flex-col">
							<span className="text-xs font-medium text-zinc-500 uppercase tracking-tight">
								Email Me
							</span>
							<span className="text-base font-semibold text-zinc-200">
								{email}
							</span>
						</div>
						<Button
							onClick={handleCopyEmail}
							className="ml-4 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
						>
							{copied ? (
								<Check size={16} className="text-green-400" />
							) : (
								<Copy size={16} />
							)}
						</Button>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, type: "spring", damping: 20 }}
					className="mt-24 sm:mt-32"
				>
					<Dock className="items-end pb-3">
						{socialLinks.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<DockItem className="aspect-square cursor-pointer rounded-full bg-card border border-border shadow-sm">
									<DockLabel>{item.title}</DockLabel>
									<DockIcon>{item.icon}</DockIcon>
								</DockItem>
							</Link>
						))}
					</Dock>
				</motion.div>
			</motion.section>
		</div>
	);
};

export default Contact;
