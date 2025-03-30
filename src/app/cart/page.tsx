"use client";

import CartItemCard from "@/components/cart/CartItemCard";
import BaseButton from "@/components/common/Button/BaseButton";
import { getCartItems } from "@/service/cart";
import { createOrder } from "@/service/order";
import { CartItem, CartResponse } from "@/types/cart";
import { OrderItemRequest } from "@/types/order";
import { formatPrice } from "@/utils/format";
import React, { useEffect, useState } from "react";

const CartPage = () => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [quantities, setQuantities] = useState<{ [productId: number]: number }>(
		{}
	);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		fetchCart();
	}, []);

	const fetchCart = async () => {
		const data: CartResponse = await getCartItems();
		setCartItems(data.cartItems);
		setTotalPrice(data.totalPrice);

		const initialQuantity: { [productId: number]: number } = {};
		data.cartItems.forEach((item) => {
			initialQuantity[item.productId] = item.quantity;
		});
		setQuantities(initialQuantity);
	};

	const handleQuantityChange = (id: number, value: number) => {
		console.log(id, value);
	};

	const handleRemove = async (id: number) => {
		console.log(id);
	};

	const handleOrder = async () => {
		const orderItems: OrderItemRequest[] = cartItems.map((item) => ({
			productId: item.productId,
			quantity: item.quantity,
		}));
		try {
			const response = await createOrder(orderItems);
			console.log(response);
			alert("주문 완료");
		} catch (error) {
			if (error instanceof Error) {
				console.log(error);
				alert(`주문 실패: ${error.message}`);
			}
		}
	};

	return (
		<div className="max-w-5xl mx-auto p-4 space-y-6">
			<h1 className="text-2xl font-bold">장바구니</h1>

			{cartItems.length === 0 ? (
				<p>장바구니에 담긴 상품이 없습니다.</p>
			) : (
				<div className="flex gap-16">
					<div className="space-y-4">
						{cartItems.map((product) => (
							<CartItemCard
								key={product.cartItemId}
								product={product}
								quantity={quantities[product.cartItemId] || 1}
								onQuantityChange={(value) =>
									handleQuantityChange(product.cartItemId, value)
								}
								onRemove={() => handleRemove(product.cartItemId)}
							/>
						))}
					</div>

					<div>
						<div className="flex justify-between items-center border-t pt-4 not-last-of-type:gap-12">
							<span className="text-md">Total</span>
							<span className="text-xl font-semibold">
								{formatPrice(totalPrice)}
							</span>
						</div>
						<div className="text-right pt-8">
							<BaseButton size="xl" onClick={handleOrder}>
								구매
							</BaseButton>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartPage;
