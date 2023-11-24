import type { StateSchema } from '@/shared/types/store';

export const getNumberOrder = (state: StateSchema) => state.order.numberOrder;
