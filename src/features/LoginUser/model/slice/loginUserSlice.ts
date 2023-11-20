import { createSlice } from '@reduxjs/toolkit'

import { loginUser } from '../services/loginUser'
import { type LoginUserSchema } from '../types/loginUserSchema'

const initialState: LoginUserSchema = {
	isLoading: false,
}

export const loginUserSlice = createSlice({
	name: 'authUser',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(loginUser.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { actions: loginUserActions } = loginUserSlice
export const { reducer: loginUserReducer } = loginUserSlice
