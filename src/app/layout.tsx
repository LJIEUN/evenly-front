import Layout from "@/components/layout/Layout";
import "@/styles/global.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body suppressHydrationWarning>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
