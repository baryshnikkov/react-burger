import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './burger-ingredients.module.css';

import Cards from '../cards/cards';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIngredients } from '../../services/actions/ingredients';
import { DELETE_DATA_ABOUT_INGREDIENT } from '../../services/actions/dataAboutIngredient';

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('buns');
  const { ingredients } = useSelector(store => store.ingredients);
  const { ingredientDataModalIsOpened } = useSelector(store => store.dataAboutIngredient);
  const dispatch = useDispatch();

  const filteredIngredientsByType = useMemo(() => {
    const buns = [];
    const fillings = [];
    const sauces = [];
    ingredients.forEach(el => {
      switch (el['type']) {
        case 'bun':
          buns.push(el);
          break;
        case 'main':
          fillings.push(el);
          break;
        case 'sauce':
          sauces.push(el);
          break;
        default:
          break;
      }
    });
    return {
      buns,
      fillings,
      sauces
    };
  }, [ingredients]);

  const closeIngredientDetails = () => {
    dispatch({
      type: DELETE_DATA_ABOUT_INGREDIENT
    });
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1 className={['text', 'text_type_main-large', 'mt-10', 'mb-5'].join(' ')}>
          Соберите бургер
        </h1>

        <div className={styles.tab}>
          <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>

        <div className={styles.ingredients}>
          <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
            Булки
          </h2>
          <Cards content={filteredIngredientsByType.buns} />

          <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
            Соусы
          </h2>
          <Cards content={filteredIngredientsByType.sauces} />

          <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')}>
            Начинки
          </h2>
          <Cards content={filteredIngredientsByType.fillings} />
        </div>
      </div>

      {
        ingredientDataModalIsOpened
        &&
        <Modal closeModal={closeIngredientDetails}>
          <IngredientDetails />
        </Modal>
      }
    </>
  );
}

export default BurgerIngredients;
