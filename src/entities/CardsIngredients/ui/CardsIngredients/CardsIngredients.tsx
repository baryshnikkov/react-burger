import { memo, useEffect, useState } from "react";
import { CardIngredient } from "../CardIngredient/CardIngredient";
import { Ingredient, useIngredients } from "@/entities/ListIngredients";
import cls from "./CardsIngredients.module.css";
import { cn } from "@/shared/lib/helpers/classNames";

export const CardsIngredients = memo(() => {
	const { data: ingredients } = useIngredients(null);
	const [buns, setBuns] = useState<Ingredient[]>([]);
	const [main, setMain] = useState<Ingredient[]>([]);
	const [sauces, setSauces] = useState<Ingredient[]>([]);

	useEffect(() => {
		if (ingredients?.data) {
			const filterIngredients: any = {
				bun: [],
				main: [],
				sauce: [],
			};

			ingredients?.data.map((el) => {
				filterIngredients[el.type].push(el);
			});

			setBuns(filterIngredients.bun);
			setMain(filterIngredients.main);
			setSauces(filterIngredients.sauce);
		}
	}, [ingredients]);

	if (!ingredients?.data) {
		return null;
	}

	return (
		<div className={cls.CardsIngredients}>
			<h2
				className={cn(cls.title, {}, ["text", "text_type_main-medium"])}
			>
				Булки
			</h2>
			<div className={cls.cards}>
				{buns.map((el) => (
					<CardIngredient
						key={el._id}
						name={el.name}
						image={el.image}
						price={el.price}
						calories={el.calories}
						carbohydrates={el.carbohydrates}
						fat={el.fat}
						proteins={el.proteins}
					/>
				))}
			</div>
			<h2
				className={cn(cls.title, {}, ["text", "text_type_main-medium"])}
			>
				Соусы
			</h2>
			<div className={cls.cards}>
				{sauces.map((el) => (
					<CardIngredient
						key={el._id}
						name={el.name}
						image={el.image}
						price={el.price}
						calories={el.calories}
						carbohydrates={el.carbohydrates}
						fat={el.fat}
						proteins={el.proteins}
					/>
				))}
			</div>
			<h2
				className={cn(cls.title, {}, ["text", "text_type_main-medium"])}
			>
				Начинки
			</h2>
			<div className={cls.cards}>
				{main.map((el) => (
					<CardIngredient
						key={el._id}
						name={el.name}
						image={el.image}
						price={el.price}
						calories={el.calories}
						carbohydrates={el.carbohydrates}
						fat={el.fat}
						proteins={el.proteins}
					/>
				))}
			</div>
		</div>
	);
});
