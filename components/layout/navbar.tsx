"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const navbarLinks = [
	{ name: "Expertise", href: "#skills" },
	{ name: "Services", href: "#services" },
	{ name: "Case Studies", href: "#projects" },
];

const Navbar = () => {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useState(() => setMounted(true));

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() ?? 0;
		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.nav
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 lg:px-24 bg-background/80 backdrop-blur-md border-b border-border"
		>
			<Link
				href="#"
				className="text-lg font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity"
			>
				HS
			</Link>

			<div className="flex items-center gap-8">
				<div className="hidden md:flex items-center gap-6">
					{navbarLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
						>
							{link.name}
						</Link>
					))}
				</div>

				<div className="flex items-center gap-4">
					<Button
						asChild
						variant="default"
						size="sm"
						className="hidden sm:flex rounded-none h-9 px-4 text-xs uppercase tracking-widest font-bold bg-foreground text-background hover:bg-foreground/90"
					>
						<Link href="#contact">Contact</Link>
					</Button>

					{mounted && (
						<button
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 text-muted-foreground hover:text-foreground transition-colors"
							aria-label="Toggle Theme"
						>
							{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
						</button>
					)}
				</div>
			</div>
		</motion.nav>
	);
};

import { Button } from "../ui/button";

export default Navbar;
