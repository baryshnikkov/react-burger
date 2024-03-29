import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { memo, useCallback, useRef } from 'react';
import { type DropTargetMonitor, useDrag, useDrop } from 'react-dnd';

import { amountIngredientsActions } from '@/features/CardsIngredients';
import { orderActions } from '@/features/Order';

import { cn } from '@/shared/lib/helpers/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import cls from './ToppingCard.module.css';

interface ToppingCardProps {
	className?: string;
	name: string;
	price: number;
	image: string;
	_id: string;
	index: number;
	moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export const ToppingCard = memo((props: ToppingCardProps) => {
	const { image, name, price, className, _id, index, moveCard } = props;
	const dispatch = useAppDispatch();

	const deleteIngredient = useCallback(
		(id: string) => {
			dispatch(orderActions.deleteIngredient(id));
			dispatch(amountIngredientsActions.minusAmountIngredient(id));
		},
		[dispatch]
	);

	const [{ isDragging }, dragRef] = useDrag({
		type: 'card',
		item: { index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [_, dropRef] = useDrop({
		accept: 'card',
		hover: (card: { index: number }, monitor: DropTargetMonitor) => {
			const dragIndex = card.index;
			const hoverIndex = index;
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const hoverActualY = monitor.getClientOffset()!.y - hoverBoundingRect.top;

			if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
			if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

			moveCard(dragIndex, hoverIndex);
			card.index = hoverIndex;
		},
	});

	const ref = useRef<any>(null);
	const dragDropRef = dragRef(dropRef(ref));

	const opacity = isDragging ? 0 : 1;

	return (
		<div
			className={cn(cls.ToppingCard, {}, [className])}
			// @ts-expect-error
			ref={dragDropRef}
			style={{ opacity }}
		>
			<DragIcon type='primary' />
			<ConstructorElement
				text={name}
				price={price}
				thumbnail={image}
				handleClose={() => {
					deleteIngredient(_id);
				}}
			/>
		</div>
	);
});

ToppingCard.displayName = 'ToppingCard';
