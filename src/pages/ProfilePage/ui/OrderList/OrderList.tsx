import { useWebSocket } from "@/shared/lib/hooks/useWebSocket";
import { memo } from "react";
import { OrderCard } from "../OrderCard/OrderCard";
import cls from "./OrderList.module.css";
import { Loader } from "@/shared/ui/Loader";

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

	return (
		<div className={cls.OrderList}>
			{/* TODO */}
			{data.reverse().map((el: any) => (
				<OrderCard
					key={el._id}
					number={el.number}
					name={el.name}
					createdAt={el.createdAt}
					status={el.status}
					ingredientsOrder={el.ingredients}
				/>
			))}
		</div>
	);
});
