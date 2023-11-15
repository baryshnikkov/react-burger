import {
	type MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

interface UseModalProps {
	onClose?: () => void;
	isOpen?: boolean;
	delayClose?: number;
	delayOpen?: number;
}

export function useModal (props: UseModalProps) {
	const { onClose, isOpen, delayClose = 300, delayOpen = 100 } = props
	const [isClosing, setIsClosing] = useState(false)
	const [isOpening, setIsOpening] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const timerRefClose = useRef() as MutableRefObject<
	ReturnType<typeof setTimeout>
	>
	const timerRefOpen = useRef() as MutableRefObject<
	ReturnType<typeof setTimeout>
	>

	const close = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRefClose.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
				setIsOpening(false)
				setIsMounted(false)
			}, delayClose)
		}
	}, [delayClose, onClose])

	const open = useCallback(() => {
		setIsMounted(true)
		timerRefOpen.current = setTimeout(() => {
			setIsOpening(true)
		}, delayOpen)
	}, [])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close()
			}
		},
		[close],
	)

	useEffect(() => {
		if (isOpen) {
			open()
		}
	}, [isOpen])

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown)

		return () => {
			window.removeEventListener('keydown', onKeyDown)
			clearTimeout(timerRefClose.current)
			clearTimeout(timerRefOpen.current)
		}
	}, [isOpen, onKeyDown])

	return {
		isClosing,
		isOpening,
		isMounted,
		close,
	}
}
