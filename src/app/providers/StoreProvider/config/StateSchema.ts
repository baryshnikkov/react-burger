import { AmountIngredientsSchema } from "@/entities/CardsIngredients";
import { OrderSchema } from "@/entities/Order";
import { UserSchema } from "@/entities/User";
import { AuthUserSchema } from "@/features/AuthUser";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
	order: OrderSchema;
	amountIngredients: AmountIngredientsSchema;
	user: UserSchema;
	authUser: AuthUserSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	state: StateSchema;
}
