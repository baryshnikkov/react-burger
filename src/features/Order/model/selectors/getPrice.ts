import type { StateSchema } from '@/shared/types/store';

export const getPrice = (state: StateSchema) => state.order.price;
