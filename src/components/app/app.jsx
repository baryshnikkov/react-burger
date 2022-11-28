import React, { useEffect } from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  const [productsForConstructor, setProductsForConstructor] = React.useState({
    bun: null,
    other: [],
  });
  const [products, setProducts] = React.useState([]);

  const addProductToConstructor = (el) => {
    if (el['type'] === 'bun') {
      setProductsForConstructor({ ...productsForConstructor, bun: el });
    } else {
      setProductsForConstructor({ ...productsForConstructor, other: [...productsForConstructor.other, el] });
    }
  };

  useEffect(() => {
    const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
    fetch(apiUrl)
      .then((res) => res.json())
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
