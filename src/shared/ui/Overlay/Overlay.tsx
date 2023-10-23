import { memo } from "react";
import { cn } from "@/shared/lib/helpers/classNames";
import cls from "./Overlay.module.css";

interface OverlayProps {
	className?: string;
	onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
	const { className, onClick } = props;

	return (
		<div onClick={onClick} className={cn(cls.Overlay, {}, [className])} />
	);
});
