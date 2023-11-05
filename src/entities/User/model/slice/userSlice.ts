import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema } from "../types/userSchema";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

const initialState: UserSchema = {
	isAuth: false,
	inited: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		initAuth: (state) => {
			const key = localStorage.getItem(USER_LOCALSTORAGE_KEY);
			if (key) {
				state.isAuth = true;
			}
			state.inited = true;
		},
		setAuthData: (state, action: PayloadAction<UserSchema>) => {
			state.name = action.payload.name;
			state.mail = action.payload.mail;
			state.accessToken = action.payload.accessToken;
		},
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
