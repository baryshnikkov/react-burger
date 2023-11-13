interface OrderIngredient {
	_id: string;
	idKey: string;
	name: string;
	image: string;
	price: number;
	isBun: boolean;
}

export interface OrderStatistic {
	total: number;
	totalToday: number;
	isReady: string[];
	isInProcess: string[];
}

export interface OrderSchema {
	isEmpty: boolean;
	bun?: OrderIngredient;
	toppings: OrderIngredient[];
	price: number;
	isLoading: boolean;
	error?: string;
	numberOrder?: number;
	statistic?: OrderStatistic;
}
export interface OrderAnswer {
	createdAt: string;
	ingredients: string[];
	name: string;
	number: number;
	status: string;
	updatedAt: string;
	_id: string;
}
