import React, { useEffect, useMemo, useRef } from 'react';
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

  const container = useRef();
  const buns = useRef();
  const sauces = useRef();
  const fillings = useRef();

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

  const setTab = (state, element) => {
    element.current.scrollIntoView();
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  const handleScroll = () => {
    if (container.current.getBoundingClientRect().top + 1 > buns.current.getBoundingClientRect().top) {
      setCurrent('buns');
    }
    if (container.current.getBoundingClientRect().top + 1 > sauces.current.getBoundingClientRect().top) {
      setCurrent('sauces');
    }
    if (container.current.getBoundingClientRect().top + 1 > fillings.current.getBoundingClientRect().top) {
      setCurrent('fillings');
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={['text', 'text_type_main-large', 'mt-10', 'mb-5'].join(' ')}>
          Соберите бургер
        </h1>

        <div className={styles.tab}>
          <Tab value="buns" active={current === 'buns'} onClick={(e) => {setTab(e, buns)}}>
            Булки
          </Tab>
          <Tab value="sauces" active={current === 'sauces'} onClick={(e) => {setTab(e, sauces)}}>
            Соусы
          </Tab>
          <Tab value="fillings" active={current === 'fillings'} onClick={(e) => {setTab(e, fillings)}}>
            Начинки
          </Tab>
        </div>

        <div className={styles.ingredients} ref={container} onScroll={handleScroll}>
          <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')} ref={buns}>
            Булки
          </h2>
          <Cards content={filteredIngredientsByType.buns} />

          <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')} ref={sauces}>
            Соусы
          </h2>
          <Cards content={filteredIngredientsByType.sauces} />

          <h2 className={['text', 'text_type_main-medium', 'mt-10', 'mb-6'].join(' ')} ref={fillings}>
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
