import React from "react";
import NumberInput from "../common/Input/NumberInput";
import BaseButton from "../common/Button/BaseButton";
import Image from "next/image";
import { CartItem } from "@/types/cart";
import { XIcon } from "lucide-react";
import { formatPrice } from "@/utils/format";

interface CartItemProps {
	product: CartItem;
	quantity: number;
	onQuantityChange: (quantity: number) => void;
	onRemove: () => void;
}

const CartItemCard = ({
	product,
	// quantity,
	onQuantityChange,
	onRemove,
}: CartItemProps) => {
	return (
		<div className="flex items-start justify-between w-full border-b border-0 border-[#afc8d9] p-4">
			{/* 이미지 영역 */}
			<div className="relative w-32 h-32 bg-gray-100">
				<Image
					src={product.imageUrl}
					alt={product.productName}
					fill
					className="object-cover"
				/>
			</div>

			{/* 정보 영역 */}
			<div className="flex flex-col flex-1 items-start px-4">
				<span className="text-md mb-2">{product.productName}</span>
				<div className="flex items-center gap-2">
					<NumberInput
						value={product.quantity}
						onValueChange={onQuantityChange}
						max={product.quantity}
					/>
					<BaseButton size="sm" onClick={onRemove}>
						<XIcon className="w-4 h-4" />
					</BaseButton>
				</div>
			</div>

			{/* 가격 */}
			<div className="text-md whitespace-nowrap">
				{formatPrice(product.price)}
			</div>
		</div>
	);
};
export default CartItemCard;
