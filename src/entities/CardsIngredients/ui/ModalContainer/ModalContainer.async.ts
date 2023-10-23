import { FC, lazy } from "react";
import { ModalContainerProps } from "./ModalContainer";

export const ModalContainerAsync = lazy<FC<ModalContainerProps>>(
	() => import("./ModalContainer")
);
