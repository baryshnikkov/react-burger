import { getApiOrders } from "@/shared/const/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { orderActions } from "../slice/orderSlice";
import { amountIngredientsActions } from "@/entities/CardsIngredients";

interface OrderProps {
	ingredients: string[];
	accessToken: string;
}

interface OrderAnswer {
	name: string;
	order: { number: number };
	success: boolean;
}

export const setOrder = createAsyncThunk<
	OrderAnswer,
	OrderProps,
	{ rejectValue: string }
>("setOrder", async ({ ingredients, accessToken }: OrderProps, thunkAPI) => {
	try {
		const response = await axios.post<OrderAnswer>(
			__API__ + getApiOrders(),
			{ ingredients },
			{
				headers: {
					"Content-Type": "application/json",
					authorization: accessToken,
				},
			}
		);

		if (!response.data) {
			throw new Error();
		}

		thunkAPI.dispatch(
			orderActions.setNumberOrder(response.data.order.number)
		);
		thunkAPI.dispatch(orderActions.clearIngredients());
		thunkAPI.dispatch(orderActions.clearPrice());
		thunkAPI.dispatch(amountIngredientsActions.clearAmountIngredients());

		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue("error");
	}
});
