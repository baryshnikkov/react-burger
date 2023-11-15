import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { OrderList } from '@/entities/Order';
import { getAccessToken } from '@/entities/User';
import { getRouteProfile } from '@/shared/const/router';
import { Loader } from '@/shared/ui/Loader';
import { ProfileNavigation } from '../ProfileNavigation/ProfileNavigation';
import { ProfileForm } from '../ProfileForm/ProfileForm';
import cls from './ProfilePage.module.css';

const ProfilePage = memo(() => {
	const pathLocation = useLocation();
	const accessToken = useSelector(getAccessToken);

	const orderList = () => {
		if (accessToken) {
			return (
				<OrderList
					urlWebSocket={`wss://norma.nomoreparties.space/orders?token=${accessToken?.split(' ')[1]}`}
					isReverse={true}
				/>
			);
		}
		return <Loader isCenter={true} />;
	};

	return (
		<Page className={cls.ProfilePage}>
			<ProfileNavigation path={pathLocation.pathname} />
			{pathLocation.pathname === getRouteProfile() ? <ProfileForm /> : orderList()}
		</Page>
	);
});

export default ProfilePage;

ProfilePage.displayName = 'ProfilePage';
