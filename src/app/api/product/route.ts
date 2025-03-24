import { Product } from "@/types/product";
import { client } from "../client";

// const ITEM_COUNT = 12;
/**
 * 상품 리스트를 가져오는 API
 */
// export const getProducts = async (): // page: number = 1,
// // itemCount: number = ITEM_COUNT,
// // category: string = "all"
// Promise<Product[]> => {
// 	return client<Product[]>("/mock/products", {
// 		params: {},
// 	});
// };

// 하드 코딩 JSON
export const getProducts = async (): Promise<Product[]> => {
	return [
		{
			id: 1,
			name: "Apollo Portable Lamp-White opal glass",
			price: 150000,
			description: `
Size:
H21.8 x W12.5 x L12.5
Color:
White
Material:
Glass
Cord:
100 cm
Bulb:
LED G4
Dimmable:
Yes
Switch:
Touch step dimmer
IP:
44
Supply:
5V, 2A
      `,
			imageUrl:
				"https://www.hay.com/img_20240404083132/globalassets/inriver/integration/service/ae378-b508_apollo-portable-white_gb_1220x1220_brandvariant.jpg?w=600",
			category: "Lighting",
			stock: 10,
			status: "AVAILABLE",
		},
		{
			id: 2,
			name: "Barro Plate-Set of 2-Ø18-Dark blue",
			price: 35000,
			description: `
Color:
Dark blue
Size:
D18
      `,
			imageUrl:
				"https://www.hay.com/img_20230907111544/globalassets/inriver/integration/service/ac459-a668-ai60-02au_barro-plate-oe18-set-of-2-dark-blue_gb_1220x1220_brandvariant.jpg?w=600",
			category: "Kitchen",
			stock: 15,
			status: "AVAILABLE",
		},
		{
			id: 3,
			name: "Apollo Portable Lamp-White opal glass",
			price: 150000,
			description: `
Size:
H21.8 x W12.5 x L12.5
Color:
White
Material:
Glass
Cord:
100 cm
Bulb:
LED G4
Dimmable:
Yes
Switch:
Touch step dimmer
IP:
44
Supply:
5V, 2A
      `,
			imageUrl:
				"https://www.hay.com/img_20240404083132/globalassets/inriver/integration/service/ae378-b508_apollo-portable-white_gb_1220x1220_brandvariant.jpg?w=600",
			category: "Lighting",
			stock: 10,
			status: "AVAILABLE",
		},
		{
			id: 4,
			name: "Barro Plate-Set of 2-Ø18-Dark blue",
			price: 35000,
			description: `
Color:
Dark blue
Size:
D18
      `,
			imageUrl:
				"https://www.hay.com/img_20230907111544/globalassets/inriver/integration/service/ac459-a668-ai60-02au_barro-plate-oe18-set-of-2-dark-blue_gb_1220x1220_brandvariant.jpg?w=600",
			category: "Kitchen",
			stock: 15,
			status: "SOLD OUT",
		},
		{
			id: 5,
			name: "Apollo Portable Lamp-White opal glass",
			price: 150000,
			description: `
Size:
H21.8 x W12.5 x L12.5
Color:
White
Material:
Glass
Cord:
100 cm
Bulb:
LED G4
Dimmable:
Yes
Switch:
Touch step dimmer
IP:
44
Supply:
5V, 2A
      `,
			imageUrl:
				"https://www.hay.com/img_20240404083132/globalassets/inriver/integration/service/ae378-b508_apollo-portable-white_gb_1220x1220_brandvariant.jpg?w=600",
			category: "Lighting",
			stock: 10,
			status: "AVAILABLE",
		},
		{
			id: 6,
			name: "Barro Plate-Set of 2-Ø18-Dark blue",
			price: 35000,
			description: `
Color:
Dark blue
Size:
D18
      `,
			imageUrl:
				"https://www.hay.com/img_20230907111544/globalassets/inriver/integration/service/ac459-a668-ai60-02au_barro-plate-oe18-set-of-2-dark-blue_gb_1220x1220_brandvariant.jpg?w=600",
			category: "Kitchen",
			stock: 15,
			status: "AVAILABLE",
		},
	];
};
