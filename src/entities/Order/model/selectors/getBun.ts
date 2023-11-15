import { type StateSchema } from '@/app/providers/StoreProvider'

export const getBun = (state: StateSchema) => state.order.bun
