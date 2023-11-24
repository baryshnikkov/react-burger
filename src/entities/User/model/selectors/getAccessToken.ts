import type { StateSchema } from '@/shared/types/store';

export const getAccessToken = (state: StateSchema) => state.user.accessToken;
