import { FC, lazy } from "react";
import { IngredientDetailsProps } from "./IngredientDetails";

export const IngredientDetailsAsync = lazy<FC<IngredientDetailsProps>>(
	() => import("./IngredientDetails")
);
