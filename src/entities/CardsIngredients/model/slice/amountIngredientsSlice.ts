import { createSlice } from "@reduxjs/toolkit";
import { AmountIngredientsSchema } from "../types/types";

const initialState: AmountIngredientsSchema = {
	amount: {},
};

export const amountIngredientsSlice = createSlice({
	name: "amountIngredients",
	initialState,
	reducers: {
		initAmountIngredients: (state, action) => {
			state.amount = action.payload;
		},
		plusAmountIngredient: (state, action) => {
			const currentAmountById = state.amount[action.payload];
			const currentAmountIngredients = state.amount;
			currentAmountIngredients[action.payload] = currentAmountById + 1;

			state.amount = currentAmountIngredients;
		},
		minusAmountIngredient: (state, action) => {
			const currentAmountById = state.amount[action.payload];
			const currentAmountIngredients = state.amount;
			currentAmountIngredients[action.payload] = currentAmountById - 1;

			state.amount = currentAmountIngredients;
		},
		clearAmountIngredients: (state) => {
			state.amount = {};
		},
	},
});

export const { actions: amountIngredientsActions } = amountIngredientsSlice;
export const { reducer: amountIngredientsReducer } = amountIngredientsSlice;
