import { type ReactNode, useMemo } from 'react';
import { useModal } from '@/shared/lib/hooks/useModal';
import { type Mods, cn } from '@/shared/lib/helpers/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose, lazy } = props;
	const { isClosing, isOpening, isMounted, close } = useModal({
		onClose,
		isOpen,
	});

	const modsModal: Mods = useMemo(
		() => ({
			[cls.opened]: isOpen,
			[cls.isClosing]: isClosing,
		}),
		[isClosing, isOpen]
	);

	const modsContent: Mods = useMemo(
		() => ({
			[cls.isOpening]: isOpening,
		}),
		[isOpening]
	);

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal element={document.getElementById('app') ?? document.body}>
			<div className={cn(cls.Modal, modsModal, [className])}>
				<div className={cn(cls.content, modsContent, [])}>
					<div className={cls.close} onClick={close}>
						<CloseIcon type="primary" />
					</div>
					{children}
				</div>
				<Overlay onClick={close} />
			</div>
		</Portal>
	);
};
