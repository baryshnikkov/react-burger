export const calculateDate = (date: string) => {
	const currentDateObj = new Date()
	const currentGMT = currentDateObj.getTimezoneOffset() / 60
	const currentTime = currentDateObj.getTime()

	const year = Number(date.slice(0, 4))
	const month = Number(date.slice(5, 7)) - 1
	const day = Number(date.slice(8, 10))

	const orderDate = new Date(year, month, day)
	const orderTime = date.slice(11, 16)

	const differenceOfDays = Math.ceil(
		Math.abs(currentTime - orderDate.getTime()) / (1000 * 3600 * 24),
	)

	let interval

	if (differenceOfDays <= 1) {
		interval = 'Сегодня'
	} else if (differenceOfDays <= 2) {
		interval = 'Вчера'
	} else {
		interval = `${differenceOfDays - 1} суток назад`
	}

	return { interval, time: orderTime, gmt: currentGMT }
}
