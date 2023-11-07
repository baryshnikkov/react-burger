import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/userSchema";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { updateAccessToken } from "../services/updateAccessToken";
import { logoutUser } from "../services/logoutUser";
import { setProfileData } from "../services/setProfileData";
import { getProfileData } from "../services/getProfileData";

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
			} else {
				state.isAuth = false;
			}
			state.inited = true;
		},
		setAuthData: (state, action: PayloadAction<User>) => {
			state.name = action.payload.name;
			state.mail = action.payload.mail;

			if (action.payload.accessToken) {
				state.accessToken = action.payload.accessToken;
			}
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
			})
			.addCase(logoutUser.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.isLoading = false;
				state.accessToken = undefined;
				state.name = undefined;
				state.mail = undefined;
			})
			.addCase(logoutUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(getProfileData.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(getProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(setProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(setProfileData.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(setProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
