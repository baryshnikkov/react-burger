import { StateSchema } from "@/app/providers/StoreProvider";

export const getStatistic = (state: StateSchema) => state.order.statistic;
