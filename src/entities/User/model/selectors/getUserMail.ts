import type { StateSchema } from '@/shared/types/store';

export const getUserMail = (state: StateSchema) => state.user.mail;
