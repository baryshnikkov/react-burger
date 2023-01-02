import React from 'react';
import styles from './app.module.css';

import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (
    <header className={[styles.header, 'pt-4', 'pb-4'].join(' ')}>
      <nav className={styles.nav}>

        <div className={styles.menu}>
          <div className={[styles.link, 'pt-4', 'pr-5', 'pb-4'].join(' ')}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default">
              Конструктор
            </p>
          </div>
          <div className={[styles.link, 'pt-4', 'pr-5', 'pb-4', 'pl-5'].join(' ')}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </div>
        </div>

        <div className={styles.link}>
          <Logo />
        </div>

        <div className={[styles.link, 'pt-4', 'pb-4', 'pl-5'].join(' ')}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">
            Личный кабинет
          </p>
        </div>

      </nav>
    </header>
  );
}

export default AppHeader;
