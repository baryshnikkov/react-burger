interface CalculatePriceProps<T> {
	ingredientsOrder: string[];
	ingredientsList: T[];
}

export const calculatePrice = <T>(props: CalculatePriceProps<T>) => {
	const { ingredientsList, ingredientsOrder } = props
	const arrImages: string[] = []
	const arrPrice: number[] = []

	let bun: string = ''

	ingredientsList?.forEach((ingredientList: any) => {
		ingredientsOrder.forEach((ingredientOrder: string) => {
			if (ingredientList._id === ingredientOrder) {
				if (ingredientList.type === 'bun') {
					bun = ingredientList.image
					arrPrice.push(ingredientList.price)
				} else {
					arrImages.push(ingredientList.image)
					arrPrice.push(ingredientList.price)
				}
			}
		})
	})

	arrImages.push(bun)
	arrImages.unshift(bun)

	let price = 0
	if (arrPrice.length > 0) {
		price = arrPrice.reduce((a: number, b: number) => a + b)
	}

	return { images: arrImages, price }
}
