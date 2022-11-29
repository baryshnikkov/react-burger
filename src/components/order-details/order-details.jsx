import React from 'react';

import styles from './order-details.module.css';

import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';

function OrderDetails() {
  const [isOpened, setIsOpened] = React.useState(true);

  const closeOrderDetails = () => {
    setIsOpened(false);
  };

  document.querySelector('#checkout').addEventListener('click', () => {
    setIsOpened(true);
  });

  return (
    <>
      {isOpened &&
        <Modal closeModal={closeOrderDetails}>
          <div className={styles.container}>
            <p className="text text_type_digits-large">034536</p>
            <p className={['text', 'text_type_main-default', 'mt-8'].join(' ')}>
              идентификатор заказа
            </p>
            <div className={['mt-15', 'mb-15'].join(' ')}>
              <CheckMarkIcon type="primary" />
            </div>
            <p className={['text', 'text_type_main-small', 'mb-2'].join(' ')}>
              Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-small text_color_inactive">
              Дождитесь готовности на орбитальной станции
            </p>
          </div>
        </Modal>
      }
    </>
  )
}

export default OrderDetails;
