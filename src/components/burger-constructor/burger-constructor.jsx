import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import styles from './burger-constructor.module.css';

import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientCard from './components/ingredient-card';
import OrderDetails from '../order-details/order-details';
import { setOder } from '../../services/actions/oder';
import { CLOSE_MODAL_ODER } from '../../services/actions/oder';
import { SET_INGREDIENT_FOR_CONSTRUCTOR, SET_TOTAL_PRICE, MOVE_INGREDIENT } from '../../services/actions/constructorIngredients';
import { INCREMENT_INGREDIENT } from '../../services/actions/ingredients';

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

  const moveIngredient = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = constructorIngredients.other[dragIndex];
      const hoverItem = constructorIngredients.other[hoverIndex];

      const updatedIngredients = [...constructorIngredients.other];
      updatedIngredients[dragIndex] = hoverItem;
      updatedIngredients[hoverIndex] = dragItem;

      dispatch({
        type: MOVE_INGREDIENT,
        updatedIngredients
      });
    },
    [constructorIngredients, dispatch],
  );

  const className = `${styles.container} mt-25 ${isHover ? styles.drop : ''}`;

  return (
    <>
      <div className={className} ref={dropTarget}>
        {Boolean(Object.keys(constructorIngredients.bun).length) &&
          <div className='pr-5'>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={constructorIngredients.bun['name'] + ' (верх)'}
              price={constructorIngredients.bun['price']}
              thumbnail={constructorIngredients.bun['image']}
            />
          </div>}

        {(!Boolean(Object.keys(constructorIngredients.bun).length) ||
          !Boolean(constructorIngredients.other.length)) &&
          <p className={['text', 'text_type_main-medium', styles.text].join(' ')}>
            Пожалуйста, перенесите сюда булку, соусы и начинку для создания заказа
          </p>
        }

        <div className={styles.ingredients}>
          {constructorIngredients.other.map((el, index) => (
            <IngredientCard key={el['_id']} {...el} index={index} moveIngredient={moveIngredient} />
          ))}
        </div>

        {Boolean(Object.keys(constructorIngredients.bun).length) &&
          <div className='pr-5'>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={constructorIngredients.bun['name'] + ' (низ)'}
              price={constructorIngredients.bun['price']}
              thumbnail={constructorIngredients.bun['image']}
            />
          </div>}

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
