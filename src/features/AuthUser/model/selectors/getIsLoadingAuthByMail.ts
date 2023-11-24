import type { StateSchema } from '@/shared/types/store';

export const getIsLoadingAuthByMail = (state: StateSchema) => state.authUser.isLoading;
