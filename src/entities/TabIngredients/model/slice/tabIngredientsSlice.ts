import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
	TabIngredientVariants,
	TabIngredientsSchema,
} from "../types/tabIngredients";

const initialState: TabIngredientsSchema = {
	currentTabIngredient: "buns",
};

export const tabIngredientsSlice = createSlice({
	name: "tabIngredients",
	initialState,
	reducers: {
		setCurrentTabIngredient: (
			state,
			{ payload }: PayloadAction<TabIngredientVariants>
		) => {
			state.currentTabIngredient = payload;
		},
	},
});

export const { actions: tabIngredientsActions } = tabIngredientsSlice;
export const { reducer: tabIngredientsReducer } = tabIngredientsSlice;
