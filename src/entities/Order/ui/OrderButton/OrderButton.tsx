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

interface OrderButtonProps {
	className?: string;
}

export const OrderButton = memo((props: OrderButtonProps) => {
	const { className } = props;
	const price = useSelector(getPrice);
	const isEmpty = useSelector(getIsEmpty);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const onOpenModal = useCallback(() => {
		setIsOpenModal(true);
	}, []);

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
					Оформить заказ
				</Button>
			</div>
			<ModalOrderDetails isOpen={isOpenModal} onClose={onCloseModal} />
		</>
	);
});
