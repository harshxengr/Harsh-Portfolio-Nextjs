import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/shared/theme-provider";
import { SmoothScroll } from "@/components/shared/smooth-scroll";

export const metadata: Metadata = {
	title: "Harsh - Portfolio",
	description: "Full Stack Engineer & Architect Portfolio",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<body className={`antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative w-full min-h-screen">
						<SmoothScroll>{children}</SmoothScroll>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
