import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './burger-constructor.module.css';

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { setOder } from '../../services/actions/oder';
import { CLOSE_MODAL_ODER } from '../../services/actions/oder';

function BurgerConstructor() {
  const { constructorIngredients, totalPrice } = useSelector(store => store.constructorIngredients);
  const { ingredientsOderIsOpened } = useSelector(store => store.oder);
  const dispatch = useDispatch();

  const closeOrderDetails = () => {
    dispatch({
      type: CLOSE_MODAL_ODER
    });
  };

  const openOrderDetails = () => {
    dispatch(setOder(constructorIngredients));
  };

  return (
    <>
      <div className={[styles.container, 'mt-25'].join(' ')}>
        {Object.keys(constructorIngredients.bun).length &&
          <ConstructorElement
            type="top"
            isLocked={true}
            text={constructorIngredients.bun['name'] + ' (верх)'}
            price={constructorIngredients.bun['price']}
            thumbnail={constructorIngredients.bun['image']}
          />}

        <div className={styles.ingredients}>
          {constructorIngredients.other.map(el => (
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

        {Object.keys(constructorIngredients.bun).length &&
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={constructorIngredients.bun['name'] + ' (низ)'}
            price={constructorIngredients.bun['price']}
            thumbnail={constructorIngredients.bun['image']}
          />}

        <div className={styles.oder}>
          <div className={styles.price}>
            <p className="text text_type_digits-medium">{totalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button id="checkout" htmlType="button" type="primary" size="medium" onClick={openOrderDetails}>
            Оформить заказ
          </Button>
        </div>
      </div>

      {
        ingredientsOderIsOpened
        &&
        <Modal closeModal={closeOrderDetails}>
          <OrderDetails />
        </Modal>
      }
    </>
  );
}

export default BurgerConstructor;
