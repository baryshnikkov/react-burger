interface OrderIngredient {
	_id: string;
	idKey: string;
	name: string;
	image: string;
	price: number;
	isBun: boolean;
}

export interface OrderSchema {
	isEmpty: boolean;
	bun?: OrderIngredient;
	toppings: OrderIngredient[];
	price: number;
	isLoading: boolean;
	error?: string;
	numberOrder?: number;
}
