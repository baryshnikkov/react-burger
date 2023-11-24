import type { StateSchema } from '@/shared/types/store';

export const getToppings = (state: StateSchema) => state.order.toppings;
