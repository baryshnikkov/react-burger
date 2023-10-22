import { ReactNode } from "react";
import cls from "./Page.module.css";

interface PageProps {
	children: ReactNode;
}

export const Page = (props: PageProps) => {
	const { children } = props;

	return <main className={cls.Page}>{children}</main>;
};
