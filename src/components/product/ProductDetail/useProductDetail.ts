import { addProductToCart, orderProduct } from "@/service/product";
import { Product } from "@/types/product";
import { useCallback, useState } from "react";

interface UseProductDetailProps {
	product: Product;
}

const useProductDetail = ({ product }: UseProductDetailProps) => {
	const [quantity, setQuantity] = useState<number>(1);

	const isAvailable = product.status === "AVAILABLE";

	const onClickCart = useCallback(async (): Promise<boolean> => {
		try {
			await addProductToCart({ productId: product.id, quantity });
			alert("장바구니에 담기 완료!");
			return true;
		} catch (error) {
			alert("장바구니에 담기 실패ㅠㅠ");
			console.log("장바구니 담기 실패", error);
			return false;
		}
	}, [product.id, quantity]);

	const onClickOrder = useCallback(async (): Promise<boolean> => {
		try {
			await orderProduct({ productId: product.id, quantity });
			return true;
		} catch (error) {
			alert("구매에 실패했습니다.");
			console.log("결제로 이동 실패", error);
			return false;
		}
	}, [product.id, quantity]);

	const onClickAlarm = () => {
		alert("재입고 알림은 서비스 예정!");
	};

	return {
		quantity,
		setQuantity,
		isAvailable,
		onClickCart,
		onClickOrder,
		onClickAlarm,
	};
};

export default useProductDetail;
