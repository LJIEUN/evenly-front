export interface OrderItemRequest {
	productId: number;
	quantity: number;
}

export interface OrderResponse {
	orderId: number;
	orderItems: OrderItem[];
	totalPrice: number; // 상품 총합
	reducedPrice: number; // 할인액
	shipmentFee: number; // 배송비
	totalTotalPrice: number; // 최종 결제 금액
}

export interface OrderItem {
	orderItemId: number;
	productId: number;
	productName: string;
	imageUrl: string;
	price: number;
	quantity: number;
	totalPrice: number;
}
