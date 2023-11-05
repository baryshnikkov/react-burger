// import { userActions } from "@/entities/User";
// import { getApiProfileData } from "@/shared/const/api";
// import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// interface ProfileDataAnswer {
// 	success: boolean;
// 	user: {
// 		email: string;
// 		name: string;
// 	};
// }

// export const getProfileData = createAsyncThunk<
// 	ProfileDataAnswer,
// 	void,
// 	{ rejectValue: string }
// >("authByMail", async (_, thunkAPI) => {
// 	try {
// 		const response = await axios.get<ProfileDataAnswer>(
// 			__API__ + getApiProfileData(),
// 			{
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				data: JSON.stringify({
// 					token: localStorage.getItem(USER_LOCALSTORAGE_KEY),
// 				}),
// 			}
// 		);

// 		if (!response.data) {
// 			throw new Error();
// 		}

// 		localStorage.setItem(
// 			USER_LOCALSTORAGE_KEY,
// 			JSON.stringify(response.data.refreshToken)
// 		);
// 		thunkAPI.dispatch(
// 			userActions.setAuthData({
// 				name: response.data.user.name,
// 				mail: response.data.user.email,
// 				accessToken: response.data.accessToken,
// 			})
// 		);
// 		thunkAPI.dispatch(userActions.initAuth());

// 		return response.data;
// 	} catch (e) {
// 		console.log(e);
// 		return thunkAPI.rejectWithValue("error");
// 	}
// });
