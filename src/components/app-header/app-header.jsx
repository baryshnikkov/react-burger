import styles from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import NavigationLink from './components/navigation-link';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        <div className={styles.menu}>
          <NavigationLink Icon={BurgerIcon} text='Конструктор' isActive={true} />

          <NavigationLink Icon={ListIcon} text='Лента заказов' isActive={false} />
        </div>

        <div className={styles.logo}> <Logo /> </div>

        <NavigationLink Icon={ProfileIcon} text='Личный кабинет' isActive={false} />

      </nav>
    </header>
  );
}

export default AppHeader;
