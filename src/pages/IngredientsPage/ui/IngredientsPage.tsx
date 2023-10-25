import { memo, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IngredientDetails } from "@/entities/CardsIngredients";
import { Ingredient, useIngredients } from "@/entities/ListIngredients";
import { Page } from "@/widgets/Page";
import { PageLoader } from "@/widgets/PageLoader";

const IngredientsPage = memo(() => {
	const { data: ingredients, isLoading } = useIngredients(null);
	const { id } = useParams();
	const [ingredient, setIngredient] = useState<Ingredient>();

	const getIngredient = useCallback(() => {
		return ingredients?.data.filter((el) => {
			return id === el._id;
		})[0];
	}, [id, ingredients]);

	useEffect(() => {
		setIngredient(getIngredient());
	}, [id, ingredients]);

	if (isLoading || !ingredient) {
		return <PageLoader />;
	}

	return (
		<Page>
			<IngredientDetails
				isModal={false}
				proteins={ingredient?.proteins}
				fat={ingredient?.fat}
				carbohydrates={ingredient?.carbohydrates}
				calories={ingredient?.calories}
				name={ingredient?.name}
				image={ingredient?.image}
			/>
		</Page>
	);
});

export default IngredientsPage;
