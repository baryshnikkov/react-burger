import { memo } from 'react';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { cn } from '@/shared/lib/helpers/classNames';
import cls from './PageError.module.css';

interface PageErrorProps {
	className?: string;
}

const reloadPage = () => {
	location.reload();
};

export const PageError = memo((props: PageErrorProps) => {
	const { className } = props;

	return (
		<div className={cn(cls.PageError, {}, [className])}>
			<p className="text text_type_main-large">
				Произошла непредвиденная ошибка
			</p>
			<Button
				htmlType="button"
				type="primary"
				size="large"
				onClick={reloadPage}
			>
				Обновить страницу
			</Button>
		</div>
	);
});

PageError.displayName = 'PageError';
