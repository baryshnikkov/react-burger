import { memo, Suspense } from 'react';

import { cn } from '@/shared/lib/helpers/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import { type OwnOrderDetailsProps } from '../ModalContainer/OwnOrderDetails';
import { OwnOrderDetailsAsync } from '../ModalContainer/OwnOrderDetails.async';

interface ModalOwnOrderDetailsProps extends OwnOrderDetailsProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const ModalOwnOrderDetails = memo((props: ModalOwnOrderDetailsProps) => {
	const {
		className,
		isOpen,
		onClose,
		number,
		name,
		status,
		interval,
		time,
		gmt,
		price,
		ingredientsList,
		ingredientsOrder,
	} = props;

	if (!isOpen) {
		return null;
	}

	return (
		<Modal className={cn('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
			<Suspense fallback={<Loader />}>
				<OwnOrderDetailsAsync
					number={number}
					name={name}
					status={status}
					interval={interval}
					time={time}
					gmt={gmt}
					price={price}
					ingredientsList={ingredientsList}
					ingredientsOrder={ingredientsOrder}
				/>
			</Suspense>
		</Modal>
	);
});

ModalOwnOrderDetails.displayName = 'ModalOwnOrderDetails';
