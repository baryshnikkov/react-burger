import React, { useEffect } from 'react';

import styles from './burger-constructor.module.css';

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { productsForConstructorContext } from '../../services/app-context';

function BurgerConstructor() {
  const [isOpened, setIsOpened] = React.useState(false);
  const { productsForConstructorState, productsForConstructorDispatcher } = React.useContext(productsForConstructorContext);

  const closeOrderDetails = () => {
    setIsOpened(false);
  };

  // error 400
  const openOrderDetails = () => {
    const apiUrl = 'https://norma.nomoreparties.space/api/orders';
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ingredients": ["609646e4dc916e00276b286e", "609646e4dc916e00276b2870"]
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((data) => productsForConstructorDispatcher({ type: 'oderNumber', payload: 'data' }))
      .then(() => setIsOpened(true))
      .catch((err) => console.log(`Error: ${err}`));
  };

  // временная функция
  const totalCalculation = () => {
    let count = 0;
    productsForConstructorState.other.forEach(el => {
      count += el['price'];
    });
    count += productsForConstructorState.bun['price'];
    return count;
  }

  return (
    <>
      <div className={[styles.container, 'mt-25'].join(' ')}>
        {productsForConstructorState.bun &&
          <ConstructorElement
            type="top"
            isLocked={true}
            text={productsForConstructorState.bun['name'] + ' (верх)'}
            price={productsForConstructorState.bun['price']}
            thumbnail={productsForConstructorState.bun['image']}
          />}

        <div className={styles.ingredients}>
          {productsForConstructorState.other.map(el => (
            <div className={styles.card} key={el['_id']}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={el['name']}
                price={el['price']}
                thumbnail={el['image']}
              />
            </div>
          ))}
        </div>

        {productsForConstructorState.bun &&
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={productsForConstructorState.bun['name'] + ' (низ)'}
            price={productsForConstructorState.bun['price']}
            thumbnail={productsForConstructorState.bun['image']}
          />}

        <div className={styles.oder}>
          <div className={styles.price}>
            <p className="text text_type_digits-medium">{totalCalculation()}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button id="checkout" htmlType="button" type="primary" size="medium" onClick={openOrderDetails}>
            Оформить заказ
          </Button>
        </div>

      </div>
      {isOpened &&
        <Modal closeModal={closeOrderDetails}>
          <OrderDetails />
        </Modal>}
    </>
  );
}

export default BurgerConstructor;
