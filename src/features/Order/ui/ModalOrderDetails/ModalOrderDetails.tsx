import { memo, Suspense } from 'react';

import { cn } from '@/shared/lib/helpers/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import { OrderDetailsAsync } from '../ModalContainer/OrderDetails.async';

interface ModalOrderDetailsProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const ModalOrderDetails = memo((props: ModalOrderDetailsProps) => {
	const { className, isOpen, onClose } = props;

	if (!isOpen) {
		return null;
	}

	return (
		<Modal className={cn('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
			<Suspense fallback={<Loader />}>
				<OrderDetailsAsync />
			</Suspense>
		</Modal>
	);
});

ModalOrderDetails.displayName = 'ModalOrderDetails';
