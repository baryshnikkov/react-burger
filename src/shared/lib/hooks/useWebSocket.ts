import { useEffect, useState } from 'react'

interface UseWebSocketProps {
	url: string;
	production?: boolean;
}

export const useWebSocket = (props: UseWebSocketProps) => {
	const { url, production = false } = props
	const [data, setData] = useState<any>()

	useEffect(() => {
		const socket = new WebSocket(url)

		const handleOpen = () => {
			console.log('Соединение установлено')
		}

		const handleMessage = (event: any) => {
			if (production) {
				console.log(`Получено сообщение: ${event.data}`)
			}
			setData(JSON.parse(event.data))
		}

		const handleError = (error: any) => {
			console.log(`Ошибка: ${error.message}`)
		}

		const handleClose = () => {
			console.log('Соединение закрыто')
		}

		socket.addEventListener('message', handleMessage)

		if (production) {
			socket.addEventListener('open', handleOpen)
			socket.addEventListener('close', handleClose)
			socket.addEventListener('error', handleError)
		}

		return () => {
			socket.removeEventListener('message', handleMessage)

			if (production) {
				socket.removeEventListener('open', handleOpen)
				socket.removeEventListener('close', handleClose)
				socket.removeEventListener('error', handleError)
			}

			if (socket) {
				socket.close()
			}
		}
	}, [])

	return data
}
