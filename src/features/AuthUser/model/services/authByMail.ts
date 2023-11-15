import { userActions } from '@/entities/User'
import { getApiRegister } from '@/shared/const/api'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface AuthByMailProps {
	name: string;
	password: string;
	email: string;
}

interface AuthByMailAnswer {
	success: string;
	user: {
		email: string;
		name: string;
	};
	accessToken: string;
	refreshToken: string;
}

export const authByMail = createAsyncThunk<
AuthByMailAnswer,
AuthByMailProps,
{ rejectValue: string; }
>(
	'authByMail',
	async ({ name, password, email }: AuthByMailProps, thunkAPI) => {
		try {
			const response = await axios.post<AuthByMailAnswer>(
				__API__ + getApiRegister(),
				{
					name,
					password,
					email,
				},
			)

			if (!response.data) {
				throw new Error()
			}

			localStorage.setItem(
				USER_LOCALSTORAGE_KEY,
				JSON.stringify(response.data.refreshToken),
			)
			thunkAPI.dispatch(
				userActions.setAuthData({
					name: response.data.user.name,
					mail: response.data.user.email,
					accessToken: response.data.accessToken,
				}),
			)
			thunkAPI.dispatch(userActions.initAuth())

			return response.data
		} catch (e) {
			console.log(e)
			return thunkAPI.rejectWithValue('error')
		}
	},
)
