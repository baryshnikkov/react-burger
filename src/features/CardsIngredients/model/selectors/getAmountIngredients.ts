import type { StateSchema } from '@/shared/types/store';

export const getAmountIngredients = (state: StateSchema) => state.amountIngredients.amount;
