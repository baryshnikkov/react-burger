import { memo, Suspense } from 'react';

import { cn } from '@/shared/lib/helpers/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';

import { IngredientDetailsAsync } from '../ModalContainer/IngredientDetails.async';

interface ModalIngredientDataProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
	proteins: number;
	fat: number;
	carbohydrates: number;
	calories: number;
	image: string;
	name: string;
}

export const ModalIngredientData = memo((props: ModalIngredientDataProps) => {
	const { className, isOpen, onClose, calories, carbohydrates, fat, proteins, name, image } = props;

	if (!isOpen) {
		return null;
	}

	return (
		<Modal className={cn('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
			<Suspense fallback={<Loader />}>
				<IngredientDetailsAsync
					calories={calories}
					carbohydrates={carbohydrates}
					fat={fat}
					proteins={proteins}
					name={name}
					image={image}
				/>
			</Suspense>
		</Modal>
	);
});

ModalIngredientData.displayName = 'ModalIngredientData';
