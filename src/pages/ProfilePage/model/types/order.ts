export interface OrderAnswer {
	createdAt: string;
	ingredients: string[];
	name: string;
	number: number;
	status: string;
	updatedAt: string;
	_id: string;
}

export interface OwnOrderDetailsProps {
	number: number;
	name: string;
	status: string;
	interval: string;
	time: string;
	gmt: number;
	price: number;
	isModal?: boolean;
	// TODO
	ingredientsList: any;
	ingredientsOrder: string[];
}
