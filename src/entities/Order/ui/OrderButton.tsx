import { memo } from "react";
import {
	Button,
	CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./OrderButton.module.css";
import { cn } from "@/shared/lib/helpers/classNames";
import { useSelector } from "react-redux";
import { getPrice } from "../model/selectors/getPrice";
import { getIsEmpty } from "../model/selectors/getIsEmpty";

interface OrderButtonProps {
	className?: string;
}

export const OrderButton = memo((props: OrderButtonProps) => {
	const { className } = props;
	const price = useSelector(getPrice);
	const isEmpty = useSelector(getIsEmpty);

	return (
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
				onClick={() => console.log("click zakaz")}
				disabled={isEmpty}
			>
				Оформить заказ
			</Button>
		</div>
	);
});
