import type { StateSchema } from '@/shared/types/store';

export const getIsLoadingUser = (state: StateSchema) => state.user.isLoading;
