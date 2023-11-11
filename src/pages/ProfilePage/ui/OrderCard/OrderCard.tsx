import { memo, useMemo } from "react";
import cls from "./OrderCard.module.css";
import { calculateDate } from "@/shared/lib/helpers/calculateDate";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useIngredients } from "@/entities/ListIngredients";
import { calculatePrice } from "@/shared/lib/helpers/calculatePrice";
import { IngredientPictures } from "../IngredientPictures/IngredientPictures";

interface OrderCardProps {
	number: number;
	name: string;
	status: string;
	createdAt: string;
	// TODO
	ingredientsOrder: any;
}

export const OrderCard = memo((props: OrderCardProps) => {
	const { number, name, status, createdAt, ingredientsOrder } = props;
	const { data: ingredientsList } = useIngredients(null);

	const handleClickOnCard = () => {
		console.log("click on card");
	};

	const { interval, time, gmt } = useMemo(() => {
		return calculateDate(createdAt);
	}, [createdAt]);

	const { images, price } = useMemo(() => {
		return calculatePrice(ingredientsOrder, ingredientsList?.data);
	}, [ingredientsList, ingredientsOrder]);

	return (
		<div className={cls.OrderCard} onClick={handleClickOnCard}>
			<div className={cls.orderDetails}>
				<p className="text text_type_digits-default">#{number}</p>
				<p className="text text_type_main-default text_color_inactive">
					{`${interval}, ${time} i-GMT${gmt}`}
				</p>
			</div>
			<p className="text text_type_main-medium">{name}</p>
			{location.pathname === "/profile/orders" && (
				<div className="text text_type_main-default">
					{status === "done" && (
						<div style={{ color: "#0CC" }}>Выполнен</div>
					)}
					{status === "created" && <div>Создан</div>}
					{status === "pending" && <div>Готовится</div>}
				</div>
			)}
			<div className={cls.orderDescription}>
				<IngredientPictures images={images} />
				<div className={cls.orderCost}>
					<p className="text text_type_digits-default">{price}</p>
					<CurrencyIcon type="primary" />
				</div>
			</div>
		</div>
	);
});
