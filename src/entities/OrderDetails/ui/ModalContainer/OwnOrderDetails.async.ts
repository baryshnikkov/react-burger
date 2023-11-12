import { FC, lazy } from "react";
import { OwnOrderDetailsProps } from "../../../../pages/ProfilePage/model/types/order";

export const OwnOrderDetailsAsync = lazy<FC<OwnOrderDetailsProps>>(
	() => import("./OwnOrderDetails")
);
