"use client";

import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import { usePathname } from "next/navigation";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const pathname = usePathname();
	const isHome = pathname === "/";

	return (
		<div className="h-screen flex flex-col overflow-hidden">
			<Header />
			<div className="flex flex-1 overflow-hidden">
				{isHome && <Sidebar />}
				<main className="flex flex-col flex-1 overflow-hidden container mx-auto px-4 py-8">
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
