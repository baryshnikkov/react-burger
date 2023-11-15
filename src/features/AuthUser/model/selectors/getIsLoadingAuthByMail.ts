import { type StateSchema } from '@/app/providers/StoreProvider'

export const getIsLoadingAuthByMail = (state: StateSchema) =>
	state.authUser.isLoading
