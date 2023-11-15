import { type StateSchema } from '@/app/providers/StoreProvider'

export const getNumberOrder = (state: StateSchema) => state.order.numberOrder
