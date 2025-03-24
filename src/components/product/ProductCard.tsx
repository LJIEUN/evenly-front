import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	if (!product) return null;

	return (
		<div className="flex flex-col gap-2 group cursor-pointer">
			<div className="relative w-full aspect-square overflow-hidden">
				<Image
					src={product.imageUrl}
					alt={product.name}
					fill
					className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex flex-col gap-1 px-1">
				<p className="text-sm">{product.name}</p>
				{product.status !== "AVAILABLE" && (
					<p className="text-xs text-[#555555]/50">SOLD OUT</p>
				)}
				<p className="text-sm">KRW ${product.price.toLocaleString()}</p>
			</div>
		</div>
	);
};

export default ProductCard;
