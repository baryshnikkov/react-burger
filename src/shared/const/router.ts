export enum AppRoutes {
	MAIN = "main",
	FEED = "feed",
	PROFILE = "profile",
	NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteFeed = () => "/feed";
export const getRouteProfile = () => "/profile";
export const getRouteNotFound = () => "*";
