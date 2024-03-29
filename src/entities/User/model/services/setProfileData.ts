import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getApiProfileData } from '@/shared/const/api';

interface ProfileDataAnswer {
	success: boolean;
	user: {
		email: string;
		name: string;
	};
}

interface ProfileDataProps {
	accessToken: string;
	name: string;
	email: string;
	password: string;
}

export const setProfileData = createAsyncThunk<ProfileDataAnswer, ProfileDataProps, { rejectValue: string }>(
	'setProfileData',
	async ({ accessToken, name, email, password }: ProfileDataProps, thunkAPI) => {
		try {
			const response = await axios.patch<ProfileDataAnswer>(
				__API__ + getApiProfileData(),
				{ name, email, password },
				{
					headers: {
						'Content-Type': 'application/json',
						authorization: accessToken,
					},
				}
			);

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
