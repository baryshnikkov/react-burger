import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { getApiForgotPassword } from '@/shared/const/api'

interface ForgotPasswordAnswer {
	success: boolean;
	message: string;
}

interface ForgotPasswordProps {
	email: string;
}

export const fetchForgotPassword = createAsyncThunk<
ForgotPasswordAnswer,
ForgotPasswordProps,
{ rejectValue: string; }
>('getProfileData', async ({ email }: ForgotPasswordProps, thunkAPI) => {
	try {
		const response = await axios.post<ForgotPasswordAnswer>(
			__API__ + getApiForgotPassword(),
			{ email },
		)

		if (!response.data) {
			throw new Error()
		}

		return response.data
	} catch (e) {
		console.log(e)
		return thunkAPI.rejectWithValue('error')
	}
})
