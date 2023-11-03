import { FC, lazy } from "react";
import { OrderDetailsProps } from "./OrderDetails";

export const OrderDetailsAsync = lazy<FC<OrderDetailsProps>>(
	() => import("./OrderDetails")
);
