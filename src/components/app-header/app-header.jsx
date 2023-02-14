import styles from './app-header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import NavigationLink from './components/navigation-link';
import {useLocation, useNavigate} from "react-router-dom";

function AppHeader() {
  const pathLocation = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.menu}>
          <div className={styles.link} onClick={() => navigate('/')}>
            <BurgerIcon type={'/' === pathLocation.pathname ? 'primary' : 'secondary'}/>
            <p className={`text text_type_main-default ${'/' === pathLocation.pathname ? '' : 'text_color_inactive'}`}>
              Конструктор
            </p>
          </div>

          <div className={styles.link} onClick={() => navigate('/empty')}>
            <ListIcon
              type={
                '/empty' === pathLocation.pathname ||
                pathLocation.pathname.includes('/empty') ?
                'primary' :
                'secondary'
              }/>
            <p
              className={
                `text text_type_main-default ${'/empty' === pathLocation.pathname ||
                pathLocation.pathname.includes('/empty') ?
                '' :
                'text_color_inactive'}`
              }>
              Лента заказов
            </p>
          </div>
        </div>

        <div className={styles.logo}><Logo/></div>

        <div className={styles.link} onClick={() => navigate('/profile')}>
          <ProfileIcon
            type={
              '/profile' === pathLocation.pathname ||
              pathLocation.pathname.includes('/profile') ?
              'primary' :
              'secondary'
            }/>
          <p
            className={
              `text text_type_main-default ${'/profile' === pathLocation.pathname ||
              pathLocation.pathname.includes('/profile') ?
              '' :
              'text_color_inactive'}`
            }>
            Личный кабинет
          </p>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
