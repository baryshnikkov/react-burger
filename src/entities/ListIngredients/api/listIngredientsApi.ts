import { rtkApi } from "@/shared/api/rtkApi";
import { ListIngredientsSchema } from "../model/types/listIngredients";

const listIngredientsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getIngredients: build.query<ListIngredientsSchema, null>({
			query: () => ({
				url: "/ingredients",
			}),
		}),
	}),
});

export const useIngredients = listIngredientsApi.useGetIngredientsQuery;
