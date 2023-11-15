import { type StateSchema } from '@/app/providers/StoreProvider'

export const getIsLoadingResetPassword = (state: StateSchema) =>
	state.resetPassword.isLoading
