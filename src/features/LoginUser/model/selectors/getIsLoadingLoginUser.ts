import { StateSchema } from "@/app/providers/StoreProvider";

export const getIsLoadingLoginUser = (state: StateSchema) =>
	state.loginUser.isLoading;
