import React, { useEffect } from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import MainContainer from '../main-container/main-container';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

function App() {
  const [productsForConstructor, setProductsForConstructor] = React.useState({
    bun: null,
    other: [],
  });
  const [products, setProducts] = React.useState([]);
  const [details, setDetails] = React.useState({});

  const addProductToConstructor = (el) => {
    if (el['type'] === 'bun') {
      setProductsForConstructor({ ...productsForConstructor, bun: el });
    } else {
      setProductsForConstructor({ ...productsForConstructor, other: [...productsForConstructor.other, el] });
    }
  };

  const getIngredientDetails = (value) => {
    setDetails(value);
  };

  useEffect(() => {
    const apiUrl = 'https://norma.nomoreparties.space/api/ingredients';
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data['data']))
      .catch((err) => console.log(`Error: ${err}`));
  }, [details]);

  return (
    <>
      <AppHeader />
      <MainContainer>
        <BurgerIngredients products={products} getDetails={getIngredientDetails} />
        <BurgerConstructor products={productsForConstructor} />
      </MainContainer>
      <IngredientDetails details={details} />
      <OrderDetails />
    </>
  );
}

export default App;
