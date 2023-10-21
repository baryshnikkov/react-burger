import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { tabIngredientsReducer } from "@/entities/TabIngredients";

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			tabIngredients: tabIngredientsReducer,
		},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
