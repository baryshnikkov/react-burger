import React, { useEffect } from 'react';

import styles from './app.module.css';
import { productsForConstructor } from '../../utils/utils';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  const [products, setProducts] = React.useState([]);

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
        <BurgerConstructor products={productsForConstructor} />
      </MainContainer>
    </>
  );
}

export default App;
