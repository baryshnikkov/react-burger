import { memo } from "react";
import { Page } from "@/widgets/Page";
import cls from "./FeedDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useIngredients } from "@/entities/ListIngredients";
import { PageLoader } from "@/widgets/PageLoader";
import { OrderDetails } from "@/entities/OrderDetails";

const FeedDetailsPage = memo(() => {
	const { id } = useParams();
	const { data: ingredientsList } = useIngredients(null);

	if (!id || !ingredientsList) {
		return (
			<Page>
				<PageLoader />
			</Page>
		);
	}

	return (
		<Page className={cls.FeedDetailsPage}>
			<OrderDetails
				url="wss://norma.nomoreparties.space/orders/all"
				ingredientsList={ingredientsList.data}
				id={id}
			/>
		</Page>
	);
});

export default FeedDetailsPage;
