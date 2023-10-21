import { BurgerIngredients } from "@/features/BurgerIngredients";
import { memo } from "react";

const MainPage = memo(() => {
	return (
		<>
			<BurgerIngredients />
		</>
	);
});

export default MainPage;
