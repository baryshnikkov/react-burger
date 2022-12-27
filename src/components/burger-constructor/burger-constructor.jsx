import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import styles from './burger-constructor.module.css';

import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { setOder } from '../../services/actions/oder';
import { CLOSE_MODAL_ODER } from '../../services/actions/oder';
import { SET_INGREDIENT_FOR_CONSTRUCTOR, DELETE_INGREDIENT_FOR_CONSTRUCTOR, SET_TOTAL_PRICE } from '../../services/actions/constructorIngredients';
import { INCREMENT_INGREDIENT, DECREMENT_INGREDIENT } from '../../services/actions/ingredients';

function BurgerConstructor() {
  const { constructorIngredients, totalPrice } = useSelector(store => store.constructorIngredients);
  const { ingredientsOderIsOpened, ingredientsOderRequest } = useSelector(store => store.oder);
  const dispatch = useDispatch();

  const closeOrderDetails = () => {
    dispatch({
      type: CLOSE_MODAL_ODER
    });
  };

  const openOrderDetails = () => {
    dispatch(setOder(constructorIngredients));
  };

  const deleteIngredient = (el) => {
    dispatch({
      type: DELETE_INGREDIENT_FOR_CONSTRUCTOR,
      id: el._id
    });
    dispatch({
      type: DECREMENT_INGREDIENT,
      id: el._id,
      sort: el.type
    });
    dispatch({
      type: SET_TOTAL_PRICE
    });
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(item) {
      dispatch({
        type: SET_INGREDIENT_FOR_CONSTRUCTOR,
        data: item
      });
      dispatch({
        type: INCREMENT_INGREDIENT,
        id: item._id,
        sort: item.type
      });
      dispatch({
        type: SET_TOTAL_PRICE
      });
    }
  });

  const className = `${styles.container} mt-25 ${isHover ? styles.drop : ''}`;

  return (
    <>
      <div className={className} ref={dropTarget}>
        {Boolean(Object.keys(constructorIngredients.bun).length) &&
          <ConstructorElement
            type="top"
            isLocked={true}
            text={constructorIngredients.bun['name'] + ' (верх)'}
            price={constructorIngredients.bun['price']}
            thumbnail={constructorIngredients.bun['image']}
          />}

        {(!Boolean(Object.keys(constructorIngredients.bun).length) ||
          !Boolean(constructorIngredients.other.length)) &&
          <p className={['text', 'text_type_main-medium', styles.text].join(' ')}>
            Пожалуйста, перенесите сюда булку, соусы и начинку для создания заказа
          </p>
        }

        <div className={styles.ingredients}>
          {constructorIngredients.other.map(el => (
            <div className={styles.card} key={el['_id']}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={el['name']}
                price={el['price']}
                thumbnail={el['image']}
                handleClose={() => { deleteIngredient(el) }}
              />
            </div>
          ))}
        </div>

        {Boolean(Object.keys(constructorIngredients.bun).length) &&
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
            {ingredientsOderRequest && 'Загрузка...'}
            {!ingredientsOderRequest && 'Оформить заказ'}
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
