import { useNavigate } from "react-router-dom";
import { cn } from "@/shared/lib/helpers/classNames";
import { getRouteProfile, getRouteProfileOrders } from "@/shared/const/router";
import cls from "./ProfileNavigation.module.css";

interface ProfileNavigationProps {
	path: string;
}

export const ProfileNavigation = (props: ProfileNavigationProps) => {
	const { path } = props;
	const navigate = useNavigate();

	return (
		<nav className={cn(cls.nav, {}, ["text", "text_type_main-medium"])}>
			<p
				className={cn(
					cls.link,
					{
						text_color_inactive: getRouteProfileOrders() === path,
					},
					["text", "text_type_main-medium "]
				)}
				onClick={() => navigate(getRouteProfile())}
			>
				Профиль
			</p>
			<p
				className={cn(
					cls.link,
					{
						text_color_inactive: getRouteProfile() === path,
					},
					["text", "text_type_main-medium"]
				)}
				onClick={() => navigate(getRouteProfileOrders())}
			>
				История заказов
			</p>
			<div
				className={cn(cls.link, {}, ["text_color_inactive"])}
				onClick={() => console.log("exit")}
			>
				Выход
			</div>
			<p
				className={cn(cls.description, {}, [
					"text",
					"text_type_main-default",
					"text_color_inactive",
				])}
			>
				В этом разделе вы можете изменить&nbsp;свои персональные данные
			</p>
		</nav>
	);
};
