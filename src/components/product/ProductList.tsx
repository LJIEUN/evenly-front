"use client";

import { getProducts } from "@/app/api/product/route";
import { Product } from "@/types/product";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

// const ITEMS_PER_PAGE = 4;

const ProductList = () => {
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		fetch();
	}, []);

	const fetch = async () => {
		const data = await getProducts();
		setProducts(data.content);
	};
	return (
		<div className="px-4 py-8">
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
				{products.map((product) => (
						<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
