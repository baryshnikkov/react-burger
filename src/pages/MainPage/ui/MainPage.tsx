import { memo } from "react";
import { BurgerIngredients } from "@/features/BurgerIngredients";
import { Page } from "@/widgets/Page";
import cls from "./MainPage.module.css";

const MainPage = memo(() => {
	return (
		<Page className={cls.MainPage}>
			<BurgerIngredients />
			<h1>box2</h1>
		</Page>
	);
});

export default MainPage;
