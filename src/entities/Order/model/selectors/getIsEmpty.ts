import { StateSchema } from "@/app/providers/StoreProvider";

export const getIsEmpty = (state: StateSchema) => state.order.isEmpty;
