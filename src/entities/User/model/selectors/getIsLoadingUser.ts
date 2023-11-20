import { type StateSchema } from '@/shared/types/StateSchema';

export const getIsLoadingUser = (state: StateSchema) => state.user.isLoading;
