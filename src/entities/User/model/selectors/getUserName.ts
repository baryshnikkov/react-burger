import { type StateSchema } from '@/shared/types/StateSchema';

export const getUserName = (state: StateSchema) => state.user.name;
