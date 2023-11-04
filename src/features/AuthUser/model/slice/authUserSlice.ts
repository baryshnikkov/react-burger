import { createSlice } from "@reduxjs/toolkit";
import { AuthUserSchema } from "../types/authUserSchema";
import { authByMail } from "../services/authByMail";

const initialState: AuthUserSchema = {
	isLoading: false,
};

export const authUserSlice = createSlice({
	name: "authUser",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(authByMail.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(authByMail.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(authByMail.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: authUserActions } = authUserSlice;
export const { reducer: authUserReducer } = authUserSlice;
