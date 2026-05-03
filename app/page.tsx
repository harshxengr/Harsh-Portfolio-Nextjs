"use client";

import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import Contact from "@/components/sections/contact";
import Projects from "@/components/sections/projects";
import ServicesCards from "@/components/sections/services-card";
import TechStack from "@/components/sections/tech-stack";

export default function Home() {
	return (
		<div className="relative w-full min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
			<Navbar />
			<main className="flex flex-col w-full">
				<Hero />
				<TechStack />
				<ServicesCards />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}
