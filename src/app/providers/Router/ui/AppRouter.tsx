import { AppRoutesProps } from "@/shared/types/router";
import { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = (
			<Suspense fallback={"Загрузка..."}>{route.element}</Suspense> //TODO заменить fallback
		);

		return <Route key={route.path} path={route.path} element={element} />;
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
