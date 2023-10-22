import { memo } from "react";
import {
	Counter,
	CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./CardIngredient.module.css";

interface CardIngredientProps {
	image: string;
	name: string;
	price: number;
	count?: number;
}

export const CardIngredient = memo((props: CardIngredientProps) => {
	const { image, name, price, count = 0 } = props;

	return (
		<div className={cls.card}>
			{Boolean(count) && (
				<Counter count={count} size="default" extraClass="m-1" />
			)}
			<img className={cls.image} src={image} alt={name} />
			<div className={cls.price}>
				<p className={"text text_type_digits-default"}>{price}</p>
				<CurrencyIcon type="primary" />
			</div>
			<p className={`${cls.description} text text_type_main-default`}>
				{name}
			</p>
		</div>
	);
});
