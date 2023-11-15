import { type StateSchema } from '@/app/providers/StoreProvider'

export const getStatistic = (state: StateSchema) => state.order.statistic
