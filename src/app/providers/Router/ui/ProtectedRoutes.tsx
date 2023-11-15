import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsAuth } from '@/entities/User'
import { getRouteLogin, getRouteMain } from '@/shared/const/router'

interface RequireAuthProps {
	children: JSX.Element;
	isAuthRoute: boolean;
}

export const ProtectedRoutes = (props: RequireAuthProps) => {
	const { children, isAuthRoute } = props
	const location = useLocation()
	const isAuthUser = useSelector(getIsAuth)

	if (isAuthRoute && isAuthUser !== isAuthRoute) {
		return (
			<Navigate to={getRouteLogin()} state={{ from: location }} replace />
		)
	}

	if (!isAuthRoute && isAuthUser !== isAuthRoute) {
		return (
			<Navigate to={getRouteMain()} state={{ from: location }} replace />
		)
	}

	return children
}
