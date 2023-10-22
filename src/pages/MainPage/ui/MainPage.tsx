import { BurgerIngredients } from "@/features/BurgerIngredients";
import { Page } from "@/widgets/Page";
import { memo } from "react";

const MainPage = memo(() => {
	return (
		<Page>
			<BurgerIngredients />
		</Page>
	);
});

export default MainPage;
