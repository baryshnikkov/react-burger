import { StateSchema } from "@/app/providers/StoreProvider";

export const getCurrentTabIngredient = (state: StateSchema) =>
	state.tabIngredients.currentTabIngredient;
