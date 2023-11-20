import './Loader.css';
import { memo } from 'react';

import { cn } from '@/shared/lib/helpers/classNames';

interface LoaderProps {
	className?: string;
	isCenter?: boolean;
}

export const Loader = memo((props: LoaderProps) => {
	const { className, isCenter = false } = props;

	return (
		<div className={cn('loader', { center: isCenter }, [className])}>
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

Loader.displayName = 'Loader';
