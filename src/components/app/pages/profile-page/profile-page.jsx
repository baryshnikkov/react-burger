import { Outlet } from 'react-router-dom';
import Navigation from './navigation/navigation';

import styles from './profile-page.module.css';

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <Navigation />
        <p className={`${styles.description} text text_type_main-default text_color_inactive`}>
          В этом разделе вы можете изменить&nbsp;свои персональные данные
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
