import { type StateSchema } from '@/shared/types/StateSchema';

export const getAccessToken = (state: StateSchema) => state.user.accessToken;
