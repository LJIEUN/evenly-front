"use client";

import ProductDetail from "@/components/product/ProductDetail/ProductDetail";
import useProductDetail from "@/components/product/ProductDetail/useProductDetail";
import { getProductById } from "@/service/product";
import { Product } from "@/types/product";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetailPage = () => {
	const { id } = useParams();
	const router = useRouter();
	const [product, setProduct] = useState<Product | null>(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!id) return;
		fetchProduct();
	}, []);

	const fetchProduct = async () => {
		try {
			const data = await getProductById(Number(id));
			setProduct(data);
		} catch (error) {
			console.log("ProductDetailPage fetchProduct error", error);
			setError(true);
		}
	};

	const {
		quantity,
		setQuantity,
		isAvailable,
		onClickCart,
		onClickOrder,
		onClickAlarm,
	} = useProductDetail({ product });

	if (error) return <div>존재하지 않는 상품</div>;
	if (!product) return <div>로딩중</div>;

	const handleCart = async () => {
		const success = await onClickCart();

		if (success) {
			const goToCart = window.confirm(
				"상품이 장바구니에 담겼어요. 장바구니로 이동할까요?"
			);
			if (goToCart) router.push("/cart");
		}
	};

	const handleOrder = async () => {
		const success = await onClickOrder();
		if (success) {
			router.push("/checkout");
		}
	};

	return (
		<div>
			<ProductDetail
				product={product}
				quantity={quantity}
				setQuantity={setQuantity}
				isAvailable={isAvailable}
				onClickCart={handleCart}
				onClickOrder={handleOrder}
				onClickAlarm={onClickAlarm}
			/>
		</div>
	);
};

export default ProductDetailPage;
