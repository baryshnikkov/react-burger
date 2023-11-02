import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {
	OrderButton,
	getBun,
	getIsEmpty,
	getToppings,
	orderActions,
} from "@/entities/Order";
import BurgerIcon from "@/shared/assets/burger.svg";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import cls from "./BurgerOrder.module.css";
import { cn } from "@/shared/lib/helpers/classNames";
import { ToppingCard } from "../ToppingCard/ToppingCard";
import { amountIngredientsActions } from "@/entities/CardsIngredients";

export const BurgerOrder = memo(() => {
	const isEmpty = useSelector(getIsEmpty);
	const bun = useSelector(getBun);
	const toppings = useSelector(getToppings);
	const dispatch = useAppDispatch();

	const [{ isHover }, dropTarget] = useDrop({
		accept: "ingredient",
		collect: (monitor) => ({
			isHover: monitor.isOver(),
		}),
		// TODO исправить any
		drop(item: any) {
			dispatch(orderActions.addIngredient(item));
			dispatch(amountIngredientsActions.plusAmountIngredient(item._id));
		},
	});

	const moveToppingCard = useCallback(
		(dragIndex: number, hoverIndex: number) => {
			const dragCard = toppings[dragIndex];
			const hoverCard = toppings[hoverIndex];
			const updatedToppings = [...toppings];
			updatedToppings[dragIndex] = hoverCard;
			updatedToppings[hoverIndex] = dragCard;
			dispatch(orderActions.updateToppings(updatedToppings));
		},
		[toppings]
	);

	const displayBun = useCallback(
		(type: "top" | "bottom" | undefined) => {
			return (
				bun && (
					<div className={cls.widthIngredient}>
						<ConstructorElement
							type={type}
							isLocked={true}
							text={bun?.name}
							price={bun?.price}
							thumbnail={bun?.image}
						/>
					</div>
				)
			);
		},
		[bun]
	);

	if (isEmpty) {
		return (
			<div className={cls.BurgerOrder} ref={dropTarget}>
				<div className={cls.ingredients}>
					<p className="text text_type_main-medium">
						Поместите ингредиенты сюда...
					</p>
					<BurgerIcon />
				</div>
				<OrderButton className={cls.price} />
			</div>
		);
	}

	return (
		<div className={cn(cls.BurgerOrder, {}, [cls.cards])} ref={dropTarget}>
			<div
				className={cn(cls.ingredients, { [cls.isHover]: isHover }, [])}
			>
				{displayBun("top")}
				<div className={cls.toppings}>
					{toppings.map((el, index) => (
						<ToppingCard
							key={el.idKey}
							name={el.name}
							price={el.price}
							image={el.image}
							_id={el._id}
							index={index}
							moveCard={moveToppingCard}
						/>
					))}
				</div>
				{displayBun("bottom")}
			</div>
			<OrderButton className={cls.price} />
		</div>
	);
});
