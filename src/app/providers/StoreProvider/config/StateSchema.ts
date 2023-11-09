import { AmountIngredientsSchema } from "@/entities/CardsIngredients";
import { OrderSchema } from "@/entities/Order";
import { UserSchema } from "@/entities/User";
import { AuthUserSchema } from "@/features/AuthUser";
import { LoginUserSchema } from "@/features/LoginUser";
import { ForgotPasswordSchema } from "@/pages/ForgotPasswordPage";
import { ResetPasswordSchema } from "@/pages/ResetPasswordPage";
import { rtkApi } from "@/shared/api/rtkApi";

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
