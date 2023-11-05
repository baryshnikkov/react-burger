import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
	isAuth?: boolean | undefined;
};
