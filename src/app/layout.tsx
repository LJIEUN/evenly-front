import Layout from "@/components/layout/Layout";
import Providers from "@/providers";
import "@/styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Evenly",
	description: "Shopping with Envely",
	icons: [
		{ rel: "icon", url: "/favicon.svg" },
		{ rel: "icon", url: "/favicon256x256.png" }, // fallback
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body suppressHydrationWarning>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}
