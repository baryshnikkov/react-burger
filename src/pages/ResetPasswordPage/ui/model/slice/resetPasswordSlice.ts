import { createSlice } from "@reduxjs/toolkit";
import { ResetPasswordSchema } from "../types/resetPassword";
import { fetchResetPassword } from "../services/fetchResetPassword";

const initialState: ResetPasswordSchema = {
	isLoading: false,
};

export const resetPasswordSlice = createSlice({
	name: "resetPasswordSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchResetPassword.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchResetPassword.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(fetchResetPassword.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: resetPasswordActions } = resetPasswordSlice;
export const { reducer: resetPasswordReducer } = resetPasswordSlice;
