"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const categories = [
	{ id: null, label: "all" },
	{ id: 1, label: "new" },
	{ id: 2, label: "lighting" },
	{ id: 3, label: "office" },
	{ id: 4, label: "kitchen" },
	{ id: 5, label: "home deco" },
];

const Sidebar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleClick = (id: number | null) => {
		const params = new URLSearchParams(searchParams.toString());

		if (id === null) {
			params.delete("category");
		} else {
			params.set("category", id.toString());
		}
		params.set("page", "1");
		router.push(`?${params.toString()}`);
	};
	return (
		<aside className="flex flex-col w-40 pt-40 pl-8">
			{categories.map((category) => (
				<button
					key={category.id}
					className="text-left text-[#555555] hover:text-[#555555]/70"
					onClick={() => handleClick(category.id)}
				>
					<h6>{category.label}</h6>
				</button>
			))}
		</aside>
	);
};

export default Sidebar;
