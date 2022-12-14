import React, { useEffect } from 'react';

import styles from './app.module.css';
import { productsForConstructor } from '../../utils/utils';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { productsForConstructorContext } from '../../services/app-context';

// const productsForConstructorInitialState = { bun: {}, other: [], oderNumber: 0, totalPrice: 0 }
const productsForConstructorInitialState = productsForConstructor;

function reduserOfProductsForConstructor(state, action) {
  switch (action.type) {
    case 'add':
      if (action.payload.type === 'bun') {
        return { ...state, bun: action.payload, totalPrice: state.totalPrice + action.payload.price };
      }
      return { ...state, other: [...state.other, action.payload], totalPrice: state.totalPrice + action.payload.price };
    case 'oderNumber':
      return { ...state, oderNumber: action.payload.order.number };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function App() {
  const [products, setProducts] = React.useState([]);
  const [productsForConstructorState, productsForConstructorDispatcher] = React.useReducer(reduserOfProductsForConstructor,
    productsForConstructorInitialState);

  useEffect(() => {
    const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
    fetch(apiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((data) => setProducts(data['data']))
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <>
      <AppHeader />
      <MainContainer>
        <BurgerIngredients products={products} />
        <productsForConstructorContext.Provider value={{ productsForConstructorState, productsForConstructorDispatcher }}>
          <BurgerConstructor />
        </productsForConstructorContext.Provider>
      </MainContainer>
    </>
  );
}

export default App;
