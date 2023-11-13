import { useLocation } from "react-router-dom";
import { useWebSocket } from "@/shared/lib/hooks/useWebSocket";
import cls from "./OrderList.module.css";
import { Loader } from "@/shared/ui/Loader";
import { OrderAnswer } from "../../model/types/order";
import { OrderCard } from "../OrderCard/OrderCard";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { orderActions } from "../../model/slice/orderSlice";

interface OrderListProps {
	urlWebSocket: string;
	isReverse?: boolean;
}

export const OrderList = (props: OrderListProps) => {
	const { urlWebSocket, isReverse = false } = props;
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();
	const data = useWebSocket({
		url: urlWebSocket,
	});

	useEffect(() => {
		if (data) {
			const isReady: any = [];
			const isInProcess: any = [];

			data.orders.forEach((order: any) => {
				if (order.status === "done") {
					isReady.push(order.number);
				} else {
					isInProcess.push(order.number);
				}
			});

			dispatch(
				orderActions.setStatistic({
					total: data.total,
					totalToday: data.totalToday,
					isReady: isReady.slice(0, 10),
					isInProcess,
				})
			);
		}
	}, [data]);

	if (!data?.success || !pathname) {
		return <Loader isCenter={true} />;
	}

	return (
		<div className={cls.OrderList}>
			{(isReverse ? data?.orders.reverse() : data?.orders).map(
				(el: OrderAnswer) => (
					<OrderCard
						key={el._id}
						number={el.number}
						name={el.name}
						createdAt={el.createdAt}
						status={el.status}
						ingredientsOrder={el.ingredients}
						id={el._id}
						pathname={pathname}
					/>
				)
			)}
		</div>
	);
};
