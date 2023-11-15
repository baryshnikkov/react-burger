import { type StateSchema } from '@/app/providers/StoreProvider'

export const getToppings = (state: StateSchema) => state.order.toppings
