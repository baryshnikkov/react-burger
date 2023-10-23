import { memo, useCallback, useState } from "react";
import {
	Counter,
	CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import cls from "./CardIngredient.module.css";
import { ModalIngredientData } from "../ModalIngredientData/ModalIngredientData";

interface CardIngredientProps {
	image: string;
	name: string;
	price: number;
	count?: number;
	proteins: number;
	fat: number;
	carbohydrates: number;
	calories: number;
}

export const CardIngredient = memo((props: CardIngredientProps) => {
	const {
		image,
		name,
		price,
		count = 0,
		proteins,
		fat,
		carbohydrates,
		calories,
	} = props;
	const [isOpenModal, setIsOpenModal] = useState(false);

	const onOpenModal = useCallback(() => {
		setIsOpenModal(true);
	}, []);

	const onCloseModal = useCallback(() => {
		setIsOpenModal(false);
	}, []);

	return (
		<>
			<div className={cls.card} onClick={onOpenModal}>
				{Boolean(count) && (
					<Counter count={count} size="default" extraClass="m-1" />
				)}
				<img className={cls.image} src={image} alt={name} />
				<div className={cls.price}>
					<p className={"text text_type_digits-default"}>{price}</p>
					<CurrencyIcon type="primary" />
				</div>
				<p className={`${cls.description} text text_type_main-default`}>
					{name}
				</p>
			</div>
			<ModalIngredientData
				isOpen={isOpenModal}
				onClose={onCloseModal}
				fat={fat}
				carbohydrates={carbohydrates}
				proteins={proteins}
				calories={calories}
				name={name}
				image={image}
			/>
		</>
	);
});
