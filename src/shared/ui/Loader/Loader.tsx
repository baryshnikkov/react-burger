import "./Loader.css";
import { memo } from "react";
import { cn } from "@/shared/lib/classNames/classNames";

interface LoaderProps {
	className?: string;
}

export const Loader = memo((props: LoaderProps) => {
	const { className } = props;

	return (
		<div className={cn("lds-roller", {}, [className])}>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	);
});
