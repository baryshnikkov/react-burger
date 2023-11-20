import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getApiLogout } from '@/shared/const/api';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LogoutUserAnswer {
	success: boolean;
	message: string;
}

export const logoutUser = createAsyncThunk<LogoutUserAnswer, void, { rejectValue: string }>(
	'logoutUser',
	async (_, thunkAPI) => {
		try {
			const token = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY)!);

			const response = await axios.post<LogoutUserAnswer>(__API__ + getApiLogout(), {
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
