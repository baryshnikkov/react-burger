import { memo } from "react";
import { useNavigate } from "react-router-dom";
import ImageError404 from "../assets/error404.svg";
import cls from "./NotFoundPage.module.css";
import { getRouteMain } from "@/shared/const/router";

const NotFoundPage = memo(() => {
	const navigate = useNavigate();

	return (
		<div className={cls.container}>
			<div className={cls.error}>
				<p className="text text_type_main-large">Ошибка 404</p>
				<p className="text text_type_main-medium">
					Кажется что-то пошло не так! Страница, которую вы
					запрашиваете, не существует. Возможно она была удалена, или
					вы набрали неверный адрес. Перейдите на нашу{" "}
					<span
						className={cls.link}
						onClick={() =>
							navigate(getRouteMain(), { replace: true })
						}
					>
						главную страницу
					</span>{" "}
					и попробуйте найти необходимую вам информацию там.
				</p>
			</div>

			<ImageError404 />
		</div>
	);
});

export default NotFoundPage;
