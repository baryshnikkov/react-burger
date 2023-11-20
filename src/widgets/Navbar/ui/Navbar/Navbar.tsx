import {
	BurgerIcon,
	ListIcon,
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsAuth } from '@/entities/User';

import {
	getRouteFeed,
	getRouteMain,
	getRouteProfile,
} from '@/shared/const/router';

import { NavbarLink } from '../NavbarLink/NavbarLink';

import cls from './Navbar.module.css';

export const Navbar = memo(() => {
	const isAuth = useSelector(getIsAuth);

	return (
		<header className={cls.header}>
			<div className={cls.Navbar}>
				<nav className={cls.nav}>
					<NavbarLink
						to={getRouteMain()}
						text="Конструктор"
						icon={<BurgerIcon type="primary" />}
					/>
					<NavbarLink
						to={getRouteFeed()}
						text="Лента заказов"
						icon={<ListIcon type="primary" />}
					/>
				</nav>
				<NavLink className={cls.logo} to={getRouteMain()}>
					<Logo />
				</NavLink>
				<NavbarLink
					className={cls.profile}
					to={getRouteProfile()}
					text={isAuth ? 'Личный кабинет' : 'Войти'}
					icon={<ProfileIcon type="primary" />}
				/>
			</div>
		</header>
	);
});

Navbar.displayName = 'Navbar';
