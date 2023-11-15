import { userActions } from '@/entities/User'
import { getApiToken } from '@/shared/const/api'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface AccessTokenAnswer {
	success: boolean;
	accessToken: string;
	refreshToken: string;
}

interface AccessTokenProps {
	token: string;
}

export const updateAccessToken = createAsyncThunk<
AccessTokenAnswer,
AccessTokenProps,
{ rejectValue: string; }
>('authByMail', async ({ token }: AccessTokenProps, thunkAPI) => {
	try {
		const response = await axios.post<AccessTokenAnswer>(
			__API__ + getApiToken(),
			{
				headers: {
					'Content-Type': 'application/json',
				},

				token,
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
			userActions.setAccessToken(response.data.accessToken),
		)
		thunkAPI.dispatch(userActions.initAuth())

		return response.data
	} catch (e) {
		console.log(e)
		return thunkAPI.rejectWithValue('error')
	}
})
