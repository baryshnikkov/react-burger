import { memo, Suspense } from "react";
import { cn } from "@/shared/lib/helpers/classNames";
import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";
import { OrderDetailsAsync } from "../ModalContainer/OrderDetails.async";

interface ModalOrderDetails {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const ModalOrderDetails = memo((props: ModalOrderDetails) => {
	const { className, isOpen, onClose } = props;

	// TODO заменить null
	if (!isOpen) {
		return null;
	}

	return (
		<Modal
			className={cn("", {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<Suspense fallback={<Loader />}>
				<OrderDetailsAsync />
			</Suspense>
		</Modal>
	);
});
