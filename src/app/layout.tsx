import Layout from "./components/layout/Layout";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
