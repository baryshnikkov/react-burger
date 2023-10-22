import { memo } from "react";
import { TabIngredients } from "@/entities/TabIngredients";
import { CardsIngredients } from "@/entities/CardsIngredients";
import cls from "./BurgerIngredients.module.css";

export const BurgerIngredients = memo(() => {
	return (
		<div className={cls.BurgerIngredients}>
			<h1 className="text text_type_main-large">Соберите бургер</h1>
			<TabIngredients />
			<CardsIngredients />
		</div>
	);
});
