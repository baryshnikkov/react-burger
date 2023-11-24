import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { type RefObject, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { type Ingredient, useIngredients } from '@/entities/ListIngredients';

import { cn } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Loader } from '@/shared/ui/Loader';

import { getAmountIngredients } from '../../model/selectors/getAmountIngredients';
import { amountIngredientsActions } from '../../model/slice/amountIngredientsSlice';
import { CardIngredient } from '../CardIngredient/CardIngredient';

import cls from './CardsIngredients.module.css';

interface FilterIngredients {
	bun: Ingredient[];
	main: Ingredient[];
	sauce: Ingredient[];
}
interface CardsIngredientsProps {
	bunsRef: RefObject<HTMLHeadingElement>;
	mainRef: RefObject<HTMLHeadingElement>;
	saucesRef: RefObject<HTMLHeadingElement>;
	ingredientsListRef: RefObject<HTMLDivElement>;
	handleScroll: () => void;
	selectedBun: any;
}

export const CardsIngredients = memo((props: CardsIngredientsProps) => {
	const { bunsRef, mainRef, saucesRef, ingredientsListRef, handleScroll, selectedBun } = props;
	const { data: ingredients, isLoading } = useIngredients(null);
	const amountIngredients = useSelector(getAmountIngredients);
	const [buns, setBuns] = useState<Ingredient[]>([]);
	const [main, setMain] = useState<Ingredient[]>([]);
	const [sauces, setSauces] = useState<Ingredient[]>([]);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (ingredients?.data) {
			const filterIngredients: FilterIngredients = {
				bun: [],
				main: [],
				sauce: [],
			};
			const filterAmountIngredients: Record<string, number> = {};

			ingredients?.data.map((el) => {
				filterIngredients[el.type].push(el);
				filterAmountIngredients[el._id] = 0;
			});

			setBuns(filterIngredients.bun);
			setMain(filterIngredients.main);
			setSauces(filterIngredients.sauce);
			dispatch(amountIngredientsActions.initAmountIngredients(filterAmountIngredients));
		}
	}, [dispatch, ingredients]);

	if (isLoading) {
		return <Loader isCenter={true} />;
	}

	if (!ingredients?.data) {
		return (
			<div className={cls.error}>
				<p className='text text_type_main-default'>
					Ошибка сервера. Не удалось получить данные. Попробуйте обновить страницу.
				</p>
				<Button
					htmlType='button'
					type='primary'
					size='small'
					extraClass='ml-2'
					onClick={() => {
						window.location.reload();
					}}
				>
					Обновить страницу
				</Button>
			</div>
		);
	}

	return (
		<div className={cls.CardsIngredients} ref={ingredientsListRef} onScroll={handleScroll}>
			<h2 className={cn(cls.title, {}, ['text', 'text_type_main-medium'])} ref={bunsRef}>
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
			<h2 className={cn(cls.title, {}, ['text', 'text_type_main-medium'])} ref={saucesRef}>
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
			<h2 className={cn(cls.title, {}, ['text', 'text_type_main-medium'])} ref={mainRef}>
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

CardsIngredients.displayName = 'CardsIngredients';
