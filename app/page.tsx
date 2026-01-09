"use client";

import { useRef } from "react";
import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import Contact from "@/components/sections/contact";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/tech-stack";

export default function Home() {
	const navRef = useRef(null);

	return (
		<div className="relative w-full">
			<Hero />

			<div className="sticky top-0 z-50 m-4" ref={navRef}>
				<Navbar />
			</div>

			<div className="relative px-6 md:px-8 lg:px-12 flex flex-col gap-4 md:gap-8 lg:gap-12 justify-between">
				<TechStack />
				<Projects />
				<Contact />
			</div>

			<Footer />
		</div>
	);
}
