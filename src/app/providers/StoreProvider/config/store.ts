import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { rtkApi } from "@/shared/api/rtkApi";
import { orderReducer } from "@/entities/Order";

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		order: orderReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const store = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({}).concat(rtkApi.middleware),
	});

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
