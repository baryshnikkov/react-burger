import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { type AppRoutesProps } from '@/shared/types/router';

import { routeConfig } from '../config/routeConfig';

import { ProtectedRoutes } from './ProtectedRoutes';

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					route.isAuth !== undefined
						? (
							<ProtectedRoutes isAuthRoute={route.isAuth}>{element}</ProtectedRoutes>
						)
						: (
							element
						)
				}
			/>
		);
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

AppRouter.displayName = 'AppRouter';
