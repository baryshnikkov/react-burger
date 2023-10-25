import { FeedPage } from "@/pages/FeedPage";
import { IngredientsPage } from "@/pages/IngredientsPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import {
	AppRoutes,
	getRouteFeed,
	getRouteIngredients,
	getRouteMain,
	getRouteNotFound,
	getRouteProfile,
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
	},
	[AppRoutes.INGREDIENTS]: {
		path: getRouteIngredients(":id"),
		element: <IngredientsPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getRouteNotFound(),
		element: <NotFoundPage />,
	},
};
