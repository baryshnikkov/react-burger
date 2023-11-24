import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { Page } from '@/widgets/Page';
import { PageLoader } from '@/widgets/PageLoader';

import { OrderDetails } from '@/features/Order';

import { useIngredients } from '@/entities/ListIngredients';

import cls from './FeedDetailsPage.module.css';

const FeedDetailsPage = memo(() => {
	const { id } = useParams();
	const { data: ingredientsList } = useIngredients(null);

	if (!id || !ingredientsList) {
		return (
			<Page>
				<PageLoader />
			</Page>
		);
	}

	return (
		<Page className={cls.FeedDetailsPage}>
			<OrderDetails
				url='wss://norma.nomoreparties.space/orders/all'
				ingredientsList={ingredientsList.data}
				id={id}
			/>
		</Page>
	);
});

export default FeedDetailsPage;

FeedDetailsPage.displayName = 'FeedDetailsPage';
