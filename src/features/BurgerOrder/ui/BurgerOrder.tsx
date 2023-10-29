import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import {
	ConstructorElement,
	DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
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

export const BurgerOrder = memo(() => {
	const isEmpty = useSelector(getIsEmpty);
	const bun = useSelector(getBun);
	const toppings = useSelector(getToppings);
	const dispatch = useAppDispatch();

	const deleteIngredient = useCallback((id: string) => {
		dispatch(orderActions.deleteIngredient(id));
	}, []);

	const [{ isHover }, dropTarget] = useDrop({
		accept: "ingredient",
		collect: (monitor) => ({
			isHover: monitor.isOver(),
		}),
		drop(item) {
			dispatch(orderActions.addIngredient(item));
		},
	});

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
					{toppings.map((el) => (
						<div
							className={cn(cls.dragIngredient, {}, [])}
							key={el.idKey}
						>
							<DragIcon type="primary" />
							<ConstructorElement
								text={el.name}
								price={el.price}
								thumbnail={el.image}
								handleClose={() => {
									deleteIngredient(el._id);
								}}
							/>
						</div>
					))}
				</div>
				{displayBun("bottom")}
			</div>
			<OrderButton className={cls.price} />
		</div>
	);
});
