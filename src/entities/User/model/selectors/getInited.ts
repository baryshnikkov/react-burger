import type { StateSchema } from '@/shared/types/store';

export const getInited = (state: StateSchema) => state.user.inited;
