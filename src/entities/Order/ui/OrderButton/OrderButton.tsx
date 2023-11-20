import { memo, useCallback, useState } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import cls from './OrderButton.module.css';
import { cn } from '@/shared/lib/helpers/classNames';
import { useSelector } from 'react-redux';
import { getPrice } from '../../model/selectors/getPrice';
import { getIsEmpty } from '../../model/selectors/getIsEmpty';
import { ModalOrderDetails } from '../ModalOrderDetails/ModalOrderDetails';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { setOrder } from '../../model/services/setOrder';
import { getBun } from '../../model/selectors/getBun';
import { getToppings } from '../../model/selectors/getToppings';
import { getAccessToken, getIsAuth } from '@/entities/User';
import { getIsLoadingOrder } from '../../model/selectors/getIsLoadingOrder';
import { useNavigate } from 'react-router-dom';
import { getRouteLogin } from '@/shared/const/router';
import { amountIngredientsActions } from '@/entities/CardsIngredients';

interface OrderButtonProps {
	className?: string;
}

export const OrderButton = memo((props: OrderButtonProps) => {
	const { className } = props;
	const price = useSelector(getPrice);
	const isEmpty = useSelector(getIsEmpty);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const dispatch = useAppDispatch();
	const bun = useSelector(getBun);
	const toppings = useSelector(getToppings);
	const accessToken = useSelector(getAccessToken);
	const isLoading = useSelector(getIsLoadingOrder);
	const isAuth = useSelector(getIsAuth);
	const navigate = useNavigate();

	const onOpenModal = () => {
		const ingredients: string[] = [];

		ingredients.push(bun?._id!);
		toppings.forEach((ingredient) => {
			ingredients.push(ingredient._id);
		});
		ingredients.push(bun?._id!);

		if (accessToken) {
			dispatch(setOrder({ ingredients, accessToken }));
			dispatch(amountIngredientsActions.clearAmountIngredients());
		}
		setIsOpenModal(true);
	};

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false);
	}, []);

	const onNavigate = (path: string) => () => {
		navigate(path);
	};

	return (
		<>
			<div className={cn(cls.OrderButton, {}, [className])}>
				<div className={cls.price}>
					<p className='text text_type_digits-medium'>{price}</p>
					<CurrencyIcon type='primary' />
				</div>

				<Button
					id='checkout'
					htmlType='button'
					type='primary'
					size='medium'
					onClick={isAuth ? onOpenModal : onNavigate(getRouteLogin())}
					disabled={isEmpty}
				>
					{isLoading ? 'Загрузка...' : 'Оформить заказ'}
				</Button>
			</div>
			<ModalOrderDetails isOpen={isOpenModal} onClose={onCloseModal} />
		</>
	);
});

OrderButton.displayName = 'OrderButton';
