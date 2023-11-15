export enum AppRoutes {
	MAIN = 'main',
	FEED = 'feed',
	FEED_DETAILS = 'feed_details',
	PROFILE = 'profile',
	PROFILE_ORDERS = 'profile_orders',
	PROFILE_ORDERS_DETAILS = 'profile_orders_details',
	INGREDIENTS = 'ingredients',
	LOGIN = 'login',
	REGISTER = 'register',
	FORGOT_PASSWORD = 'forgot_password',
	RESET_PASSWORD = 'reset_password',
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteFeed = () => '/feed';
export const getRouteFeedDetails = (id: string) => `/feed/${id}`;
export const getRouteProfile = () => '/profile';
export const getRouteProfileOrders = () => '/profile/orders';
export const getRouteProfileOrderDetails = (id: string) =>
	`/profile/orders/${id}`;
export const getRouteIngredients = (id: string) => `/ingredients/${id}`;
export const getRouteLogin = () => '/login';
export const getRouteRegister = () => '/register';
export const getRouteForgotPassword = () => '/forgot-password';
export const getRouteResetPassword = () => '/reset-password';
export const getRouteNotFound = () => '*';
