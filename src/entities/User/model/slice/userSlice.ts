import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/userSchema";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { updateAccessToken } from "../services/updateAccessToken";

const initialState: UserSchema = {
	isAuth: false,
	inited: false,
	isLoading: false,
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
		setAuthData: (state, action: PayloadAction<User>) => {
			state.name = action.payload.name;
			state.mail = action.payload.mail;
			state.accessToken = action.payload.accessToken;
		},
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(updateAccessToken.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(updateAccessToken.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(updateAccessToken.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
