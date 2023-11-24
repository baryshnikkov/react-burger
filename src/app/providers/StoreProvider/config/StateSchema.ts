import { type ForgotPasswordSchema } from '@/pages/ForgotPasswordPage';
import { type ResetPasswordSchema } from '@/pages/ResetPasswordPage';

import { type AuthUserSchema } from '@/features/AuthUser';
import { type AmountIngredientsSchema } from '@/features/CardsIngredients';
import { type LoginUserSchema } from '@/features/LoginUser';
import { type OrderSchema } from '@/features/Order';

import { type UserSchema } from '@/entities/User';

import { type rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
	order: OrderSchema;
	amountIngredients: AmountIngredientsSchema;
	user: UserSchema;
	authUser: AuthUserSchema;
	loginUser: LoginUserSchema;
	forgotPassword: ForgotPasswordSchema;
	resetPassword: ResetPasswordSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	state: StateSchema;
}
