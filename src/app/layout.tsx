import Layout from "@/components/layout/Layout";
import Providers from "@/providers";
import "@/styles/global.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body suppressHydrationWarning>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}
