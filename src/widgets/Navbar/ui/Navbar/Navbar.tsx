import { memo } from "react";
import cls from "./Navbar.module.css";
import { NavbarLink } from "../NavbarLink/NavbarLink";

export const Navbar = memo(() => {
	return (
		<header className={cls.Navbar}>
			<nav>
				<NavbarLink to="" text="Конструктор" />
			</nav>
		</header>
	);
});
