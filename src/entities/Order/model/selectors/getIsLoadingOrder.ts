import { type StateSchema } from '@/shared/types/StateSchema';

export const getIsLoadingOrder = (state: StateSchema) => state.order.isLoading;
