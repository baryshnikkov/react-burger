import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

import styles from './burger-constructor.module.css';
import ModalContainer from '../modal-container/modal-container';
import IngredientCard from './components/ingredient-card/ingredient-card';
import OrderDetails from '../order-details/order-details';
import BunCard from './components/bun-card/bun-card';
import Oder from './components/oder/oder';
import { CLOSE_MODAL_ODER } from '../../services/actions/oder';
import { SET_INGREDIENT_FOR_CONSTRUCTOR, SET_TOTAL_PRICE, MOVE_INGREDIENT } from '../../services/actions/constructorIngredients';
import { INCREMENT_INGREDIENT } from '../../services/actions/ingredients';

const getConstructorIngredients = store => store.constructorIngredients;
const getOder = store => store.oder;

function BurgerConstructor() {
  const { constructorIngredients } = useSelector(getConstructorIngredients);
  const { ingredientsOderIsOpened } = useSelector(getOder);
  const dispatch = useDispatch();

  const closeOrderDetails = () => {
    dispatch({
      type: CLOSE_MODAL_ODER
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

  const container = `${styles.container} mt-25 ${isHover ? styles.drop : ''}`;

  const displayOfBunIfAvailable = (type) => {
    return (
      Boolean(Object.keys(constructorIngredients.bun).length) &&
      <BunCard content={constructorIngredients.bun} type={type} />
    );
  }

  const displayPromptWhileThereAreNoSelectedIngredients = (text) => {
    return (
      (
        !Boolean(Object.keys(constructorIngredients.bun).length) ||
        !Boolean(constructorIngredients.other.length)
      )
      &&
      <p className={`${styles.text} text text_type_main-medium`}>
        {text}
      </p>
    );
  };

  return (
    <>
      <div className={container} ref={dropTarget}>
        {displayOfBunIfAvailable('top')}

        {displayPromptWhileThereAreNoSelectedIngredients(
          'Пожалуйста, перенесите сюда булку, соусы и начинку для создания заказа'
        )}

        <div className={styles.ingredients}>
          {constructorIngredients.other.map((el, index) => (
            <IngredientCard key={el['_id']} {...el} index={index} moveIngredient={moveIngredient} />
          ))}
        </div>

        {displayOfBunIfAvailable('bottom')}

        <Oder />
      </div>

      {
        ingredientsOderIsOpened
        &&
        <ModalContainer closeModal={closeOrderDetails}>
          <OrderDetails />
        </ModalContainer>
      }
    </>
  );
}

export default BurgerConstructor;
