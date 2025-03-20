import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="max-w-[120rem] w-full mx-auto h-[4rem] flex justify-between items-center p-4">
			<div>
				<Link href="/">
					<h1 className="text-2xl font-bold cursor-pointer">Evenly</h1>
				</Link>
			</div>
			<div className="flex items-start gap-4 py-3 ">
				<span>Cart</span>
				<Link href="/login" className="flex gap-2 px-4  cursor-pointer">
					<span className="text-link">로그인</span>
				</Link>
			</div>
		</header>
	);
};

export default Header;
