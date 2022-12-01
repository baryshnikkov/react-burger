import React, { useCallback, useEffect } from 'react';

import styles from './order-details.module.css';

import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderDetails() {
  return (
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
  )
}

export default OrderDetails;
