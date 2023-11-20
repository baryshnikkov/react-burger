import type { StateSchema } from '@/shared/types/StateSchema';

export const getIsLoadingResetPassword = (state: StateSchema) => state.resetPassword.isLoading;
