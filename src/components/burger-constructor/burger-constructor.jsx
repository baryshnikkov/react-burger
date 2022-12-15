import React from 'react';

import styles from './burger-constructor.module.css';
import { reduserOfProductsForConstructor, productsForConstructorInitialState, apiOder } from '../../utils/utils';
import { ProductsForConstructorContext } from '../../services/burger-constructor-context';

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';

function BurgerConstructor() {
  const [productsForConstructorState, productsForConstructorDispatcher] = React.useReducer(reduserOfProductsForConstructor,
    productsForConstructorInitialState);

  const closeOrderDetails = () => {
    productsForConstructorDispatcher({ type: 'closeModalWithOderNumber' });
  };

  const openOrderDetails = () => {
    apiOder(productsForConstructorState)
      .then((data) => productsForConstructorDispatcher({ type: 'openModalWithOderNumber', payload: data }))
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
    <ProductsForConstructorContext.Provider value={{ productsForConstructorState, productsForConstructorDispatcher }}>
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
      {productsForConstructorState.oderNumber &&
        <Modal closeModal={closeOrderDetails}>
          <OrderDetails />
        </Modal>}
    </ProductsForConstructorContext.Provider>
  );
}

export default BurgerConstructor;
