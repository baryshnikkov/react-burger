import type { StateSchema } from '@/shared/types/StateSchema';

export const getIsLoadingForgotPassword = (state: StateSchema) => state.forgotPassword.isLoading;
