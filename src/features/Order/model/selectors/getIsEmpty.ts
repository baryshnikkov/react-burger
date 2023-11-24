import type { StateSchema } from '@/shared/types/store';

export const getIsEmpty = (state: StateSchema) => state.order.isEmpty;
