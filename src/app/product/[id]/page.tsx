"use client";

import ProductDetail from "@/components/product/ProductDetail/ProductDetail";
import { getProductById } from "@/service/product";
import { Product } from "@/types/product";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetailPage = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<Product | null>(null);
	// const [error, setError] = useState(false);

	useEffect(() => {
		if (!id) return;
		fetchProduct();
	}, []);

	const fetchProduct = async () => {
		const data = await getProductById(Number(id));
		console.log(data);
		setProduct(data);
	};

	// if (error) return <div>존재하지 않는 상품</div>;
	if (!product) return <div>로딩중</div>;

	return (
		<div>
			<ProductDetail product={product} />
		</div>
	);
};

export default ProductDetailPage;
