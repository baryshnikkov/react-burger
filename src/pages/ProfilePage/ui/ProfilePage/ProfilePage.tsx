import { memo } from "react";
import cls from "./ProfilePage.module.css";
import { Page } from "@/widgets/Page";
import { ProfileNavigation } from "../ProfileNavigation/ProfileNavigation";
import { useLocation } from "react-router-dom";
import { getRouteProfile } from "@/shared/const/router";
import { ProfileForm } from "../ProfileForm/ProfileForm";

const ProfilePage = memo(() => {
	const pathLocation = useLocation();

	return (
		<Page className={cls.ProfilePage}>
			<ProfileNavigation path={pathLocation.pathname} />
			{pathLocation.pathname === getRouteProfile() ? (
				<ProfileForm />
			) : (
				<h1>ProfileOrders</h1>
			)}
		</Page>
	);
});

export default ProfilePage;
