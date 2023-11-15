import { type StateSchema } from '@/app/providers/StoreProvider'

export const getPrice = (state: StateSchema) => state.order.price
