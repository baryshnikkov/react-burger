import { type StateSchema } from '@/shared/types/StateSchema';

export const getIsLoadingAuthByMail = (state: StateSchema) => state.authUser.isLoading;
