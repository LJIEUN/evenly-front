export interface ProductResponse {
	content: Product[];
	pageNumber: number;
	totalPages: number;
	totalElements: number;
	first: boolean;
	last: boolean;
}

export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
	category: string;
	stock: number;
	status: string;
}
