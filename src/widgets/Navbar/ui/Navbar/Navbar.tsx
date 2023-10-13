import { memo } from "react";
import cls from "./Navbar.module.css";
import { NavbarLink } from "../NavbarLink/NavbarLink";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const Navbar = memo(() => {
	return (
		<header className={cls.Navbar}>
			<nav>
				<NavbarLink to="" text="Конструктор" />
				<BurgerIcon type="primary" />
			</nav>
		</header>
	);
});
