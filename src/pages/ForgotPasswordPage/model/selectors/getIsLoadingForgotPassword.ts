import { type StateSchema } from '@/app/providers/StoreProvider'

export const getIsLoadingForgotPassword = (state: StateSchema) =>
	state.forgotPassword.isLoading
