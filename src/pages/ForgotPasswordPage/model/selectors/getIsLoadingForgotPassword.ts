import type { StateSchema } from '@/shared/types/store';

export const getIsLoadingForgotPassword = (state: StateSchema) => state.forgotPassword.isLoading;
