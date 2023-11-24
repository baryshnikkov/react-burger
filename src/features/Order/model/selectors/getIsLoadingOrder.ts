import type { StateSchema } from '@/shared/types/store';

export const getIsLoadingOrder = (state: StateSchema) => state.order.isLoading;
