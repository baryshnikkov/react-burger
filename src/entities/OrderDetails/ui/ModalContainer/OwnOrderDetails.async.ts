import { FC, lazy } from "react";
import { OwnOrderDetailsProps } from "./OwnOrderDetails";

export const OwnOrderDetailsAsync = lazy<FC<OwnOrderDetailsProps>>(
	() => import("./OwnOrderDetails")
);
