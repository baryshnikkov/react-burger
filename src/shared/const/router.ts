export enum AppRoutes {
	MAIN = "main",
	FEED = "feed",
	PROFILE = "profile",
	PROFILE_ORDERS = "profile_orders",
	INGREDIENTS = "ingredients",
	LOGIN = "login",
	REGISTER = "register",
	FORGOT_PASSWORD = "forgot_password",
	RESET_PASSWORD = "reset_password",
	NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteFeed = () => "/feed";
export const getRouteProfile = () => "/profile";
export const getRouteProfileOrders = () => "/profile/orders";
export const getRouteIngredients = (id: string) => `/ingredients/${id}`;
export const getRouteLogin = () => "/login";
export const getRouteRegister = () => "/register";
export const getRouteForgotPassword = () => "/forgot-password";
export const getRouteResetPassword = () => "/reset-password";
export const getRouteNotFound = () => "*";
