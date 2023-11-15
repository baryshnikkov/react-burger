import { type StateSchema } from '@/app/providers/StoreProvider'

export const getIsLoadingOrder = (state: StateSchema) => state.order.isLoading
