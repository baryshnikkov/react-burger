import { TabIngredientsSchema } from "@/entities/TabIngredients";

export interface StateSchema {
	tabIngredients: TabIngredientsSchema;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	state: StateSchema;
}
