import { type StateSchema } from '@/app/providers/StoreProvider'

export const getAccessToken = (state: StateSchema) => state.user.accessToken
