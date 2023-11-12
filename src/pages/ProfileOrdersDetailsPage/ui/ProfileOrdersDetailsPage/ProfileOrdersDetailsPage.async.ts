import { lazy } from "react";

export const ProfileOrdersDetailsPageAsync = lazy(
	() => import("./ProfileOrdersDetailsPage")
);
