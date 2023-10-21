import { memo } from "react";

import { Loader } from "@/shared/ui/Loader";
import cls from "./PageLoader.module.css";
import { cn } from "@/shared/lib/helpers/classNames";

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
	<div className={cn(cls.PageLoader, {}, [className])}>
		<Loader />
	</div>
));
