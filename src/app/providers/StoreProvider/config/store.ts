import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { rtkApi } from '@/shared/api/rtkApi'
import { orderReducer } from '@/entities/Order'
import { amountIngredientsReducer } from '@/entities/CardsIngredients'
import { userReducer } from '@/entities/User'
import { authUserReducer } from '@/features/AuthUser'
import { loginUserReducer } from '@/features/LoginUser'
import { forgotPasswordReducer } from '@/pages/ForgotPasswordPage'
import { resetPasswordReducer } from '@/pages/ResetPasswordPage'

export function createReduxStore (initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		order: orderReducer,
		amountIngredients: amountIngredientsReducer,
		user: userReducer,
		authUser: authUserReducer,
		loginUser: loginUserReducer,
		forgotPassword: forgotPasswordReducer,
		resetPassword: resetPasswordReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	}

	const store = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({}).concat(rtkApi.middleware),
	})

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
