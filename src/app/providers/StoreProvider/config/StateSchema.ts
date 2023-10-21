import { TabIngredientsSchema } from "@/entities/TabIngredients";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
	tabIngredients: TabIngredientsSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	state: StateSchema;
}
