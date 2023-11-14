import { memo } from "react";
import cls from "./IngredientsDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingredient } from "@/entities/ListIngredients";

interface CalculateOrderDetailsProps {
	ingredientsList: Ingredient[];
	id: string;
}

export const IngredientsDetails = memo((props: CalculateOrderDetailsProps) => {
	const { ingredientsList, id } = props;
	const ingredient = ingredientsList.find((card: Ingredient) => {
		return card["_id"] === id;
	});

	return (
		<div className={cls.ingredient}>
			<div className={cls.imgBorder}>
				<img
					className={cls.img}
					src={ingredient?.image}
					alt="Фото ингредиента"
				/>
			</div>
			<p className={`${cls.name} text text_type_main-default`}>
				{ingredient?.name}
			</p>
			<div className={cls.price}>
				<p className="text text_type_digits-default">
					{ingredient?.price}
				</p>
				<CurrencyIcon type="primary" />
			</div>
		</div>
	);
});
