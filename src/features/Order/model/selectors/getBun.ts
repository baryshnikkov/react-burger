import type { StateSchema } from '@/shared/types/store';

export const getBun = (state: StateSchema) => state.order.bun;
