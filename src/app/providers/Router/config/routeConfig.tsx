import { FeedPage } from "@/pages/FeedPage";
import { ForgotPasswordPage } from "@/pages/ForgotPasswordPage";
import { IngredientsPage } from "@/pages/IngredientsPage";
import { LoginPage } from "@/pages/LoginPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { RegisterPage } from "@/pages/RegisterPage";
import { ResetPasswordPage } from "@/pages/ResetPasswordPage";
import {
	AppRoutes,
	getRouteFeed,
	getRouteForgotPassword,
	getRouteIngredients,
	getRouteLogin,
	getRouteMain,
	getRouteNotFound,
	getRouteProfile,
	getRouteRegister,
	getRouteResetPassword,
} from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	[AppRoutes.FEED]: {
		path: getRouteFeed(),
		element: <FeedPage />,
	},
	[AppRoutes.PROFILE]: {
		path: getRouteProfile(),
		element: <ProfilePage />,
		isAuth: true,
	},
	[AppRoutes.INGREDIENTS]: {
		path: getRouteIngredients(":id"),
		element: <IngredientsPage />,
	},
	[AppRoutes.LOGIN]: {
		path: getRouteLogin(),
		element: <LoginPage />,
		isAuth: false,
	},
	[AppRoutes.REGISTER]: {
		path: getRouteRegister(),
		element: <RegisterPage />,
		isAuth: false,
	},
	[AppRoutes.FORGOT_PASSWORD]: {
		path: getRouteForgotPassword(),
		element: <ForgotPasswordPage />,
		isAuth: false,
	},
	[AppRoutes.RESET_PASSWORD]: {
		path: getRouteResetPassword(),
		element: <ResetPasswordPage />,
		isAuth: false,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};
