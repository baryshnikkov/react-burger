import { createSlice } from "@reduxjs/toolkit";
import { OrderSchema } from "../types/order";

const initialState: OrderSchema = {
	toppings: [],
	isEmpty: true,
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		addIngredient: (state, action) => {
			if (action.payload.isBun) {
				state.bun = action.payload;
			} else {
				state.toppings = [action.payload, ...state.toppings];
			}

			if (state.isEmpty) {
				state.isEmpty = false;
			}
		},
		deleteIngredient: (state, action) => {
			const idToRemove = action.payload;
			const array = state.toppings;

			const index = state.toppings.findIndex(
				(obj) => obj._id === idToRemove
			);

			if (index !== -1) {
				array.splice(index, 1);
			}

			state.toppings = array;
		},
		updateToppings: (state, action) => {
			state.toppings = action.payload;
		},
	},
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
