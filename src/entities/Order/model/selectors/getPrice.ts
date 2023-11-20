import { type StateSchema } from '@/shared/types/StateSchema';

export const getPrice = (state: StateSchema) => state.order.price;
