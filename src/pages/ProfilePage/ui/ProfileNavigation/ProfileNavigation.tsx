import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '@/entities/User';

import { getRouteProfile, getRouteProfileOrders } from '@/shared/const/router';
import { cn } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import cls from './ProfileNavigation.module.css';

interface ProfileNavigationProps {
	path: string;
}

export const ProfileNavigation = memo((props: ProfileNavigationProps) => {
	const { path } = props;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onExit = () => {
		dispatch(logoutUser());
	};

	return (
		<nav className={cn(cls.nav, {}, ['text', 'text_type_main-medium'])}>
			<p
				className={cn(
					cls.link,
					{
						text_color_inactive: getRouteProfileOrders() === path,
					},
					['text', 'text_type_main-medium ']
				)}
				onClick={() => {
					navigate(getRouteProfile());
				}}
			>
				Профиль
			</p>
			<p
				className={cn(
					cls.link,
					{
						text_color_inactive: getRouteProfile() === path,
					},
					['text', 'text_type_main-medium']
				)}
				onClick={() => {
					navigate(getRouteProfileOrders());
				}}
			>
				История заказов
			</p>
			<div
				className={cn(cls.link, {}, ['text_color_inactive'])}
				onClick={onExit}
			>
				Выход
			</div>
			<p
				className={cn(cls.description, {}, [
					'text',
					'text_type_main-default',
					'text_color_inactive',
				])}
			>
				В этом разделе вы можете изменить&nbsp;свои персональные данные
			</p>
		</nav>
	);
});

ProfileNavigation.displayName = 'ProfileNavigation';
