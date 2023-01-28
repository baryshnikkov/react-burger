import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import NavigationLink from './components/navigation-link';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        <div className={styles.menu}>
          <NavigationLink Icon={BurgerIcon} text='Конструктор' pathName={'/'} />

          <NavigationLink Icon={ListIcon} text='Лента заказов' pathName={'/empty'} />
        </div>

        <div className={styles.logo}> <Logo /> </div>

        <NavigationLink Icon={ProfileIcon} text='Личный кабинет' pathName={'/profile'} />

      </nav>
    </header>
  );
}

export default AppHeader;
