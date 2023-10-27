import { OrderSchema } from "@/entities/Order";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
	order: OrderSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	state: StateSchema;
}
