import aws from "./tech-stack-icons/aws.png";
import bun from "./tech-stack-icons/Bun.svg";
import docker from "./tech-stack-icons/Docker.png";
import express from "./tech-stack-icons/express.png";
import framer from "./tech-stack-icons/framer.png";
import gitHubActions from "./tech-stack-icons/GitHub-Actions.png";
import javascript from "./tech-stack-icons/javascript.png";
import kubernetes from "./tech-stack-icons/Kubernetes.svg";
import mongodb from "./tech-stack-icons/mongodb.png";
import mongoose from "./tech-stack-icons/mongoose.png";
import next from "./tech-stack-icons/nextjs.png";
import node from "./tech-stack-icons/node.png";
import postgresql from "./tech-stack-icons/postgresql.png";
import prisma from "./tech-stack-icons/prisma.png";
import python from "./tech-stack-icons/python.png";
import react from "./tech-stack-icons/react.svg";
import shadcn from "./tech-stack-icons/shadcn.svg";
import tailwindcss from "./tech-stack-icons/tailwindcss.png";
import turborepo from "./tech-stack-icons/turborepo.svg";
import typescript from "./tech-stack-icons/typescript.png";

export const tech_stack_icons = {
	mongoose,
	postgresql,
	turborepo,
	next,
	prisma,
	framer,
	shadcn,
	express,
	javascript,
	python,
	react,
	tailwindcss,
	typescript,
	node,
	mongodb,
	docker,
	aws,
	kubernetes,
	gitHubActions,
	bun,
};

export const techStackData = [
	{
		techType: "Languages",
		techData: [
			{ imgLink: tech_stack_icons.javascript, imgName: "JavaScript" },
			{ imgLink: tech_stack_icons.typescript, imgName: "TypeScript" },
			{ imgLink: tech_stack_icons.python, imgName: "Python" },
		],
	},
	{
		techType: "Libraries & Frameworks",
		techData: [
			{ imgLink: tech_stack_icons.react, imgName: "ReactJS" },
			{ imgLink: tech_stack_icons.node, imgName: "NodeJS" },
			{ imgLink: tech_stack_icons.express, imgName: "ExpressJS" },
			{ imgLink: tech_stack_icons.next, imgName: "NextJS" },
			{ imgLink: tech_stack_icons.bun, imgName: "Bun" },
			{ imgLink: tech_stack_icons.tailwindcss, imgName: "TailwindCSS" },
			{ imgLink: tech_stack_icons.shadcn, imgName: "Shadcn/ui" },
			{ imgLink: tech_stack_icons.framer, imgName: "Framer" },
			{ imgLink: tech_stack_icons.turborepo, imgName: "Turborepo" },
		],
	},
	{
		techType: "Databases & Infrastructure",
		techData: [
			{ imgLink: tech_stack_icons.mongodb, imgName: "MongoDB" },
			{ imgLink: tech_stack_icons.postgresql, imgName: "PostgreSQL" },
			{ imgLink: tech_stack_icons.prisma, imgName: "Prisma" },
			{ imgLink: tech_stack_icons.aws, imgName: "AWS" },
			{ imgLink: tech_stack_icons.docker, imgName: "Docker" },
			{ imgLink: tech_stack_icons.kubernetes, imgName: "Kubernetes" },
		],
	},
];

export const projectsData = [
	{
		title: "ExpenseHero",
		description:
			"Enterprise-grade financial analytics platform featuring real-time budget tracking, predictive modeling, and granular reporting dashboards. Architected for scalability and data integrity.",
		techUsed: ["TypeScript", "NextJS", "NodeJS", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn/ui", "BetterAuth"],
		githubLink: "https://github.com/harshxengr/Expense-Hero",
		liveLink: "https://expense-hero-harsh.vercel.app/",
	},
	{
		title: "PixelPay",
		description:
			"Secure digital payments gateway supporting multi-currency transactions, fraud detection, and seamless third-party integrations. Built with a focus on security compliance and low-latency processing.",
		techUsed: ["TypeScript", "NextJS", "NodeJS", "PostgreSQL", "Prisma", "TailwindCSS", "Shadcn/ui", "TurboRepo", "ExpressJS"],
		githubLink: "https://github.com/harshxengr/PixelPay",
		liveLink: "",
	},
];
