import { Product } from "@/types/product";
import Image from "next/image";
import BaseButton from "../../common/Button/BaseButton";
import NumberInput from "../../common/Input/NumberInput";
import { formatPrice } from "@/utils/format";

interface ProductDetailProps {
	product: Product;
	quantity: number;
	setQuantity: (quantity: number) => void;
	isAvailable: boolean;
	onClickCart: () => void;
	onClickOrder: () => void;
	onClickAlarm: () => void;
}

const ProductDetail = ({
	product,
	quantity,
	setQuantity,
	isAvailable,
	onClickCart,
	onClickOrder,
	onClickAlarm,
}: ProductDetailProps) => {
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
			<div className="flex flex-col pt-2 gap-4 w-full md:max-w-lg">
				<h1 className="text-2xl font-bold">{product.name}</h1>

				<div className="flex flex-col pt-24 gap-4">
					<h2 className="text-2xl font-bold">{formatPrice(product.price)}</h2>

					{isAvailable ? (
						<NumberInput
							value={quantity}
							onValueChange={setQuantity}
							max={product.stock}
						/>
					) : (
						<span className="text-[#555555]/50">Sold Out</span>
					)}

					{isAvailable ? (
						<div className="grid grid-cols-2 gap-2">
							<BaseButton style="border" size="xl" onClick={onClickCart}>
								장바구니
							</BaseButton>
							<BaseButton size="xl" onClick={onClickOrder}>
								구매
							</BaseButton>
						</div>
					) : (
						<div className="grid">
							<BaseButton size="xl" onClick={onClickAlarm}>
								재입고알림
							</BaseButton>
						</div>
					)}
				</div>

				<p className="text-sm pt-24 text-gray-700 whitespace-pre-wrap">
					{product.description}
				</p>
			</div>
		</div>
	);
};

export default ProductDetail;
