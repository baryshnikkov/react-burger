import { useWebSocket } from "@/shared/lib/hooks/useWebSocket";
import { memo } from "react";
import { OrderCard } from "../OrderCard/OrderCard";
import cls from "./OrderList.module.css";
import { Loader } from "@/shared/ui/Loader";
import { OrderAnswer } from "../../model/types/order";

interface OrderListProps {
	accessToken: string;
}

export const OrderList = memo((props: OrderListProps) => {
	const { accessToken } = props;
	const data = useWebSocket({
		url: `wss://norma.nomoreparties.space/orders?token=${accessToken}`,
	});

	if (!data) {
		return <Loader isCenter={true} />;
	}

	console.log(data);

	return (
		<div className={cls.OrderList}>
			{data.reverse().map((el: OrderAnswer) => (
				<OrderCard
					key={el._id}
					number={el.number}
					name={el.name}
					createdAt={el.createdAt}
					status={el.status}
					ingredientsOrder={el.ingredients}
					id={el._id}
				/>
			))}
		</div>
	);
});
