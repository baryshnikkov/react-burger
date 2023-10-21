import { memo } from "react";
import { useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { TabIngredientVariants } from "../model/types/tabIngredients";
import { getCurrentTabIngredient } from "../model/selectors/getCurrentTabIngredient";
import { tabIngredientsActions } from "../model/slice/tabIngredientsSlice";
import cls from "./TabIngredients.module.css";

export const TabIngredients = memo(() => {
	const currentTabIngredient = useSelector(getCurrentTabIngredient);
	const dispatch = useAppDispatch();

	const setCurrentTabIngredient = (value: TabIngredientVariants) => () => {
		dispatch(tabIngredientsActions.setCurrentTabIngredient(value));
	};

	return (
		<div className={cls.tabs}>
			<Tab
				value="buns"
				active={currentTabIngredient === "buns"}
				onClick={setCurrentTabIngredient("buns")}
			>
				Булки
			</Tab>
			<Tab
				value="sauces"
				active={currentTabIngredient === "sauces"}
				onClick={setCurrentTabIngredient("sauces")}
			>
				Соусы
			</Tab>
			<Tab
				value="fillings"
				active={currentTabIngredient === "fillings"}
				onClick={setCurrentTabIngredient("fillings")}
			>
				Начинки
			</Tab>
		</div>
	);
});
