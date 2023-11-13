import cls from "./OrderStatistics.module.css";

interface OrderStatisticsProps {
	total: number;
	totalToday: number;
	isReady: string[];
	isInProcess: string[];
}

export const OrderStatistics = (props: OrderStatisticsProps) => {
	const { total, totalToday, isReady, isInProcess } = props;
	return (
		<div className={cls.OrderStatistics}>
			<div className={cls.orderNumbers}>
				<div className={cls.numbersBlock}>
					<p className="text text_type_main-medium">Готовы:</p>
					<div className={cls.numbersList} style={{ color: "#0CC" }}>
						{isReady.map((el: any) => (
							<p
								className="text text_type_digits-default"
								key={el}
							>{`#${el}`}</p>
						))}
					</div>
				</div>
				<div className={cls.numbersBlock}>
					<p className="text text_type_main-medium">В работе:</p>
					<div className={cls.numbersList}>
						{isInProcess.map((el: any) => (
							<p
								className="text text_type_digits-default"
								key={el}
							>{`#${el}`}</p>
						))}
					</div>
				</div>
			</div>
			<div className="row">
				<p className="text text_type_main-medium">
					Выполнено за все время:
				</p>
				<p className="text text_type_digits-large">{total}</p>
			</div>
			<div className="row">
				<p className="text text_type_main-medium">
					Выполнено за сегодня:
				</p>
				<p className="text text_type_digits-large">{totalToday}</p>
			</div>
		</div>
	);
};
