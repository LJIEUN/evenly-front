"use client";

import React, { ReactNode, Suspense } from "react";
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
				{isHome && (
					<Suspense fallback={<div className="p-4">사이드바 로딩중...</div>}>
						<Sidebar />
					</Suspense>
				)}
				<main className="flex flex-col flex-1 overflow-hidden container mx-auto px-4 py-8">
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
