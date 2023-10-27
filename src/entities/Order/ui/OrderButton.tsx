import { memo } from "react";
import {
	Button,
	CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./OrderButton.module.css";
import { cn } from "@/shared/lib/helpers/classNames";

interface OrderButtonProps {
	className?: string;
}

export const OrderButton = memo((props: OrderButtonProps) => {
	const { className } = props;

	return (
		<div className={cn(cls.OrderButton, {}, [className])}>
			<div className={cls.price}>
				<p className="text text_type_digits-medium">mock price</p>
				<CurrencyIcon type="primary" />
			</div>

			<Button
				id="checkout"
				htmlType="button"
				type="primary"
				size="medium"
				onClick={() => console.log("click zakaz")}
			>
				mock text
			</Button>
		</div>
	);
});
