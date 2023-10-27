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
	},
});

export const { actions: orderActions } = orderSlice;
export const { reducer: orderReducer } = orderSlice;
