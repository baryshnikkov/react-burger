import type { StateSchema } from '@/shared/types/store';

export const getIsAuth = (state: StateSchema) => state.user.isAuth;
