import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { memo } from 'react';

import { type Ingredient } from '@/entities/ListIngredients';

import { cn } from '@/shared/lib/helpers/classNames';

import { IngredientsDetails } from '../IngredientsDetails/IngredientsDetails';

import cls from './OwnOrderDetails.module.css';

export interface OwnOrderDetailsProps {
	number: number;
	name: string;
	status: string;
	interval: string;
	time: string;
	gmt: number;
	price: number;
	isModal?: boolean;
	ingredientsList: Ingredient[];
	ingredientsOrder: string[];
}

const OwnOrderDetails = memo((props: OwnOrderDetailsProps) => {
	const {
		number,
		name,
		status,
		interval,
		time,
		gmt,
		price,
		ingredientsList,
		ingredientsOrder,
		isModal = true,
	} = props;

	return (
		<div className={cn(cls.OwnOrderDetails, { [cls.modal]: isModal }, [])}>
			<p className={`${cls.number} text text_type_digits-default`}>#{number}</p>
			<p className={`${cls.title} text text_type_main-medium`}>{name}</p>
			<div className={`${cls.status} text text_type_main-default`}>
				{status === 'done' && <div style={{ color: '#0CC' }}>Выполнен</div>}
				{status === 'created' && <div>Создан</div>}
				{status === 'pending' && <div>Готовится</div>}
			</div>
			<p className='text text_type_main-medium'>Состав:</p>
			<div className={cls.ingredients}>
				{ingredientsOrder.map((id: string, index: number) => (
					<IngredientsDetails key={index} id={id} ingredientsList={ingredientsList} />
				))}
			</div>
			<div className={cls.description}>
				<p className='text text_type_main-default text_color_inactive'>{`${interval}, ${time} i-GMT${gmt}`}</p>
				<div className={cls.price}>
					<p className='text text_type_digits-default'>{price}</p>
					<CurrencyIcon type='primary' />
				</div>
			</div>
		</div>
	);
});

export default OwnOrderDetails;

OwnOrderDetails.displayName = 'OwnOrderDetails';
