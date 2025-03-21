import Link from "next/link";
import React from "react";

const Sidebar = () => {
	return (
		<aside className="w-40 pt-40 pl-8">
			<Link href="" className="text-[#555555] hover:text-[#555555]/70">
				<h6>new</h6>
			</Link>
			<Link href="" className="text-[#555555] hover:text-[#555555]/70">
				<h6>all</h6>
			</Link>
			<Link href="" className="text-[#555555] hover:text-[#555555]/70">
				<h6>outer</h6>
			</Link>
			<Link href="" className="text-[#555555] hover:text-[#555555]/70">
				<h6>tops</h6>
			</Link>
			<Link href="" className="text-[#555555] hover:text-[#555555]/70">
				<h6>bottom</h6>
			</Link>
		</aside>
	);
};

export default Sidebar;
