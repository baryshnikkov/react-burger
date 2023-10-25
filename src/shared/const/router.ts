export enum AppRoutes {
	MAIN = "main",
	FEED = "feed",
	PROFILE = "profile",
	INGREDIENTS = "ingredients",
	NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteFeed = () => "/feed";
export const getRouteProfile = () => "/profile";
export const getRouteIngredients = (id: string) => `/ingredients/${id}`;
export const getRouteNotFound = () => "*";
