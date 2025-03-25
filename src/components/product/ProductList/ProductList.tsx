"use client";

import ProductCard from "../ProductCard";
import Link from "next/link";
import useProductList from "./useProductList";

const ProductList = () => {
	const { products, isLoading, error } = useProductList();

	if (isLoading) return <p>Loading..</p>;
	if (error) return <p>{error.message}</p>;

	return (
		<div className="px-4 py-8">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
				{products.map((product) => (
					<Link key={product.id} href={`/product/${product.id}`}>
						<ProductCard key={product.id} product={product} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProductList;
