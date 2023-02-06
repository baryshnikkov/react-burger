import styles from './navigation.module.css';
import { NavLink } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {LOGOUT_USER} from "../../../../../services/actions/userProcessing";

const Navigation = () => {
  const dispath = useDispatch();

  const link = {
    textDecoration: 'none',
    cursor: 'pointer',
    width: 'max-content',
  };
  const linkActive = {
    ...link,
    color: '#F2F2F3'
  };
  const linkInactive = {
    ...link,
    color: '#8585AD'
  };

  const handleClickExit = () => {
    dispath({
      type: LOGOUT_USER
    });
  };

  return (
    <>
      <nav className={`${styles.nav} text text_type_main-medium`}>
        <NavLink
          to={{ pathname: `/profile` }}
          style={({ isActive }) =>
            isActive ? linkActive : linkInactive
          }
        >
          Профиль
        </NavLink>
        <NavLink
          to={{ pathname: `/profile/orders` }}
          style={({ isActive }) =>
            isActive ? linkActive : linkInactive
          }
        >
          История заказов
        </NavLink>
        <div style={linkInactive} onClick={handleClickExit}>
          Выход
        </div>
      </nav>
    </>
  );
};

export default Navigation;
