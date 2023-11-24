import type { StateSchema } from '@/shared/types/store';

export const getStatistic = (state: StateSchema) => state.order.statistic;
