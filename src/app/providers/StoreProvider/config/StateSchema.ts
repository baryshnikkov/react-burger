import { type AmountIngredientsSchema } from '@/entities/CardsIngredients'
import { type OrderSchema } from '@/entities/Order'
import { type UserSchema } from '@/entities/User'
import { type AuthUserSchema } from '@/features/AuthUser'
import { type LoginUserSchema } from '@/features/LoginUser'
import { type ForgotPasswordSchema } from '@/pages/ForgotPasswordPage'
import { type ResetPasswordSchema } from '@/pages/ResetPasswordPage'
import { type rtkApi } from '@/shared/api/rtkApi'

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
