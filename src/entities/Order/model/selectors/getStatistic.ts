import { type StateSchema } from '@/shared/types/StateSchema';

export const getStatistic = (state: StateSchema) => state.order.statistic;
