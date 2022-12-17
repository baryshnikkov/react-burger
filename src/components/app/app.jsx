import React, { useEffect } from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { ProductsContext } from '../../services/app-context';
import { apiUrlIngredients } from '../constants/constants';

function App() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch(apiUrlIngredients)
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
        <ProductsContext.Provider value={{products}}>
          <BurgerIngredients />
          <BurgerConstructor />
        </ProductsContext.Provider>
      </MainContainer>
    </>
  );
}

export default App;
