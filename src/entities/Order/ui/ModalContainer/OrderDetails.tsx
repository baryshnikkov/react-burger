import { cn } from "@/shared/lib/helpers/classNames";
import { memo } from "react";
import cls from "./OrderDetails.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import BGLarge from "@/shared/assets/order-bg-large.svg";
import BGMedium from "@/shared/assets/order-bg-medium.svg";
import BGSmall from "@/shared/assets/order-bg-small.svg";

export interface OrderDetailsProps {
	className?: string;
}

const OrderDetails = memo((props: OrderDetailsProps) => {
	const { className } = props;

	return (
		<div className={cn(cls.OrderDetails, {}, [className])}>
			<p className="text text_type_digits-large">1212mock</p>

			<p className={"text text_type_main-medium mt-8"}>
				идентификатор заказа
			</p>

			<div className={cls.wrapper}>
				<BGLarge className={cn(cls.icon, {}, [cls.icon_large])} />
				<BGMedium className={cn(cls.icon, {}, [cls.icon_medium])} />
				<BGSmall className={cn(cls.icon, {}, [cls.icon_small])} />
				<CheckMarkIcon type={"primary"} />
			</div>

			<p className={"text text_type_main-small mb-2"}>
				Ваш заказ начали готовить
			</p>

			<p className="text text_type_main-small text_color_inactive">
				Дождитесь готовности на орбитальной станции
			</p>
		</div>
	);
});

export default OrderDetails;
