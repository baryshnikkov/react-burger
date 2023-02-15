import React from 'react';
import styles from './order-modal.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const OrderModal = () => {
  const ingredient = (
    <div className={styles.ingredient}>
      <div className={styles.imgBorder}>
        <img className={styles.img} src="https://i.ytimg.com/vi/s7fZ-P2doIw/maxresdefault.jpg" alt="lis"/>
      </div>
      <p className={`${styles.name} text text_type_main-default`}>
        Флюоресцентная булка R2-D3
      </p>
      <div className={styles.price}>
        <p className="text text_type_digits-default">
          2
        </p>
        <p className="text text_type_main-default">
          x
        </p>
        <p className="text text_type_digits-default">
          20
        </p>
        <CurrencyIcon type="primary"/>
      </div>
    </div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={`${styles.number} text text_type_digits-default`}>
          #034533
        </p>
        <p className={`${styles.title} text text_type_main-medium`}>
          Black Hole Singularity острый бургер
        </p>
        <p className={`${styles.status} text text_type_main-default`}>
          Выполнен
        </p>
        <p className="text text_type_main-medium">
          Состав:
        </p>
        <div className={styles.ingredients}>
          {ingredient}
          {ingredient}
          {ingredient}
          {ingredient}
          {ingredient}
          {ingredient}
        </div>
        <div className={styles.description}>
          <p className='text text_type_main-default text_color_inactive'>
            Сегодня, 16:20 i-GMT+3
          </p>
          <div className={styles.price}>
            <p className="text text_type_digits-default">
              40
            </p>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
