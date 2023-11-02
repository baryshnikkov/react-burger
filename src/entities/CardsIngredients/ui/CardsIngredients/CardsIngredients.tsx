import { RefObject, memo, useEffect, useState } from "react";
import { CardIngredient } from "../CardIngredient/CardIngredient";
import { Ingredient, useIngredients } from "@/entities/ListIngredients";
import cls from "./CardsIngredients.module.css";
import { cn } from "@/shared/lib/helpers/classNames";
import { PageLoader } from "@/widgets/PageLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getAmountIngredients } from "../../model/selectors/getAmountIngredients";
import { amountIngredientsActions } from "../../model/slice/amountIngredientsSlice";
import { getBun } from "@/entities/Order";

interface CardsIngredientsProps {
	bunsRef: RefObject<HTMLHeadingElement>;
	mainRef: RefObject<HTMLHeadingElement>;
	saucesRef: RefObject<HTMLHeadingElement>;
	ingredientsListRef: RefObject<HTMLDivElement>;
	handleScroll: () => void;
}

export const CardsIngredients = memo((props: CardsIngredientsProps) => {
	const { bunsRef, mainRef, saucesRef, ingredientsListRef, handleScroll } =
		props;
	const { data: ingredients, isLoading } = useIngredients(null);
	const amountIngredients = useSelector(getAmountIngredients);
	const selectedBun = useSelector(getBun);
	const [buns, setBuns] = useState<Ingredient[]>([]);
	const [main, setMain] = useState<Ingredient[]>([]);
	const [sauces, setSauces] = useState<Ingredient[]>([]);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (ingredients?.data) {
			const filterIngredients: any = {
				bun: [],
				main: [],
				sauce: [],
			};
			const filterAmountIngredients: any = {};

			ingredients?.data.map((el) => {
				filterIngredients[el.type].push(el);
				filterAmountIngredients[el._id] = 0;
			});

			setBuns(filterIngredients.bun);
			setMain(filterIngredients.main);
			setSauces(filterIngredients.sauce);
			dispatch(
				amountIngredientsActions.initAmountIngredients(
					filterAmountIngredients
				)
			);
		}
	}, [ingredients]);

	if (isLoading) {
		return <PageLoader />;
	}

	if (!ingredients?.data) {
		return null; //TODO заменить null на ошибку
	}

	return (
		<div
			className={cls.CardsIngredients}
			ref={ingredientsListRef}
			onScroll={handleScroll}
		>
			<h2
				className={cn(cls.title, {}, ["text", "text_type_main-medium"])}
				ref={bunsRef}
			>
				Булки
			</h2>
			<div className={cls.cards}>
				{buns.map((el) => (
					<CardIngredient
						key={el._id}
						id={el._id}
						name={el.name}
						image={el.image}
						price={el.price}
						calories={el.calories}
						carbohydrates={el.carbohydrates}
						fat={el.fat}
						proteins={el.proteins}
						isBun={true}
						count={selectedBun?._id === el._id ? 2 : 0}
					/>
				))}
			</div>
			<h2
				className={cn(cls.title, {}, ["text", "text_type_main-medium"])}
				ref={saucesRef}
			>
				Соусы
			</h2>
			<div className={cls.cards}>
				{sauces.map((el) => (
					<CardIngredient
						key={el._id}
						id={el._id}
						name={el.name}
						image={el.image}
						price={el.price}
						calories={el.calories}
						carbohydrates={el.carbohydrates}
						fat={el.fat}
						proteins={el.proteins}
						count={amountIngredients[el._id]}
					/>
				))}
			</div>
			<h2
				className={cn(cls.title, {}, ["text", "text_type_main-medium"])}
				ref={mainRef}
			>
				Начинки
			</h2>
			<div className={cls.cards}>
				{main.map((el) => (
					<CardIngredient
						key={el._id}
						id={el._id}
						name={el.name}
						image={el.image}
						price={el.price}
						calories={el.calories}
						carbohydrates={el.carbohydrates}
						fat={el.fat}
						proteins={el.proteins}
						count={selectedBun?._id === el._id ? 2 : 0}
					/>
				))}
			</div>
		</div>
	);
});
