import { type ReactNode } from 'react';

import { cn } from '@/shared/lib/helpers/classNames';

import cls from './Page.module.css';

interface PageProps {
	children: ReactNode;
	className?: string;
}

export const Page = (props: PageProps) => {
	const { children, className } = props;

	return <main className={cn(cls.Page, {}, [className])}>{children}</main>;
};

Page.displayName = 'Page';
