import { getAccessToken } from "@/entities/User";
import { Page } from "@/widgets/Page";
import { memo } from "react";
import { useSelector } from "react-redux";
import { PageLoader } from "@/widgets/PageLoader";
import { useParams } from "react-router-dom";
import { useIngredients } from "@/entities/ListIngredients";
import cls from "./ProfileOrdersDetailsPage.module.css";
import { OrderDetails } from "@/entities/OrderDetails";

const ProfileOrdersDetailsPage = memo(() => {
	const accessToken = useSelector(getAccessToken);
	const { id } = useParams();
	const { data: ingredientsList } = useIngredients(null);

	if (!accessToken || !id || !ingredientsList) {
		return (
			<Page>
				<PageLoader />
			</Page>
		);
	}

	return (
		<Page className={cls.ProfileOrdersDetailsPage}>
			<OrderDetails
				url={`wss://norma.nomoreparties.space/orders?token=${
					accessToken?.split(" ")[1]
				}`}
				id={id}
				ingredientsList={ingredientsList.data}
			/>
		</Page>
	);
});

export default ProfileOrdersDetailsPage;
