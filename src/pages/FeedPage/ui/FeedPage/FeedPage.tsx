import { memo } from 'react';
import { useSelector } from 'react-redux';

import { Page } from '@/widgets/Page';

import { OrderList, getStatistic } from '@/entities/Order';

import { Loader } from '@/shared/ui/Loader';

import { OrderStatistics } from '../OrderStatistics/OrderStatistics';

import cls from './FeedPage.module.css';

const FeedPage = memo(() => {
	const statisticData = useSelector(getStatistic);

	return (
		<Page>
			<div className={cls.FeedPage}>
				<h1 className='text text_type_main-large'>Лента заказов</h1>
				<div className={cls.content}>
					<OrderList urlWebSocket='wss://norma.nomoreparties.space/orders/all' />
					{statisticData
						? (
							<OrderStatistics
								total={statisticData.total}
								totalToday={statisticData.totalToday}
								isReady={statisticData.isReady}
								isInProcess={statisticData.isInProcess}
							/>
						)
						: (
							<Loader isCenter={true} />
						)}
				</div>
			</div>
		</Page>
	);
});

export default FeedPage;

FeedPage.displayName = 'FeedPage';
