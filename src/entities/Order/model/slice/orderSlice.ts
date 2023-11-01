import { createSlice } from "@reduxjs/toolkit";
import { OrderSchema } from "../types/order";

const initialState: OrderSchema = {
	toppings: [],
	isEmpty: true,
	price: 0,
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		addIngredient: (state, action) => {
			if (action.payload.isBun) {
				if (state.bun?.price) {
					state.price = state.price - state.bun?.price * 2;
				}
				state.price = state.price + action.payload.price * 2;

				state.bun = action.payload;
			} else {
				state.price = state.price + action.payload.price;

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

			state.price = state.price - array[index].price;

			if (index !== -1) {
				array.splice(index, 1);
			}

			state.toppings = array;

			if (!state.isEmpty && !state.toppings.length && !state.bun) {
				state.isEmpty = true;
			}
		},
		updateToppings: (state, action) => {
			state.toppings = action.payload;
		},
	},
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
