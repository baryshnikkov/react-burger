import type { StateSchema } from '@/shared/types/store';

export const getIsLoadingLoginUser = (state: StateSchema) => state.loginUser.isLoading;
