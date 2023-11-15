import { createSlice } from '@reduxjs/toolkit'
import { fetchForgotPassword } from '../services/fetchForgotPassword'
import { type ForgotPasswordSchema } from '../types/forgotPassword'

const initialState: ForgotPasswordSchema = {
	isLoading: false,
}

export const forgotPasswordSlice = createSlice({
	name: 'forgotPasswordSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchForgotPassword.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchForgotPassword.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(fetchForgotPassword.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: forgotPasswordActions } = forgotPasswordSlice
export const { reducer: forgotPasswordReducer } = forgotPasswordSlice
