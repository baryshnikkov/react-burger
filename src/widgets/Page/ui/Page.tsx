import { ReactNode } from "react";
import cls from "./Page.module.css";
import { cn } from "@/shared/lib/helpers/classNames";

interface PageProps {
	children: ReactNode;
	className?: string;
}

export const Page = (props: PageProps) => {
	const { children, className } = props;

	return <main className={cn(cls.Page, {}, [className])}>{children}</main>;
};
