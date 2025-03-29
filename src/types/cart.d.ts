export interface CartResponse {
	cartItems: CartItem[];
	totalPrice: number;
}

export interface CartItem {
	cartItemId: number;
	productId: number;
	productName: string;
	imageUrl: string;
	price: number;
	quantity: number;
	totalPrice: number;
}
