import { memo, useCallback, useMemo, useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { type Ingredient, useIngredients } from '@/entities/ListIngredients';
import { calculateDate } from '@/shared/lib/helpers/calculateDate';
import { calculatePrice } from '@/shared/lib/helpers/calculatePrice';
import { IngredientPictures } from '../IngredientPictures/IngredientPictures';
import cls from './OrderCard.module.css';
import { ModalOwnOrderDetails } from '@/entities/OrderDetails';

interface OrderCardProps {
	number: number;
	name: string;
	status: string;
	createdAt: string;
	ingredientsOrder: string[];
	id: string;
	pathname: string;
}

export const OrderCard = memo((props: OrderCardProps) => {
	const { number, name, status, createdAt, ingredientsOrder, id, pathname } = props;
	const { data: ingredientsList } = useIngredients(null);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false);
		window.history.back();
	}, []);

	const onOpenModal = () => {
		setIsOpenModal(true);
		window.history.pushState(null, '', pathname + '/' + id);
	};

	const { interval, time, gmt } = useMemo(() => {
		return calculateDate(createdAt);
	}, [createdAt]);

	const { images, price } = useMemo(() => {
		return calculatePrice<Ingredient>({
			ingredientsOrder,
			ingredientsList: ingredientsList?.data!,
		});
	}, [ingredientsList, ingredientsOrder]);

	return (
		<>
			<div className={cls.OrderCard} onClick={onOpenModal}>
				<div className={cls.orderDetails}>
					<p className='text text_type_digits-default'>#{number}</p>
					<p className='text text_type_main-default text_color_inactive'>
						{`${interval}, ${time} i-GMT${gmt}`}
					</p>
				</div>
				<p className='text text_type_main-medium'>{name}</p>
				{location.pathname === '/profile/orders' && (
					<div className='text text_type_main-default'>
						{status === 'done' && <div style={{ color: '#0CC' }}>Выполнен</div>}
						{status === 'created' && <div>Создан</div>}
						{status === 'pending' && <div>Готовится</div>}
					</div>
				)}
				<div className={cls.orderDescription}>
					<IngredientPictures images={images} />
					<div className={cls.orderCost}>
						<p className='text text_type_digits-default'>{price}</p>
						<CurrencyIcon type='primary' />
					</div>
				</div>
			</div>
			<ModalOwnOrderDetails
				isOpen={isOpenModal}
				onClose={onCloseModal}
				gmt={gmt}
				interval={interval}
				name={name}
				number={number}
				price={price}
				status={status}
				time={time}
				ingredientsList={ingredientsList?.data!}
				ingredientsOrder={ingredientsOrder}
			/>
		</>
	);
});

OrderCard.displayName = 'OrderCard';
