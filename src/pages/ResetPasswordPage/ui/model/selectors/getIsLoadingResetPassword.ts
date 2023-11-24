import type { StateSchema } from '@/shared/types/store';

export const getIsLoadingResetPassword = (state: StateSchema) => state.resetPassword.isLoading;
