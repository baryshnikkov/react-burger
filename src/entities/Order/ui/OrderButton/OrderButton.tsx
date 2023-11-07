import { memo, useCallback, useState } from "react";
import {
	Button,
	CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./OrderButton.module.css";
import { cn } from "@/shared/lib/helpers/classNames";
import { useSelector } from "react-redux";
import { getPrice } from "../../model/selectors/getPrice";
import { getIsEmpty } from "../../model/selectors/getIsEmpty";
import { ModalOrderDetails } from "../ModalOrderDetails/ModalOrderDetails";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { setOrder } from "../../model/services/setOrder";
import { getBun } from "../../model/selectors/getBun";
import { getToppings } from "../../model/selectors/getToppings";
import { getAccessToken } from "@/entities/User";
import { getIsLoadingOrder } from "../../model/selectors/getIsLoadingOrder";

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

	const onOpenModal = () => {
		const ingredients: string[] = [];

		ingredients.push(bun?._id!);
		toppings.forEach((ingredient) => {
			ingredients.push(ingredient._id);
		});

		if (accessToken) {
			const response = dispatch(setOrder({ ingredients, accessToken }));
		}
		setIsOpenModal(true);
	};

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false);
	}, []);

	return (
		<>
			<div className={cn(cls.OrderButton, {}, [className])}>
				<div className={cls.price}>
					<p className="text text_type_digits-medium">{price}</p>
					<CurrencyIcon type="primary" />
				</div>

				<Button
					id="checkout"
					htmlType="button"
					type="primary"
					size="medium"
					onClick={onOpenModal}
					disabled={isEmpty}
				>
					{isLoading ? "Загрузка..." : "Оформить заказ"}
				</Button>
			</div>
			<ModalOrderDetails isOpen={isOpenModal} onClose={onCloseModal} />
		</>
	);
});
function dispatch(setOrder: any) {
	throw new Error("Function not implemented.");
}
