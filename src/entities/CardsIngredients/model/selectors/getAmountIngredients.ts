import { StateSchema } from "@/app/providers/StoreProvider";

export const getAmountIngredients = (state: StateSchema) =>
	state.amountIngredients.amount;
