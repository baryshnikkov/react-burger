// TODO
export const calculatePrice = (
	ingredientsOrder: any,
	ingredientsList: any = []
) => {
	// TODO
	const arrImages: any = [];
	// TODO
	const arrPrice: any = [];
	// TODO
	ingredientsList = Array.from(ingredientsList);

	let bun: string = "";

	ingredientsList?.forEach((ingredientList: any) => {
		ingredientsOrder.forEach((ingredientOrder: any) => {
			if (ingredientList._id === ingredientOrder) {
				if (ingredientList.type === "bun") {
					bun = ingredientList.image;
					arrPrice.push(ingredientList.price);
				} else {
					arrImages.push(ingredientList.image);
					arrPrice.push(ingredientList.price);
				}
			}
		});
	});

	arrImages.push(bun);
	arrImages.unshift(bun);

	let price = 0;
	if (arrPrice.length) {
		price = arrPrice.reduce((a: number, b: number) => a + b);
	}

	return { images: arrImages, price };
};
