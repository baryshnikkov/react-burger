import { type StateSchema } from '@/shared/types/StateSchema';

export const getInited = (state: StateSchema) => state.user.inited;
