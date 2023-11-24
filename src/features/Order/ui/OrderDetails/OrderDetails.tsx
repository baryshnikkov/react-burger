import { memo, useEffect, useState } from 'react';

import { type Ingredient } from '@/entities/ListIngredients';

import { calculateDate } from '@/shared/lib/helpers/calculateDate';
import { calculatePrice } from '@/shared/lib/helpers/calculatePrice';
import { useWebSocket } from '@/shared/lib/hooks/useWebSocket';
import { Loader } from '@/shared/ui/Loader';

import { type OrderAnswer } from '../../model/types/order';
import OwnOrderDetails from '../ModalOwnContainer/OwnOrderDetails';

interface OrderDetailsProps {
	url: string;
	id: string;
	ingredientsList: Ingredient[];
}

const OrderDetails = memo((props: OrderDetailsProps) => {
	const { url, id, ingredientsList } = props;
	const [ingredientsOrder, setIngredientsOrder] = useState<OrderAnswer>();
	const [interval, setInterval] = useState<string>('');
	const [time, setTime] = useState<string>('');
	const [gmt, setGmt] = useState<number>(0);
	const [price, setPrice] = useState<number>(0);
	const data = useWebSocket({
		url,
	});

	useEffect(() => {
		const order = data?.orders?.find((order: OrderAnswer) => {
			return order._id === id;
		});

		setIngredientsOrder(order);
	}, [data, id]);

	useEffect(() => {
		if (ingredientsOrder) {
			const { time, interval, gmt } = calculateDate(ingredientsOrder.createdAt);

			setTime(time);
			setInterval(interval);
			setGmt(gmt);

			const { price } = calculatePrice<Ingredient>({
				ingredientsOrder: ingredientsOrder.ingredients,
				ingredientsList,
			});

			setPrice(price);
		}
	}, [ingredientsList, ingredientsOrder]);

	if (!data || !ingredientsOrder) {
		return <Loader isCenter={true} />;
	}

	return (
		<OwnOrderDetails
			name={ingredientsOrder.name}
			number={ingredientsOrder.number}
			gmt={gmt}
			interval={interval}
			price={price}
			status={ingredientsOrder.status}
			time={time}
			ingredientsList={ingredientsList}
			ingredientsOrder={ingredientsOrder.ingredients}
			isModal={false}
		/>
	);
});

export default OrderDetails;

OrderDetails.displayName = 'OrderDetails';
