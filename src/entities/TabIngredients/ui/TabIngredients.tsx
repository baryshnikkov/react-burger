import { memo, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { TabIngredientVariants } from "../model/types/tabIngredients";
import cls from "./TabIngredients.module.css";

export const TabIngredients = memo(() => {
	const [currentTab, setCurrentTab] = useState<TabIngredientVariants>("buns");

	const onTab = (value: TabIngredientVariants) => () => {
		setCurrentTab(value);
	};

	return (
		<div className={cls.tabs}>
			<Tab
				value="buns"
				active={currentTab === "buns"}
				onClick={onTab("buns")}
			>
				Булки
			</Tab>
			<Tab
				value="sauces"
				active={currentTab === "sauces"}
				onClick={onTab("sauces")}
			>
				Соусы
			</Tab>
			<Tab
				value="main"
				active={currentTab === "main"}
				onClick={onTab("main")}
			>
				Начинки
			</Tab>
		</div>
	);
});
