"use client";

import React, { useMemo } from "react";

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({
	totalPages,
	currentPage,
	onPageChange,
}: PaginationProps) => {
	const pageList = useMemo(() => {
		return Array.from({ length: totalPages }, (_, index) => index + 1);
	}, [totalPages]);

	return (
		<div className="mt-8 flex justify-center gap-2">
			{pageList.map((page) => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					className={`px-3 py-1 border rounded ${
						page === currentPage
							? "bg-[#afc8d9] text-white"
							: "text-[#afc8d9] border-[#afc8d9] hover:bg-gray-100"
					}`}
				>
					{page}
				</button>
			))}
		</div>
	);
};

export default Pagination;
