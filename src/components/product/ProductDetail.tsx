import { Product } from "@/types/product";
import Image from "next/image";
import React, { useState } from "react";
import BaseButton from "../common/Button/BaseButton";
import NumberInput from "../common/Input/NumberInput";

interface ProductDetailProps {
	product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
	const [quantity, setQuantity] = useState<number>(1);
	if (!product) return null;

	return (
		<div className="flex flex-col md:flex-row w-full gap-8">
			<div className="relative w-full max-w-xl aspect-[4/5]">
				<Image
					src={product.imageUrl}
					alt={product.name}
					fill
					sizes="100vw"
					className="object-cover"
					priority
				/>
			</div>
			<div className="flex flex-col gap-4 w-full md:w-100">
				<span className="text-2xl font-bold">{product.name}</span>

				<div className="flex flex-col pt-20 gap-4">
					<span className="text-2xl font-bold">
						KRW {product.price.toLocaleString()}
					</span>
					{product.status === "AVAILABLE" ? (
						<NumberInput
							value={quantity}
							onValueChange={setQuantity}
							max={product.stock}
						/>
					) : (
						<span>Sold Out</span>
					)}

					<div className="grid grid-cols-2 gap-2">
						<BaseButton
							style="border"
							size="xl"
							disabled={product.status !== "AVAILABLE"}
						>
							장바구니
						</BaseButton>
						<BaseButton
							size="xl"
							disabled={product.status !== "AVAILABLE"}
							onClick={onClick}
						>
							구매
						</BaseButton>
					</div>
				</div>
				<h6>{product.description}</h6>
			</div>
		</div>
	);
};

export default ProductDetail;
