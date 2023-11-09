import { getApiResetPassword } from "@/shared/const/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ResetPasswordAnswer {
	success: boolean;
	message: string;
}

interface ResetPasswordProps {
	password: string;
	token: string;
}

export const fetchResetPassword = createAsyncThunk<
	ResetPasswordAnswer,
	ResetPasswordProps,
	{ rejectValue: string }
>(
	"fetchResetPassword",
	async ({ password, token }: ResetPasswordProps, thunkAPI) => {
		try {
			const response = await axios.post<ResetPasswordAnswer>(
				__API__ + getApiResetPassword(),
				{ password, token }
			);

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			console.log(e);
			return thunkAPI.rejectWithValue("error");
		}
	}
);
