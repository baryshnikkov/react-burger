import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "../types/userSchema";

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<UserSchema>) => {
			state.name = action.payload.name;
			state.mail = action.payload.mail;
			state.accessToken = action.payload.accessToken;
		},
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
