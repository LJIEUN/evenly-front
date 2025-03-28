"use client";

import { Suspense } from "react";
import ProductList from "@/components/product/ProductList/ProductList";

export default function HomePage() {
	return (
		<Suspense fallback={<div>상품 리스트 로딩 중...</div>}>
			<ProductList />
		</Suspense>
	);
}
