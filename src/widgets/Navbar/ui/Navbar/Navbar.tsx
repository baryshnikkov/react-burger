import { memo } from "react";
import { NavLink } from "react-router-dom";
import {
	BurgerIcon,
	ListIcon,
	Logo,
	ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavbarLink } from "../NavbarLink/NavbarLink";
import {
	getRouteFeed,
	getRouteMain,
	getRouteProfile,
} from "@/shared/const/router";
import cls from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { getIsAuth } from "@/entities/User";

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
					text={isAuth ? "Личный кабинет" : "Войти"}
					icon={<ProfileIcon type="primary" />}
				/>
			</div>
		</header>
	);
});
