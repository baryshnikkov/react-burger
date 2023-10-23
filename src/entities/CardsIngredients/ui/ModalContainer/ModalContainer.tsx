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
	const { className, proteins, fat, carbohydrates, calories } = props;

	return <div className={cn(cls.ModalContainer, {}, [className])}>modal</div>;
});

export default ModalContainer;
