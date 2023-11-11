import { memo } from "react";
import cls from "./ProfilePage.module.css";
import { Page } from "@/widgets/Page";
import { ProfileNavigation } from "../ProfileNavigation/ProfileNavigation";
import { useLocation } from "react-router-dom";
import { getRouteProfile } from "@/shared/const/router";
import { ProfileForm } from "../ProfileForm/ProfileForm";
import { OrderList } from "../OrderList/OrderList";
import { useSelector } from "react-redux";
import { getAccessToken } from "@/entities/User";
import { Loader } from "@/shared/ui/Loader";

const ProfilePage = memo(() => {
	const pathLocation = useLocation();
	const accessToken = useSelector(getAccessToken);

	const orderList = () => {
		if (accessToken) {
			return <OrderList accessToken={accessToken?.split(" ")[1]} />;
		}
		return <Loader isCenter={true} />;
	};

	return (
		<Page className={cls.ProfilePage}>
			<ProfileNavigation path={pathLocation.pathname} />
			{pathLocation.pathname === getRouteProfile() ? (
				<ProfileForm />
			) : (
				orderList()
			)}
		</Page>
	);
});

export default ProfilePage;
