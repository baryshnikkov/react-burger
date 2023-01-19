import { useSelector } from 'react-redux';

import styles from './order-details.module.css';

import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const getOder = store => store.oder;

function OrderDetails() {
  const { oderNumber } = useSelector(getOder);

  return (
    <div className={styles.container}>
      <p className="text text_type_digits-large">{oderNumber}</p>

      <p className={'text text_type_main-default mt-8'}>
        идентификатор заказа
      </p>

      <div className={'mt-15 mb-15'}>
        <CheckMarkIcon type="primary" />
      </div>

      <p className={'text text_type_main-small mb-2'}>
        Ваш заказ начали готовить
      </p>

      <p className="text text_type_main-small text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

export default OrderDetails;
