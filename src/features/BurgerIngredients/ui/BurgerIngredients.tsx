import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { memo, useState } from "react";
import cls from "./BurgerIngredients.module.css";

type CurrentTabProps = "buns" | "sauces" | "fillings";

export const BurgerIngredients = memo(() => {
	const [currentTab, setCurrentTab] = useState<CurrentTabProps>("buns");

	return (
		<>
			<h1 className="text text_type_main-large">Соберите бургер</h1>
			<div className={cls.tabs}>
				<Tab
					value="buns"
					active={currentTab === "buns"}
					onClick={() => setCurrentTab("buns")}
				>
					Булки
				</Tab>
				<Tab
					value="sauces"
					active={currentTab === "sauces"}
					onClick={() => setCurrentTab("sauces")}
				>
					Соусы
				</Tab>
				<Tab
					value="fillings"
					active={currentTab === "fillings"}
					onClick={() => setCurrentTab("fillings")}
				>
					Начинки
				</Tab>
			</div>
		</>
	);
});
