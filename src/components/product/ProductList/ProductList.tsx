"use client";

import ProductCard from "../ProductCard";
import Link from "next/link";
import useProductList from "./useProductList";
import { useSearchParams, useRouter } from "next/navigation";

const ProductList = () => {
	const { data, isLoading, error } = useProductList();
	const searchParams = useSearchParams();
	const router = useRouter();

	const pageParam = searchParams.get("page");
	const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

	const goToPage = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());
		router.push(`?${params.toString()}`);
	};

	if (isLoading) return <p>Loading..</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<div className="px-4 py-8">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
				{data.products.map((product) => (
					<Link key={product.id} href={`/product/${product.id}`}>
						<ProductCard key={product.id} product={product} />
					</Link>
				))}
			</div>
			<div className="mt-8 flex justify-center gap-2">
				{Array.from({ length: data.totalPages }, (_, index) => index + 1).map(
					(page) => (
						<button
							key={page}
							onClick={() => goToPage(page)}
							className={`px-3 py-1 border rounded ${
								page === currentPage
									? "bg-[#afc8d9] text-white"
									: "text-[#afc8d9] border-[#afc8d9] hover:bg-gray-100"
							}`}
						>
							{page}
						</button>
					)
				)}
			</div>
		</div>
	);
};

export default ProductList;
