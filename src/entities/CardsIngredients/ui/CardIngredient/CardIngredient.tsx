import { memo, useCallback, useState } from 'react';
import { useDrag } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import cls from './CardIngredient.module.css';
import { ModalIngredientData } from '../ModalIngredientData/ModalIngredientData';
import { getRouteIngredients } from '@/shared/const/router';

interface CardIngredientProps {
	image: string;
	name: string;
	price: number;
	count?: number;
	proteins: number;
	fat: number;
	carbohydrates: number;
	calories: number;
	id: string;
	isBun?: boolean;
}

export const CardIngredient = memo((props: CardIngredientProps) => {
	const { image, name, price, count = 0, proteins, fat, carbohydrates, calories, id, isBun = false } = props;
	const [isOpenModal, setIsOpenModal] = useState(false);

	const onOpenModal = useCallback(() => {
		setIsOpenModal(true);
		window.history.pushState(null, '', getRouteIngredients(id));
	}, []);

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false);
		window.history.back();
	}, []);

	const [{ opacity }, refDrag] = useDrag({
		type: 'ingredient',
		item: {
			name,
			image,
			price,
			_id: id,
			idKey: uuidv4(),
			isBun,
		},
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.5 : 1,
		}),
	});

	return (
		<>
			<div className={cls.card} onClick={onOpenModal} ref={refDrag} style={{ opacity }}>
				{Boolean(count) && <Counter count={count} size='default' extraClass='m-1' />}
				<img className={cls.image} src={image} alt={name} />
				<div className={cls.price}>
					<p className={'text text_type_digits-default'}>{price}</p>
					<CurrencyIcon type='primary' />
				</div>
				<p className={`${cls.description} text text_type_main-default`}>{name}</p>
			</div>
			<ModalIngredientData
				isOpen={isOpenModal}
				onClose={onCloseModal}
				fat={fat}
				carbohydrates={carbohydrates}
				proteins={proteins}
				calories={calories}
				name={name}
				image={image}
			/>
		</>
	);
});

CardIngredient.displayName = 'CardIngredient';
