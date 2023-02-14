import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './burger-ingredients.module.css';

import Cards from './components/cards/cards';
import ModalContainer from '../modal-container/modal-container';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIngredients } from '../../services/actions/ingredients';
import { DELETE_DATA_ABOUT_INGREDIENT } from '../../services/actions/dataAboutIngredient';
import {useNavigate} from "react-router-dom";

const getListOfIngredients = store => store.ingredientList;
const getDataAboutIngredients = store => store.dataAboutIngredient;

function BurgerIngredients() {
  const [current, setCurrent] = React.useState('buns');
  const { ingredients } = useSelector(getListOfIngredients);
  const { ingredientDataModalIsOpened } = useSelector(getDataAboutIngredients);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate('/', {replace: true});
  };

  const setTab = (state, element) => {
    element.current.scrollIntoView();
  };

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

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <h1 className={`${styles.title} text text_type_main-large`}>
          Соберите бургер
        </h1>

        <div className={styles.tab}>
          <Tab value="buns" active={current === 'buns'} onClick={(e) => { setTab(e, buns) }}>
            Булки
          </Tab>
          <Tab value="sauces" active={current === 'sauces'} onClick={(e) => { setTab(e, sauces) }}>
            Соусы
          </Tab>
          <Tab value="fillings" active={current === 'fillings'} onClick={(e) => { setTab(e, fillings) }}>
            Начинки
          </Tab>
        </div>

        <div className={styles.ingredients} ref={container} onScroll={handleScroll}>
          <Cards title='Булки' content={filteredIngredientsByType.buns} ref={buns} />
          <Cards title='Соусы' content={filteredIngredientsByType.sauces} ref={sauces} />
          <Cards title='Начинки' content={filteredIngredientsByType.fillings} ref={fillings} />
        </div>
      </div>

      {
        ingredientDataModalIsOpened
        &&
        <ModalContainer closeModal={closeIngredientDetails}>
          <IngredientDetails />
        </ModalContainer>
      }
    </>
  );
}

export default BurgerIngredients;
