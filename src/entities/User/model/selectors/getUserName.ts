import type { StateSchema } from '@/shared/types/store';

export const getUserName = (state: StateSchema) => state.user.name;
