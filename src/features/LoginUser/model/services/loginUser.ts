import { userActions } from "@/entities/User";
import { getApiLogin, getApiRegister } from "@/shared/const/api";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface LoginUserProps {
	password: string;
	email: string;
}

interface LoginUserAnswer {
	success: boolean;
	accessToken: string;
	refreshToken: string;
	user: {
		email: string;
		name: string;
	};
}

export const loginUser = createAsyncThunk<
	LoginUserAnswer,
	LoginUserProps,
	{ rejectValue: string }
>("loginUser", async ({ password, email }: LoginUserProps, thunkAPI) => {
	try {
		const response = await axios.post<LoginUserAnswer>(
			__API__ + getApiLogin(),
			{
				headers: {
					"Content-Type": "application/json",
				},

				email,
				password,
			}
		);

		if (!response.data) {
			throw new Error();
		}

		localStorage.setItem(
			USER_LOCALSTORAGE_KEY,
			JSON.stringify(response.data.refreshToken)
		);
		thunkAPI.dispatch(
			userActions.setAuthData({
				name: response.data.user.name,
				mail: response.data.user.email,
				accessToken: response.data.accessToken,
			})
		);
		thunkAPI.dispatch(userActions.initAuth());

		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue("error");
	}
});
