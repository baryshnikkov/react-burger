import { cn } from "@/shared/lib/helpers/classNames";
import { memo } from "react";
import cls from "./ModalContainer.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export interface ModalContainerProps {
	className?: string;
	proteins: number;
	fat: number;
	carbohydrates: number;
	calories: number;
	name: string;
	image: string;
}

const ModalContainer = memo((props: ModalContainerProps) => {
	const { className, proteins, fat, carbohydrates, calories, image, name } =
		props;

	const displayEnergyValue = (text: string, value: number) => {
		return (
			<div className={cls.bju}>
				<p className="text text_type_main-default text_color_inactive">
					{text}
				</p>
				<p className="text text_type_main-default text_color_inactive">
					{value}
				</p>
			</div>
		);
	};

	return (
		<div className={cn(cls.ModalContainer, {}, [className])}>
			<p className={`${cls.title} text text_type_main-large`}>
				Детали ингредиента
			</p>

			<img className={cls.image} src={image} alt={name} />

			<p className={`${cls.name} text text_type_main-medium`}>{name}</p>

			<div className={cls.compound}>
				{displayEnergyValue("Калории,ккал", calories)}
				{displayEnergyValue("Белки, г", proteins)}
				{displayEnergyValue("Жиры, г", fat)}
				{displayEnergyValue("Углеводы, г", carbohydrates)}
			</div>
		</div>
	);
});

export default ModalContainer;
