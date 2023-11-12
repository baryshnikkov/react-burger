import { memo } from "react";
import cls from "./IngredientsDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface CalculateOrderDetailsProps {
	ingredientsList: any;
	id: string;
}

export const IngredientsDetails = memo((props: CalculateOrderDetailsProps) => {
	const { ingredientsList, id } = props;
	const { image, name, price } = ingredientsList.find((card: any) => {
		return card["_id"] === id;
	});

	return (
		<div className={cls.ingredient}>
			<div className={cls.imgBorder}>
				<img className={cls.img} src={image} alt="Фото ингредиента" />
			</div>
			<p className={`${cls.name} text text_type_main-default`}>{name}</p>
			<div className={cls.price}>
				<p className="text text_type_digits-default">{price}</p>
				<CurrencyIcon type="primary" />
			</div>
		</div>
	);
});
