import type { StateSchema } from '@/shared/types/StateSchema';

export const getIsLoadingLoginUser = (state: StateSchema) => state.loginUser.isLoading;
