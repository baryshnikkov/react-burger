import styles from './navigation.module.css';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {logoutUser} from "../../../../../services/actions/userProcessing";

const Navigation = () => {
  const dispatch = useDispatch();
  const pathLocation = useLocation();
  const navigate = useNavigate();

  const cursor = {
    cursor: 'pointer'
  };

  const handleClickExit = () => {
    dispatch(logoutUser(localStorage.getItem('refreshToken')));
    navigate('/', {replace: true})
  };

  return (
    <>
      <nav className={`${styles.nav} text text_type_main-medium`}>
        <p
          className={
            `text text_type_main-medium ${styles.link}
            ${'/profile' === pathLocation.pathname ?
              '' :
              'text_color_inactive'}`
          }
          onClick={() => navigate('/profile')}
        >
          Профиль
        </p>
        <p
          className={
            `text text_type_main-medium ${styles.link}
            ${'/profile/orders' === pathLocation.pathname ?
              '' :
              'text_color_inactive'}`
          }
          onClick={() => navigate('/profile/orders')}
        >
          История заказов
        </p>
        <div className={`${styles.link} text_color_inactive`} onClick={handleClickExit}>
          Выход
        </div>
      </nav>
    </>
  );
};

export default Navigation;
