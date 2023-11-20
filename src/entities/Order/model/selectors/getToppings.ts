import { type StateSchema } from '@/shared/types/StateSchema';

export const getToppings = (state: StateSchema) => state.order.toppings;
