import { type StateSchema } from '@/shared/types/StateSchema';

export const getIsEmpty = (state: StateSchema) => state.order.isEmpty;
