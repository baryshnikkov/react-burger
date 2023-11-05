import { AmountIngredientsSchema } from "@/entities/CardsIngredients";
import { OrderSchema } from "@/entities/Order";
import { UserSchema } from "@/entities/User";
import { AuthUserSchema } from "@/features/AuthUser";
import { LoginUserSchema } from "@/features/LoginUser";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
	order: OrderSchema;
	amountIngredients: AmountIngredientsSchema;
	user: UserSchema;
	authUser: AuthUserSchema;
	loginUser: LoginUserSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	state: StateSchema;
}
