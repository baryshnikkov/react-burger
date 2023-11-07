import { getApiProfileData } from "@/shared/const/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { userActions } from "../slice/userSlice";

interface ProfileDataAnswer {
	success: boolean;
	user: {
		email: string;
		name: string;
	};
}

interface ProfileDataProps {
	accessToken: string;
}

export const getProfileData = createAsyncThunk<
	ProfileDataAnswer,
	ProfileDataProps,
	{ rejectValue: string }
>("authByMail", async ({ accessToken }: ProfileDataProps, thunkAPI) => {
	try {
		const response = await axios.get<ProfileDataAnswer>(
			__API__ + getApiProfileData(),
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
			userActions.setAuthData({
				name: response.data.user.name,
				mail: response.data.user.email,
			})
		);

		return response.data;
	} catch (e) {
		console.log(e);
		return thunkAPI.rejectWithValue("error");
	}
});
