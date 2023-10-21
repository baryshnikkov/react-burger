import { memo } from "react";
import { TabIngredients } from "@/entities/TabIngredients";

export const BurgerIngredients = memo(() => {
	return (
		<>
			<h1 className="text text_type_main-large">Соберите бургер</h1>
			<TabIngredients />
		</>
	);
});
