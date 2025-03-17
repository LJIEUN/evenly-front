import React, { ReactNode } from "react";
import Header from "./Header/Header";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="h-screen flex flex-col overflow-hidden">
			<main className="flex flex-col flex-1 overflow-hidden container mx-auto px-4 py-8">
				{children}
			</main>
		</div>
	);
};

export default Layout;
