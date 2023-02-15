import React, {useEffect, useState} from 'react';
import styles from './ingredients-page.module.css';
import {useLocation, useParams} from "react-router-dom";
import {getIngredients} from "../../../../services/actions/ingredients";
import {useDispatch, useSelector} from "react-redux";
import { GET_DATA_ABOUT_INGREDIENT } from '../../../../services/actions/dataAboutIngredient';
import HomePage from "../home-page";

const getIngredientsList = store => store.ingredientList;

const IngredientsPage = () => {
  const {id} = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const {ingredients} = useSelector(getIngredientsList);
  const [ingredient, setIngredient] = useState({});

  useEffect(() => {
    if (location.state?.background !== 'home' && ingredients.length === 0) {
      dispatch(getIngredients());
    }
  }, []);

  useEffect(() => {
    if (location.state?.background !== 'home' && ingredients.length !== 0) {
      setIngredient(ingredients.filter(el => id === el['_id'])[0]);
    }
  }, [ingredients]);

  useEffect(() => {
    if (location.state?.background === 'home') {
      openModal();
    }
  }, []);


  const displayEnergyValue = (type, value) => {
    return (
      <div className={styles.bju}>
        <p className="text text_type_main-default text_color_inactive">
          {type}
        </p>
        <p className="text text_type_main-default text_color_inactive">
          {value}
        </p>
      </div>
    );
  };

  const page = (data) => (
    <div>
      <div className={styles.container}>
        <p className={`${styles.title} text text_type_main-large`}>
          Детали ингредиента
        </p>

        <img className={styles.image} src={data.image} alt={data.name}/>

        <p className={`${styles.name} text text_type_main-medium`}>
          {data.name}
        </p>

        <div className={styles.compound}>
          {displayEnergyValue('Калории,ккал', data.calories)}
          {displayEnergyValue('Белки, г', data.proteins)}
          {displayEnergyValue('Жиры, г', data.fat)}
          {displayEnergyValue('Углеводы, г', data.carbohydrates)}
        </div>
      </div>
    </div>
  );

  const openModal = () => {
    dispatch({
      type: GET_DATA_ABOUT_INGREDIENT,
      data: location.state.ingredient
    });
  };

  if (location.state?.background !== 'home') {
    return page(ingredient);
  } else {
    return (
      <>
        <HomePage />
      </>
    );
  }

};

export default IngredientsPage;
