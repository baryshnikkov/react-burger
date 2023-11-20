import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiToken } from '@/shared/const/api';

interface AccessTokenAnswer {
	success: boolean;
	accessToken: string;
	refreshToken: string;
}

interface AccessTokenProps {
	token: string;
}

export const updateAccessToken = createAsyncThunk<AccessTokenAnswer, AccessTokenProps, { rejectValue: string }>(
	'authByMail',
	async ({ token }: AccessTokenProps, thunkAPI) => {
		try {
			const response = await axios.post<AccessTokenAnswer>(__API__ + getApiToken(), {
				headers: {
					'Content-Type': 'application/json',
				},

				token,
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			console.log(e);
			return thunkAPI.rejectWithValue('error');
		}
	}
);
